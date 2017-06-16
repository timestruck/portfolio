// Dependencies
import React from 'react';
import {
  Link,
} from 'react-router-dom';

// Styles
import './Content.scss';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      input: 'World',
    };
  }
  handleInputChange(e) {
    this.setState({ input: e.target.value });
  }
  render() {
    return (
      <div className="content">
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleInputChange}
        />
        <span>Hello {this.state.input}</span>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Content;
