import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import TaskEditForm from '../TaskEditForm';
import './Task.scss';

class Task extends Component {
  static defaultProps = {
    done: false,
    editing: false,
    createDate: new Date(),
  };

  static propTypes = {
    task: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    createDate: PropTypes.instanceOf(Date),
    done: PropTypes.bool,
    editing: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
    onEditTask: PropTypes.func.isRequired,
    onToggleDone: PropTypes.func.isRequired,
    onToggleEditing: PropTypes.func.isRequired,
  };

  state = {};

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

  render() {
    const { task, createDate, done, editing, id, onDelete, onToggleEditing, onEditTask } = this.props;
    const { checked } = this.state;

    let taskStyleClass = 'active';

    if (done) taskStyleClass = 'completed';
    if (editing) taskStyleClass = 'editing';
    return (
      <li className={taskStyleClass}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={this.onToggleComplete} checked={checked} />
          <label>
            <span className="description">{task}</span>
            <span className="created">{formatDistanceToNow(createDate)}</span>
          </label>
          <button type="button" className="icon icon-edit" onClick={onToggleEditing} label="edit" />
          <button type="button" className="icon icon-destroy" onClick={() => onDelete(id)} label="delete" />
        </div>
        {editing ? <TaskEditForm {...this.props} onEditTask={onEditTask} /> : null}
      </li>
    );
  }
}

export default Task;
