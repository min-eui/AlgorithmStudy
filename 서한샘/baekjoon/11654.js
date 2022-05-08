var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();

console.log(input.charCodeAt(0))