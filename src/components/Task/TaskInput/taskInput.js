import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './taskInput.css';

export default class TaskInput extends Component {

    static propTypes = {
        completed: PropTypes.bool,
        onStatusChange: PropTypes.func,
    };

    static defaultProps = {
        completed: false,
        onStatusChange: () => {},
    };

    onCheckboxClick = () => {
        const newCompletedStatus = !this.props.completed;
        this.props.onStatusChange(newCompletedStatus);
    };

    render() {

        return (
            <input 
                className="toggle" 
                type="checkbox" 
                defaultChecked={this.props.completed}
                onClick={ this.onCheckboxClick } 
            />
        );

    };
};
