import React, { Component } from 'react';
import './WelcomeMsg.css';

class WelcomeMsg extends Component {
  render(props) {
    return (
      <div className="f2 tc">
        <h1>Welcome Mr. Naik </h1>
        <p>We are starting with React!</p>
        <p>{this.props.greetings}</p>
      </div>
    );
  }
}

export default WelcomeMsg;
