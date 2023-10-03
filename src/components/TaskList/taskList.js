import React from 'react';
import PropTypes from 'prop-types';

import './taskList.css';
import Task from '../Task';

function TaskList({
  tasks,
  onTaskStatusChange,
  onDeleted = () => {},
  onEdit = () => {},
  onInputChange = () => {},
  onInputSubmit = () => {},
  onTick = () => {},
  onStartTimer = () => {},
  onStopTimer = () => {},
}) {
  const elements = tasks.map((task) => {
    const { id, ...taskProps } = task;
    return (
      <Task
        key={id}
        id={id}
        {...taskProps}
        onStatusChange={(newCompletedStatus) => onTaskStatusChange(id, newCompletedStatus)}
        onDeleted={() => onDeleted(id)}
        onEdit={() => onEdit(id)}
        onInputChange={(newInputValue) => onInputChange(id, newInputValue)}
        onInputSubmit={() => onInputSubmit(id)}
        onTick={() => onTick(id)}
        onStartTimer={() => onStartTimer(id)}
        onStopTimer={() => onStopTimer(id)}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTaskStatusChange: PropTypes.func.isRequired,
  onDeleted: PropTypes.func,
  onEdit: PropTypes.func,
  onInputChange: PropTypes.func,
  onInputSubmit: PropTypes.func,
  onTick: PropTypes.func,
  onStartTimer: PropTypes.func,
  onStopTimer: PropTypes.func,
};

export default TaskList;
