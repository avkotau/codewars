function longestConsec(strarr, k) {
    let arrLength = strarr.length;
    let arr = [];

    if(arrLength == 0 || k > arrLength || k <= 0) return "";

    for(let i = 0; i <= arrLength - k; i++){
        let current = strarr[i];
        for(let ii = k, jj = 1; ii > 1; ii--, jj++){
            current += strarr[i+jj]
        }
        arr.push(current);
    }
    return arr.reduce(function (a, b) {
        return a.length > b.length ? a : a.length == b.length ? a : b;
    });
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) //  "abigailtheta")
longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) //  "oocccffuucccjjjkkkjyyyeehh")
longestConsec([], 3) //  "")
longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) //  "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) //  "wlwsasphmxxowiaxujylentrklctozmymu")
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) //  "")
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) //  "ixoyx3452zzzzzzzzzzzz")
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) //  "")
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) //  "")
