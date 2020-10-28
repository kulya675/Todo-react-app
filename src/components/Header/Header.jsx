import React from "react";

import NewTaskForm from "../NewTaskForm";
import "./Header.scss";

const Header = ({ onItemAdded }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm onItemAdded={onItemAdded} />
    </header>
  );
};

export default Header;
