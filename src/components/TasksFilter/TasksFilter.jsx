import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TasksFilter.scss';

class TasksFilter extends Component {
  state = {
    filter: 'All',
  };

  static propTypes = {
    toggleShowingTasks: PropTypes.func.isRequired,
  };

  toggleFilter = (e) => {
    const { toggleShowingTasks } = this.props;
    const filterValue = e.target.innerText;

    toggleShowingTasks(filterValue);
    this.setState({
      filter: filterValue,
    });
  };

  render() {
    const { filter } = this.state;

    const buttonsValue = ['All', 'Active', 'Completed'];
    const filterItems = buttonsValue.map((elem) => {
      return (
        <li key={Math.random() * 1000}>
          <button type="button" className={filter === elem ? 'selected' : null} onClick={this.toggleFilter}>
            {elem}
          </button>
        </li>
      );
    });
    return <ul className="filters">{filterItems}</ul>;
  }
}

export default TasksFilter;
