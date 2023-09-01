import React from "react";
import './footer.css';

import TaskFilter from "./TasksFilter";

const Footer = (props) => {

  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
        <ul className="filters">
          <TaskFilter changeFilter={ props.changeFilter }/>
        </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
