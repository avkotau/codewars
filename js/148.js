function shortcut (string) {
    console.log(string.replace(/[aeiou]/gi, ''))
}

shortcut('hello') // 'hll'
shortcut('how are you today?') // 'hw r y tdy?'
shortcut('complain') // 'cmpln'
shortcut('never') // 'nvr'
