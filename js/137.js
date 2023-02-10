function findOdd(A) {
    for (let i = 0; i < A.length; i++) {

        let count = 0;

        for (let j = 0; j < A.length; j++) {
            if (A[i] === A[j])
                count++;
        }
        if (count % 2 !== 0)
            //return A[i];
        console.log(A[i])
    }

    return -1;
}
//or
//const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


findOdd([7])//;, 7
findOdd([0])//;, 0
findOdd([1,1,2])//;, 2
findOdd([0,1,0,1,0])//;, 0
findOdd([1,2,3,1,1,3])
findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])//;, 4
    findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])//;, 5
    findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])//;, -1
    findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])//;, 5
    findOdd([10])//;, 10
    findOdd([1,1,1,1,1,1,10,1,1,1,1])//;, 10
    findOdd([5,4,3,2,1,5,4,3,2,10,10])//;, 1


