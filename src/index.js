import React from 'react';
import ReactDOM from 'react-dom';
import reducer from "./reducers";
import {createStore} from "redux";
import {Provider} from "react-redux";
import './public/css/style.css';
import KeyboardSimulator from "./components/KeyboardSimulator";

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <KeyboardSimulator/>
    </Provider>,
    document.getElementById('root')
);
