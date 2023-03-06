function pigIt(str){
    let newArr = [];
    let arrFromStr = str.split(' ')
    arrFromStr.forEach(n => {
        let letterArr = n.split('');
        letterArr.push(letterArr[0], 'ay')
        letterArr.shift()
        if (n === '!' || n === '?' || n === '.') {
            newArr.push(n)
        } else {
            newArr.push(letterArr.join(''))
        }
    })
    console.log(newArr.join(' '))
}
//or
//function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }

pigIt('Pig latin is cool') // 'igPay atinlay siay oolcay')
pigIt('This is my string') // 'hisTay siay ymay tringsay')
