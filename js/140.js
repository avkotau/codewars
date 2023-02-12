String.prototype.isUpperCase = function() {
    console.log(this.toUpperCase() === this.toString())

}


'c'.isUpperCase()//, false, 'c is not upper case');
'C'.isUpperCase() //, true, 'C is upper case');
'hello I AM DONALD'.isUpperCase() //, false, 'hello I AM DONALD not is upper case');
'HELLO I AM DONALD'.isUpperCase() //, true, 'HELLO I AM DONALD is upper case');
'ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase() //, false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
'ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase() //, true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');
