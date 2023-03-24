function XO(str) {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;

}
XO('xo') // true);
XO("xxOo") // true);
XO("xxxm") // false);
XO("Oo") // false);
XO("ooom") // false);
