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
    '#264653',
    '#2a9d8f',
    '#e9c46a',
    '#e76f51',
    '#a8dadc',
    '#e63946',
    '#457b9d',
    '#8d99ae',
  ]);

  return (
    <div>
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
