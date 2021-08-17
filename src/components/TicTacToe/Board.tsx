import React from 'react';

import BoardButton from './BoardButton';
import TicTacToeSquareType from '../../types/TicTacToeSquareType';

interface Props {
  squares: TicTacToeSquareType[];
  isTraveling: boolean;
  handleClick: (position: number) => void;
}
const Board: React.FC<Props> = ({ squares, isTraveling, handleClick }) => (
  <div>
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
