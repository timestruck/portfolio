// Dependencies
import React from 'react';

// Styles
import './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'World',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    console.log('screel');
    const topDistance = this.pageYOffset;
    const layers = Array.from(document.getElementsByClassName('layer'));
    for (let i = 0; i < layers.length; i++) {
      let depth = 0.10;
      if (i === 1) {
        depth = 0.20;
      } else if (i === 2) {
        depth = 0.50;
      } else if (i === 3) {
        depth = 0.80;
      } else if (i === 4) {
        depth = 1.00;
      }
      const movement = -(topDistance * depth);
      const translate3d = `translate3d(0, ${movement}px, 0)`;
      layers[i].style.transform = translate3d;
    }
  }

  render() {
    return (
      <header>
        <div id="hero">
          <div className="layer-bg layer" datatype="parallax" />
          <div className="layer-1 layer" datatype="parallax" />
          <div className="layer-2 layer" datatype="parallax" />
          <div className="layer-3 layer" datatype="parallax" />
          <div className="layer-4 layer" datatype="parallax" />
        </div>
        <div id="hero-mobile" />
        <div id="content">
          <div className="container">
            <h1>Site under construction. Check back soon!</h1>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
