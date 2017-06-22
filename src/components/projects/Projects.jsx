// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './Projects.scss';

class Projects extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const right = document.getElementById('projectsRight');
    if (right) {
      const topDistance = this.pageYOffset;
      const movement = -(topDistance * 0.1);
      const translate3d = `translate3d(0, ${movement}px, 0)`;
      if (window.innerWidth > 860) {
        right.style.transform = translate3d;
      }
    }
  }

  render() {
    return (
      <div className="projectsWrapper">
        <div className="projectsRow">
          <div className="projectsLeft" id="projectsLeft">
            <a href="http://arts.columbia.edu" target="_blank" rel="noopener noreferrer" className="projectsItem columbia">
              <h5 className="projectsSubtitle">Columbia University</h5>
              <h2 className="projectsTitle">School of the Arts</h2>
              <h5 className="projectsRole">Front-end Developer</h5>
              <h4 className="projectsType">Website built with Drupal</h4>
              <h4 className="projectsView">View website</h4>
            </a>
            <Link to="/pokemon" className="projectsItem pokemon">
              <h5 className="projectsSubtitle">Personal Project</h5>
              <h2 className="projectsTitle">Guess That Pokemon</h2>
              <h5 className="projectsRole">Sole Developer</h5>
              <h4 className="projectsType">React Single Page Application</h4>
              <h4 className="projectsView">View project</h4>
            </Link>
            <a href="http://kongregate.com/games/zombifyTheGame/zombify" target="_blank" rel="noopener noreferrer" className="projectsItem zombify">
              <h5 className="projectsSubtitle">Game Development</h5>
              <h2 className="projectsTitle">Zombify</h2>
              <h5 className="projectsRole">Software Engineer</h5>
              <h4 className="projectsType">Flash game built in ActionScript</h4>
              <h4 className="projectsView">Play game online</h4>
            </a>
          </div>
          <div className="projectsRight" id="projectsRight">
            <a href="http://mcnultyfound.org" target="_blank" rel="noopener noreferrer" className="projectsItem mcnulty">
              <video className="projectsVideo" autoPlay playsinline loop muted poster="../../assets/mcnulty.jpg">
                <source src="http://mcnultyfound.org/videos/homepage.mp4" type="video/mp4" />
              </video>
              <div className="projectsVideoGradient" />
              <h5 className="projectsSubtitle">McNulty</h5>
              <h2 className="projectsTitle">McNulty Foundation & The Prize</h2>
              <h5 className="projectsRole">Sole Developer</h5>
              <h4 className="projectsType">Website built with Craft CMS</h4>
              <h4 className="projectsView">View website</h4>
            </a>
            <a href="http://gdiac.cis.cornell.edu/gallery/download.php?name=ersatz" target="_blank" rel="noopener noreferrer" className="projectsItem ersatz">
              <h5 className="projectsSubtitle">Game Development</h5>
              <h2 className="projectsTitle">Ersatz</h2>
              <h5 className="projectsRole">Software Engineer</h5>
              <h4 className="projectsType">Desktop game built in Java</h4>
              <h4 className="projectsView">Download Game</h4>
            </a>
            <a href="http://github.com/cloudflare/cfssl" target="_blank" rel="noopener noreferrer" className="projectsItem cloudflare">
              <h5 className="projectsSubtitle">Cloudflare</h5>
              <h2 className="projectsTitle">CFSSL</h2>
              <h5 className="projectsRole">Opensource Contributer</h5>
              <h4 className="projectsType">Opensource toolkit written in Go</h4>
              <h4 className="projectsView">View github repo</h4>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
