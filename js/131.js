function remove (string) {
    console.log(string.split('').reverse().join('').replace(/!/, '').split('').reverse().join(''));
    //or
    //console.log(string.replace(/\!$/, ''),2);
}

remove("Hi!")//, "Hi";
remove("Hi!!!")//, "Hi!!";
remove("!Hi!")//, "!Hi";
remove("!Hi!")//, , "!Hi"
remove("Hi! Hi!")//, "Hi! Hi";
remove("Hi")//, "Hi";
