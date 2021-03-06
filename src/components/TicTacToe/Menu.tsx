import React, { useState, useEffect } from 'react';

import Button from '../Common/Button';
import TicTacToeSquareType from '../../types/TicTacToeSquareType';

interface Props {
  currentPosition: number | undefined;
  timeLength: number;
  xIsNext: boolean | undefined;
  isReplaying: boolean | undefined;
  winner: TicTacToeSquareType | string | undefined;
  getPreviousValue(step: number): void;
  handleResume(): void;
  handleReset(): void;
  handleReplay(): void;
}

const Menu: React.FC<Props> = ({
  currentPosition,
  timeLength,
  xIsNext,
  isReplaying,
  winner,
  getPreviousValue,
  handleResume,
  handleReset,
  handleReplay,
}) => {
  const [isDisabledPrevious, setIsDisabledPrevious] = useState<boolean>(true);
  const [isDisabledNext, setIsDisabledNext] = useState<boolean>(true);

  useEffect(() => {
    if (timeLength === 0 || currentPosition === (timeLength > 1 ? timeLength - 1 : timeLength)) {
      setIsDisabledPrevious(true);
    } else setIsDisabledPrevious(false);

    if (currentPosition === 0) setIsDisabledNext(true);
    else setIsDisabledNext(false);
  }, [currentPosition, timeLength]);

  return (
    <>
      <div className='game-menu'>
        <Button
          text='Previous'
          className='game-button'
          disabled={isDisabledPrevious || isReplaying}
          getPreviousValue={getPreviousValue}
          increment
        />
        <Button
          text='Next'
          className='game-button'
          disabled={isDisabledNext || isReplaying}
          getPreviousValue={getPreviousValue}
          increment={false}
        />
        <Button
          text='Resume'
          className='game-button'
          disabled={isDisabledNext || isReplaying}
          handleResume={handleResume}
          increment
        />
        <Button
          text='Reset'
          className='game-button'
          disabled={isReplaying}
          handleReset={handleReset}
        />
        {winner && (
          <Button
            text='Replay'
            className='game-button'
            disabled={isReplaying}
            handleReplay={handleReplay}
          />
        )}
      </div>
      {!winner && (
        <div className='info'>
          <h3>Next</h3>
          <p style={{ color: xIsNext ? '#2F3241' : '#545B74' }}>{xIsNext ? 'x' : 'o'}</p>
        </div>
      )}
    </>
  );
};

export default Menu;
