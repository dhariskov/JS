function ticTacToe(arr) {
    let board = [['false', 'false', 'false'], ['false', 'false', 'false'], ['false', 'false', 'false']]
    var k = 0
    while(k != arr.length-1) {
        // this is X move
        [x, y] = arr[k].split(' ')

        if (board[x][y] === 'false') {
            board[x][y] = 'X'
            k+=1
            if (winner(board, 'X')){
                console.log(`Player X wins!`)
                break
            }
        } else {
            console.log('This place is already taken. Please choose another!')
            k-=1
            continue
        }
        // this is O move
        k +=1;
        [x, y] = arr[k].split(' ');
        if (board[x][y] === 'false') {
            board[x][y] = 'O'
            k+=1
            if (winner(board, 'O')){
                console.log(`Player O wins!`)
                break
            }
        } else {
            console.log('This place is already taken. Please choose another!')
            k-=1
            continue
        }

        function winner(board, player) {
            return (board[0][0] === player && board[0][1] === player && board[0][2] === player) ||
                (board[1][0] === player && board[1][1] === player && board[1][2] === player) ||
                (board[2][0] === player && board[2][1] === player && board[2][2] === player) ||
                (board[0][0] === player && board[1][0] === player && board[2][0] === player) ||
                (board[0][1] === player && board[1][1] === player && board[2][1] === player) ||
                (board[0][2] === player && board[1][2] === player && board[2][2] === player) ||
                (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
                (board[0][2] === player && board[1][1] === player && board[2][0] === player);
        }
    }
    if (!(winner(board, 'X') || winner(board, 'O'))){
        console.log('The game ended! Nobody wins :(')
    }
    let result = ''
    for (let i=0; i<board.length; i++){
        result += `${board[i].join('\t')}\n`
    }
    return result
}

console.log(ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
))