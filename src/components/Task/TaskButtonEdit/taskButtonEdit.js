import React, { Component } from "react";

import "./taskButtonEdit.css";

export default class TaskButtonEdit extends Component {

    render() {

        const { onEdit } = this.props;

        return (
            <button 
                className="icon icon-edit"
                onClick={ onEdit } >
            </button>
        );
    };
};
