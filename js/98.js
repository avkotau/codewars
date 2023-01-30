let costs = 40;
const rentalCarCost = (d) =>
    d < 3 ? costs * d :
    d < 7 ? costs * d - 20 : costs * d - 50




//it("Should work for under 3 days:", function() {
    rentalCarCost(1)//, 40);
    rentalCarCost(2)//, 80);


//it("Should work for under 7 days:", function() {
    rentalCarCost(3)//, 100);
    rentalCarCost(4)//, 140);
    rentalCarCost(5)//, 180);
    rentalCarCost(6)//, 220);


//it("Should work for 7 or more days:", function() {
    rentalCarCost(7)//, 230);
    rentalCarCost(8)//, 270);
    rentalCarCost(9)//, 310);
    rentalCarCost(10)//, 350);
