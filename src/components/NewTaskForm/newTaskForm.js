import React, { Component } from "react";
import './newTaskForm.css';

export default class NewTaskForm extends Component {

    state = {
        description: '' 
    };
    
    onDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.description)
        this.setState({
            description: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}> 
                <input 
                    className="new-todo" 
                    placeholder="What needs to be done?" 
                    autoFocus
                    value={ this.state.description }
                    onChange={ this.onDescriptionChange }
                />
            </form>
        );
    };    
};
