const GameStatus = ({ winner, current, draft }) => {
    const getPlayerSymbol = (player) => {
        return player ===  1 ? 'X' : 'O'
    }

    if(winner) {
        return <h2>{getPlayerSymbol(winner)} won</h2>
    } else if(draft) {
        return <h2>Draft</h2>
    }
    return <h2>{getPlayerSymbol(current)} turn</h2>
};

export default GameStatus;