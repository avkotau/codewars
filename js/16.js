function friend(friends){
    let arr = friends.filter(i => i.length <= 4 && isNaN(i))
    console.log(arr)
}
friends = ["Ryan", "Kieran", "Mark", "1234"]
friend(friends)
