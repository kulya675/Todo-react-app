import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NewTaskForm.scss';

class NewTaskForm extends Component {
  state = { text: '' };

  static propTypes = {
    onItemAdded: PropTypes.func.isRequired,
  };

  onTextChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  onSubmit = (event) => {
    const { onItemAdded } = this.props;
    const { text } = this.state;

    event.preventDefault();

    if (!text) return;

    onItemAdded(text);
    this.setState({
      text: '',
    });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" onChange={this.onTextChange} value={text} />
      </form>
    );
  }
}

export default NewTaskForm;
