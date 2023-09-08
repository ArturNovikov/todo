import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './footer.css';

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

  state = {
    activeButton: 'All',
  };

  setActiveButton = (filterType) => {
    this.setState({
      activeButton: filterType,
    });
    this.props.changeFilter(filterType);
  };

  render() {
    const { activeButton } = this.state;

    return (
      <footer className="footer">
        <span className="todo-count">{this.props.incompleteItems} items left</span>
        <ul className="filters">
          <li>
            <button
              className={classNames({ selected: activeButton === 'All' })}
              onClick={() => this.setActiveButton('All')}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={classNames({ selected: activeButton === 'Active' })}
              onClick={() => this.setActiveButton('Active')}
            >
              Active
            </button>
          </li>
          <li>
            <button
              className={classNames({ selected: activeButton === 'Completed' })}
              onClick={() => this.setActiveButton('Completed')}
            >
              Completed
            </button>
          </li>
        </ul>
        <button className="clear-completed" onClick={this.props.clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}
