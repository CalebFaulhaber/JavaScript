let p = parseFloat(process.argv[2]);

if (0 > p || p > 100) {
    console.log('You didn\'t take this class!');
}
else if (p > 85) {
    console.log('A');
}
else if (p > 72) {
    console.log('B');
}
else if (p > 66) {
    console.log('C+')
}
else if (p > 59) {
    console.log('C')
}
else if (p > 50) { 
    console.log('C-')
}
else console.log('You failed')