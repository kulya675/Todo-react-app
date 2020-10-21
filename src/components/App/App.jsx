import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import TaskList from "../TaskList";

import "./App.scss";

const App = () => {
  const todos = [
    { task: "Completed task", state: "completed", createDate: new Date() },
    { task: "Editing task", state: "editing", createDate: new Date() },
    { task: "Active task", state: "active", createDate: new Date() },
  ];
  return (
    <section className="todoapp">
      <Header />
      <section className="main">
        <TaskList todos={todos} />
        <Footer />
      </section>
    </section>
  );
};

export default App;
