import React, { Component } from 'react';
import Header from './Header'
import Table from './Table'
import BtnAdd from './BtnAdd'
import BtnDel from './BtnDel'

class App extends Component {

  render() {
    return (
      <div>
        <Header topic="IoT Data Centralize Server"/>
        <div className="ui grid centered">
          <div className="sixteen wide column">
              <center>
              <p></p>
              <p></p>
              <p></p>
              <Table/>
              <BtnAdd/>
              <BtnDel/>
              </center>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
