let symbolsMap = {
    "A": "000",
    "B": "001",
    "C": "002",
    "D": "003",
    "E": "004",
    "F": "005",
    "G": "006",
    "H": "007",
    "I": "008",
    "J": "009",
    "K": "010",
    "L": "011",
    "M": "012",
    "N": "013",
    "O": "014",
    "P": "015",
    "Q": "016",
    "R": "017",
    "S": "018",
    "T": "019",
    "U": "020",
    "V": "021",
    "W": "022",
    "X": "023",
    "Y": "024",
    "Z": "025",
}


function alphabetPosition(text) {
    let result = [];
    let arrText = text.toUpperCase().replace(/[^a-zа-яё]/gi, '').split('')
    //console.log(Object.keys(symbolsMap).length)
    for (let a = 0; a <= arrText.length; a++) {
        for (let b = 0; b <= Object.keys(symbolsMap).length; b++) {
            arrText[a] === Object.keys(symbolsMap)[b] ? result.push(+Object.values(symbolsMap)[b] + 1) : ''
            //console.log(Object.values(symbolsMap)[b])
        }
    }
    console.log(result.join(' ').slice(0, -4))
}

alphabetPosition("The sunset sets at twelve o' clock.") //, "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
alphabetPosition("The narwhal bacons at midnight.") //, "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

