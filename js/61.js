// function enough(cap, on, wait) {
//     let result = cap - on - wait;
//     return result >= 0 ? 0 : Math.abs(result)
// }

//or
function enough(cap, on, wait) {
    console.log(Math.max(wait + on - cap, 0));
}

 enough(10, 5, 5)//, 0);
 enough(100, 60, 50)//, 10);
 enough(20, 5, 5)//, 0)
