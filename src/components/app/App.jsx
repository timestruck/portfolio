// Dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Components
import Nav from '../nav/Nav.jsx';
import Header from '../header/Header.jsx';
import Projects from '../projects/Projects.jsx';

// Styles
import './App.scss';

function App() {
  return (
    <Router>
      <div className="site-wrapper">
        <Nav />
        <Route exact path="/" component={Header} />
        <Route path="/about" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
