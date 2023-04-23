function isLeapYear(year) {

    if (year % 400 == 0) return true
    if (year % 100 == 0) return false
    if (year % 4 == 0) return true
    return false
}


isLeapYear(1234) // false, 'Year 1234');
isLeapYear(1984) // true, 'Year 1984');
isLeapYear(2000) // true, 'Year 2000');
isLeapYear(2010) // false, 'Year 2010');
isLeapYear(2013) // false, 'Year 2013');
