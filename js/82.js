function domainName(url){

    let sourceString = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
    let domain = sourceString.split(".")[0];

    console.log(domain)
}
//or
//const domainName = url =>
//   url.replace(/.*\/\/|www.|\..*/g, ``);


domainName("http://google.com") //, "google");
domainName("http://google.co.jp") //, "google");
domainName("www.xakep.ru") //, "xakep");
domainName("https://youtube.com") //, "youtube");
