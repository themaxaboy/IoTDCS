import React, { Component } from 'react';

class Header extends Component {
  render() {
    let {topic} = this.props
    return (
      <div>
            <br />
            <h1>{topic}</h1>
      </div>
    );
  }
}

export default Header;