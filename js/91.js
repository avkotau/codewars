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

solution('camelCasing') //, 'camel Casing', 'Unexpected result')
solution('camelCasingTest') //, 'camel Casing Test', 'Unexpected result')
