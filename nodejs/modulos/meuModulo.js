function saudacao(nome) {
    return `Olá, ${nome}! Bem-vindo ao Node.js!`;
}

// Exportando a função para que possa ser usada em outros arquivos
module.exports = {
    saudacao
};