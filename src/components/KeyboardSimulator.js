import React from 'react';
import {connect} from 'react-redux'
import {APP_MODES} from "../constants";
import {startApp} from "../actions";
import Timer from "./Timer";
import UserInput from "./UserInput";

let KeyboardSimulator = ({appMode, startApp, incorrectInputCount, correctInputCount, restOfTime}) => {
    const renderTimerAndUserInput = () => {
        return <React.Fragment>
            <Timer/>
            <UserInput {...{appMode, incorrectInputCount, correctInputCount}}/>
        </React.Fragment>
    };

    const renderResult = () => {
        return <React.Fragment>
            <ul>
                <li>{incorrectInputCount}</li>
                <li>{correctInputCount}</li>
                <li>{restOfTime}</li>
                <li><button onClick={startApp}>Заново</button></li>
            </ul>

        </React.Fragment>
    };

    return (
        <React.Fragment>
            {appMode === APP_MODES.STANDBY && <button onClick={startApp}>Старт</button>}
            {appMode === APP_MODES.DONE && renderResult()}
            {appMode === APP_MODES.IN_PROGRESS && renderTimerAndUserInput()}
        </React.Fragment>
    )

};

const mapStateToProps = state => {
    return {
        appMode: state.appMode,
        incorrectInputCount: state.incorrectInputCount,
        correctInputCount: state.correctInputCount,
        restOfTime: state.restOfTime
    }
};

const mapDispatchToProps = dispatch => {
    return {
        startApp: () => {
            dispatch(startApp())
        }
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KeyboardSimulator)