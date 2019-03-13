'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'first-app',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'First App'
    ),
    _react2.default.createElement(NameForm, null)
  );
};

var TextBox = _react2.default.createClass({
  displayName: 'TextBox',

  render: function render() {
    return _react2.default.createElement('input', { className: 'form-control',
      name: this.props.name,
      type: 'text',
      value: this.props.value,
      onChange: this.props.onChange, style: { padding: '10px', margin: '5px' } });
  }
});

var NameForm = _react2.default.createClass({
  displayName: 'NameForm',

  getInitialState: function getInitialState() {
    return { form: { firstName: 'Ammy', lastName: 'Kaur' } };
  },
  onChange: function onChange(event) {
    this.state.form[event.target.name] = event.target.value;
    this.setState({ form: this.state.form });
  },
  onSubmit: function onSubmit(event) {
    event.preventDefault();

    alert('Form submitted. firstName: ' + this.state.form.firstName + ', lastName: ' + this.state.form.lastName);
  },
  render: function render() {
    var self = this;
    return _react2.default.createElement(
      'form',
      { onSubmit: this.onSubmit },
      _react2.default.createElement(TextBox, { name: 'firstName',
        value: this.state.form.firstName,
        onChange: this.onChange }),
      _react2.default.createElement(TextBox, { name: 'lastName',
        value: this.state.form.lastName,
        onChange: this.onChange }),
      _react2.default.createElement(
        'button',
        { className: 'btn btn-success',
          type: 'submit', style: { padding: '10px', margin: '5px' } },
        'Submit'
      )
    );
  }
});