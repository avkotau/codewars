function isIsogram(str){
    let newStr = str.toLowerCase();
    //unique value
    console.log(new Set(newStr).size === str.length)
}
isIsogram("moOooose")
