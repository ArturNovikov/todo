import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './newTaskForm.css';

export default class NewTaskForm extends Component {
  static propTypes = {
    onItemAdded: PropTypes.func,
    onTimeAdded: PropTypes.func,
  };

  static defaultProps = {
    onItemAdded: () => {},
    onTimeAdded: () => {},
  };

  state = {
    description: '',
    min: '',
    sec: '',
    error: null,
  };

  onSubmit = (e) => {
    console.log('Form submitted');
    e.preventDefault();

    if (!this.state.description.trim()) {
      this.setState({ error: 'Task cannot be empty!' });
      return;
    }

    this.props.onItemAdded(this.state.description, this.state.min, this.state.sec);
    this.props.onTimeAdded(this.state.min, this.state.sec);
    this.setState({
      description: '',
      min: '',
      sec: '',
      error: null,
    });
  };

  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
      error: null,
    });
  };

  onMinChange = (e) => {
    this.setState({
      min: Number(e.target.value),
      error: null,
    });
  };

  onSecChange = (e) => {
    this.setState({
      sec: Number(e.target.value),
      error: null,
    });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.onSubmit(e);
    }
  };

  render() {
    return (
      <form type="submit" className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          required
          className="new-todo"
          placeholder="Task"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
          onKeyDown={this.handleKeyDown}
        />
        <input
          onKeyDown={this.handleKeyDown}
          required
          className="new-todo-form__timer"
          placeholder="Min"
          value={this.state.min}
          onChange={this.onMinChange}
        />
        <input
          onKeyDown={this.handleKeyDown}
          required
          className="new-todo-form__timer"
          placeholder="Sec"
          value={this.state.sec}
          onChange={this.onSecChange}
        />
        {this.state.error && <div style={{ color: 'red' }}>{this.state.error}</div>}
      </form>
    );
  }
}
