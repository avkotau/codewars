function gimme (triplet) {
    let array = triplet.slice(0);
    array.sort((a, b) => a-b );
    return triplet.indexOf(array[1]);
}
//or
//function gimme(a) {
//   return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
// }
//or
//const gimme = function (arr) {
//   return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
// };


gimme([2, 3, 1], 0);
	gimme([5, 10, 14], 1);
	gimme([2.1, 3.2, 1.4], 0);
	gimme([5.9, 10.4, 14.2], 1);
	gimme([-2, -3, -1], 0);
	gimme([-5, -10, -14], 1);

	gimme([-2, -3.2, 1], 0);
	gimme([-5.2, -10.6, 14], 0);
