import React from 'react';

export default class App extends React.Component {

  // componentDidMount() {
  //   console.log('first app - component mount')
  //   window.addEventListener('displayName', (event) => {
  //     console.log('first application', event);
  //     console.log('first application', event.detail);
  //   }, false);
  // }

  render() {
    return (
      <first-app>
        <p>First Application ** <em style={{ 'font-size': 'x-small' }}>Micro front end - running @9093</em></p>
        <NameForm />
        <p>*** It can communicate with Second Application - just enter name</p>
      </first-app>
    )
  }
}


var TextBox = React.createClass({
  render: function () {
    return (
      <input className='form-control'
        name={this.props.name}
        type='text'
        value={this.props.value}
        onChange={this.props.onChange} style={{ padding: '10px', margin: '5px' }} />
    );
  }
});

var NameForm = React.createClass({
  getInitialState: function () {
    return { form: { firstName: 'Malkeet', lastName: 'Singh' } }
  },
  onChange: function (event) {
    this.state.form[event.target.name] = event.target.value;
    this.setState({ form: this.state.form });
  },
  onSubmit: function (event) {
    event.preventDefault();

    console.log('Form submitted. firstName: ' +
      this.state.form.firstName +
      ', lastName: ' +
      this.state.form.lastName);

    const myEvent = new CustomEvent('displayName', {
      detail: this.state.form.firstName + " : " +
        this.state.form.lastName
    });
    window.dispatchEvent(myEvent);

  },
  render: function () {
    var self = this;
    return (
      <form onSubmit={this.onSubmit}>
        <TextBox name='firstName'
          value={this.state.form.firstName}
          onChange={this.onChange} />
        <TextBox name='lastName'
          value={this.state.form.lastName}
          onChange={this.onChange} />
        <button className='btn btn-success'
          type='submit' style={{ padding: '10px', margin: '5px' }}>Submit</button>
      </form>
    );
  }
});
