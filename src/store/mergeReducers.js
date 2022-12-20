import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { activePageReducer } from "./reducers/activePageReducer";
import { signInReducer } from "./reducers/signInReducer";
import { rootWatcher } from "./saga/sagaMerge";

const rootReducer = combineReducers({
    activePageReducer,
    signInReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);