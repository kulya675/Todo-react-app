import React from "react";

import Task from "../Task";
import "./TaskList.scss";

const TaskList = ({
  todos,
  onDelete,
  onToggleDone,
  onToggleEditing,
  onEditTask,
}) => {
  const elements = todos.map((item) => {
    const { id, visible } = item;
    if (visible) {
      return (
        <Task
          key={id}
          {...item}
          onDelete={() => onDelete(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleEditing={() => onToggleEditing(id)}
          onEditTask={onEditTask}
        />
      );
    }
    return null;
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
