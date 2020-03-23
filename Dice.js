// Random Dice Rolls

let args = process.argv.slice(2);
let rollnum = parseFloat(args[0]);
let dice = parseFloat(args[1]);
let total = 0;

for (let i = 1; i <= rollnum; i++) {
    let roll = Math.ceil(Math.random()*dice);
    total += roll;
    console.log(`Rolled: ${roll}`);
}

let average = (total / rollnum);

console.log(`Total rolled: ${total}`)
console.log(`Average Roll: ${average}`)