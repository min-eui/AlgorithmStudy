var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = ''

for(inputStr of input){
    let loopResult = '';
    const inputStrArr = inputStr.split(' ');
    if(inputStrArr.length === 1) continue;
    if(inputStrArr[1]==='') continue;
    const a = parseInt(inputStrArr[0]);
    const b = inputStrArr[1];
    for(let i = 0; i < b.length; i++){
        
        loopResult += b[i].repeat(a) 
    }

    result += (result !== '' ? '\n' : '') + loopResult
}
console.log(result)
