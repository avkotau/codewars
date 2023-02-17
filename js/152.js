function filter_list(l) {
    let result = []
    //console.log(l.filter(n => typeof n === 'number' ? result.push(n) : '' ))
    console.log(l.filter(n => typeof n === 'number' ? n : 0 ))
}
// or
//function filter_list(l) {
//  return l.filter(v => typeof v == "number")
// }
//or
//function filter_list(l) {
//   return l.filter(function(v) {return typeof v == 'number'})
// }

filter_list([1,2,'a','b']) //,[1,2], 'For input [1,2,"a","b"]');
filter_list([1,'a','b',0,15]) //,[1,0,15], 'For input [1,"a","b",0,15]');
filter_list([1,2,'aasf','1','123',123]) //,[1,2,123], 'For input [1,2,"aasf","1","123",123]');
