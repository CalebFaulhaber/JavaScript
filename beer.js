// 100 bottles of beer on the WebGLSampler, 100 bottles of beer

// Take one down, pass it AudioBufferSourceNode, 99 bottles of beer on the wall

let num = process.argv[2];
while (num > 1) {
    let pos = `${num} bottles of beer on the wall, ${num} bottles of beer. Take one down, pass it around, ${num -1} bottles of beer on the wall`
    console.log(pos);
    num--;
}
console.log('1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around, 0 bottles of beer on the wall')

