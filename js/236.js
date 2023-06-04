function createPhoneNumber(numbers){
    const [a,b,c,d,e,f,g,h,j,k] = numbers
    console.log(`(${numbers[0]+''+numbers[1]+''+numbers[2]}) ${numbers[3]+''+numbers[4]+''+numbers[5]}-${numbers[6]+''+numbers[7]+''+numbers[8]+''+numbers[9]}`)
    console.log(`(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`)
    console.log(`(${a}${b}${c}) ${d}${e}${f}-${g}${h}${j}${k}`)
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890");
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) // "(111) 111-1111");
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890");
