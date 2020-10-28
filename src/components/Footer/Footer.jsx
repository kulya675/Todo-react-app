import React from "react";

import TasksFilter from "../TasksFilter";
import "./Footer.scss";

const Footer = ({ tasksLeft, toggleShowingTasks, onDeleteCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksLeft} items left</span>
      <TasksFilter toggleShowingTasks={(value) => toggleShowingTasks(value)} />
      <button className="clear-completed" onClick={onDeleteCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
