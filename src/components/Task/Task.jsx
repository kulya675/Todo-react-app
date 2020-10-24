import React, { Component } from "react";
import { formatDistanceToNow } from "date-fns";

import "./Task.scss";

class Task extends Component {
  state = {
    done: false,
  };

  onDoneClick = () => {
    this.setState(({ done }) => ({
      done: !done,
    }));
  };

  render() {
    const { task, taskState, createDate, id, onDelete } = this.props;
    const { done } = this.state;

    let taskClass = taskState;

    if (done) taskClass = "completed";

    return (
      <li className={taskClass}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={this.onDoneClick.bind(this)}
          />
          <label>
            <span className="description">{task}</span>
            <span className="created">{formatDistanceToNow(createDate)}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button
            className="icon icon-destroy"
            onClick={() => onDelete(id)}
          ></button>
        </div>
        {taskState === "editing" ? (
          <input type="text" className="edit" defaultValue={task} />
        ) : null}
      </li>
    );
  }
}

export default Task;
