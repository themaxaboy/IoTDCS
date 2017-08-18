import React, { Component } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import { Header, Image, Table } from 'semantic-ui-react'

defaults.global.legend.display = false;

const defaultSetting = {
  fill: false,
  lineTension: 0.1,
  backgroundColor: 'rgba(75,192,192,0.4)',
  borderColor: 'rgba(75,192,192,1)',
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: 'rgba(75,192,192,1)',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
}

class Tbody extends Component {

  state = {
    data: [],
    dataChart: {
      labels: ['5s', '4s', '3s', '2s','1s'],
      datasets: [
        {
          ...defaultSetting,
          data: [25, 30, 28, 35, 36]
        }
      ]
    },
    focusId: 0,
  }

  onUpdate = () => {
    fetch('/IoT')
    .then((response) => response.json())
    .then((data) => this.setState({ data }))

    let datasets = this.state.dataChart.datasets

    this.setState((datasets) => {
      return {dataChart: datasets}
    })
  }

  componentDidMount() {
    setInterval(() => this.onUpdate(), 1000)
  }

  async handleClick(id,state) {
    let getURL = '/IoT/' + id + '/state/' + !state
    await axios.get(getURL)
  }

  showGraph(id) {
    this.setState.data.focusId(id)
  }

  render() {
    return (
      <Table.Body>
        {this.state.data.map((data, key) =>
          <Table.Row key={key}>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={data.img} shape='rounded' size='mini' />
                <Header.Content>
                  {data.name}
                  <Header.Subheader>{data.description}</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <label className={data.state ? 'ui blue label' : 'ui grey label'}>
                {data.state + ''}
              </label>
            </Table.Cell>
            <Table.Cell>
              {data.value}
            </Table.Cell>
            <Table.Cell>
              <button id={key} onClick={(e) => this.handleClick(key, data.state)} className={data.state ? 'ui toggle button' : 'ui toggle button active'}>
                {data.state ? 'Close' : 'Open'}
              </button>
            </Table.Cell>
          </Table.Row>
        )}
        {this.state.data[0] == undefined ? (
          <tr>
            <th colSpan={4}><br />
              <div className="ui active centered inline loader"></div>
              <p></p>
            </th>
          </tr>
        ) : (<div></div>)
        }
      </Table.Body>
    );
  }
}

export default Tbody;