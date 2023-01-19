function longest(s1, s2) {
    const newSetS = s1 + s2;
    const newSetS2 = new Set(newSetS);
    const arr = [...newSetS2]
    console.log(arr.sort().join(''))
}
//or
//const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
//or
//function longest(s1, s2) {
//   return Array.from(new Set(s1 + s2)).sort().join('');
// }

longest("aretheyhere", "yestheyarehere") //, "aehrsty")
longest("loopingisfunbutdangerous", "lessdangerousthancoding") //, "abcdefghilnoprstu")
longest("inmanylanguages", "theresapairoffunctions") //, "acefghilmnoprstuy")

