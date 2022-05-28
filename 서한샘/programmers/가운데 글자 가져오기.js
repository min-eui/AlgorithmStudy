function solution(s) {
  const startStr = Math.floor(s.length / 2);

  return s.length % 2 === 1 ? s[startStr] : s.substr(startStr - 1, 2);
}
