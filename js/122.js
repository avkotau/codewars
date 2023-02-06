function getMiddle(s){
    let sMiddle = s.length / 2
    console.log(s.length === 1 ? s : s.length % 2 === 0 ? s.slice([sMiddle-1], [sMiddle+1]) : s[Math.floor(sMiddle)])
}

//or
//function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

getMiddle("test") //,"es")
getMiddle("testing") //,"t");
getMiddle("middle") //,"dd");
getMiddle("A") //,"A");
