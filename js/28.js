var min = function(list){
    list.sort((a,b) => a - b)
    console.log(list[0]);
}

var max = function(list){
    list.sort((a,b) => a - b)
    let newArr = list.length-1
    console.log(list[newArr]);
}
//or
var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}
//or
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);


let list = [-520, 56, 30, 29, -54, 0, -110]
min(list)
max(list)
