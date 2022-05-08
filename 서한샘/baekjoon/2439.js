var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
const inputArr = input.sort((a,b)=>b-a)

var a = parseInt(inputArr[0]);
var b = parseInt(inputArr[1]);
var c = parseInt(inputArr[2]);

if(a===b && b===c){
    console.log(10000 + a*1000)
} else if (a===b || b===c ) {
    console.log(1000 + 100 * (a===b ? a : b))
} else {
    console.log(100 * a)
}
