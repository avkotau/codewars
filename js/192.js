function mango(quantity, price){
    console.log( price * Math.ceil(quantity - quantity/3))
}

mango(3, 3) //, 6)
mango(9, 5) //, 30)
