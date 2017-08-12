import React, { Component } from 'react';

class Tbody extends Component {
  handleClick(id,state) {
    console.log('this is:', id);
    console.log('this is:' + state);
    let getURL = '/IoT/' + id + '/state/' + !state
  }

  render() {
    let {rowData} = this.props
    return (
      <tbody>
        {
          rowData.map((data,key) =>
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