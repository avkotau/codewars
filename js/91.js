function solution(string) {
    let str = '';
    //console.log(string[0] === string[0].toUpperCase())
    for(let i = 0; i < string.length; i++) {
        //console.log(string[i] === string[i].toUpperCase())
        // console.log(string.length)

        if (string[i] === string[i].toUpperCase()) {
            // console.log(string[i])
            str += ' ' + string[i]
        } else str += string[i]
    }
    console.log(str)

}
//or
// function solution(string) {
//   return(string.replace(/([A-Z])/g, ' $1'));
//
// }
//or
//function solution(string) {
//   return string.replace(/([a-z])([A-Z])/g, "$1 $2");
// }

solution('camelCasing') //, 'camel Casing', 'Unexpected result')
solution('camelCasingTest') //, 'camel Casing Test', 'Unexpected result')
