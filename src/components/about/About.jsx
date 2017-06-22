// Dependencies
import React from 'react';

// Styles
import './About.scss';

class About extends React.Component {
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
      <header>
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
              I love making things work and look pretty (especially websites!), and
              playing around with new technologies. Currently, those are React,
              Redux, Flow and Next.js.
            </p>
            <p>
              I graduated from Cornell University with a degree in Computer Science
              in 2016. When I'm not coding, you'll likely find me digging in at a
              local restaurant, on the Central Park bike path, attempting a new hip
              sport (trapeze is my current fav), or working on a random craft at
              home. Right now, I'm trying to perfect macarons. Tips anyone?
            </p>
            <p>
              And when I'm not doing those things, I'm either napping or binge
              watching some show or movie. The internet is an amazing place.
            </p>
            <p>
              Before you leave, feel free to check out my
              &nbsp;<a target="_blank" rel="noopener noreferrer" href="https://github.com/timestruck">github</a>
              &nbsp;or <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alice-xia-17904370">LinkedIn</a>
              &nbsp;for more about my professional life.
              As for non-career related stuff, I'm also on
              &nbsp;<a target="_blank" rel="noopener noreferrer" href="https://instagram.com/aliceinapalice">Instagram</a>,
              where my affinity for cute pets, good food, and adventure shine through. Enjoy!
            </p>
            <p>Send any questions or thoughts my way at
              &nbsp;<a href="mailto:alicexia20@gmail.com">alicexia20@gmail.com</a>!
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default About;
