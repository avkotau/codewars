function hello(name) {
    if (name === undefined ||name.length === 0) return 'Hello, World!'

    return `Hello, ${name[0].toUpperCase() + name.toLowerCase().slice(1)}!`;
}
hello('Hello, John!')// "returns 'Hello, John!' when given 'johN'"
