// Dependencies
import React from 'react';

// Styles
import './About.scss';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStatus: 'loading',
    };
  }

  componentDidMount() {
    document.getElementById('aboutWrapper').style.display = 'block';
    window.addEventListener('scroll', this.handleScroll);
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
  }

  handleScroll() {
    const topDistance = this.pageYOffset;
    const layers = Array.from(document.getElementsByClassName('layer'));
    for (let i = 0; i < layers.length; i++) {
      let depth = 0.10;
      if (i === 1) {
        depth = 0.10;
      } else if (i === 2) {
        depth = 0.60;
      } else if (i === 3) {
        depth = 0.9;
      } else if (i === 4) {
        depth = 1.0;
      }
      const movement = -(topDistance * depth);
      const translate3d = `translate3d(0, ${movement}px, 0)`;
      layers[i].style.transform = translate3d;
    }
  }

  render() {
    return (
      <header id="aboutWrapper">
        <div id="hero">
          <div className="layer-bg layer" datatype="parallax" />
          <div className="layer-1 layer" datatype="parallax" />
          <div className="layer-2 layer" datatype="parallax" />
          <div className="layer-3 layer" datatype="parallax" />
          <div className="layer-4 layer" datatype="parallax" />
          <div className="gradient" />
        </div>
        <div id="hero-mobile" />
        <div id="content">
          <div className="container">
            <h1>Hi there!</h1>
            <p>I'm Alice Xia, a full stack software engineer based in New York City.
              I love making things work and look pretty, and
              playing around with new technologies.
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default About;
