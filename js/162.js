const REGEXP = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])\w{6,}$/;

console.log(REGEXP.test('fjd3IR9'))// true
console.log(REGEXP.test('ghdfj32'))// false
console.log(REGEXP.test('DSJKHD23'))// false
console.log(REGEXP.test('dsF43'))// false
console.log(REGEXP.test('4fdg5Fj3'))// true
console.log(REGEXP.test('DHSJdhjsU'))// false
// 'ghdfj32', false
// 'DSJKHD23', false
// 'dsF43', false
// '4fdg5Fj3', true
// 'DHSJdhjsU', false
// 'fjd3IR9.;', false
// 'fjd3  IR9', false
// 'djI38D55', true
// 'djI3_8D55', false
// 'djI38D55@@', false
