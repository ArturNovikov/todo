import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './taskList.css';
import Task from '../Task';

export default class TaskList extends Component {

    static propTypes = {
        tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
        onTaskStatusChange: PropTypes.func.isRequired,
        onDeleted: PropTypes.func,
        onEdit: PropTypes.func,
        onInputChange: PropTypes.func,
        onInputSubmit: PropTypes.func,
    };

    static defaultProps = {
        onDeleted: () => {},
        onEdit: () => {},
        onInputChange: () => {},
        onInputSubmit: () => {},
    };

    render() {
        const { tasks, onTaskStatusChange, onDeleted, onEdit, onInputChange, onInputSubmit } = this.props;
        const elements = tasks.map((task) => {
            const { id, ...taskProps } = task;
            
    return (
        <Task 
            key={ id }
            {...taskProps}
            onStatusChange={ (newCompletedStatus) => onTaskStatusChange(id, newCompletedStatus) }
            onDeleted={ () => onDeleted(id) }
            onEdit={ () => onEdit(id) }
            onInputChange={ (newInputValue) => onInputChange(id, newInputValue) }
            onInputSubmit={ () => onInputSubmit(id) }
        />
    );

        });

        return (
            <ul className='todo-list'>
                { elements }
            </ul>
        );
    };
};
