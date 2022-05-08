var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

function reverseNum(numStr){
    let _numStr = numStr.toString();
    let result = '';
    for(let i = 0; i < _numStr.length; i++){
        result = _numStr[i] + result
    }
    return parseInt(result);
}

var a = reverseNum(input[0]);
var b = reverseNum(input[1]);

console.log(a > b ? a : b)
