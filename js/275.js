const toCamelCase = (str) => {
  const arrLowerWords = str.toLowerCase().split(' ')
    return arrLowerWords.map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
}

console.log(toCamelCase('To caMel CAsE'))
