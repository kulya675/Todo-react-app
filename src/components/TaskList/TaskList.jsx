import React from "react";

import Task from "../Task";
import "./TaskList.scss";

const TaskList = ({ todos }) => {
  return (
    <ul className="todo-list">
      <Task todos={todos} />
    </ul>
  );
};

export default TaskList;
