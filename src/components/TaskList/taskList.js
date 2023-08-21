import React from "react";
import './taskList.css'
import Task from "../Task";

const TaskList = ({ tasks }) => {

    const elements = tasks.map((task) => {
        const { id, ...taskProps } = task;

        return (
            <Task 
                key={ id }
                {...taskProps}
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