function findOutlier(integers){
    let odd = [];
    let even = [];
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            even.push(integers[i])
        } else if (integers[i] % 2 !== 0) {
            odd.push(integers[i])
        }
    }
    console.log(even.length === 1 ? even[0] : odd[0])
}
//or
//function findOutlier(integers){
//   var even = integers.filter(a=>a%2==0);
//   var odd = integers.filter(a=>a%2!==0);
//   return even.length==1? even[0] : odd[0];
// }

findOutlier([0, 1, 2]) // 1)
findOutlier([1, 2, 3]) // 2)
findOutlier([2,6,8,10,3]) // 3)
findOutlier([0,0,3,0,0]) // 3)
findOutlier([1,1,0,1,1]) // 0)

