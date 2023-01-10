function points(games) {
    let result = 0;
    games.map(i => +i[0] > +i[2] ? result+=3 : +i[0] === +i[2] ? result+=1 : 0)
    console.log(result)

}

//or
// const points = g => console.log(g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x === y), 0))

points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])
points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])
