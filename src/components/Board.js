import React from 'react';
import Field from './Field';

import './Board.css';

const Board = ({boardState, onCellClick}) => {
    return <div className="game-board"> {boardState.map((row, rowIndex) => {
        return (
            <React.Fragment key={rowIndex} >
                {row.map((cell, cellIndex) => {
                    return (
                        <div className='game-cell' key={cellIndex}>
                            <Field value={cell} onClick={() => onCellClick(rowIndex, cellIndex)}></Field>
                        </div>
                    );
                })}
            </React.Fragment>
        );
    })}</div>;
}

export default Board;