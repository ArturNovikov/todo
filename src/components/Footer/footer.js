import React, { Component } from "react";
import './footer.css';

import TaskFilter from './TasksFilter';

export default class Footer extends Component {

  render() {
    return (
      <footer className="footer">
        <span className="todo-count">{this.props.incompleteItems} items left</span>
          <ul className="filters">
            <TaskFilter changeFilter={ this.props.changeFilter }/>
          </ul>
        <button
          className='clear-completed'
          onClick={ this.props.clearCompleted }
        >Clear completed</button>
      </footer>
    );
  };
};
