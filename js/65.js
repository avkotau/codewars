function oddOrEven(array) {
        if (array.length === 0) return 'even'
        return array.reduce((a,b)=>a+b) %2 === 0 ? 'even' : 'odd'
}
// < 0 || sum === -0 ||  sum === 1 ? 'odd' : 'even'
oddOrEven([-1023, -1, 3]) // odd

         oddOrEven([0])// 'even')
         oddOrEven([1])// 'odd')
         oddOrEven([])// 'even')
        //
        //
        //
         oddOrEven([0, 1, 5])// 'even')
        // oddOrEven([0, 1, 3])// 'even')
        // oddOrEven([1023, 1, 2])// 'even')
        //
        //
        //
        // oddOrEven([0, -1, -5])// 'even')
        // oddOrEven([0, -1, -3])// 'even')
        // oddOrEven([-1023, 1, -2])// 'even')
        //
        // oddOrEven([0, 1, 2])//'odd')
        // oddOrEven([0, 1, 4])// 'odd')
        // oddOrEven([1023, 1, 3])// 'odd')
        //
        // oddOrEven([0, -1, 2])// 'odd')
        // oddOrEven([0, 1, -4])// 'odd')
        // oddOrEven([-1023, -1, 3])// 'odd')



