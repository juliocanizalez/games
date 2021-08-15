import React from 'react';

interface Props {
  imageStatic: string;
  imageAnimated: string;
  gameName: string;
}

const GameOption: React.FC<Props> = ({ imageStatic, imageAnimated, gameName }) => (
  <div className='home-selector__game'>
    <img src={imageStatic} className='home-selector__game--static' alt={gameName} />
    <img src={imageAnimated} alt={gameName} />
    <h4>{gameName}</h4>
  </div>
);

export default GameOption;
