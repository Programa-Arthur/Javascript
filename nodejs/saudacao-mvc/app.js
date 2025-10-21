//rotas principais do aplicativo
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para arquivos estáticos
app.use(express.static('public'));

// Middleware para ler dados de formulários
app.use(express.urlencoded({ extended: true }));

// Adicionado: middleware para JSON (fetch)
app.use(express.json());

// Rotas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const usuariosRoutes = require('./routes/usuarios');
app.use('/usuarios', usuariosRoutes);

const produtosRoutes = require('./routes/produtos');
app.use('/produtos', produtosRoutes);

// Substituído: rota do formulário (agora tenta vários nomes caso o arquivo tenha sido renomeado)
let formularioRoutes;
const candidateRoutes = [
  './routes/formulario',
  './routes/form',
  './routes/formularios',
  './routes/formularioRoutes',
  './routes/forms'
];

for (const candidate of candidateRoutes) {
  try {
    formularioRoutes = require(candidate);
    console.log(`Rota de formulário carregada: ${candidate}`);
    break;
  } catch (err) {
    // Se o erro não for por arquivo ausente, exibe para facilitar debug
    if (err && err.code && err.code !== 'MODULE_NOT_FOUND') {
      console.error(`Erro ao carregar rota ${candidate}:`, err);
      break;
    }
    // caso MODULE_NOT_FOUND continua tentando outros candidatos
  }
}

if (formularioRoutes) {
  app.use('/formulario', formularioRoutes);
} else {
  console.warn('Nenhuma rota de formulário encontrada. Crie um arquivo em routes/ chamado formulario.js (ou form.js, formularios.js, formularioRoutes.js, forms.js).');
}

// Servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
