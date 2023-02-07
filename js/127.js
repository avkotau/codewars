function accum(s) {
    const result = []
    const str = s.toLowerCase()

    for(let i = 0; i < str.length; i++) {
        let strResult = str[i].toUpperCase()
        for(let j = 0; j < i; j++) {
            strResult += str[i]
        }
        result.push(strResult)
    }

    console.log(result.join("-"))
}
//or
//function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }
//or
//function accum(s) {
//   return [...s].map((char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index))).join("-")
// }
//or
//function accum(s) {
//   return [...s.toUpperCase()].reduce((acc, cur, index) => acc + "-" + cur + cur.toLowerCase().repeat(index))
// }


accum("ZpglnRxqenU") //, "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
// accum("NyffsGeyylB") //, "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
// accum("MjtkuBovqrU") //, "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
// accum("EvidjUnokmM") //, "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
// accum("HbideVbxncC") //, "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
