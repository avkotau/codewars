function stray(numbers) {
    const duplicates = numbers.filter((number, index, numbers) => {
        console.log(numbers.indexOf(number) !== index);
    });
    console.log(numbers.filter(n => n !== duplicates[0])[0])
}
//or
// const stray = numbers => numbers.find(num =>
//     console.log(numbers.indexOf(num)=== numbers.lastIndexOf(num))
// )


stray([2, 1, 2, 2, 2, 2]) //, 2);
stray([1, 2, 1]) //, 2);
stray([2, 1, 1]) //, 2);
