import React from 'react'
import {complete, setRestOfTime, timeOut} from "../actions";
import {connect} from "react-redux";
import {GAME_PERIOD_IN_SECONDS} from "../constants";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: props.restOfTime};
        this.onComplete = props.onComplete;
        this.setRestOfTime = props.setRestOfTime;
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {

        clearInterval(this.timer);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({seconds: nextProps.restOfTime});
    }

    startTimer = () => {
        this.timer = setInterval(this.countDown, 1000);
    };

    finish = () => {
        clearInterval(this.timer);
        this.onComplete();
    };

    countDown = () => {
        let seconds = this.state.seconds - 1;
        this.setRestOfTime(seconds);

        if (seconds === 0) {
            this.finish();
        }
    };

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <button onClick={this.finish}>Закончить</button>
                    </li>
                    <li>
                        <label>Осталось времени: {this.state.seconds} c</label>
                    </li>
                    <li>
                        <label>Прошло времени : {GAME_PERIOD_IN_SECONDS - this.state.seconds} c</label>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onComplete: (restOfTime) => {
            dispatch((complete(restOfTime)))
        },

        setRestOfTime: (restOfTime) => {
            dispatch((setRestOfTime(restOfTime)))
        }
    }
};


export default connect(
    null,
    mapDispatchToProps
)(Timer)