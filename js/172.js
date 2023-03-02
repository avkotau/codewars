function count (string) {
    console.log(Object.assign([...string].reduce((acc, n) => (acc[n] = (acc[n] || 0) + 1, acc), {})))

}

count("aba") // { a: 2, b: 1 });
count("") // {});
