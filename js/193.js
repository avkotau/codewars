function isSolved(board) {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== 0 && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return board[i][0];
        }
    }

    // Check vertical lines
    for (let j = 0; j < 3; j++) {
        if (board[0][j] !== 0 && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
            return board[0][j];
        }
    }

    // Check diagonal lines
    if (board[0][0] !== 0 && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0];
    }

    if (board[0][2] !== 0 && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2];
    }

    // Check for empty cells
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 0) {
                return -1;
            }
        }
    }

    // If no empty cells, it's a draw
    return 0;
}

//or
//
// function isSolved(board) {
//     board = board.join('-').replace(/,/g,'');
//     if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
//     if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
//     if(/0/.test(board)) return -1;
//     return 0;
// }


isSolved([
    [0,0,1],
    [0,1,2],
    [2,1,0]])// -1);


isSolved([
    [1,2,0],
    [0,1,2],
    [0,0,1]]) // 1

isSolved([
    [2,1,2],
    [2,1,1],
    [1,2,1]]) // 0

isSolved([
    [2,1,1],
    [0,1,1],
    [2,2,2]]) // 2
isSolved([
    [2,2,2],
    [0,1,1],
    [1,0,0]]) // 2

// isSolved([[1,1,1],[0,2,2],[0,0,0]]) // 1
// isSolved([[1,2,1],[1,1,2],[2,1,2]]) // 0
