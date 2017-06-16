// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './Nav.scss';

function Nav() {
  return (
    <nav className="navWrapper">
      <div className="navInner">
        <Link to="/" className="navTitle">Alice Xia</Link>
        <div className="navRight">
          <Link to="/projects" className="navLink">Projects</Link>
          <a href="https://github.com/timestruck" target="_blank" rel="noopener noreferrer" className="navLink">
            <i className="fa fa-github" />
          </a>
        </div>
      </div>
      <div className="borderBottom" />
      <div className="borderLeft" />
      <div className="borderRight" />
    </nav>
  );
}

export default Nav;
