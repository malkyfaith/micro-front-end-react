import React from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      apiData: null
    };
  }

  componentDidMount() {
    console.log('secomnd app - component mount')
    window.addEventListener('displayName', (event) => {
      console.log('second application', event);
      console.log('second application', event.detail);
      this.setState({ name: event.detail });
    }, false);
  }

  onClick = () => {
    console.log('clicked');
    let that = this;
    fetch(`http://www.mocky.io/v2/5bd2b2c13400006a00cfde18`)
      .then(result => {
        return result.json()
      }).then(function (jsonData) {
        console.log(jsonData);
        //handle json data processing here
        that.setState({ apiData: jsonData});
      });
  }

  render() {
    return (<second-app>
      <p>Second Application ** <em style={{ 'font-size': 'x-small' }}>Micro front end - running @9094</em></p>
      <div>
        Name of the person:
        <strong>**{this.state.name}**</strong>
        <br />
        <p>To bring some back-end</p>
        <button onClick={this.onClick}>Click Here</button>
        {this.state.apiData && <p>The data from the server: {this.state.apiData}</p>}

      </div>
    </second-app>)
  }
}