function combat(health, damage) {
    console.log(health-damage <= 0 ? 0 : health-damage)
}
//or
//function combat(health, damage) {
//   return Math.max(health - damage, 0);
// }

combat(100, 5) //, 95);
combat(92, 8) //, 84);
combat(20, 30) //, 0, "Health cannot go below 0");
