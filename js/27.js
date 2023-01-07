function sumArray(array) {
    let arr = [];
    if(array === null || array === undefined || array.length <=  2 || array === 0) {
        return 0;
    }
    let lastIndex = array.length - 2;
    arr = array.sort((a,b) => a - b).splice(1,lastIndex).reduce((a,b) => a + b);
    return arr;

}
sumArray([50,20,3,4])
sumArray(null)                    // , 0 ;
sumArray([ ])                     // , 0 )
sumArray([ 3 ])                   // , 0 )
sumArray([ 3, 5 ])                // , 0 )
sumArray([ 6, 2, 1, 8, 10 ])      // , 16 ;
sumArray([ 0, 1, 6, 10, 10 ])      //, 17 ;
sumArray([ -6, -20, -1, -10, -12 ])//, -28);
sumArray([ -6, 20, -1, 10, -12 ])  //, 3 ;
