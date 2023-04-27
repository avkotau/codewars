function maxRot(n) {
    let result = []
    let strN = n.toString()
    for (let i = strN.length-1; i >= 0; i--) {
        debugger
        result.unshift(strN[i])

    }
    console.log(result)
}

maxRot(38458215) // 85821534);
// maxRot(195881031) // 988103115);
// maxRot(896219342) // 962193428);
// maxRot(69418307) // 94183076);
