const moment = require('moment');

//Joka kerta kun tehdään pyyntö servulle tämä pätkä ajetaan
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};

module.exports = logger;