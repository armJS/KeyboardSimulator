import {dispatch} from "redux";

const START_APP = 'START_APP';
const SET_REST_OF_TIME = 'SET_REST_OF_TIME';
const FINISH = 'FINISH';
const CORRECT_INPUT = 'CORRECT_INPUT';
const INCORRECT_INPUT = 'INCORRECT_INPUT';

export const startApp = () => {
    return {type: START_APP};
};

export const setRestOfTime = (restOfTime) => {
    return  {type: SET_REST_OF_TIME, restOfTime};
};

export const complete = () => {
    return  {type: FINISH};
};

export const  incrementCorrectInputCount = () => {
    return  {type: CORRECT_INPUT};
};

export const  incrementIncorrectInputCount = () => {
    return  {type: INCORRECT_INPUT};
};