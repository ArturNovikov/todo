import React, { Component } from "react";
import './taskList.css'
import Task from "../Task";

class TaskList extends Component {

    render() {
        const { tasks, onTaskStatusChange, onDeleted, onEdit,onInputChange, onInputSubmit } = this.props;
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
            onInputSubmit={ (newStatus) => onInputSubmit(id, newStatus) }
        />
    );

        });

        return (
            <ul className="todo-list">
                { elements }
            </ul>
        );
    };
};

export default TaskList;