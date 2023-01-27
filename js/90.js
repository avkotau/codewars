// function solution(str, ending){
//    console.log(str.substr(-ending.length) === ending || ending === '');
//    console.log(-ending.length)
// }

//or
function solution(str, ending){
  return str.endsWith(ending);
}

solution('abcde', 'cde') //, true)
solution('abcde', 'abc') //, false)
solution('ails', 'fails') // false
solution('abc', '') // true
