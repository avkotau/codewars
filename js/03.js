function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}
//pin 4 or 6 numbers
validatePIN (1345)
