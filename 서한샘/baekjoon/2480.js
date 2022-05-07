var fs = require('fs');
var input = parseInt(fs.readFileSync('/dev/stdin').toString());

for(let i = 1; i < input*2; i++){
    if(i <= input){
        console.log(`${' '.repeat(input - i)}${'*'.repeat(i*2-1)}`)
    } else {
        const k = i - input
        console.log(`${' '.repeat(k)}${'*'.repeat((input-k)*2-1)}`)
    }
    
}