import React, { Component } from "react";

import "./NewTaskForm.scss";

class NewTaskForm extends Component {
  state = { text: "" };

  onTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onTextChange}
          value={this.state.text}
          autoFocus
        />
      </form>
    );
  }
}

export default NewTaskForm;
