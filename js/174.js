function expandedForm(num) {
    let arr = [];
    let multiplier = 1;
    let strFromNum = num.toString();
    for (let i = 1; i <= strFromNum.length; i++) {
        const digit = strFromNum[strFromNum.length - i]
        digit > 0 && arr.unshift(digit * multiplier)
        multiplier *= 10
    }
    console.log(arr.join(' + '))
}
//or
// const expandedForm = n => n.toString()
//     .split("")
//     .reverse()
//     .map( (a, i) => a * Math.pow(10, i))
//     .filter(a => a > 0)
//     .reverse()
//     .join(" + ");

expandedForm(12) // '10 + 2');
expandedForm(42) // '40 + 2');
expandedForm(70304) // '70000 + 300 + 4');
