import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import TaskInputForEdit from '../TaskInputForEdit';

import './task.css';

export default class Task extends Component {
  static propTypes = {
    description: PropTypes.string,
    completed: PropTypes.bool,
    status: PropTypes.string,
    onStatusChange: PropTypes.func,
    onDeleted: PropTypes.func,
    onEdit: PropTypes.func,
    onInputChange: PropTypes.func,
    onInputSubmit: PropTypes.func,
    created: PropTypes.string,
  };

  static defaultProps = {
    description: `I'am your task! Please, describe me!`,
    completed: false,
    status: 'active',
    onStatusChange: () => {},
    onDeleted: () => {},
    onEdit: () => {},
    onInputChange: () => {},
    onInputSubmit: () => {},
    created: new Date().toISOString(),
  };

  onCheckboxClick = () => {
    const newCompletedStatus = !this.props.completed;
    this.props.onStatusChange(newCompletedStatus);
  };

  render() {
    const { description, status, onDeleted, onEdit, onInputChange, onInputSubmit, created } = this.props;

    return (
      <li className={status}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={this.onCheckboxClick} />
          <label>
            <span className="description">{description}</span>
            <span className="created">{formatDistanceToNow(new Date(created))} ago</span>
          </label>
          <button className="icon icon-edit" onClick={onEdit}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <TaskInputForEdit
          status={status}
          description={description}
          onInputChange={onInputChange}
          onInputSubmit={onInputSubmit}
        />
      </li>
    );
  }
}
