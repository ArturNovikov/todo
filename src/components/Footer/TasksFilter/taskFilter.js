import React from "react";
import './taskFilter.css';

const TaskFilter = () => {
  
  return (
    <div>
      <li>
        <button className="selected">All</button>
      </li>
      <li>
        <button>Active</button>
      </li>
      <li>
        <button>Completed</button>
      </li>
    </div>
  );
  
};

export default TaskFilter;