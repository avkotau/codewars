function josephusSurvivor(n,k){
    let arr = Array.from({ length: n }, (v, i) =>  i + 1)
    arr = [].concat(arr);
    let pos = 0;

    while (arr.length > 1) {
         console.log(pos)
        pos = (pos + k - 1) % arr.length;
        arr.splice(pos, 1);
        console.log(arr)
    }
    //console.log(arr[0]);
}
//or
//function josephusSurvivor(n, k){
//   return n < 1 ? 1 : (josephusSurvivor(n - 1, k) + --k) % n + 1;
// }
//1,2,3,4,5,6,7
josephusSurvivor(7,3) // 4)
josephusSurvivor(11,19) // 10)
josephusSurvivor(1,300) // 1)
josephusSurvivor(14,2) // 13)
josephusSurvivor(100,1) // 100)
