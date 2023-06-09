function isLeapYear(year) {
    if (!(year % 400)) {
        return true
    }
    if (!(year % 100)) {
        return false
    }
    return !(year % 4)
}

isLeapYear(1234) // false, 'Year 1234');
isLeapYear(1984) // true, 'Year 1984');
isLeapYear(2000) // true, 'Year 2000');
isLeapYear(2010) // false, 'Year 2010');
isLeapYear(2013) // false, 'Year 2013');
