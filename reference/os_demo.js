const os = require('os');

//Platform
console.log(os.platform());

//CPU arch
console.log(os.arch());

//Cpu ydinten info
console.log(os.cpus());

// Vapaa muisti
console.log(os.freemem());

// Kaikki muisti
console.log(os.totalmem());

//Koti hakemisto
console.log(os.homedir());

//Aukiolo aika
console.log(os.uptime());