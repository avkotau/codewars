function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((a,b) => a+b)/classPoints.length < yourPoints
}

betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)
