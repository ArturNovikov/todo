import React from "react";
import './taskList.css'
import Task from "../Task";

const TaskList = ({ tasks, onTaskStatusChange  }) => {

    const elements = tasks.map((task) => {
        const { id, ...taskProps } = task;

        return (
            <Task 
                key={ id }
                {...taskProps}
                onStatusChange={ (newCompletedStatus) => onTaskStatusChange(id, newCompletedStatus) }
            />
        );
    });

    return (
        <ul className="todo-list">
            { elements }
        </ul>
    );
};

export default TaskList;