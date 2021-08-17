import React from 'react';

import BoardButton from './BoardButton';
import TicTacToeSquareType from '../../types/TicTacToeSquareType';

interface Props {
  squares: TicTacToeSquareType[] | undefined;
  isTraveling: boolean | undefined;
  handleClick: (position: number) => void;
}
const Board: React.FC<Props> = ({ squares, isTraveling, handleClick }) => (
  <div className='game-board'>
    {squares &&
      squares.map((state: TicTacToeSquareType, position: number) => (
        <BoardButton
          key={position.toString()}
          position={position}
          checked={state}
          handleClick={handleClick}
          isTraveling={isTraveling}
        />
      ))}
  </div>
);

export default Board;
