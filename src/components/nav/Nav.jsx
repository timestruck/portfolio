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
          <Link to="/" className="navLink">Projects</Link>
          <Link to="/about" className="navLink">About</Link>
        </div>
      </div>
      <div className="borderBottom" />
      <div className="borderLeft" />
      <div className="borderRight" />
    </nav>
  );
}

export default Nav;
