import React, { useState, useEffect } from 'react';

import Button from './Button';

interface Props {
  currentPosition: number | undefined;
  timeLength: number;
  getPreviousValue(step: number): void;
  handleResume(): void;
}

const Menu: React.FC<Props> = ({ currentPosition, timeLength, getPreviousValue, handleResume }) => {
  const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(true);
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (timeLength === 0 || currentPosition === (timeLength > 1 ? timeLength - 1 : timeLength)) {
      setIsPrevDisabled(true);
    } else {
      setIsPrevDisabled(false);
    }

    if (currentPosition === 0) {
      setIsNextDisabled(true);
    } else {
      setIsNextDisabled(false);
    }
  }, [currentPosition, timeLength]);

  return (
    <>
      <Button
        text='Previous'
        disabled={isPrevDisabled}
        getPreviousValue={getPreviousValue}
        increment
      />
      <Button
        text='Next'
        disabled={isNextDisabled}
        getPreviousValue={getPreviousValue}
        increment={false}
      />
      <Button text='Resume' disabled={isNextDisabled} handleResume={handleResume} />
    </>
  );
};

export default Menu;
