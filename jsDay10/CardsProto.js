class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit
        // if (this.value == 1) {this.value = 'Ace'}
        // else if (this.value == 11) {this.value = 'Jack'}
        // else if (this.value == 12) {this.value = 'Queen'}
        // else if (this.value == 13) {this.value = 'King'}
        switch(this.value) {
            case 1: this.value = 'Ace'; break;
            case 11: this.value = 'Jack'; break;
            case 12: this.value = 'Queen'; break;
            case 13: this.value = 'King'; break;
            // default: card = this.value; break;
        }
    }
}

const aceOfSpades = new Card(13, 'Spades');

console.log(aceOfSpades) 

Card.prototype.toString = function() {
    // console.log(`this is ${this}`)
    return  `\'Card { ${this.value} of ${this.suit} }\'`
}

console.log(aceOfSpades.toString())

class Deck {
    constructor() {

        let suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];
        
        let cards = [];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 1; j < 13; j++) {
                cards.push(new Card(j,suits[i]));
            }
        }
        this.Deck =  cards;
    }
}
function shuffle() {
    let numOfCards = this.Deck.length;
    return numOfCards;
}

let myDeck = new Deck;
// console.log(myDeck.Card)
console.log(myDeck.shuffle())