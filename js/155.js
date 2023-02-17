function incrementString (strng) {
    const body = strng.slice(0, -1);
    console.log(body)
    const lastDigit = strng.slice(-1).match(/[0-9]/);
    console.log(lastDigit)
    return lastDigit === null
        ? strng + "1"
        : lastDigit !== 9
            ? body + (+lastDigit + 1)
            : incrementString(body) + "0";
}
//or
// let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)

incrementString("fo99obar99");// "fo99obar100"
incrementString("foobar000");// "foobar001"
incrementString("foobar999");// "foobar1000"
incrementString("foobar00999");// "foobar01000"
incrementString("foo");// "foo1"
incrementString("foobar001");// "foobar002"
incrementString("foobar1");// "foobar2"
incrementString("1");// "2"
incrementString("009");// "010"
incrementString("fo99obar99");// "fo99obar100"
