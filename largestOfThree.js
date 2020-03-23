let a = process.argv[2];
let b = process.argv[3];
let c = process.argv[4];
let nums = [a,b,c];
let biggest = 0;
// if(a > b && a> c) {
//     console.log(a);
// }
// else if (b > c && b > a) {
//     console.log(b);
// }
// else console.log(c);

for(let num of nums) {
    if (num > biggest){
       biggest = num;
    }
}
console.log(biggest);