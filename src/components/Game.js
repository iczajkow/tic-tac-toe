import React from 'react';
import { useState } from "react";
import Board from "./Board";
import GameStatus from './GameStatus';
import checkVictoryCondition from "../utils/checkVictoryCondition";
import checkIsDraft from "../utils/checkIsDraft";

import './Game.css';


const INITIAL_STATE = {
    playerTurn: 1,
    playerWon: null,
    isDraft: false,
    board: [
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ],
     history: []
};

const Game = () => {

    const [gameState, setGameState] = useState(INITIAL_STATE);

    const updateCell = (rowIndex, cellIndex) => {
        const updatedBoard = [...gameState.board];
        const updatedRow = [...updatedBoard[rowIndex]];
        updatedRow[cellIndex] = gameState.playerTurn;
        updatedBoard[rowIndex] = updatedRow;
        const hasPlayerWon = checkVictoryCondition(updatedBoard, gameState.playerTurn, 3);
        const isDraft = checkIsDraft(updatedBoard);
        const playerWon = hasPlayerWon ? gameState.playerTurn : null;
        
        setGameState({
            playerTurn: gameState.playerTurn === 1 ? 2 : 1,
            board: updatedBoard,
            playerWon,
            isDraft,
        });
    }

    const resetGame = () => {
        setGameState(INITIAL_STATE);
    }

    return (
    <div className="game">
        <div>
            <button onClick={resetGame}>Reset</button>
        </div>
        <GameStatus current={gameState.playerTurn} winner={gameState.playerWon} draft={gameState.isDraft}></GameStatus>
        <div className="board">
            <Board boardState={gameState.board} onCellClick={updateCell} />
        </div>
    </div>
    );
}

export default Game;