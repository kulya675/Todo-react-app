import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../Header';
import Footer from '../Footer';
import TaskList from '../TaskList';

import './App.scss';

class App extends Component {
  state = {
    todos: [
      this.createTodoTask('Completed Task', 2000),
      this.createTodoTask('Editing task', 600000),
      this.createTodoTask('Active task'),
    ],
    nowShowingTasks: 'All',
  };

  addItem = (text, time) => {
    this.setState(({ todos }) => {
      const newTask = this.createTodoTask(text, time);
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

  changeProperty = (arr, id, propName, value) => {
    const newArr = arr.map((elem) => {
      const newElem = { ...elem };

      if (elem.id !== id) return elem;

      if (propName === 'done' || propName === 'editing') {
        newElem[propName] = !elem[propName];
      }

      if (propName === 'task') {
        newElem.task = value;
        newElem.editing = false;
      }

      if (propName === 'timerPlaying' && value === true && !elem.timerPlaying) {
        newElem.timerID = setInterval(() => {
          this.setState(({ todos }) => {
            return { todos: this.changeProperty(todos, id, 'timerCounter') };
          });
        }, 1000);
        newElem[propName] = value;
      }

      if (propName === 'timerPlaying' && value === false) {
        clearInterval(newElem.timerID);
      }

      if (propName === 'timerCounter') {
        if (newElem.timerCounter === 0) {
          this.setState(({ todos }) => {
            return { todos: this.changeProperty(todos, id, 'timerPlaying', false) };
          });
          this.setState(({ todos }) => {
            return { todos: this.changeProperty(todos, id, 'done') };
          });
          return newElem;
        }
        newElem.timerCounter = elem.timerCounter - 1000;
      }

      return newElem;
    });

    return newArr;
  };

  onToggleDone = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: this.changeProperty(todos, id, 'done'),
      };
    });
  };

  onToggleEditing = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: this.changeProperty(todos, id, 'editing'),
      };
    });
  };

  onEdit = (id) => {
    this.setState(({ todos }) => {
      const newArr = todos.map((elem) => {
        const newElem = { ...elem };
        if (newElem.id !== id) {
          newElem.editing = false;
        }
        return newElem;
      });

      return {
        todos: newArr,
      };
    });
  };

  onEditTask = (id, text) => {
    this.setState(({ todos }) => {
      return {
        todos: this.changeProperty(todos, id, 'task', text),
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

  onPlayTimer = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: this.changeProperty(todos, id, 'timerPlaying', true),
      };
    });
  };

  onPauseTimer = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: this.changeProperty(todos, id, 'timerPlaying', false),
      };
    });
  };

  createTodoTask(task, time = 0) {
    return {
      task,
      timerCounter: time,
      timerPlaying: false,
      timerID: null,
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
            onEdit={this.onEdit}
            onPlayTimer={this.onPlayTimer}
            onPauseTimer={this.onPauseTimer}
          />

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
