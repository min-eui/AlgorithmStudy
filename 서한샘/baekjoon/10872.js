var fs = require('fs');
var input = parseInt(fs.readFileSync('/dev/stdin').toString());

let i = 1
let result = 1
while(i <= input){
  result *= i++
}


console.log(result === 0 ? 1 : BigInt(result).toString())