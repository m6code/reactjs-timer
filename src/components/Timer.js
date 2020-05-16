import React, { Component } from 'react'

export class Timer extends Component {
    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0,
        seconds: 0,
        minutes: 0,
        hours: 0,
    };



    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState(prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
            }));
        }
    }

    handleTimer = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning,
        }));
        if (!this.state.isRunning) {
            this.setState({
                previousTime: Date.now(),
            });
        }
    }

    handleReset = () => {
        this.setState({
            elapsedTime: 0
        });
    }


    render() {
        const seconds = Math.floor(this.state.elapsedTime / 1000);
        const minutes = Math.floor(seconds/60);
        const hours = Math.floor(minutes/60);
        return (
            <div className="row">
                <div className="col s12 m8 l6">
                    <h3 className="primary-color primary-text-color">
                        {hours}:{minutes}:{seconds}

                        {/* <span>{hours}:</span>
                        <span>{minutes}:</span>
                        <span>{seconds}</span> */}
                    </h3>
                    <div>
                        <button onClick={this.handleTimer} className="btn secondary-dark-color">Start</button>
                        <button onClick={this.handleReset} className="btn secondary-dark-color">Reset</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Timer
