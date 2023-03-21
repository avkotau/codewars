function remove(s,n){
    let input = s;
    while (n) {
        input = input.replace(/!/, "");
        n-=1;
    }
    return input;
}


remove("Hi!",1) // "Hi")
remove("Hi!",100) // "Hi")
remove("Hi!!!",1) // "Hi!!")
remove("Hi!!!",100) // "Hi")
remove("!Hi",1) // "Hi")
remove("!Hi!",1) // "Hi!")
remove("!Hi!",100) // "Hi")
remove("!!!Hi !!hi!!! !hi",1) // "!!Hi !!hi!!! !hi")
remove("!!!Hi !!hi!!! !hi",3) // "Hi !!hi!!! !hi")
