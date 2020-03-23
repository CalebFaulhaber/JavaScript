let num1 = parseFloat(process.argv[2]);
let num2 = parseFloat(process.argv[3]);

for (let i = 1; i <= 100; i++) {
    if (i % (num1+num2) == 0) {
        console.log('FizzBuzz')
    }
    else if (i % num1 == 0) {
        console.log('Fizz');
    }
    else if (i % num2 == 0) {
        console.log('Buzz')
    }
    else console.log(i);
}
