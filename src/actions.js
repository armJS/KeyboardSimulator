import {dispatch} from "redux";

const START_APP = 'START_APP';
const TIME_OUT = 'TIME_OUT';
const FINISH = 'FINISH';
const CORRECT_INPUT = 'CORRECT_INPUT';
const INCORRECT_INPUT = 'INCORRECT_INPUT';

export const startApp = () => {
    return {type: START_APP};
};

export const timeOut = () => {
    return  {type: TIME_OUT, restOfTime: 0};
};

export const complete = (restOfTime) => {
    return  {type: FINISH, restOfTime};
};

export const  incrementCorrectInputCount = () => {
    return  {type: CORRECT_INPUT};
};

export const  incrementIncorrectInputCount = () => {
    return  {type: INCORRECT_INPUT};
};