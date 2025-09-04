const http = require('http');

http.get('http://jsonplaceholeder.typicode.com/todos/1', (res) => {
    let data = '';

    //um pedaco de dado foi recebido
    res.on('data' , (chunk) => {
        data += chunk;
    });

    //a resposta inteira foi recebida. imprinme o resultado
    res.on ('end', () => {
        console.log(JSON.parse(data));
    });

}).on('error', (err) => {
    console.log('Error: ' + err.message);
});