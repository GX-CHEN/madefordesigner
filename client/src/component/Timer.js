import React from "react";
import "./Timer.css";
import TimerContainer from "./timer/TimerContainer";
import Emoticon from "./timer/Emoticon";
import Selector from "./timer/Selector";

const finalGifs = [
  "./image/minion-what.gif",
  "./image/timeup.gif",
  "./image/too-much-info.gif",
  "./image/please-stop.gif"
];

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.audio = new Audio("timeup.mp3");
    this.state = {
      totalTime: 60,
      timeRemain: 60,
      imgSrc: finalGifs[Math.floor(Math.random() * finalGifs.length)]
    };
  }

  componentDidMount = () => {
    setInterval(
      () =>
        this.setState({
          timeRemain: this.state.timeRemain - 1
        }),
      1000
    );
  };

  reset = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const isJack = urlParams ? urlParams.get("mode") === "jack" : false;

    this.setState({
      timeRemain: this.state.totalTime,
      imgSrc: isJack
        ? "./images/jack.gif"
        : finalGifs[Math.floor(Math.random() * finalGifs.length)]
    });
  };

  render() {
    if (this.state.timeRemain === 0) {
      this.audio.play();
    }
    return (
      <div className="main-container">
        <div className="selector-container">
          <Selector
            totalTime={this.state.totalTime}
            durationClick={seconds => {
              this.setState({
                totalTime: seconds,
                timeRemain: seconds,
                imgSrc: finalGifs[Math.floor(Math.random() * finalGifs.length)]
              });
            }}
          />
        </div>
        <div className="chart-container" onClick={this.reset}>
          <TimerContainer
            timeRemain={this.state.timeRemain}
            totalTime={this.state.totalTime}
            imgSrc={this.state.imgSrc}
          />
        </div>
        <div className="emo-container" onClick={this.reset}>
          <Emoticon
            timeRemain={this.state.timeRemain}
            totalTime={this.state.totalTime}
          />
        </div>
      </div>
    );
  }
}

export default Timer;
