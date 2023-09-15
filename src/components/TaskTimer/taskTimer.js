import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TaskTimer extends Component {
  static propTypes = {
    timer: PropTypes.number,
    isRunning: PropTypes.bool,
    onTick: PropTypes.func,
  };

  static defaultProps = {
    timer: 0,
    isRunning: false,
    onTick: () => {},
  };

  timerID = null;

  componentDidUpdate(prevProps) {
    if (this.props.isRunning && !prevProps.isRunning) {
      this.startTimer();
    } else if (!this.props.isRunning && prevProps.isRunning) {
      this.stopTimer();
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    this.timerID = setInterval(() => {
      this.props.onTick();
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timerID);
    this.timerID = null;
  };

  render() {
    const { timer } = this.props;
    const timerForm = `${String(Math.floor(timer / 60)).padStart(2, '0')}:${String(timer % 60).padStart(2, '0')}`;
    return <>{timerForm}</>;
  }
}
