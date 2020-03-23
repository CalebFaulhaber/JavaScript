const countries = require('./country.js');

const printCountries = (c) => {
    for (let country of c) {
        console.log(`I want to visit ${country} ${country.length} times`)
    }
}


console.log(printCountries(countries));