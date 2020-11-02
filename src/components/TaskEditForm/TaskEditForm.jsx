import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TaskEditForm.scss';

class TaskEditForm extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    text: this.props.task,
  };

  static propTypes = {
    task: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onEditTask: PropTypes.func.isRequired,
  };

  onTextChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  onSubmit = (event) => {
    const { onEditTask, id } = this.props;
    const { text } = this.state;

    event.preventDefault();
    onEditTask(id, text);
  };

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" className="edit" value={text} onChange={this.onTextChange} />
      </form>
    );
  }
}

export default TaskEditForm;
