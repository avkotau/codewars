function getCount(str) {
    let arrStr = str.split('');
    let exceptLetters = ['a', 'e', 'i', 'o', 'u'];
    let result = 0
    for (let i = 0; i < arrStr.length; i++) {
        for (let j = 0; j < exceptLetters.length; j++) {
            if (exceptLetters[j] === arrStr[i]) {
                result +=1
            }
        }
    }

    console.log(result)
}

getCount("abracadabra") // 5) ;

