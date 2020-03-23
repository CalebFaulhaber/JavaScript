let num = parseFloat(process.argv[2]);
let str = '';

for (let i = 1; i <= num; i++) {
    let space = ' '.repeat(num-i);
    let pound = '# '.repeat(i); 
    if (i == num) {
        str += `${space}${pound}`
    }
    else {
        str += `${space}${pound} \n`
    }
}
console.log(str);
