import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './taskButtonEdit.css';

export default class TaskButtonEdit extends Component {


    static propTypes = {
        onEdit: PropTypes.func,
    };

    static defaultProps = {
        onEdit: () => {},
    };

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
