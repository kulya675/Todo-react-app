import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NewTaskForm.scss';

class NewTaskForm extends Component {
  state = {
    text: '',
    min: '',
    sec: '',
  };

  static propTypes = {
    onItemAdded: PropTypes.func.isRequired,
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  timeToMilliseconds = () => {
    const { min, sec } = this.state;
    console.log(typeof min, typeof sec);
    const timeCount = (min * 60 + sec * 1) * 1000;

    return timeCount;
  };

  onSubmit = (event) => {
    const { onItemAdded } = this.props;
    const { text } = this.state;

    event.preventDefault();

    if (!text) return;

    onItemAdded(text, this.timeToMilliseconds());
    this.setState({
      text: '',
      min: '',
      sec: '',
    });
  };

  render() {
    const { text, min, sec } = this.state;
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          name="text"
          placeholder="What needs to be done?"
          onChange={this.onInputChange}
          value={text}
        />
        <input
          className="new-todo-form__timer"
          type="number"
          name="min"
          max={60}
          placeholder="Min"
          onChange={this.onInputChange}
          value={min}
        />
        <input
          className="new-todo-form__timer"
          type="number"
          name="sec"
          max={60}
          placeholder="Sec"
          onChange={this.onInputChange}
          value={sec}
        />
        <input className="submit" type="submit" />
      </form>
    );
  }
}

export default NewTaskForm;
