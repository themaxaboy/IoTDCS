import React, { Component } from 'react';
import axios from 'axios';

class Tbody extends Component {
  state = {
    data: []
  }

  onUpdate = () => {
    fetch('/IoT')
    .then((response) => response.json())
    .then((data) => this.setState({ data }))
  }

  componentDidMount() {
    this.onUpdate()
  }

  async handleClick(id,state) {
    let getURL = '/IoT/' + id + '/state/' + !state
    await axios.get(getURL)
    this.onUpdate()
  }

  render() {
    return (
      <tbody>
        {
          this.state.data.map((data,key) =>
            <tr key={key}>
              <td>
                <h4 className="ui image header">
                  <img src={data.img} alt="" className="ui mini rounded image" />
                  <div className="content">{data.name}
                    <div className="sub header">{data.description}</div>
                  </div>
                </h4></td>
              <td>
              <label className={data.state ? 'ui blue label':'ui grey label'}>
              {data.state + ''}
              </label>
              </td>
              <td>{data.value}</td>
              <td>
              <button id={key} onClick={(e) => this.handleClick(key,data.state)} className={data.state ? 'ui toggle button':'ui toggle button active'}>
              {data.state ? 'Close':'Open'}
              </button>
              </td>
            </tr>
          )
        }
      </tbody>
    );
  }
}

export default Tbody;