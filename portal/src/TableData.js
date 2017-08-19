import React, { Component } from 'react';
import Tbody from './Tbody'
import { Header, Table } from 'semantic-ui-react'

class TableData extends Component {
  render() {
    return (
      <Table basic='very' celled collapsing unstackable='true'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>IoT Name</Table.HeaderCell>
            <Table.HeaderCell>State</Table.HeaderCell>
            <Table.HeaderCell>Value</Table.HeaderCell>
            <Table.HeaderCell>Controller</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Tbody/>
      </Table>
    );
  }
}

export default TableData;