function solution(arr, divisor) {
  var answer = [];
  arr.map((item) => {
    if (item % divisor === 0) {
      answer.push(item);
    }
  });
  if (answer.length === 0) {
    answer = [-1];
  } else {
    answer.sort(function (a, b) {
      return a - b;
    });
  }
  return answer;
}
