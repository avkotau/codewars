const arrCheck = value => {
    return value.every(el => Array.isArray(el))
}


arrCheck([]) // true);
arrCheck([['string']]) // true);
arrCheck([[],{}]) // false);
arrCheck([[1],[2],[3]]) // true);
arrCheck(['A', 'R', 'R', 'A', 'Y']) // false);
