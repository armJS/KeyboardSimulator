import React from 'react'
import {complete, timeOut} from "../actions";
import {connect} from "react-redux";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: 0};
        this.onTimeOut = props.onTimeOut;
        this.onComplete = props.onComplete;

    }

    componentDidMount() {
        this.setState({
            seconds: 60,
        }, () => {
            this.startTimer();
        });
    }

    startTimer = () => {
        this.timer = setInterval(this.countDown, 1000);
    };

    finish = () => {
        this.onComplete(this.state.seconds);
        clearInterval(this.timer);
    };

    countDown = () => {
        let seconds = this.state.seconds - 1;
        this.setState({
            seconds: seconds,
        });

        if (seconds == 0) {
            clearInterval(this.timer);
            this.onTimeOut()
        }
    };

    render() {
        return (
            <div>
                <label>Осталось времени: {this.state.seconds}</label>
                <button onClick={this.finish}>Закончить</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        restOfTime: state.restOfTime,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTimeOut: () => {
            dispatch(timeOut())
        },

        onComplete: (restOfTime) => {
            dispatch((complete(restOfTime)))
        }
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer)