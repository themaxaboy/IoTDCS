import React, { Component } from 'react';
import Header from './Header'
import Table from './Table'
import BtnAdd from './BtnAdd'
import BtnDel from './BtnDel'

class App extends Component {

  render() {
    return (
      <div className="ui grid">
        <div className="sixteen wide column">
          <center>

            <Header topic="IoT Data Centralize Server"/>
            <Table/>
            <BtnAdd/>
            <BtnDel/>

          </center>
        </div>
      </div>
    );
  }
}

export default App;
