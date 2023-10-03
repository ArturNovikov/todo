import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function TaskTimer({ timer = 0, isRunning = false, onTick = () => {} }) {
  const [timerID, setTimerID] = useState(null);

  useEffect(() => {
    if (isRunning) {
      startTimer();
    } else {
      stopTimer();
    }

    return () => {
      stopTimer();
    };
  }, [isRunning]);

  const startTimer = () => {
    const id = setInterval(() => {
      onTick();
    }, 1000);
    setTimerID(id);
  };

  const stopTimer = () => {
    clearInterval(timerID);
    setTimerID(null);
  };

  const timerForm = `${String(Math.floor(timer / 60)).padStart(2, '0')}:${String(timer % 60).padStart(2, '0')}`;
  return <>{timerForm}</>;
}

TaskTimer.propTypes = {
  timer: PropTypes.number,
  isRunning: PropTypes.bool,
  onTick: PropTypes.func,
};

export default TaskTimer;
