import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../Header';
import Footer from '../Footer';
import TaskList from '../TaskList';

import './App.scss';

class App extends Component {
  currentId = 1;

  state = {
    todos: [
      this.createTodoTask('Completed Task'),
      this.createTodoTask('Editing task'),
      this.createTodoTask('Active task'),
    ],
    nowShowingTasks: 'All',
  };

  addItem = (text) => {
    this.setState(({ todos }) => {
      const newTask = this.createTodoTask(text);
      const newArr = [...todos, newTask];

      return {
        todos: newArr,
      };
    });
  };

  delteItem = (id) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((el) => el.id === id);

      const newArr = [...todos.slice(0, idx), ...todos.slice(idx + 1)];
      return {
        todos: newArr,
      };
    });
  };

  onDeleteCompleted = () => {
    const { todos } = this.state;
    todos.forEach(({ done, id }) => {
      if (done) this.delteItem(id);
    });
  };

  toggleProperty = (arr, id, propName, value) => {
    const idx = arr.findIndex((el) => el.id === id);

    const oldTask = arr[idx];
    let newTask;

    if (propName !== 'task') {
      newTask = { ...oldTask, [propName]: !oldTask[propName] };
    } else {
      newTask = { ...oldTask, task: value, editing: false };
    }

    return [...arr.slice(0, idx), newTask, ...arr.slice(idx + 1)];
  };

  onToggleDone = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleProperty(todos, id, 'done'),
      };
    });
  };

  onToggleEditing = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleProperty(todos, id, 'editing'),
      };
    });
  };

  onEditTask = (id, text) => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleProperty(todos, id, 'task', text),
      };
    });
  };

  toggleShowingTasks = (filter) => {
    this.setState(() => {
      return {
        nowShowingTasks: filter,
      };
    });
  };

  createTodoTask(task) {
    return {
      task,
      visible: true,
      id: Math.random() * 100,
    };
  }

  render() {
    const { todos, nowShowingTasks } = this.state;

    const tasksLeft = todos.filter((task) => !task.done).length;

    return (
      <section className="todoapp">
        <Header onItemAdded={this.addItem} />
        <section className="main">
          <TaskList
            todos={todos}
            filterState={nowShowingTasks}
            onDelete={this.delteItem}
            onToggleDone={this.onToggleDone}
            onToggleEditing={this.onToggleEditing}
            onEditTask={this.onEditTask}
          />
          .
          <Footer
            tasksLeft={tasksLeft}
            toggleShowingTasks={this.toggleShowingTasks}
            onDeleteCompleted={() => this.onDeleteCompleted()}
          />
        </section>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
