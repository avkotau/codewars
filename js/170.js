function arrayDiff(a, b) {
    console.log(a.filter(x => b.indexOf(x) === -1 ))
}

arrayDiff([1,2], [1]) // [2], "a was [1,2], b was [1]");
arrayDiff([1,2,2], [1]) // [2,2], "a was [1,2,2], b was [1]");
arrayDiff([1,2,2], [2]) // [1], "a was [1,2,2], b was [2]");
arrayDiff([1,2,2], []) // [1,2,2], "a was [1,2,2], b was []");
arrayDiff([], [1,2]) // [], "a was [], b was [1,2]");
arrayDiff([1,2,3], [1,2]) // [3], "a was [1,2,3], b was [1,2]")
arrayDiff([-2,-8,-9,6,-2,-7,-4,17,4,-7,1,13,9,17,9,18],[-2,-8,-9,6]) //[ -7, -4, 17, 4, -7, 1, 13, 9, 17, 9, 18 ]
