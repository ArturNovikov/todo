import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './taskInputForEdit.css';

function TaskInputForEdit({
  description = `I'm your task! Please, edit me!`,
  onInputSubmit = () => {},
  onInputChange = () => {},
}) {
  const [inputValue, setInputValue] = useState(description);
  const [error, setError] = useState(null);

  useEffect(() => {
    setInputValue(description);
    setError(null);
  }, [description]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      setError('Task cannot be empty!');
      return;
    }
    onInputSubmit();
  };

  const onChangeInput = (e) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);
    onInputChange(newInputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <input name="editingTaskForm" type="text" className="edit" value={inputValue} onChange={onChangeInput} />
      {error && (
        <div className="error" style={{ color: 'red', fontSize: '14px', lineHeight: '1.4em', fontWeight: 300 }}>
          {error}
        </div>
      )}
    </form>
  );
}

TaskInputForEdit.propTypes = {
  description: PropTypes.string,
  onInputSubmit: PropTypes.func,
  onInputChange: PropTypes.func,
};

export default TaskInputForEdit;
