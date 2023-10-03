import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './footer.css';

function Footer({ incompleteItems = 0, changeFilter = () => {}, clearCompleted = () => {} }) {
  const [activeButton, setActiveButtonState] = useState('All');

  const setActiveButton = (filterType) => {
    setActiveButtonState(filterType);
    changeFilter(filterType);
  };

  return (
    <footer className="footer">
      <span className="todo-count">{incompleteItems} items left</span>
      <ul className="filters">
        <li>
          <button className={classNames({ selected: activeButton === 'All' })} onClick={() => setActiveButton('All')}>
            All
          </button>
        </li>
        <li>
          <button
            className={classNames({ selected: activeButton === 'Active' })}
            onClick={() => setActiveButton('Active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={classNames({ selected: activeButton === 'Completed' })}
            onClick={() => setActiveButton('Completed')}
          >
            Completed
          </button>
        </li>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  incompleteItems: PropTypes.number,
  changeFilter: PropTypes.func,
  clearCompleted: PropTypes.func,
};

export default Footer;
