import React, { Component } from 'react';
import Header from './Header'
import Table from './Table'
import BtnAdd from './BtnAdd'
import BtnDel from './BtnDel'

class App extends Component {
  render() {
    let IoT = [
      {
        "id": 1,
        "img": "https://semantic-ui.com/images/avatar2/small/matthew.png",
        "name": "Light",
        "description": "Outside",
        "state": false,
        "value": "-"
      },
      {
        "id": 2,
        "img": "https://semantic-ui.com/images/avatar2/small/lindsay.png",
        "name": "Air",
        "description": "Bedroom",
        "state": false,
        "value": "25 C"
      },
      {
        "id": 3,
        "img": "https://semantic-ui.com/images/avatar2/small/mark.png",
        "name": "Water Pump",
        "description": "Outside",
        "state": false,
        "value": "500 Liter"
      }
    ]
    return (
      <div className="ui grid">
        <div className="sixteen wide column">
          <center>

            <Header topic="IoT Data Centralize Server"/>
            <Table allDevice={IoT}/>
            <BtnAdd/>
            <BtnDel/>

          </center>
        </div>
      </div>
    );
  }
}

export default App;
