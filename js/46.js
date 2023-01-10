function getGrade (s1, s2, s3) {
    let mediumValues = (s1 + s2 + s3)/3
    return mediumValues >= 90 ? 'A' : mediumValues >= 80 ? 'B' :  mediumValues >= 70 ? 	'C' : mediumValues >= 60 ? 'D' : 'F';
}

getGrade (95,90,93)
