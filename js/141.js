function rainAmount(mm){
    if (mm < 40) {
        return "You need to give your plant " + Math.abs(mm - 40) + "mm of water"
    } else {
        return "Your plant has had more than enough water for today!"
    };
}

rainAmount(100) //, "Your plant has had more than enough water for today!")
// rainAmount(39) //, "You need to give your plant 1mm of water")

