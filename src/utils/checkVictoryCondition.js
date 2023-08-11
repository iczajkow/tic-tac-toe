const checkHorizontal = (board, player, min) => {
    for (let i = 0; i < board.length; i++) {
        let count = 0;
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === player) {
                count++;
            }
        }
        if (count >= min) {
            return true;
        }
    }

    return false;
}

const checkVertical = (board, player, min) => {
    for (let i = 0; i < board.length; i++) {
        let count = 0;
        for (let j = 0; j < board[i].length; j++) {
            if (board[j][i] === player) {
                count++;
            }
        }
        if (count >= min) {
            return true;
        }
    }
}

const checkDiagonal = (board, player, min) => {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
        if (board[i][i] === player) {
            count++;
        }
    }
    if (count >= min) {
        return true;
    }

    count = 0;
    for (let i = 0; i < board.length; i++) {
        if (board[i][board.length - 1 - i] === player) {
            count++;
        }
    }
    if (count >= min) {
        return true;
    }

    return false;
}

const checkVictoryCondition = (board, player, min) => {
    return checkHorizontal(board, player, min) || checkVertical(board, player, min) || checkDiagonal(board, player, min);
};


export default checkVictoryCondition;

