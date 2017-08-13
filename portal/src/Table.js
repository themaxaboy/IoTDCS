import React, { Component } from 'react';
import Tbody from './Tbody'

class Table extends Component {
  render() {
    return (
      <table className="ui very basic collapsing celled table unstackable">
        <thead>
          <tr>
            <th>IoT Name</th>
            <th>State</th>
            <th>Value</th>
            <th>Controller</th>
          </tr>
        </thead>

        <Tbody/>

      </table>
    );
  }
}

export default Table;