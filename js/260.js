obfuscate = function(email) {
    const dot = email.replace(/\./g, " [dot] ").replace('@', " [at] ")
    console.log(dot)
}

obfuscate('test@123.com') // 'test [at] 123 [dot] com')
obfuscate('Code_warrior@foo.ac.uk') // 'Code_warrior [at] foo [dot] ac [dot] uk')
