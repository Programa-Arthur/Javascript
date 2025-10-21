const fs = require('fs');

fs.readFile('exemplo.txt', 'utf8', (erro, dados) => {
    if (erro) {
        console.error('Erro ao ler o arquivo:', erro);
        return;
    }
    console.log('Conteúdo do arquivo:', dados);
});

console.log('Esta mensagem aparece primeiro.');