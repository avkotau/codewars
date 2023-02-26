function removeUrlAnchor(url){
    console.log(url.split('#')[0])
}
//or
//function removeUrlAnchor(url){
//   return url.replace(/#.*/gi,"");
// }

removeUrlAnchor('www.codewars.com#about') //, 'www.codewars.com')
removeUrlAnchor('www.codewars.com/katas/?page=1#about') //, 'www.codewars.com/katas/?page=1')
removeUrlAnchor('www.codewars.com/katas/') //, 'www.codewars.com/katas/')
