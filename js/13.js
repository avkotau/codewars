function stringUp (str) {
    let arrStr = str.split(' ')
    let result = arrStr.map(i => i[0].toUpperCase() + i.substring(1)).join(" ");
    console.log(result)
};
str = 'How are you? I\'m fine'
stringUp(str)
