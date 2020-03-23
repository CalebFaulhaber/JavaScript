const safe = 714;
let password = 'opensesame'
let userPassword = process.argv[2];

if (userPassword === undefined) {
    console.log('Password required');

}
else if(userPassword === password) {
    console.log(`${safe}`);
}
else console.log('Incorrect Password');