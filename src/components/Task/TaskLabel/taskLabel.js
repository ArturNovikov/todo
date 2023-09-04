import React from 'react';
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns';

import './taskLabel.css';

const TaskLabel = ({ description, created }) => {

    return (
        <label>
            <span className='description'>{ description }</span>
            <span className='created'>{formatDistanceToNow(new Date(created))} ago</span>
        </label>
    );

};

TaskLabel.propTypes = {
    description: PropTypes.string,
    created: PropTypes.string,
};

TaskLabel.defaultProps = {
    description: 'I need some description!',
    created: new Date().toISOString(),
};


export default TaskLabel;