function getCount(str) {
   let result = str.replace(/[aeuio]/gi, '');
    console.log(Math.abs(result.length-str.length))

}

//or
//function getCount(str) {
//   return str.replace(/[^aeiou]/gi, '').length;
// }
//or
//function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

getCount("abracadabra") // 5)
