import React, { useState } from 'react';

import Button from './BoardButton';

interface Props {
  squares: boolean[] | undefined;
  isTraveling: boolean | undefined;
  handleClick(position: number): void;
}
const Board: React.FC<Props> = ({ squares, isTraveling, handleClick }) => {
  const [colors] = useState<string[]>([
    '#264653',
    '#2a9d8f',
    '#e9c46a',
    '#e76f51',
    '#a8dadc',
    '#e63946',
    '#457b9d',
    '#8d99ae',
    '#264654',
    '#2a9d8e',
    '#e9c46b',
    '#e76f52',
    '#a8dade',
    '#e63947',
    '#457b9e',
    '#8d99af',
  ]);

  return (
    <div className='board'>
      {squares &&
        squares.map((isChecked: boolean, position: number) => (
          <Button
            key={colors[position]}
            position={position}
            bgColor={colors[position]}
            isChecked={isChecked}
            handleClick={handleClick}
            isTraveling={isTraveling}
          />
        ))}
    </div>
  );
};

export default Board;
