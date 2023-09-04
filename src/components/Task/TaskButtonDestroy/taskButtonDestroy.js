import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './taskButtonDestroy.css';

export default class TaskButtonDestroy extends Component {

    static propTypes = {
        onDeleted: PropTypes.func,
    };

    static defaultProps = {
        onDeleted: () => {},
    };

    render() {

        const { onDeleted } = this.props;

        return (
            <button 
                className="icon icon-destroy"
                onClick={ onDeleted }>
            </button>
        );
    };
};
