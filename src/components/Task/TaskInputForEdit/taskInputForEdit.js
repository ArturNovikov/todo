import React, { Component } from 'react';
import './taskInputForEdit.css';
import { toHaveStyle } from '@testing-library/jest-dom/matchers';

export default class TaskInputForEdit extends Component {

    constructor(props) {
      super(props);
        this.state = {
            inputValue: props.description,
        };
    };

    componentDidUpdate(prevProps) {
        if (this.props.description !== prevProps.description) {
            this.setState({
                inputValue: this.props.description,
            });
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
