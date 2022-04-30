var fs = require('fs');
var input = parseInt(fs.readFileSync('/dev/stdin').toString());

if (input > 100 || input < 60){
    console.log('F');      
}else if(input >= 90){
    console.log('A');      
}else if(input >= 80){
    console.log('B');      
}else if(input >= 70){
    console.log('C');      
}else if(input >= 60){
    console.log('D');      
}
