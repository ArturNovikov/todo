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
  };

  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.description);
    this.setState({
      description: '',
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
      </form>
    );
  }
}
