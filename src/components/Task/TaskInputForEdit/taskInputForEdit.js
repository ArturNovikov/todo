import React from "react";
import "./taskInputForEdit.css";

const TaskInputForEdit = ({ status, description }) => {

    return (
        status === "editing" && 
        <input 
            type="text" 
            className="edit"
            defaultValue={description} 
        />
    );

};

export default TaskInputForEdit;