function nbDig(n, d) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        (i**2).toString().split('').map(el => el == d ? count++ : false)
    }
    console.log(count)
}


nbDig( 5750, 0) //  4700, "n = 5750, d = 0");
nbDig(11011, 2) //  9481, "n = 11011, d = 2");
nbDig(12224, 8) //  7733, "n = 12224, d = 8");
nbDig(11549, 1) // 11905, "n = 11549, d = 1");
