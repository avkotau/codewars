String.prototype.toAlternatingCase = function () {
    console.log(this.toString().split('').map(n => n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()).join(''))
}

"hello world".toAlternatingCase() //, "HELLO WORLD");
"HELLO WORLD".toAlternatingCase() //, "hello world");
"hello WORLD".toAlternatingCase() //, "HELLO world");
"HeLLo WoRLD".toAlternatingCase() //, "hEllO wOrld");
"12345".toAlternatingCase() //, "12345");
"1a2b3c4d5e".toAlternatingCase() //, "1A2B3C4D5E");
"String.prototype.toAlternatingCase".toAlternatingCase() //, "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
// "Hello World".toAlternatingCase().toAlternatingCase() //, "Hello World");
