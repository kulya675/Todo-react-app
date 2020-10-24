import React from "react";

import Task from "../Task";
import "./TaskList.scss";

const TaskList = ({ todos, onDelete }) => {
  const elements = todos.map((item) => {
    const { id, ...taskProps } = item;
    return <Task key={id} {...taskProps} onDelete={() => onDelete(id)} />;
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
