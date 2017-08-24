import React, { Component } from "react";
import Header from "./Header";
import TableData from "./TableData";
import BtnAdd from "./BtnAdd";
import BtnDel from "./BtnDel";

class App extends Component {
  render() {
    return (
      <div>
        <Header topic="IoT Data Centralize Server" />
        <div className="ui grid centered">
          <div className="sixteen wide column">
            <center>
              <p />
              <p />
              <TableData />
              <BtnAdd />
              <BtnDel />
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
