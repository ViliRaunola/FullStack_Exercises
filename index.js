// console.log('Hello From Node.js...');

// const henkilo = require('./person');
// const Person = require('./person');

// const person1 = new Person('Vili Joo', 5);

// person1.greeting();
// console.log(henkilo.nimi);

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log('Kutsuttiin kuuntelijaa:',  data));

// logger.log('Hello World');

// //Eli nyt kun kutsutaan loggeria niin se ei käyttäydy tavallisesti vaan se toimii uudella tavalla, joka on määritelty logger.js tiedostossa

//###################################################################


const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
//     //Eli tarkistetaan url eli osoite. 
//    if(req.url === '/'){ //Jos se on pelkkä tavan sivu niin ladataan etusivu.
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => { //Haetaan tietystä kansioista html tiedosto, mikä halutaan näyttää
//             if(err) throw err; //Virheen trakistus
//             res.writeHead(200, { 'Content-Type': 'text/html'}); //Varmistutaan siitä, että kaikki on ok 200, ja että tyyppi on html
//             res.end(content); //Tämä hoitaa loppujen lopuksi tiedoston lähettämisen
//         })
//    }
       
//     //API esimerkki
//     if(req.url === '/api/users'){ 
//        const users = [
//         {name: 'Vili Keijo', age: 69},
//         {name: 'Errki Nenä', age: 0}
//        ];
//        res.writeHead(200, { 'Content-Type': 'application/json'});
//        res.end(JSON.stringify(users));
//     }


    /* ######################## Ylempänä oleva esimerkki ei toimi, sillä se ei skaalaudu hyvin useiden sivujen kanssa eikä siinä ole otettu huomioon css tiedostoja ########################*/

    // Tehdään dynaaminen tiedosto polku
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    //Extension of the file
    let extname = path.extname(filePath);

    // Initial conten type
    let contentType = 'text/html';

    //Cehck ext and set content type. Voi lisää kaikki maholiset tyypit
    switch(extname) {
        case '.json':
            contentType = 'application/json';
            break;
    }

    //Luetaan tiedosto
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') { //Tarkoittaa ettei sivua löytynyt
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                })
            }else{
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }else {
            //success
            res.writeHead(200, { 'Contect-Type': contentType});
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));