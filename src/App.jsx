// @flow
import * as React from 'react';
import './App.scss';
import Home from './pages/Home';
import Player from './pages/Player';
import Like from './pages/Like';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ApiService from './services/youtubeApiService';

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
        <Router basename="/utube-demo">
          <section className="header">
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
          </section>
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
          </div>
        </Router>
      </>
    );
  }
}

export default App;
