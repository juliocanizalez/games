import React from 'react';
import { Link } from 'react-router-dom';

import GameOption from '../components/Home/GameOption';
import { TimeMachine, TicTacToe } from '../components/Home/GameItems';
import RoutePaths from '../definitions/RoutePaths';
import '../styles/components/home.scss';

const Home: React.FC = () => {
  return (
    <div className='home'>
      <h2>Choose a game</h2>
      <div className='home-selector'>
        <Link to={RoutePaths.TIME_MACHINE}>
          <GameOption
            imageStatic={TimeMachine.IMAGE_STATIC}
            imageAnimated={TimeMachine.IMAGE_ANIMATED}
            gameName={TimeMachine.NAME}
          />
        </Link>
        <div className='division' />
        <Link to={RoutePaths.TIC_TAC_TOE}>
          <GameOption
            imageStatic={TicTacToe.IMAGE_STATIC}
            imageAnimated={TicTacToe.IMAGE_ANIMATED}
            gameName={TicTacToe.NAME}
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
