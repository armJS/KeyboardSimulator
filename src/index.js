import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import reducer from "./reducers";
import {createStore} from "redux";
import {Provider} from "react-redux";
import './public/css/style.css';

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
