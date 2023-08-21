import React from "react";

import "./taskLabel.css";

const TaskLabel = ({ description }) => {

    return (

    <label>
        <span className="description">{ description }</span>
    </label>

    );

};

export default TaskLabel;