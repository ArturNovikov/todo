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
    error: null,
  };

  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
      error: null,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description.trim()) {
      this.setState({ error: 'Task cannot be empty!' });
      return;
    }

    this.props.onItemAdded(this.state.description);
    this.setState({
      description: '',
      error: null,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        {this.state.error && <div style={{ color: 'red' }}>{this.state.error}</div>}
      </form>
    );
  }
}
