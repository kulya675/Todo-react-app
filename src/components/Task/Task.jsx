import React from "react";
import { formatDistanceToNow } from "date-fns";

import "./Task.scss";

const Task = ({ todos }) => {
  const tasks = todos.map((item, index) => {
    const { task, state = null, createDate } = item;
    return (
      <li key={index} className={state}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">{task}</span>
            <span className="created">{formatDistanceToNow(createDate)}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
        {state === "editing" ? (
          <input type="text" className="edit" defaultValue={task} />
        ) : null}
      </li>
    );
  });
  return tasks;
};

export default Task;
