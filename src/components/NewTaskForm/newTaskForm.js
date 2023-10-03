import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './newTaskForm.css';

function NewTaskForm({ onItemAdded = () => {} }) {
  const [description, setDescription] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!description.trim()) {
      setError('Task cannot be empty!');
      return;
    }

    onItemAdded(description, min, sec);
    setDescription('');
    setMin('');
    setSec('');
    setError(null);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
    setError(null);
  };

  const onMinChange = (e) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) {
      setError('Only numbers are allowed!');
      return;
    }

    setMin(value ? Number(value) : null);
    setError(null);
  };

  const onSecChange = (e) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) {
      setError('Only numbers are allowed!');
      return;
    }

    setSec(value ? Number(value) : null);
    setError(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };
  return (
    <form type="submit" className="new-todo-form" onSubmit={onSubmit}>
      <input
        required
        className="new-todo"
        placeholder="Task"
        autoFocus
        value={description}
        onChange={onDescriptionChange}
        onKeyDown={handleKeyDown}
      />
      <input
        onKeyDown={handleKeyDown}
        required
        className="new-todo-form__timer"
        placeholder="Min"
        value={min}
        onChange={onMinChange}
      />
      <input
        required
        className="new-todo-form__timer"
        placeholder="Sec"
        value={sec}
        onChange={onSecChange}
        onKeyDown={handleKeyDown}
      />
      {error && <div className="error">{error}</div>}
    </form>
  );
}

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func,
};

export default NewTaskForm;
