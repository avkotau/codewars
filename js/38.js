function findShort(s) {
    let arr = s.split(' ').sort((a,b) => a.length - b.length);
    console.log(arr[0].length)
}


//or
// function findShort(s){
//     console.log(Math.min(...s.split(" ").map(s => s.length)));
// }

findShort("bitcoin take over the world maybe who knows perhaps")


