function findAverage(array) {

    console.log(array.length === 0 ? 0 : array.reduce((a,b) => a+b )/array.length) ;
}


findAverage([]) //, 0);
findAverage([1,1,1]) //, 1);
findAverage([1,2,3]) //, 2);
findAverage([1,2,3,4]) //, 2.5);
