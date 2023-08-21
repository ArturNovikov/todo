import React from "react";
import "./taskInput.css";

const TaskInput = ({ completed = false }) => {
    return (
        <input className="toggle" type="checkbox" checked={completed} readOnly />
    );
}

export default TaskInput;