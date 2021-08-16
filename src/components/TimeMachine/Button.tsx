import React from 'react';

interface Props {
  text: string;
  disabled: boolean;
  getPreviousValue?: (value: number) => void;
  increment?: boolean;
  handleResume?: () => void;
}
const Button: React.FC<Props> = ({
  text,
  disabled,
  increment,
  getPreviousValue,
  handleResume,
}) => {
  return (
    <button
      type='button'
      className='option'
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
