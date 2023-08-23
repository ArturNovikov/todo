import React, { Component } from "react";

import "./taskButtonDestroy.css";

export default class TaskButtonDestroy extends Component {

    

    render() {

        const { onDeleted } = this.props;

        return (
            <button 
                className="icon icon-destroy"
                onClick={ onDeleted }
            ></button>
        );
    };
};
