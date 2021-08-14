import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import RoutePaths from '../definitions/RoutePaths';
import Home from '../containers/Home';
import TimeMachine from '../containers/TimeMachine';
import TicTacToe from '../containers/TicTacToe';
import NotFound from '../containers/NotFound';
import Navbar from '../components/Navbar/Navbar';

const App: React.FC = () => (
  <Router>
    <Route exact path='/'>
      <Redirect to='/home' />
    </Route>
    <Switch>
      <Navbar />
      <Route exact path={RoutePaths.HOME} component={Home} />
      <Route exact path={RoutePaths.TIME_MACHINE} component={TimeMachine} />
      <Route exact path={RoutePaths.TIC_TAC_TOE} component={TicTacToe} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default App;
