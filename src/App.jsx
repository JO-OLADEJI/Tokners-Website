import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Team from './components/Team/Team.jsx';
import Tokenomics from './components/Tokenomics/Tokenomics.jsx';
import Connect from './components/Connect/Connect.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/our-team">
            <Team />
          </Route>
          <Route path="/tokenomics">
            <Tokenomics />
          </Route>
          <Route path="/connect-wallet">
            <Connect />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
