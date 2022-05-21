let x = 'abcdefghijklmnopqrstuvwxyz';

function reverseString(str, num = 1){
  let result = ''
  let i = 0 
  while(i < str.length){
    result += str.substr(i+num, num) + str.substr(i, num)
    i += num * 2
  }
  if(num * 2 >= str.length) {
    return result;
  } else {
    return reverseString(result, num * 2)
  }
}

console.log(reverseString(x))