function add(num1, num2) {
    let result = [];
    let num1str = String(num1)
    let num2str = String(num2)
    let sum = Number(num1str[num1str.length-1]) + Number(num2str[num2str.length-1]);
    result.unshift(sum);

    let i = num1str.length - 2;
    let j = num2str.length - 2;
    while (i >= 0 && j >= 0) {
        sum = Number(num1str[i]) + Number(num2str[j]);
        result.unshift(sum);
        i--;
        j--;
    }

    while (i >= 0) {
        result.unshift(Number(num1str[i]));
        i--;
    }

    while (j >= 0) {
        result.unshift(Number(num2str[j]));
        j--;
    }

    return Number(result.join(''));
}

add(2, 11) // 13);
add(0, 1) // 1);
add(0, 0) // 0);

add(16, 18) // 214);
add(26, 39) // 515);
console.log(add(122, 81)) // 1103);
