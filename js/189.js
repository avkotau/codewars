let obj1 = {
    foo: 'foo',
    bar: 'bar'
}

let obj2 = {
    bar: 'foo',
    some: 'some'
}

// const objComplete = (obj1, obj2) => {
//     let keyObj1 = Object.keys(obj1);
//     let keyObj2 = Object.keys(obj2);
//     for (let i = 0; i < keyObj1.length; i++) {
//         let key1 = keyObj1[i]
//         for (let j = 0; j < keyObj2.length; j++) {
//             let key2 = keyObj2[j]
//             if (key1 === key2) {
//                 obj1[key1] = obj2[key2]
//             }
//         }
//     }
//     console.log(obj1)
//
// }

const objComplete = (obj1, obj2) => {
    for (const obj1Key in obj2) {
        console.log(obj1.hasOwnProperty(obj1Key))
        if (obj1.hasOwnProperty(obj1Key)) {
            obj1[obj1Key] = obj2[obj1Key]
        }
    }
    console.log(obj1)

}

//result  = {
//foo: 'foo',
//bar: 'foo',
// }
objComplete(obj1, obj2)
