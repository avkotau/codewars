function bmi(weight, height) {
    let resultBmi = weight/Math.pow(height, 2);
    let result = resultBmi <= 18.5 ? "Underweight" : resultBmi <= 25.0 ? "Normal" : resultBmi <= 30.0 ? "Overweight" : "Obese"
    console.log(result);
}

bmi(80, 1.80)// "Normal"

