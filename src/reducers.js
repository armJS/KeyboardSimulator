import {APP_MODES, GAME_PERIOD_IN_SECONDS} from "./constants";

let initialState = {
    appMode: APP_MODES.STANDBY,
    restOfTime: GAME_PERIOD_IN_SECONDS,
    correctInputCount: 0,
    incorrectInputCount: 0,
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'START_APP':
            return Object.assign({}, state, {
                appMode: APP_MODES.IN_PROGRESS,
                restOfTime: GAME_PERIOD_IN_SECONDS,
                correctInputCount: 0,
                incorrectInputCount: 0
            });
        case 'SET_REST_OF_TIME':
            return Object.assign({}, state, {restOfTime: action.restOfTime});
        case 'FINISH':
            return Object.assign({}, state, {appMode: APP_MODES.DONE});
        case 'CORRECT_INPUT':
            return Object.assign({}, state, {correctInputCount: state.correctInputCount + 1});
        case 'INCORRECT_INPUT':
            return Object.assign({}, state, {incorrectInputCount: state.incorrectInputCount + 1});
        default:
            return state
    }
}
