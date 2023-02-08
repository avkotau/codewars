function wave(str){
    let result = [];
    if([...str].length === 0) return [];
    for(let i = 0; i < str.length; i++){
        let copy = str.split('');
        if(copy[i] === ' ') continue;
        copy[i] = copy[i].toUpperCase('');
        result.push(copy.join(''))
    }
    console.log(result)
}
//or
//function wave(str){
//     let result = [];
//
//     str.split("").forEach((char, index) => {
//         if (/[a-z]/.test(char)) {
//             result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
//         }
//     });
//
//     return result;
// }
//or
//var wave=w=>[...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)


//let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
wave("hello")//, result, "Should return: '"+result+"'");

// result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
// assert.deepEqual(wave("codewars"), result, "Should return: '"+result+"'");
//
// result = [];
wave("")//, result, "Should return: '"+result+"'");
//
// result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
wave("two words")//, result, "Should return: '"+result+"'");
//
// result = [" Gap ", " gAp ", " gaP "];
wave(" gap ")//, result, "Should return: '"+result+"'");
