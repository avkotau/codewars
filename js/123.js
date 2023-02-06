function dutyFree(normPrice, discount, hol){
    console.log(Math.floor(hol / (normPrice * (discount/100))))
}

dutyFree(12, 50, 1000) //, 166);
dutyFree(17, 10, 500) //, 294);
dutyFree(24, 35, 3000) //, 357);
