import {Component} from 'react'
import './index.css'

function secondsToTime(sec) {
  let minutes = parseInt(sec / 60, 10)
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  let seconds = sec - 60 * minutes
  seconds = seconds < 10 ? `0${seconds}` : `${seconds}`
  return `${minutes}:${seconds}`
}

class Stopwatch extends Component {
  state = {time: 0}

  startTimer = () => {
    clearInterval(this.timerId)
    this.timerId = setInterval(() => {
      this.setState(prev => ({time: prev.time + 1}))
    }, 1000)
  }

  stopTimer = () => clearInterval(this.timerId)

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({time: 0})
  }

  render() {
    const {time} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="img-timer-container">
            <img
              className="timer-icon"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="timer"
            />
            <h1 className="timer">Timer</h1>
          </div>
          <h1 className="time">{secondsToTime(time)}</h1>
          <div className="buttons">
            <button
              className="btn start-btn"
              type="button"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button
              className="btn stop-btn"
              type="button"
              onClick={this.stopTimer}
            >
              Stop
            </button>
            <button
              className="btn reset-btn"
              type="button"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
