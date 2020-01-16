import { createStore, applyMiddleware } from "redux"
import combineReducers from "./Reducers"
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

export default createStore(
    combineReducers, 
    applyMiddleware(thunkMiddleware, loggerMiddleware)
)