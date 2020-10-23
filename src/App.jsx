// @flow
import * as React from 'react';
import './App.scss';
import styled from 'styled-components';
import Home from './pages/Home';
import Player from './pages/Player';
import Like from './pages/Like';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ApiService from './services/youtubeApiService';

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
  const [event, setEvent] = useState('init');

  useEffect(() => {
    ApiService._event$.asObservable().subscribe((d) => {
      setEvent(d);
    });
  }, []);
  if (event === 'init') {
    return (
      <div className="container">
        <h1>讀取中，請稍候......</h1>
      </div>
    );
  } else {
    return (
      <>
        <Router>
          <Header>
            <nav>
              <ul>
                <li>
                  <Link to="/">首頁</Link>
                </li>
                <li>
                  <Link to="/like">收藏</Link>
                </li>
              </ul>
            </nav>
          </Header>
          <div className="body">
            <Switch>
              <Route path="/player/:id">
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
}

export default App;
