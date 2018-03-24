import {APP_MODES} from "./constants";

let initialState = {
    appMode: APP_MODES.STANDBY,
    restOfTime: 0,
    correctInputCount: 0,
    incorrectInputCount: 0,
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'START_APP':
            return Object.assign({}, state, {appMode: APP_MODES.IN_PROGRESS});
        case 'TIME_OUT':
            return Object.assign({}, state, {appMode: APP_MODES.DONE, restOfTime: 0});
        case 'FINISH':
            return Object.assign({}, state, {appMode: APP_MODES.DONE, restOfTime: action.restOfTime});
        case 'CORRECT_INPUT':
            return Object.assign({}, state, {correctInputCount: state.correctInputCount + 1});
        case 'INCORRECT_INPUT':
            return Object.assign({}, state, {incorrectInputCount: state.incorrectInputCount + 1});
        default:
            return state
    }
}
