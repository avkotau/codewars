//173. uncompress string
//Given a compressed string, return its original form.
//
// For example.
// a number k followed by a pair of parenthesis, meaning to repeat the substring inside the parenthesis by k times, k is positive integer.
// inputs are guaranteed to be valid input like above example, there is no numerical digit in original form.

function uncompress(str) {
    const stack = [];
    let num = '';

    for (const char of str) {
        if (!isNaN(char)) {
            // If the character is a number, save it
            num += char;
        } else if (char === '(') {
            // If the character is an open parenthesis, add the number to the stack and clear num
            stack.push(Number(num));
            num = '';
        } else if (char === ')') {
            // If the character is a closing parenthesis, unpack the contents up to the last opening parenthesis6
            let temp = '';
            while (typeof stack[stack.length - 1] !== 'number') {
                temp = stack.pop() + temp;
            }
            const count = stack.pop();
            stack.push(temp.repeat(count));
        } else {
            // Otherwise we just add the symbol to the stack
            stack.push(char);
        }
    }
    return stack.join('');
}

console.log(uncompress('3(ab)')) // 'ababab'
console.log(uncompress('3(ab2(c))')) // 'abccabccabcc'
console.log(uncompress('2(BFE1(dev))3(2(lover))')) // 'BFEdevBFEdevloverloverloverloverloverlover'
