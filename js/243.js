// function isPerfect(number) {
//     let sum = 0;
//
//     for (let i = 1; i < number; i++) {
//         if (number % i === 0) sum += i
//     }
//
//     console.log(sum === number);
// }

function isPerfect(number) {
    let sum = 1;
    const sqrt = Math.floor(Math.sqrt(number));

    for (let i = 2; i <= sqrt; i++) {
        if (number % i === 0) {
            sum += i;
            const divisor = number / i;
            if (divisor !== i) {
                sum += divisor;
            }
        }
    }

    console.log(sum === number);
}


isPerfect(25) // true);
isPerfect(1) // false);
isPerfect(28) // true);
isPerfect(4986) // false);
isPerfect(10) // false);
isPerfect(496) // true);
isPerfect(8128) // true);
isPerfect(23459879034) // false);
isPerfect(1098) // false);
isPerfect(33550336) // true);
