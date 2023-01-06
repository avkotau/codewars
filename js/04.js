busStops = [[10,0],[3,5],[5,8]];
var number = function(busStops){
    let people = 0
    for (let i = 0; i < busStops.length; i++) {
        people += busStops[i][0] - busStops[i][1]
    }
    return people
}
number(busStops)
