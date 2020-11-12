import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TaskEditForm.scss';

class TaskEditForm extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    task: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onEditTask: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { task, onEdit, id } = this.props;
    onEdit(id);
    this.setState({ text: task });
  }

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
