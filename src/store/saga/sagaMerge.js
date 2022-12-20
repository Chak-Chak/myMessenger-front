import { all } from "redux-saga/effects";
import { signInWatcher } from "./signIn/signInSaga";

export function* rootWatcher() {
    yield all([
        signInWatcher(),
    ])
}