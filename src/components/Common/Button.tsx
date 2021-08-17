import React from 'react';

import '../../styles/components/TimeMachine/button.scss';

interface Props {
  text: string;
  className: string;
  disabled: boolean;
  getPreviousValue?: (value: number) => void;
  increment?: boolean;
  handleResume?: () => void;
}
const Button: React.FC<Props> = ({
  text,
  className,
  disabled,
  increment,
  getPreviousValue,
  handleResume,
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
        }
      }}
    >
      {text}
    </button>
  );
};

export default Button;
