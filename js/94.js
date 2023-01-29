function checkExam(array1, array2) {
    let result = 0;
    array1.map((n,i) => n === array2[i] ? result += 4 : array2[i] === "" ? result += 0 : n !== array2[i] ? result += -1 : 0)
    if(result > 0) {
        console.log(result)
    } else console.log( 0 )

}

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) //, 6);
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) //, 7);
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) //, 16);
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) //, 0);
