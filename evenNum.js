let num = process.argv[2];

for (let i = num; i >= 2; --i) {
    if (num % 2 === 0) {
        console.log(i);
    }
}