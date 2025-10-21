const crypto = require('crypto');

module.exports = {
	// Armazenamento em memória (mantém registros existentes)
	registros: [],

	// Valida os dados recebidos; retorna array de mensagens de erro (vazio = ok)
	validate(data) {
		const errors = [];
		if (!data || typeof data !== 'object') {
			errors.push('dados inválidos');
			return errors;
		}
		if (!data.musica || String(data.musica).trim() === '') {
			errors.push('O campo "musica" é obrigatório.');
		}
		if (!data.artista || String(data.artista).trim() === '') {
			errors.push('O campo "artista" é obrigatório.');
		}
		return errors;
	},

	// Salva um registro e retorna o objeto salvo
	save(data) {
		const id = this.registros.length + 1;
		const registro = {
			id,
			musica: String(data.musica || '').trim(),
			artista: String(data.artista || '').trim(),
			createdAt: new Date().toISOString()
		};
		this.registros.push(registro);
		return registro;
	},

	// Retorna todos os registros (cópia)
	all() {
		return this.registros.slice();
	},

	// --- Novas funcionalidades para clientes / login ---
	// Armazenamento em memória de usuários (separado)
	usuarios: [],
	_nextUserId: 1,

	// Cria um usuário com senha (retorna usuário sem campos sensíveis)
	async createUser({ nome, email, password }) {
		nome = String(nome || '').trim();
		email = String(email || '').trim().toLowerCase();
		password = String(password || '');

		if (!nome || !email || !password) {
			throw new Error('nome, email e password são obrigatórios');
		}
		if (this.findByEmail(email)) {
			throw new Error('email já cadastrado');
		}

		const salt = crypto.randomBytes(16).toString('hex');
		const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');

		const user = {
			id: this._nextUserId++,
			nome,
			email,
			passwordHash: hash,
			salt,
			createdAt: new Date().toISOString()
		};
		this.usuarios.push(user);

		// Retorna cópia sem campos sensíveis
		const { passwordHash, salt: s, ...safe } = user;
		return safe;
	},

	// Retorna usuário completo (inclui passwordHash/salt) ou null
	findByEmail(email) {
		if (!email) return null;
		email = String(email).trim().toLowerCase();
		return this.usuarios.find(u => u.email === email) || null;
	},

	// Verifica credenciais; retorna usuário sem campos sensíveis em caso de sucesso, null caso contrário
	async verifyLogin(email, password) {
		const user = this.findByEmail(email);
		if (!user) return null;

		const providedHash = crypto.pbkdf2Sync(String(password), user.salt, 100000, 64, 'sha512').toString('hex');

		// Use timingSafeEqual para evitar ataques de tempo
		const hashBuffer = Buffer.from(user.passwordHash, 'hex');
		const providedBuffer = Buffer.from(providedHash, 'hex');
		if (hashBuffer.length !== providedBuffer.length) return null;
		if (!crypto.timingSafeEqual(hashBuffer, providedBuffer)) return null;

		const { passwordHash, salt, ...safe } = user;
		return safe;
	},

	// Lista usuários (sem campos sensíveis)
	allUsers() {
		return this.usuarios.map(({ passwordHash, salt, ...safe }) => safe);
	}
};