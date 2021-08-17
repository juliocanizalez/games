import React from 'react';

import '../../styles/components/TimeMachine/button.scss';

interface Props {
  text: string;
  className: string;
  disabled: boolean;
  getPreviousValue?: (value: number) => void;
  increment?: boolean;
  handleResume?: () => void;
  handleReset?: () => void;
  handleReplay?: () => void;
}
const Button: React.FC<Props> = ({
  text,
  className,
  disabled,
  increment,
  getPreviousValue,
  handleResume,
  handleReset,
  handleReplay,
}) => {
  return (
    <button
      type='button'
      className={className}
      disabled={disabled}
      onClick={() => {
        if (increment && getPreviousValue) {
          getPreviousValue(+1);
        } else if (!increment && getPreviousValue) {
          getPreviousValue(-1);
        } else if (handleResume) {
          handleResume();
        } else if (handleReset) {
          handleReset();
        } else if (handleReplay) {
          handleReplay();
        }
      }}
    >
      {text}
    </button>
  );
};

export default Button;
