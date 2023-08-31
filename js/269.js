//Need to traverse the tree ( nesting can be any ), the methode must adjust. Calculate the sum of all values

const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: null,
        },
        {
            value: 3,
            children: null,
        },
        {
            value: 4,
            children: [
                {
                    value: 5,
                    children: [
                        {
                            value: 6,
                            children: null,
                        },
                        {
                            value: 7,
                            children: [
                                {
                                    value: 2,
                                    children: null,
                                },
                                {
                                    value: 3,
                                    children: null,
                                },
                            ],
                        },
                    ],

                },
                {
                    value: 3,
                    children: null,
                },
            ],
        },
    ],
}; //36

let result2 = 0
const forArray = (array) => {
    array.forEach(el => {

        result2 += el.value
        if (Array.isArray(el.children)) {
            forArray(el.children)
        }
    })
}

const quantityValue2 = (tree) => {
    for (let treeElement in tree) {
        if (Array.isArray(tree[treeElement])) {
            forArray(tree[treeElement])
        } else {
            result2 += tree.value
        }
    }
    return result2
}

console.log(quantityValue2(tree))
