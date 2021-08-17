import React from 'react';

import TicTacToeSquareType from '../../types/TicTacToeSquareType';

interface Props {
  position: number;
  checked: TicTacToeSquareType;
  isTraveling: boolean;
  handleClick: (position: number) => void;
}

const BoardButton: React.FC<Props> = ({ position, checked, isTraveling, handleClick }) => (
  <button
    type='button'
    className=''
    style={{
      cursor: isTraveling ? 'not-allowed' : 'pointer',
      color: checked === 'x' ? 'hsl(230, 39%, 51%);' : '#545B74',
    }}
    onClick={() => handleClick(position)}
  >
    {checked}
  </button>
);

export default BoardButton;
