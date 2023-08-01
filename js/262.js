function kebabize(str) {
    console.log(str.replace(/[0-9]/g, '').split(/(?=[A-Z])/).join('-').toLowerCase())

}

kebabize('myCamelCasedString') // 'my-camel-cased-string');
kebabize('myCamelHas3Humps') // 'my-camel-has-humps');
