
function josephus(items, k) {
    let result = [];
    let index = 0;

    while (items.length > 0) {
        index = (index + k - 1) % items.length;
        result.push(items.splice(index, 1)[0]);
    }

    console.log(result);
}

josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1) // [1,2,3,4,5,6,7,8,9,10])
josephus([1,2,3,4,5,6,7,8,9,10],2) // [2, 4, 6, 8, 10, 3, 7, 1, 9, 5])
josephus(["C","o","d","e","W","a","r","s"],4) // ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a'])
josephus([1,2,3,4,5,6,7],3) // [3, 6, 2, 7, 5, 1, 4])
josephus([],3) // [])
