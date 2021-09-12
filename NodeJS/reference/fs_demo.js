const fs = require('fs'); //fs eli File System
const path = require('path');

// Luodaan kansio
// fs.mkdir(path.join(__dirname, '/test'), {}, err => { //Nuoli korvaa 'function(err)'
//     if(err) throw err;
//         console.log('Kansio luotiin');      
// });

//Luodaan ja kirjoitetaan tiedostoon
// fs.writeFile(path.join(__dirname, '/test', 'moikka.txt'), 'Tähän tulee siis kaikki teksti mitä halutaan kirjoittaa tiedostoon', err => { 
//     if(err) throw err;
//         console.log('Tiedoston krijoitus tehty');      
// });

// fs.writeFile(path.join(__dirname, '/test', 'moikka.txt'), ' Mitä jos ajetaan sama kahdesti?', err => { 
//     if(err) throw err;
//         console.log('Tiedoston krijoitus tehty');      
// });

//Eli writeFile kirjoittaa tiedostossa vanhan päälle!!!!

// fs.writeFile(path.join(__dirname, '/test', 'moikka.txt'), 'Tähän tulee siis kaikki teksti mitä halutaan kirjoittaa tiedostoon', err => { 
//     if(err) throw err;
//         console.log('Tiedoston krijoitus tehty');  

//         //Nyt kokeillaan lisätä teidosttoon
//         fs.appendFile(path.join(__dirname, '/test', 'moikka.txt'), ' Mitä jos ajetaan sama kahdesti?', err => { 
//             if(err) throw err;
//                 console.log('Tiedoston krijoitus tehty');      
//         });    
// });


//Tiedoston luku
fs.readFile(path.join(__dirname, '/test', 'moikka.txt'), 'utf-8', (err, data) => { //Muista käyttää oikeaa koodausta ja 'data'-muuttujaan luetaan tiedoston sisältö
    if(err) throw err;
        console.log(data);      
});

//Uudelleen nimeä tiedosto
fs.rename(path.join(__dirname, '/test', 'moikka.txt'), path.join(__dirname, '/test', 'uusinimi.txt'), (err) => { //Muista käyttää oikeaa koodausta ja 'data'-muuttujaan luetaan tiedoston sisältö
    if(err) throw err;
        console.log('Uudelleen nimeäminen tehty');      
});