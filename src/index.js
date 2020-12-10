import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import './styles/index.scss';
import App from './App';

import {createStore} from "redux";
import {newsReducer} from "./redux/reducer";
import { Provider } from 'react-redux'


const store = createStore(newsReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
