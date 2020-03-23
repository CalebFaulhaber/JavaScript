const fs = require('fs');

fs.readFile('marked.csv', function (err, fileData) {
    if (err) {throw err}
    const str = fileData.toString()
    arr = str.split('\n')
    let result = ''
    
    for (let value of arr) {
        if (!value.toLowerCase().endsWith('yes')) {
            result += `${value}\n`
        }
    }
        
    fs.writeFile(`delete.csv`, result, err => {
        if(err) {throw err}
    })
});
