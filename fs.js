const fs = require('fs');
// file write
fs.writeFileSync('myFile.txt', 'Hello Abdullah Vhai!');
fs.appendFileSync('myFile.txt', ' Hi also Tahmid!');
// const data = fs.readFileSync('myFile.txt');
// console.log(data.toString());
// console.log('Hello');
//  to use it async
fs.readFile('myFile.txt', (err, data) => {
    console.log(data.toString());
});
console.log('Hello');
