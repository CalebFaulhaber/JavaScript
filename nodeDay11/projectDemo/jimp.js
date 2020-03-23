// import jimp from 'jimp';

// async function main() {
//   const image = await jimp.read('test.png');

//   image.blur(5);
// }

// main();



const jimp = require('jimp');

const fileName = "./test.png";

jimp.read(fileName, (err, image) => {
    if (err) {
        console.error(err);
    }
    image.blur(2).write(fileName)
});