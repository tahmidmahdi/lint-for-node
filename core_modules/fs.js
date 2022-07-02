// https://www.w3schools.com/nodejs/ref_modules.asp
const fs = require('fs');

// write a file with Sync approach. Block the main thread
fs.writeFileSync('myFile.txt', 'Hello Node js deves!');
// if we write it once again then it will replace the prev text
// fs.writeFileSync('myFile.txt', ' How are you');
// so if we dont want to replace then
fs.appendFileSync('myFile.txt', ' How are you?');

// read file
// will return buffer. is a kind of binary form of data
// const data = fs.readFileSync('myFile.txt');
// console.log(data);
// console.log(data.toString());

// with async model
fs.readFile('myFile.txt', (err, data) => {
    console.log(data.toString());
});
console.log('Hello');
