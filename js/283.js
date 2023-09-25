//102

/**
 *
 * Given a string containing only following characters:
 *
 * parentheses : ( or )
 * brackets: [ or ]
 * braces: { or }
 * write a function to determine if they are valid.
 *
 * By 'valid', it means all should be rightly paired, and with the valid order.
 */
function validate(str) {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    const stack = [];

    for (let c of str) {
        const last = stack.at(-1); // last element

        if (map[last] === c) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.length === 0
}

console.log(validate('{}[]()'))
// true

// console.log(validate('{[()]}'))
// true

// console.log(validate('{[}]'))
// // false, they are not in the right order
//
// console.log(validate('{}}'))
// // false, last `}` is not paired with `{`
