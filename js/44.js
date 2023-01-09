function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
}
greet('Daniel', 'Daniel')
//('Daniel', 'Daniel'), 'Hello boss')
// Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')
