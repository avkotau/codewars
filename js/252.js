const dialoguesData = [
    { id: 1, name: 'Victor', points: 30 },
    { id: 2, name: 'Dima', points: 50 },
    { id: 3, name: 'Sacha', points: 10 },
    { id: 4, name: 'Masha', points: 34 }
]

const simpleObj = (dialoguesData) => {
    let result = [];
    let fooNewStr = (dl) => ({ name: dl.name, points: dl.points })
    for (let i = 0; i < dialoguesData.length; i++) {
        result[i] = fooNewStr(dialoguesData[i])

    }
    console.log(result)
}

dialoguesData.map((dl) => ({ name: dl.name, points: dl.points }))
simpleObj(dialoguesData, { name: dialoguesData.name, points: dialoguesData.points })
