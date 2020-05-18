import React, { Component } from 'react'
import Timer from 'easytimer';

export class TimerMain extends Component {
    state = {
        timer: new Timer(),
        timeValues: "00:00:00",
        isRunning: false,
    };



    componentDidMount() {
        this.state.timer.addEventListener("secondsUpdated", this.tick)
    }

    componentWillUnmount() {

    }

    tick = () => {
        let { timer } = this.state;
        const timeValues = timer.getTimeValues().toString();
        this.setState({ timeValues: timeValues });
    }

    handleTimer = () => {
        if (!this.state.isRunning) {
            this.state.timer.start();
            this.setState({ isRunning: !this.state.isRunning });
        }
    }

    handleReset = () => {
        if (this.state.isRunning) {
            this.state.timer.stop();
            this.setState({
                timeValues: "00:00:00",
                isRunning: !this.state.isRunning,
            });
            //console.log(this.state.isRunning)
        }
        this.handleTimer();
    }


    render() {
        return (
            <div className="row">
                <div className="col s12 m8 l6">
                    <div className="primary-box">
                        <h3 className="primary-text-color">
                            {this.state.timeValues}

                            {/* <span>{hours}:</span>
                        <span>{minutes}:</span>
                        <span>{seconds}</span> */}
                        </h3>
                    </div>

                    <div>
                        <button onClick={this.handleTimer} className="btn secondary-dark-color">Start</button>
                        <button onClick={this.handleReset} className="btn secondary-dark-color">Reset</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default TimerMain;
