let result = '';
let x = 10;

function binaryConverter(num){
  if(num === 0 ) return '0'
  
  let result = '';
  while(x > 0){
    result = x % 2 + result

    x = Math.floor(x /2 )
  }
  return result === '' ? '0' : result;
}

console.log(binaryConverter(x))
