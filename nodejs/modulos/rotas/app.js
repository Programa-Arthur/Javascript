// importa o modulo http nativo do Node.js
import http from 'http';
import fs from 'fs';
import path from 'path';

const port = 3000;

// cria o servidor HTTP
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // define o cabeçalho da resposta
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // roteamento básico
    if (url === "/") {
        res.statusCode = 200; // ok
        res.end("<h1>Página inicial</h1>");
    } else if (url === "/sobre" && method === "GET") {
        res.statusCode = 200; // ok
        res.end(
            "<h1>Sobre nós</h1><p>Esta é uma aplicação de exemplo com Node.js</p>"
        );
    } else if (url === "/contato") {
        res.statusCode = 200; // ok
        res.end("<h1>Fale conosco</h1>");
    } else if (url === "/fotos") {
        res.statusCode = 200; // ok
        res.end("<h1>Fotos</h1>");
    } else if (url === "/foto") {
        const imagePath = path.join(process.cwd(), "foto.jpg");
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end("<h1>Imagem não encontrada</h1>");
            } else {
                res.setHeader('Content-Type', 'image/jpeg');
                res.statusCode = 200;
                res.end(data);
            }
        });
    } else { 
        // se nenhuma rota for correspondida
        res.statusCode = 404; // não encontrado
        res.end("<h1>404 - Página não encontrada</h1>");
    }
});

// inicia o servidor para ouvir na porta definida
server.listen(port, () => { 
    console.log(`servidor rodando em http://localhost:${port}`);
});