import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './footer.css';

import TaskFilter from './TasksFilter';

export default class Footer extends Component {
  static propTypes = {
    incompleteItems: PropTypes.number,
    changeFilter: PropTypes.func,
    clearCompleted: PropTypes.func,
  };

  static defaultProps = {
    incompleteItems: 0,
    changeFilter: () => {},
    clearCompleted: () => {},
  };

  render() {
    return (
      <footer className="footer">
        <span className="todo-count">{this.props.incompleteItems} items left</span>
        <ul className="filters">
          <TaskFilter changeFilter={this.props.changeFilter} />
        </ul>
        <button className="clear-completed" onClick={this.props.clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}
