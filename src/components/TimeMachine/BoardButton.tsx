import React from 'react';

interface Props {
  position: number;
  bgColor: string;
  isChecked: boolean;
  isTraveling: boolean | undefined;
  handleClick(position: number): void;
}

const Button: React.FC<Props> = ({ position, bgColor, isChecked, isTraveling, handleClick }) => (
  <button
    type='button'
    style={{
      backgroundColor: bgColor,
      opacity: isChecked ? '100%' : '50%',
      cursor: isTraveling ? 'not-allowed' : 'pointer',
      boxShadow: isChecked ? '0 0 4px rgba(0, 0, 0, 0.16), 0 6px 8px rgba(0, 0, 0, 0.26)' : 'none',
    }}
    onClick={() => handleClick(position)}
  >
    {' '}
  </button>
);

export default Button;
