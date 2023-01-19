let humanYearsCatYearsDogYears = function(humanYears) {
    let peopleYears = humanYears;
    let dogYears = humanYears === 1 ? 15 : humanYears === 2 ? 15 + 9 : (15 + 9) + (humanYears - 2) * 5;
    let catYears = humanYears === 1 ? 15 : humanYears === 2 ? 15 + 9 : (15 + 9) + (humanYears - 2) * 4;
    console.log([peopleYears, catYears, dogYears])
}

//or
//var humanYearsCatYearsDogYears = function(y) {
//   if (y == 1) return [1, 15, 15]
//   if (y == 2) return [2, 24, 24]
//   return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
// }



humanYearsCatYearsDogYears(1) //, [1,15,15]


humanYearsCatYearsDogYears(2) //, [2,24,24]


humanYearsCatYearsDogYears(10) //, [10,56,64]
