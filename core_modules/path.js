const path = require('path');

// unix server has \ slach but node requires /
const myPath = 'E:/NODEJS/LintSetup/path.js';

// base name
console.log(path.basename(myPath));
// full directory name
console.log(path.dirname(myPath));
// extantion
console.log(path.extname(myPath));
// parse
console.log(path.parse(myPath));
