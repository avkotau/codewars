function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    let f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);

 if (f1 < f2) {
     return fighter2.name;
} else if (f2 < f1) {
     return fighter1.name;
 } else {
     return firstAttacker
 }

}

declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew") //, "Lew");

 declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry") //, "Harry");

declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry") //, "Harald")

declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald") //, "Harald")

declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry") //, "Harald")

declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald") //, "Harald")
