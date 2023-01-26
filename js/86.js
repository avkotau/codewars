function feast(beast, dish) {
    let lengthBeast = beast.length;
    let lengthDish = dish.length;

    console.log(beast.charAt(lengthBeast))
    console.log(dish.charAt(lengthDish))

    if(beast.charAt(lengthBeast-1) === dish.charAt(lengthDish-1) && beast.charAt(0) === dish.charAt(0)) {
        console.log(true)
    } else console.log(false)

}

//or
// function feast(beast, dish) {
//   return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
// }


feast("great blue heron", "garlic naan") //, true)
feast("chickadee", "chocolate cake") //, true)
feast("brown bear", "bear claw") //, false)
