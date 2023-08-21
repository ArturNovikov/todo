import React from "react";
import TaskInput from "./TaskInput";
import TaskLabel from "./TaskLabel";
import TaskButtonDestroy from "./TaskButtonDestroy";
import TaskButtonEdit from "./TaskButtonEdit";
import TaskInputForEdit from "./TaskInputForEdit";

import "./task.css";

const Task = ({ description, completed, status }) => {
    
    return (
        <li className={ status }>
            <div className="view">
                <TaskInput completed={completed}/>
                <TaskLabel description={description} />
                <TaskButtonEdit />
                <TaskButtonDestroy />
            </div>
            <TaskInputForEdit status={status} description={description}/>
        </li>
    );

};

export default Task;