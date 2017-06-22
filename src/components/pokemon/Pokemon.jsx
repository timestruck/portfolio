// Dependencies
import React from 'react';

// Styles
import './Pokemon.scss';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'World',
    };
  }

  componentDidMount() {
    console.log('mounted');
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="pokemonWrapper">
        <h1>Project under construction</h1>
      </div>
    );
  }
}

export default Pokemon;
