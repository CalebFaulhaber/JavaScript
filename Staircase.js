let str = process.argv[2];
let num = parseFloat(process.argv[3]);
let arr = str.split(' ');
let space = '| ';
let counter = 0;

if (num) {
    space = "|" +  " ".repeat(num);
}

for (let i in arr) {
    let p = "";
    space.repeat(counter);
    if (counter > 0){
        counter--;
        if (num) {p = ' '.repeat(num) + space.repeat(counter);}
        else {p = ' ' + space.repeat(counter);}
        p += arr[i];
        counter += 2;
        console.log(p)
        if (arr[i].includes('.')) {
            counter = 0;
        }
    }
    else {
        p += arr[i];
        counter++;
        console.log(p);
        if (arr[i].includes('.')) {
            counter = 0;
        }
    }
}

