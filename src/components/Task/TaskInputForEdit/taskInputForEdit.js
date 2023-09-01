import React, { Component } from 'react';
import './taskInputForEdit.css';

export default class TaskInputForEdit extends Component {

    constructor(props) {
      super(props);
        this.state = {
            inputValue: '',
        };
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onInputSubmit();
    };

    onChangeInput = (e) => {
        const newInputValue = e.target.value;
        this.setState({
                inputValue: newInputValue,
        });

        this.props.onInputChange(newInputValue);
    };

    render() {

        return (
            <form onSubmit={ this.onSubmit }>
                <input 
                    name='editingTaskForm'
                    type='text'
                    className='edit'
                    value={ this.state.inputValue }
                    onChange={ this.onChangeInput }
                />
            </form>
        );
    };
    
};
