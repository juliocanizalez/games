import React from 'react';

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import '../styles/components/not-found.scss';

const NotFound: React.FC = () => (
  <div className='not-found'>
    <Player
      autoplay
      loop
      style={{ width: '400px', height: '400px' }}
      src='https://assets10.lottiefiles.com/packages/lf20_ghfpce1h.json'
    >
      <Controls visible={false} />
    </Player>
  </div>
);

export default NotFound;
