/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import Timer from '../Timer';
import TaskEditForm from '../TaskEditForm';
import './Task.scss';

class Task extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    checked: this.props.done,
  };

  static defaultProps = {
    done: false,
    editing: false,
    createDate: new Date(),
  };

  static propTypes = {
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
    onToggleDone: PropTypes.func.isRequired,
    onToggleEditing: PropTypes.func.isRequired,
    onPlayTimer: PropTypes.func.isRequired,
    onPauseTimer: PropTypes.func.isRequired,
  };

  onToggleComplete = () => {
    const { onToggleDone } = this.props;
    const { checked } = this.state;
    onToggleDone();
    this.setState(() => {
      return {
        checked: !checked,
      };
    });
  };

  onTimerDone = () => {
    const { checked } = this.state;
    this.setState(() => {
      return { checked: !checked };
    });
  };

  render() {
    const {
      task,
      timerCounter,
      createDate,
      done,
      editing,
      id,
      onDelete,
      onToggleEditing,
      onEditTask,
      onEdit,
      onPlayTimer,
      onPauseTimer,
    } = this.props;
    const { checked } = this.state;

    let taskStyleClass = 'active';

    const timerElem = timerCounter ? (
      <Timer
        time={timerCounter}
        id={id}
        onPlayTimer={onPlayTimer}
        onPauseTimer={onPauseTimer}
        onTimerDone={this.onTimerDone}
      />
    ) : null;

    if (done) taskStyleClass = 'completed';
    if (editing) taskStyleClass = 'editing';

    return (
      <li className={taskStyleClass}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={this.onToggleComplete} checked={checked} />
          <label onClick={this.onToggleComplete}>
            <span className="description">{task}</span>
            <span className="created">{formatDistanceToNow(createDate)}</span>
          </label>
          <button type="button" className="icon icon-edit" onClick={onToggleEditing} label="edit" />
          <button type="button" className="icon icon-destroy" onClick={() => onDelete(id)} label="delete" />
          {timerElem}
        </div>
        {editing ? <TaskEditForm {...this.props} onEditTask={onEditTask} onEdit={onEdit} /> : null}
      </li>
    );
  }
}

export default Task;
