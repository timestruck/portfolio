// Dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Components
import Nav from '../nav/Nav.jsx';
import About from '../about/About.jsx';
import Projects from '../projects/Projects.jsx';
import Pokemon from '../pokemon/Pokemon.jsx';
import Subway from '../subway/Subway.jsx';

// Styles
import './App.scss';

function App() {
  return (
    <Router>
      <div className="site-wrapper">
        <Nav />
        <Route exact path="/" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/pokemon" component={Pokemon} />
        <Route path="/subway" component={Subway} />
      </div>
    </Router>
  );
}

export default App;
