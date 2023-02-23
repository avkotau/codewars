function rowWeights(array){
    let array1 = [];
    let array2 = [];
    let result = [];
    if (array.length === 1) {
        result.push(...array)
        result.push(0)
        console.log(result)
        return
    } else if (array.length >= 2) {
        for (let i = 0; i < array.length; i +=2) {
            array1.push(array[i])
        }
        for (let i = 1; i < array.length; i +=2) {
            array2.push(array[i])
        }
   }
    result.push(array1.reduce((a,b) => a + b));
    result.push(array2.reduce((a,b) => a + b));
    console.log(result)
}
//or
//function rowWeights(array){
//   let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
//   let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
//
//   return [t1, t2]
// }
//or
//const rowWeights = arr => arr.reduce((a, w, i) => (a[i%2]+=w, a), [0, 0]);


rowWeights([80]) // [80,0]);
rowWeights([100,50]) // [100,50]);
rowWeights([50,60,70,80]) // [120,140]);
rowWeights([13,27,49]) // [62,27]);
rowWeights([70,58,75,34,91]) // [236,92]);
rowWeights([29,83,67,53,19,28,96]) // [211,164]);
rowWeights([0]) // [0,0]);
rowWeights([100,51,50,100]) // [150,151]);
