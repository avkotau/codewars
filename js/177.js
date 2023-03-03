function findNb(m) {
    let total = 0;
    let count = 0;
    while (count < m){
        total += 1;
        count += total**3
    }
    console.log(count === m ? total : '-1')

}

findNb(4183059834009) // 2022)
findNb(24723578342962) // -1)
findNb(135440716410000) // 4824)
findNb(40539911473216) // 3568)

