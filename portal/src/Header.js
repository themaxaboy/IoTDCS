import React, { Component } from 'react';

class Header extends Component {
  render() {
    let {topic} = this.props
    return (
      <div>
        <br/>
        <center><h1>{topic}</h1></center>
      </div>
    );
  }
}

export default Header;