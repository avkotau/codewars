function getAverage(marks){
    let result = marks.reduce((a,b) => a + b)/marks.length
    console.log(Math.round(result))

}

getAverage([2,2,2,2]) // 2);
getAverage([1,5,87,45,8,8]) // 25);
getAverage([1,2,3,4,5,]) // 3);
getAverage([1,1,1,1,1,1,1,2]) // 1);
