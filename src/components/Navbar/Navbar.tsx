import React, { useState, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { Home, TimeMachine, TicTacToe } from './MenuItems';
import '../../styles/components/navbar.scss';

const Navbar: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = useCallback(() => {
    setClicked((current) => !current);
  }, [setClicked]);

  return (
    <nav className='navbar'>
      <Link to={Home.URL}>
        <h1 className='navbar-logo'>
          <i className='fab fa-accusoft' />
          Week 7
        </h1>
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={clicked ? 'navbar-menu show' : 'navbar-menu'}>
        <li>
          <NavLink to={Home.URL} className={Home.CLASS_NAME} activeClassName='navbar-active'>
            {Home.TITLE}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={TimeMachine.URL}
            className={TimeMachine.CLASS_NAME}
            activeClassName='navbar-active'
          >
            {TimeMachine.TITLE}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={TicTacToe.URL}
            className={TicTacToe.CLASS_NAME}
            activeClassName='navbar-active'
          >
            {TicTacToe.TITLE}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default React.memo(Navbar);
