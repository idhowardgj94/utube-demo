// @flow
import * as React from 'react';
import './App.scss';
import styled from 'styled-components';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Header = styled.header`
  max-width: 1140px;
  margin: auto;
  min-height: 50px;
  background-color: yellow;
`;

const Footer = styled.footer`
  min-height: 50px;
  margin: auto;
  background-color: yellow;
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
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="body">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
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

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
