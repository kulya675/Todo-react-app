import React from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter';
import './Footer.scss';

const Footer = ({ tasksLeft, toggleShowingTasks, onDeleteCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksLeft} items left</span>
      <TasksFilter toggleShowingTasks={(value) => toggleShowingTasks(value)} />
      <button type="button" className="clear-completed" onClick={onDeleteCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  tasksLeft: PropTypes.number.isRequired,
  onDeleteCompleted: PropTypes.func.isRequired,
  toggleShowingTasks: PropTypes.func.isRequired,
};

export default Footer;
