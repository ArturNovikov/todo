import React, { Component } from "react";

import "./taskInput.css";

export default class TaskInput extends Component {
   constructor(props) {
    super(props);
        this.state = {
            completed: props.completed || false
        }
   };

    onCheckboxClick = () => {
        const newCompletedStatus = !this.props.completed;
        this.props.onStatusChange(newCompletedStatus);
    };

    render() {

        return (
            <input 
                className="toggle" 
                type="checkbox" 
                defaultChecked={this.props.completed}
                onClick={ this.onCheckboxClick } 
            />
            
        );
    };
};
