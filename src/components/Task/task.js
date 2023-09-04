import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskInput from './TaskInput';
import TaskLabel from './TaskLabel';
import TaskButtonDestroy from './TaskButtonDestroy';
import TaskButtonEdit from './TaskButtonEdit';
import TaskInputForEdit from './TaskInputForEdit';

import './task.css';

export default class Task extends Component {

    static propTypes = {
        description: PropTypes.string,
        completed: PropTypes.bool,
        status: PropTypes.string,
        onStatusChange: PropTypes.func,
        onDeleted: PropTypes.func,
        onEdit: PropTypes.func,
        onInputChange: PropTypes.func,
        onInputSubmit: PropTypes.func,
        created: PropTypes.string,
    };

    static defaultProps = {
        description: "I'am your task! Please, describe me!",
        completed: false,
        status: 'active',
        onStatusChange: () => {},
        onDeleted: () => {},
        onEdit: () => {},
        onInputChange: () => {},
        onInputSubmit: () => {},
        created: new Date().toISOString(),
    };

    render() {
        const { description, completed, status, onStatusChange, onDeleted, onEdit, onInputChange, onInputSubmit, created } = this.props;
        
        return (
            <li className={ status }>
                <div className="view">
                    <TaskInput completed={ completed } onStatusChange={ onStatusChange } />
                    <TaskLabel description={ description } created={ created }/>
                    <TaskButtonEdit onEdit={ onEdit } />
                    <TaskButtonDestroy onDeleted={ onDeleted } />
                </div>
                <TaskInputForEdit 
                    status={ status } 
                    description={ description }
                    onInputChange={ onInputChange }
                    onInputSubmit={ onInputSubmit }
                />
            </li>
        );
    }
};