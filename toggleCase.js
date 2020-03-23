let str = process.argv[2];
let newStr = ''
for (let l of str) {
    if (l === ' ') {
        newStr += l;
    } else if (l === l.toUpperCase()) {
        newStr += l.toLowerCase();
    } else if (l === l.toLowerCase()) {
        newStr += l.toUpperCase();
    }}

console.log(newStr);