import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { signInReducer } from "./reducers/signInReducer";
import { rootWatcher } from "./saga/sagaMerge";

const rootReducer = combineReducers({
    signInReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);