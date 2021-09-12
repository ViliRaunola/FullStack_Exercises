const http = require('http');

//Luodaan serveri objecti
http.createServer((req, res) => {
    //Kirjoita vastaus
    res.write('Hello World!');
    res.end();
}).listen(5000, () => console.log('Server running...'))