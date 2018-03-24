import React from 'react';
import {connect} from 'react-redux'
import {APP_MODES} from "../constants";
import {startApp} from "../actions";
import Timer from "./Timer";
import UserInput from "./UserInput";

let KeyboardSimulator = ({appMode, startApp, incorrectInputCount, correctInputCount, restOfTime}) => {
    return (
        <React.Fragment>
            {appMode === APP_MODES.STANDBY && <button onClick={startApp}>Старт</button>}
            {appMode === APP_MODES.DONE && renderResult(startApp, restOfTime, incorrectInputCount, correctInputCount)}
            {appMode === APP_MODES.IN_PROGRESS && renderTimerAndUserInput(restOfTime, appMode, incorrectInputCount, correctInputCount)}
        </React.Fragment>
    )
};

const renderTimerAndUserInput = (restOfTime, appMode, incorrectInputCount, correctInputCount) => {
    return <React.Fragment>
        <Timer restOfTime={restOfTime}/>
        <UserInput {...{appMode, incorrectInputCount, correctInputCount}}/>
    </React.Fragment>
};

const renderResult = (startApp, restOfTime, incorrectInputCount, correctInputCount) => {
    return <React.Fragment>
        <ul>
            <li><label>Кол-во ошибок: </label> {incorrectInputCount}</li>
            <li><label>Правильных ответов: </label> {correctInputCount}</li>
            <li><label>Осталось времени: </label> {restOfTime}c</li>
            <li><button onClick={startApp}>Заново</button></li>
        </ul>

    </React.Fragment>
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