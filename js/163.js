function digitize(n) {

    console.log(Array.from(n+'').reverse().map(Number))
}

digitize(35231) //,[1,3,2,5,3]);
digitize(0) //,[0]);

