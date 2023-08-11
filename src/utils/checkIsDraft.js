const checkIsDraft = (board) => {
    return board.every(row => row.every(cell => cell !== null));
}

export default checkIsDraft;