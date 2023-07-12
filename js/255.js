function scrollingText(text) {
    text = text.toUpperCase()
    let intermediateValue = []
    let resultEnd = [text]
    let splitText = text.split('');

    for (let i = 0; i < text.length-1; i++) {

        intermediateValue = splitText.splice(0, 1)

        splitText = [...splitText, ...intermediateValue]
        resultEnd.push(splitText.join(''))
    }
    console.log(resultEnd)

}

scrollingText("abc") // ["ABC","BCA","CAB"])
