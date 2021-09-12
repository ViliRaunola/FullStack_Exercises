const path = require('path');

// Base file name
console.log(__filename); //Tällä tulee koko paska tämä tiedosto mukaan lukien
//vs
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename)); //Ei ota huomioon tiedostoa

// File extension
console.log("\n");
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename)); //Anataa omana 'objectina?'

// Concatenate paths
console.log(path.join(__dirname, 'test', 'file.html')); //Voi tehdä tällä tavalla omia patheja. Tämä hoitaa osoitteen oikeat jakajat. Imba?!?

