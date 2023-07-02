
function isIncludes(str, peaceStr) {
    let lowerStr = str.toLowerCase()
    let lowerPeaceStr = peaceStr.toLowerCase()

    let newLowerPeaceStr = new Set(lowerPeaceStr)

    for (const char of newLowerPeaceStr) {
        if (!lowerStr.includes(char)) {
            console.log(false)
            return
        }

    }
    console.log(true)
    console.log(nameSchoolToLower.includes(...result))

}

isIncludes("Incubator", "table")
isIncludes("Incubator", "Cut")
isIncludes("Incubator", "Cut") // => true
isIncludes("Incubator", "table") // => false
isIncludes("Incubator", "inbba") // => true
isIncludes("Incubator", "inba") // => true
isIncludes("Incubator", "Incubatorrr") //=> true
