function removeEveryOther(arr){
    let result = [];
    for (let i = 0; i < arr.length; i+=2) {
        result.push(arr[i]);
    }

    console.log(result)
}
//['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']
//removeEveryOther(['Hello', 'Goodbye', 'Hello Again', 'Hello1', 'Goodbye1', 'Hello Again1'])
removeEveryOther([ 'Hello', undefined, 'Hello Again' ])


