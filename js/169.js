function strCount(str, letter){
    let arr = str.split('').filter(n => n === letter).length
    console.log(arr)
}

strCount('Hello', 'o') //, 1);
strCount('Hello', 'l') //, 2);
strCount('',      'z') //, 0);
