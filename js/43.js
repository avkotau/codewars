let array = ["a", "b", "c"]
var number=function(array){

    console.log(array.map((n,i) => i+1+': '+n))

}
number(array)



//["a", "b", "c"]), ["1: a", "2: b", "3: c"]
