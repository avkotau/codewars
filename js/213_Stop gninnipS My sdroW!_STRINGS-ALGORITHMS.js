function spinWords(string) {
    let arrFromStr = string.split(' ');
    let newStr = [];
    let result = []
    for (let i = 0; i < arrFromStr.length; i++) {
        if (arrFromStr[i].length >= 5) {
            newStr = arrFromStr[i].split('').reverse().join('')
            result.push(newStr)
        } else {
            result.push(arrFromStr[i])

        }
    }
    console.log(result.join(' '))
    }

spinWords("Welcome") // "emocleW");
spinWords("Hey fellow warriors") // "Hey wollef sroirraw");
spinWords("This is a test") // "This is a test");
spinWords("This is another test") // "This is rehtona test");
spinWords("You are almost to the last test") // "You are tsomla to the last test");
spinWords("Just kidding there is still one more") // "Just gniddik ereht is llits one more");
spinWords("Seriously this is the last one") // "ylsuoireS this is the last one");
