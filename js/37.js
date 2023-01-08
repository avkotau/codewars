function removeSmallest(numbers) {
    console.log(numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers))))
}
removeSmallest([1, 2, 3, 4, 5]);
// [2, 3, 4, 5],

