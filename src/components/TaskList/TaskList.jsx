import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';
import './TaskList.scss';

const TaskList = ({ todos, filterState, onDelete, onToggleDone, onToggleEditing, onEditTask, onEdit }) => {
  const newArr = todos.filter((item) => {
    if (filterState === 'All') return true;
    if (filterState === 'Active') return !item.done;
    if (filterState === 'Completed') return item.done;
    return true;
  });
  const elements = newArr.map((item) => {
    const { id } = item;
    return (
      <Task
        key={id}
        {...item}
        onDelete={() => onDelete(id)}
        onToggleDone={() => {
          return onToggleDone(id);
        }}
        onToggleEditing={() => onToggleEditing(id)}
        onEditTask={onEditTask}
        onEdit={onEdit}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

TaskList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todos: PropTypes.array.isRequired,
  filterState: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onToggleEditing: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TaskList;
