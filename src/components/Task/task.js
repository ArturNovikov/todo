import React, { Component } from "react";
import TaskInput from "./TaskInput";
import TaskLabel from "./TaskLabel";
import TaskButtonDestroy from "./TaskButtonDestroy";
import TaskButtonEdit from "./TaskButtonEdit";
import TaskInputForEdit from "./TaskInputForEdit";

import "./task.css";

class Task extends Component {
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


export default Task;