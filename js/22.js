function sum (numbers) {
    "use strict";
    if(numbers.length > 0) {
        return numbers.reduce(function(a,b){return(a+b)})
    } else return 0
};

sum([1, 5.2, 4, 0, -1])
