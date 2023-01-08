function isItBugged(code){
//hmm, Looks like its bugged man!
   console.log(/^\d{2}\-\d{2}\-\d{4} \d\d\:\d\d$/.test(code))
}
isItBugged("14-10-1066 12:00")
isItBugged("Tenth of January")
isItBugged("01_09_2016 01:20")
isItBugged("14-10-1066 12:000")
