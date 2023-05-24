function isSortedAndHow(array) {

    const ascending = [...array].sort((a, b) => a - b);
    const descending = [...array].sort((a, b) => b - a);

    if (JSON.stringify(array) === JSON.stringify(ascending)) {
        return "yes, ascending";
    } else if (JSON.stringify(array) === JSON.stringify(descending)) {
        return "yes, descending";
    } else {
        return "no";
    }
}


isSortedAndHow([1, 2]) // 'yes, ascending');
isSortedAndHow([15, 7, 3, -8]) // 'yes, descending');
isSortedAndHow([4, 2, 30]) // 'no');
