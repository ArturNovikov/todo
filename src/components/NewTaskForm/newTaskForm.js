import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './newTaskForm.css';

export default class NewTaskForm extends Component {
  static propTypes = {
    onItemAdded: PropTypes.func,
  };

  static defaultProps = {
    onItemAdded: () => {},
  };

  state = {
    description: '',
    min: '',
    sec: '',
    error: null,
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description.trim()) {
      this.setState({ error: 'Task cannot be empty!' });
      return;
    }

    this.props.onItemAdded(this.state.description, this.state.min, this.state.sec);
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
    const value = e.target.value;

    if (!/^\d*$/.test(value)) {
      this.setState({ error: 'Only numbers are allowed!' });
      return;
    }

    this.setState({
      min: value ? Number(value) : null,
      error: null,
    });
  };

  onSecChange = (e) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) {
      this.setState({ error: 'Only numbers are allowed!' });
      return;
    }

    this.setState({
      sec: value ? Number(value) : null,
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
          required
          className="new-todo-form__timer"
          placeholder="Sec"
          value={this.state.sec}
          onChange={this.onSecChange}
          onKeyDown={this.handleKeyDown}
        />
        {this.state.error && <div className="error">{this.state.error}</div>}
      </form>
    );
  }
}
