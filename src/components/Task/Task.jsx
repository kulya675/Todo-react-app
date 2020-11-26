/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import Timer from '../Timer';
import TaskEditForm from '../TaskEditForm';
import './Task.scss';

const Task = ({
  task,
  timerCounter,
  createDate,
  done,
  editing,
  id,
  onDelete,
  onToggleEditing,
  onToggleDone,
  onEditTask,
  onEdit,
  onPlayTimer,
  onPauseTimer,
}) => {
  const onToggleComplete = () => {
    onToggleDone();
  };

  let taskStyleClass = 'active';

  const timerElem = timerCounter ? (
    <Timer time={timerCounter} id={id} onPlayTimer={onPlayTimer} onPauseTimer={onPauseTimer} />
  ) : null;

  if (done) taskStyleClass = 'completed';
  if (editing) taskStyleClass = 'editing';

  return (
    <li className={taskStyleClass}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={onToggleComplete} checked={done} />
        <label onClick={onToggleComplete}>
          <span className="description">{task}</span>
          <span className="created">{formatDistanceToNow(createDate)}</span>
        </label>
        <button type="button" className="icon icon-edit" onClick={onToggleEditing} label="edit" />
        <button type="button" className="icon icon-destroy" onClick={() => onDelete(id)} label="delete" />
        {timerElem}
      </div>
      {editing ? <TaskEditForm task={task} id={id} onEditTask={onEditTask} onEdit={onEdit} /> : null}
    </li>
  );
};

Task.defaultProps = {
  done: false,
  editing: false,
  createDate: new Date(),
};

Task.propTypes = {
  task: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  timerCounter: PropTypes.number.isRequired,
  createDate: PropTypes.instanceOf(Date),
  done: PropTypes.bool,
  editing: PropTypes.bool,
  onDelete: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onTimerDone: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onToggleEditing: PropTypes.func.isRequired,
  onPlayTimer: PropTypes.func.isRequired,
  onPauseTimer: PropTypes.func.isRequired,
};

export default Task;
