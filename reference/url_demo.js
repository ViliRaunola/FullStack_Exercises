const url = require('url');

const myUrl = new URL('htt://mywebsite.com:8000/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain) tulee portti mukaan
console.log(myUrl.host);
// Hostname ei ota porttia
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);


//Serialized query
console.log(myUrl.search);

//Params object eli luo url hausta oman objectin
console.log(myUrl.searchParams);

//Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Looppaa parametrien läpi
myUrl.searchParams.forEach((value, name) => console.log(name + ": " + value));