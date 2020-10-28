import React, { Component } from "react";
import { formatDistanceToNow } from "date-fns";

import TaskEditForm from "../TaskEditForm/";
import "./Task.scss";

class Task extends Component {
  state = {
    checked: this.props.done,
  };

  onToggleComplete = () => {
    this.props.onToggleDone();
    this.setState(() => {
      return {
        checked: !this.state.checked,
      };
    });
  };

  render() {
    const {
      task,
      createDate,
      done,
      editing,
      id,
      onDelete,
      onToggleEditing,
      onEditTask,
    } = this.props;

    let taskStyleClass = "active";

    if (done) taskStyleClass = "completed";
    if (editing) taskStyleClass = "editing";

    return (
      <li className={taskStyleClass}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={this.onToggleComplete}
            checked={this.state.checked}
          />
          <label>
            <span className="description">{task}</span>
            <span className="created">{formatDistanceToNow(createDate)}</span>
          </label>
          <button className="icon icon-edit" onClick={onToggleEditing}></button>
          <button
            className="icon icon-destroy"
            onClick={() => onDelete(id)}
          ></button>
        </div>
        {editing ? (
          <TaskEditForm {...this.props} onEditTask={onEditTask} />
        ) : null}
      </li>
    );
  }
}

export default Task;
