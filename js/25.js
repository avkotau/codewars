function findSmallestInt(args) {
    console.log(+args.sort((a, b) => a - b).slice(0,1))
    //or
    console.log(Math.min(...args))
}
findSmallestInt([78,56,232,12,8])
