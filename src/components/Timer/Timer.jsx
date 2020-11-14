import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import './Timer.scss';

class Timer extends Component {
  state = {};

  static propTypes = {
    time: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    onPlayTimer: PropTypes.func.isRequired,
    onPauseTimer: PropTypes.func.isRequired,
    onTimerDone: PropTypes.func.isRequired,
  };

  componentWillUnmount() {
    const { onTimerDone } = this.props;
    onTimerDone();
  }

  playTimer = () => {
    const { id, onPlayTimer } = this.props;
    onPlayTimer(id);
  };

  pauseTimer = () => {
    const { id, onPauseTimer } = this.props;
    onPauseTimer(id);
  };

  render() {
    const { time } = this.props;

    const timer = format(time, 'mm:ss');
    return (
      <div className="timer">
        <button className=" timer-play" type="button" label="play" onClick={this.playTimer} />
        <button className=" timer-pause" type="button" label="pause" onClick={this.pauseTimer} />
        <span className="timer-count">{timer}</span>
      </div>
    );
  }
}

export default Timer;
