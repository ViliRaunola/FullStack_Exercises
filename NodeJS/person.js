const henkilo = {
    nimi: 'Erkki',
    ika: 30
};

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log('Myname is ${this.name} and I am ${this.age}') //Hienoilla merkeillä ei toimi....
    }
}

module.exports = henkilo;
module.exports = Person;