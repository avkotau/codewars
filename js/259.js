// return the magic index
function findMagic(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Object.is(arr[i], i)) {
            return result = i
        } else {
            result = -1

        }

    }
    return result
}

findMagic([-20, -10, 2, 10, 20])//2
findMagic([6, 5, 83, 5, 3, 18])//-1
