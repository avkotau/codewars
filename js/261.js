function validParentheses(p) {
    if (p === '') {
        return true
    }
    if (p.length === 1) {
        return false
    }
    let parent1 = 0
    let parent2 = 0
    let arrParents = p.split('').map(p => p === '(' ? parent1 += 1 : parent2 += 1)
    return parent1 === parent2

}

validParentheses( "(" ) // false));
validParentheses( ")" ) // false));
validParentheses( "" ) // true));
validParentheses( "()" ) // true));
validParentheses( "())" ) // false));

