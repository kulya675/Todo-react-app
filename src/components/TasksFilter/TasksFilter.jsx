import React, { Component } from "react";

import "./TasksFilter.scss";

class TasksFilter extends Component {
  state = {
    filter: "All",
  };

  toggleFilter = (e) => {
    const filterValue = e.target.innerText;

    this.props.toggleShowingTasks(filterValue);
    this.setState({
      filter: filterValue,
    });
  };

  render() {
    const buttonsValue = ["All", "Active", "Completed"];
    const filterItems = buttonsValue.map((elem, index) => {
      return (
        <li key={index}>
          <button
            className={this.state.filter === elem ? "selected" : null}
            onClick={this.toggleFilter}
          >
            {elem}
          </button>
        </li>
      );
    });
    return <ul className="filters">{filterItems}</ul>;
  }
}

export default TasksFilter;
