const fs = require('fs');

// leitura de arquivo de forma assincrona
fs.readFile('exemplo.txt', 'utf8', (erro, conteudo_do_arquivo) => {
    if (erro){
        console.error('erro ao ler o arquivo', erro);
        return;
    }
    console.log('conteudo do arquivo:', conteudo_do_arquivo);
});

console.log('esta mensagem aparece primeiro');