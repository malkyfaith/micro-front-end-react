import React from 'react';

export default class App extends React.Component {

  render() {
    return (
      <div style={{ width: '100%', 'background-color': 'grey', color: 'white', 'text-align': 'center' }}>
        <footer>
          <p>Footer</p>
          <em style={{ 'font-size': 'x-small' }}>Footer - micro front end - running @9092</em>
        </footer>
      </div>
    )
  }
}

