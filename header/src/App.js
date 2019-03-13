import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', 'background-color': 'grey', color: 'white', 'text-align': 'center' }}>
        <p>Header</p>
        <em style={{ 'font-size': 'x-small' }}>Header - micro front end - running @9091</em>
      </div>
    )
  }
}

