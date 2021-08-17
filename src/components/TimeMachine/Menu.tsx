import React, { useState, useEffect } from 'react';

import Button from '../Common/Button';

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
        className='option'
        disabled={isPrevDisabled}
        getPreviousValue={getPreviousValue}
        increment
      />
      <Button
        text='Next'
        className='option'
        disabled={isNextDisabled}
        getPreviousValue={getPreviousValue}
        increment={false}
      />
      <Button
        text='Resume'
        className='option'
        disabled={isNextDisabled}
        handleResume={handleResume}
      />
    </>
  );
};

export default Menu;
