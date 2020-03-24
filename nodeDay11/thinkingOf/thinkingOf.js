const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Choose any two numbers \n`, numbers => {
    numbers = numbers.split(' ').map(o => o = parseInt(o));
    let fT = [];
    if (numbers[0] > numbers[1]) {
        fT.push(numbers[1], numbers[0]);
    }
    else {fT = numbers};
    let num = Math.floor(Math.random() * (fT[1] - fT[0] + 1) + fT[0]);
    let counter = 1;
    const check = () => {
        rl.question(`Pick a number between ${fT[0]} and ${fT[1]}\n`, guess => {
            if(guess == num) {
                if (counter < 2) {
                    console.log(`${num} is correct! You guessed right after ${counter} guess`)
                    rl.close();
                }
                else {
                    console.log(`${num} is correct! You guessed right after ${counter} guesses`)
                    rl.close();
                }
            }
            else if (guess < num) {
                counter++;
                console.log(`Good guess, however it\'s higher than ${guess}`);
                check(); 
            }        
            else if (guess > num) {
                counter++;
                console.log(`Good guess, however it\'s lower than ${guess}`);
                check();
            }
        })
    }
        check()    
});

