import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './taskInputForEdit.css';
export default class TaskInputForEdit extends Component {
  static propTypes = {
    description: PropTypes.string,
    onInputSubmit: PropTypes.func,
    onInputChange: PropTypes.func,
  };

  static defaultProps = {
    description: `I'm your task! Please, edit me!`,
    onInputSubmit: () => {},
    onInputChange: () => {},
  };

  state = {
    inputValue: this.props.description,
    error: null,
  };

  componentDidUpdate(prevProps) {
    if (this.props.description !== prevProps.description) {
      this.setState({
        inputValue: this.props.description,
        error: null,
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.inputValue.trim()) {
      this.setState({ error: 'Task cannot be empty!' });
      return;
    }
    this.props.onInputSubmit();
  };

  onChangeInput = (e) => {
    const newInputValue = e.target.value;
    this.setState({
      inputValue: newInputValue,
    });

    this.props.onInputChange(newInputValue);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="editingTaskForm"
          type="text"
          className="edit"
          value={this.state.inputValue}
          onChange={this.onChangeInput}
        />
        {this.state.error && (
          <div className="error" style={{ color: 'red', fontSize: '14px', lineHeight: '1.4em', fontWeight: 300 }}>
            {this.state.error}
          </div>
        )}
      </form>
    );
  }
}
