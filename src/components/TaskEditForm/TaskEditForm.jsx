import React, { Component } from "react";

import "./TaskEditForm.scss";

class TaskEditForm extends Component {
  state = {
    text: this.props.task,
  };

  onTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onEditTask(this.props.id, this.state.text);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="edit"
          value={this.state.text}
          onChange={this.onTextChange}
          autoFocus
        />
      </form>
    );
  }
}

export default TaskEditForm;
