import React from 'react';

import TicTacToeSquareType from '../../types/TicTacToeSquareType';

interface Props {
  position: number;
  checked: TicTacToeSquareType;
  isTraveling: boolean | undefined;
  handleClick: (position: number) => void;
}

const BoardButton: React.FC<Props> = ({ position, checked, isTraveling, handleClick }) => (
  <button
    type='button'
    className='board-button'
    style={{
      cursor: isTraveling ? 'not-allowed' : 'pointer',
      color: checked === 'x' ? 'white' : '#fafcff',
    }}
    onClick={() => handleClick(position)}
  >
    {checked}
  </button>
);

export default BoardButton;
