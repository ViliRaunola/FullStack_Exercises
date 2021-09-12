const ep = require('express'); //Haetaan expressi
const path = require('path');
const members = require('./Members'); // Haetaan samasta kansioissa oleva tiedosto Members
const logger = require('./middleware/logger');


const app = ep();



// Eli laitetaan middleware päälle
app.use(logger);

app.get('/api/members', (req, res) => res.json(members)); // Automaattisesti muuntaa javascriptin objectin json muotoon

// app.get('/', (req, res) => {
//     // res.send('<h1>Hello World. No tere tere</h1>'); //Lähettää siis vastauksen takaisin selaimelle
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Staattisen kansion luominen
app.use(ep.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000; // Luodaan portille oma osoite. Ensin tarkistetaan onko ypäristöllä omaa porttia jos ei ole käytetään omaa porttinumeroa

app.listen(PORT, () => console.log(`Serveri on aloitettu portilla ${PORT}`));