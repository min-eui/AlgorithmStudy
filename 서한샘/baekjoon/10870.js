var fs = require('fs');
var input = parseInt(fs.readFileSync('/dev/stdin').toString());

let i = 2
let result = 1
let lessNum = 0
let tempNum = 0;

while(i <= input){
  tempNum = result
  result += lessNum 
  lessNum = tempNum
  i++
}

console.log(input <= 1 ? input : result)