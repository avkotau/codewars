function pattern(n) {
    let output = "";
    for (let i = 1; i <= n; i++) {
        output += (i.toString()).repeat(i) + '\n'
    }
    console.log(output.trim())
}

pattern(1) // ,"1");
pattern(2) // ,"1\n22");
pattern(5) // ,"1\n22\n333\n4444\n55555");
