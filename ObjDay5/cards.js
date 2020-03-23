// function repeat(str, n) {
//     for (let i = 0; i < n; i++) {
//         newStr += str;
//     };
//     // console.log(newStr)
//     return `\'${newStr}\'`
// };

// String.prototype.repeat = function(n) {
//     return new Array(n + 1).join(this);
// };

const deck = {
    cards = [
        {Number: "Ace", suit: "Hearts"}, 
        {Number: "2", suit: "Hearts"}, 
        {Number: "3", suit: "Hearts"}, 
        {Number: "4", suit: "Hearts"}, 
        {Number: "5", suit: "Hearts"}, 
        {Number: "6", suit: "Hearts"}, 
        {Number: "7", suit: "Hearts"}, 
        {Number: "8", suit: "Hearts"}, 
        {Number: "9", suit: "Hearts"}, 
        {Number: "10", suit: "Hearts"}, 
        {Number: "Jack", suit: "Hearts"}, 
        {Number: "Queen", suit: "Hearts"}, 
        {Number: "King", suit: "Hearts"}, 
        {Number: "Ace", suit: "Spades"}, 
        {Number: "2", suit: "Spades"}, 
        {Number: "3", suit: "Spades"}, 
        {Number: "4", suit: "Spades"}, 
        {Number: "5", suit: "Spades"}, 
        {Number: "6", suit: "Spades"}, 
        {Number: "7", suit: "Spades"}, 
        {Number: "8", suit: "Spades"}, 
        {Number: "9", suit: "Spades"}, 
        {Number: "10", suit: "Spades"}, 
        {Number: "Jack", suit: "Spades"}, 
        {Number: "Queen", suit: "Spades"}, 
        {Number: "King", suit: "Spades"}, 
        {Number: "Ace", suit: "Clubs"}, 
        {Number: "2", suit: "Clubs"}, 
        {Number: "3", suit: "Clubs"}, 
        {Number: "4", suit: "Clubs"}, 
        {Number: "5", suit: "Clubs"}, 
        {Number: "6", suit: "Clubs"}, 
        {Number: "7", suit: "Clubs"}, 
        {Number: "8", suit: "Clubs"}, 
        {Number: "9", suit: "Clubs"}, 
        {Number: "10", suit: "Clubs"}, 
        {Number: "Jack", suit: "Clubs"}, 
        {Number: "Queen", suit: "Clubs"}, 
        {Number: "King", suit: "Clubs"}, 
        {Number: "Ace", suit: "Diamonds"}, 
        {Number: "2", suit: "Diamonds"}, 
        {Number: "3", suit: "Diamonds"}, 
        {Number: "4", suit: "Diamonds"}, 
        {Number: "5", suit: "Diamonds"}, 
        {Number: "6", suit: "Diamonds"}, 
        {Number: "7", suit: "Diamonds"}, 
        {Number: "8", suit: "Diamonds"}, 
        {Number: "9", suit: "Diamonds"}, 
        {Number: "10", suit: "Diamonds"}, 
        {Number: "Jack", suit: "Diamonds"}, 
        {Number: "Queen", suit: "Diamonds"}, 
        {Number: "King", suit: "Diamonds"}
    ]
};

function shuffle() {
    for (let i = 0; i < 25; i++) {
        let num = Math.floor(Math.random() * (end - start+1) + start)
    }
} 