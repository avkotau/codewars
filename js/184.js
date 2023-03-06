function meeting(s) {
    // let upper = s.toUpperCase();
    // upper = upper.split(';')
    //
    // for (let i = 0; i < upper.length; i++) {
    //     upper[i] = upper[i].split(':').reverse()
    // }
    //  console.log(upper.sort().reduce((acc, name) => {
    //     return acc += `(${name[0]}, ${name[1]})`
    //
    // }, ''))
    console.log(s.toUpperCase()
                .split(";")
                .map(name => name.split(':').reverse())
                .sort()
                .reduce((acc, name) => (
                    acc += `(${name[0]}, ${name[1]})`
        ), '')
    )

}
//or
//const meeting = s => {
//   return s.toUpperCase()
//          .replace(/(\w+):(\w+)/g, "($2, $1)")
//          .split(';')
//          .sort()
//          .join('')
// };

meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn");
    //"(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)";
meeting("John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell");
    //"(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)";
meeting("Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern");
    //"(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)";
