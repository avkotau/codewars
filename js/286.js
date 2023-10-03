//173. uncompress string
//Given a compressed string, return its original form.
//
// For example.
// a number k followed by a pair of parenthesis, meaning to repeat the substring inside the parenthesis by k times, k is positive integer.
// inputs are guaranteed to be valid input like above example, there is no numerical digit in original form.

function uncompress(str) {
    let numStack = [];
    let strStack = [];
    let result = '';
    let fullSubStr = ''

    for (let i = 0; i < str.length; i++) {
        let tempVariable = ''
        if (Number.isFinite(Number(str[i]))) {
            tempVariable += str[i]
            if (str[i + 1] === '(') {
                numStack.push(Number(tempVariable))
            }
        } else if (str[i] === '(') {
            strStack.push(str[i])
        } else if (str[i] === ')') {
            strStack.pop()
            if (strStack.length === 0) {
                fullSubStr = result.repeat(numStack[0])

                result = ''
            }
        } else {
            result += str[i]
        }
    }
    return fullSubStr
}

console.log(uncompress('3(ab)')) // 'ababab'
// console.log(uncompress('3(ab2(c))')) // 'abccabccabcc'
// console.log(uncompress('2(BFE1(dev))3(2(lover))')) // 'BFEdevBFEdevloverloverloverloverloverlover'
