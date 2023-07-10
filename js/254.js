function rowWeights(array){
    let odd = []
    let even = []
    if (array.length === 1) return [...array, 0]
    if (array.length === 2) return array
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 1) odd.push(array[i])
        if (i % 2 === 0) even.push(array[i])
    }
    let evenResult = even.reduce((acc, curr) => acc + curr)
    let oddResult = odd.reduce((acc, curr) => acc + curr)
    console.log([evenResult, oddResult])
}

rowWeights([80]) // [80,0]);
rowWeights([100,50]) // [100,50]);
rowWeights([50,60,70,80]) // [120,140]);
rowWeights([13,27,49]) // [62,27]);
rowWeights([70,58,75,34,91]) // [236,92]);
rowWeights([29,83,67,53,19,28,96]) // [211,164]);
rowWeights([0]) // [0,0]);
rowWeights([100,51,50,100]) // [150,151]);
