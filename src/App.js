// @flow
import * as React from 'react';
import './App.scss';
import styled from 'styled-components';
import Home from './pages/Home';
import Player from './pages/Player';
import Like from './pages/Like';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Header = styled.header`
  max-width: 1140px;
  margin: auto;
  min-height: 50px;
`;

const Footer = styled.footer`
  min-height: 50px;
  margin: auto;
`;

export function App(): React.Node {
  return (
    <>
      <Router>
        <Header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/player">Player</Link>
              </li>
              <li>
                <Link to="/like">Users</Link>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="body">
          <Switch>
            <Route path="/player">
              <Player />
            </Route>
            <Route path="/like">
              <Like />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer>sample expired by ...</Footer>
        </div>
      </Router>
    </>
  );
}

export default App;
