// let arr = [6.1, 4.2, 6.3];

// callbackFunction = Math.floor

const groupBy = (arr, callbackFunction) => {
    let result = {};
    arr.forEach(item => {
        let resultCallback = callbackFunction(item)
        result[resultCallback] ? result[resultCallback].push(item) : result[resultCallback] = [item]
    })
    console.log(result)
}

groupBy([6.1, 4.2, 6.3], Math.floor)

//return {'4': [4,2], '6': [6.1, 6.3]}
