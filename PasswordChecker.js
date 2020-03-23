let password = process.argv[2];
console.log(password.length);
if (password !== undefined) {
    if (password.length > 12) {
        console.log('Too Long');
    }
    else if (password.length < 8) {
        console.log('Too Short');
    }
    else {
        console.log('Just Right');
    }
}