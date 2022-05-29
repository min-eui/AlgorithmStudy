function solution(s) {
    let answer = '';
    let loopFg = true;
    let stringPointer = 0;
    let numberStringArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    do {
        if(!isNaN(s[stringPointer])){
            answer += s[stringPointer]
            stringPointer++
        } else {
            for(numString of numberStringArr){
                if(s.substr(stringPointer, numString.length) === numString){
                    answer += numberStringArr.indexOf(numString)
                    stringPointer += numString.length
                    break;
                }
            }
        }
        if(stringPointer>=s.length) loopFg = false

    } while (loopFg)

    return answer;
}
console.log(solution('2three45sixseven'))