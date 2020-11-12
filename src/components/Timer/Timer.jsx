import React, { Component } from 'react';
import { format } from 'date-fns';

import './Timer.scss';

class Timer extends Component {
  state = {
    currentTime: 0,
    playing: false,
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  playTimer = () => {
    const { playing } = this.state;
    if (playing) {
      return;
    }
    this.interval = setInterval(this.timerCounter, 1000);
    this.setState({ playing: true });
  };

  pauseTimer = () => {
    this.setState({ playing: false });
    clearInterval(this.interval);
  };

  timerCounter = () => {
    this.setState(({ currentTime }) => {
      const newTime = currentTime + 1000;
      return { currentTime: newTime };
    });
  };

  render() {
    const { currentTime } = this.state;
    const time = format(currentTime, 'mm:ss');
    return (
      <div className="timer">
        <button className=" timer-play" type="button" label="play" onClick={this.playTimer} />
        <button className=" timer-pause" type="button" label="pause" onClick={this.pauseTimer} />
        <span className="timer-count">{time}</span>
      </div>
    );
  }
}

export default Timer;
