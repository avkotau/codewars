function accum(str) {
    //version 1
    let toLower = str.toLowerCase()
    let toUpper = str.toUpperCase().split('')

    let result = ''
    for (let i = 1; i < toUpper.length; i++) {
        result += toUpper[i]+toLower[i].repeat(i)+'-'
    }
    let strResult = result.slice(0, result.length-1)
    console.log(toUpper[0]+'-'+strResult)

    //version 2
    let arr = str.toUpperCase().split('')
    let repeatArr = arr.map((el, i) => {
        return el += el.repeat(i).toLowerCase()
        }
    )
    let resStr = repeatArr.join('-')
    console.log(resStr)

    //version 3
    let result3 = str.toUpperCase()
        .split('')
        .map((el, i) => `${el}${el.repeat(i).toLowerCase()}`).join('-')
    console.log(result3)
}


accum('abcd') // A-Bb-Ccc-Dddd
accum('cwAt') // C-Ww-Aaa-Tttt #6 Front-end. Вопросы на собеседовании 12:42
