const rps = (p1, p2) => {
    if (p1 === p2) {
        console.log('Draw!')
    } else if (p1 === 'rock' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock') {
        console.log('Player 1 won!')
    } else console.log('Player 2 won!')

    //return p1 === scissors && p2 === paper ? "Player 1 won!" :
};

//or
//const rps = (p1, p2) => {
//   if(p1 === p2) {
//     return 'Draw!'
//   };
//   return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
// }


//it('player 1 win', function() {
    rps('rock', 'scissors') // getMsg(1));
    rps('scissors', 'paper') // getMsg(1));
    rps('paper', 'rock') // getMsg(1));

//
// //it('player 2 win', function() {
    rps('scissors', 'rock') // getMsg(2));
    rps('paper', 'scissors') // getMsg(2));
    rps('rock', 'paper') // getMsg(2));


//it('draw', function() {
    rps('rock', 'rock') // 'Draw!');
    rps('scissors', 'scissors') // 'Draw!');
    rps('paper', 'paper') // 'Draw!');
