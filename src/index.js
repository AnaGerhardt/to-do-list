import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { App } from './App'
import store from "./Redux/store"
import { configureFakeBackend } from './Helpers'
import 'bootstrap/scss/bootstrap.scss';
import './Styles/main.scss';

configureFakeBackend()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
