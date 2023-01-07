function squareSum(numbers){
    let squarePow = [];
    let result = [];
    squarePow = numbers.map((el, i) => el**2);
    result = squarePow.reduce((a,b) => a + b,0);

    console.log(result)
}


//or
// function squareSum(numbers){
//     return numbers.reduce((sum,num) => sum + (num * num), 0);
// }
squareSum([0, 3, 4, 5])
