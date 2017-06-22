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
          <Link to="/" className="navLink">Work</Link>
          <Link to="/about" className="navLink">About</Link>
          <a href="https://github.com/timestruck" target="_blank" rel="noopener noreferrer" className="navLink">
            <i className="fa fa-github" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
