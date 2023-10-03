import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import TaskInputForEdit from '../TaskInputForEdit';
import TaskTimer from '../TaskTimer';

import './task.css';

function Task({
  id,
  description = `I'am your task! Please, describe me!`,
  completed = false,
  status = 'active',
  created = new Date().toISOString(),
  timer = 0,
  isRunning = false,
  onStatusChange = () => {},
  onDeleted = () => {},
  onEdit = () => {},
  onInputChange = () => {},
  onInputSubmit = () => {},
  onTick = () => {},
  onStartTimer = () => {},
  onStopTimer = () => {},
}) {
  const onCheckboxChange = (e) => {
    const newCompletedStatus = e.target.checked;
    onStatusChange(newCompletedStatus);
  };
  return (
    <li className={status}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={onCheckboxChange} />
        <label>
          <span className="title">{description}</span>
          <span className="description">
            <button className="icon icon-play" onClick={() => onStartTimer(id)} disabled={isRunning}></button>
            <button className="icon icon-pause" onClick={() => onStopTimer(id)} disabled={!isRunning}></button>
            <TaskTimer timer={timer} isRunning={isRunning} onTick={onTick} />
          </span>
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

Task.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string,
  completed: PropTypes.bool,
  status: PropTypes.string,
  onStatusChange: PropTypes.func,
  onDeleted: PropTypes.func,
  onEdit: PropTypes.func,
  onInputChange: PropTypes.func,
  onInputSubmit: PropTypes.func,
  created: PropTypes.string,
  timer: PropTypes.number,
  isRunning: PropTypes.bool,
  onTick: PropTypes.func,
  onStartTimer: PropTypes.func,
  onStopTimer: PropTypes.func,
};

export default Task;
