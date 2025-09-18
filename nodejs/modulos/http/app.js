import http from 'http';

//criando o servidor que responde com "Hello World" para todas as requisições
http.createServer((req,res) => {

    res.writeHead(200, {'content-Type': 'text/plain'});
   //definindo o cabesalho da resposta com status 200(ok) e tipo de conteudo texto/plain 
    res.end('olá, mundo\n');  
    //adicionado um log no console para cada requisicao rercebida
}) .listen(8080);