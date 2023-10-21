//166. validate number string
//Give a number string, check if it is valid number.
//
// By "valid", we mean if it validates as one of below formats:
//
// integer, such as '0', '-1'
// decimal number like '1.0', '-2.335'
// exponential notation -12.3e45
// Formats such as BigInt, Infinity, NaN, octal and hexadecimal .etc are out of scope, you can treat them as invalid.
// Pay attention to the sign + -.
// Note
// The test cases are not covering all the possible cases, since this is not a problem to test your knowledge against JavaScript language spec.
//
// You should confirm with your interviewer about the scope and those edge cases.
//
// isNaN() seems to be a nice trick, but could you solve without it?
function validateNumberString(str) {
    return !isNaN(str) && str !== ''
}

console.log(validateNumberString('0')) //true
console.log(validateNumberString('+0')) //true
console.log(validateNumberString('0+')) //false
console.log(validateNumberString('+')) // false
console.log(validateNumberString('+.0')) //true
console.log(validateNumberString(''))//false
