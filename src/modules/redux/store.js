import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {starWarsReducers} from "./reducers/starWarsReducer";

const middlewares = [thunk]

const reducers = combineReducers({
    starWarsReducers,
})

export const store = createStore(reducers, applyMiddleware(...middlewares))
