import React, { Component } from "react";

import Header from "../Header";
import Footer from "../Footer";
import TaskList from "../TaskList";

import "./App.scss";

class App extends Component {
  currentId = 1;

  state = {
    todos: [
      {
        task: "Completed task",
        taskState: "active",
        id: 1,
        createDate: new Date(),
      },
      {
        task: "Editing task",
        // taskState: "editing",
        id: 2,
        createDate: new Date(),
      },
      {
        task: "Active task",
        taskState: "active",
        id: 3,
        createDate: new Date(),
      },
    ],
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

  render() {
    const { todos } = this.state;
    return (
      <section className="todoapp">
        <Header />
        <section className="main">
          <TaskList todos={todos} onDelete={this.delteItem} />
          <Footer />
        </section>
      </section>
    );
  }
}

export default App;
