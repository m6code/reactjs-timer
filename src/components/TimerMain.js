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
            <div>
                <div className="primary-box">
                    <div className="secondary-box">
                        <h3 className="primary-text-color timer">
                            {this.state.timeValues}
                        </h3>
                    </div>
                </div>

                <div className="btn-div">
                    <button onClick={this.handleTimer} className="btn secondary-dark-color">Start</button>
                    <button onClick={this.handleReset} className="btn secondary-dark-color">Reset</button>
                </div>
            </div>
        )
    }
}

export default TimerMain;
