function removeExclamationMarks(s) {
    //console.log(s.match(/[A-z][^!]+/g))
    console.log(s.replace(/[^a-zа-яё\s]/gi, ''))
}
//or
//function removeExclamationMarks(s) {
//   return s.replace(/!/gi, '');
// }
//or
//let removeExclamationMarks = s => s.split`!`.join``

removeExclamationMarks("Hello World!")//, "Hello World");
