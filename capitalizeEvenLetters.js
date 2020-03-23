let sent =  process.argv[2];

let str = '';

for (let i in sent) {
    for (let j in i) {
        str += (j % 2 == 0 ? sent[i][j].toLowerCase() : sent[i][j].toUpperCase());
    }
    str += ' ';
}

console.log(str);