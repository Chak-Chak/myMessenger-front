import { all } from "redux-saga/effects";
import { fetchSignInWatcher } from "./signIn/signInSaga";

export function* rootWatcher() {
    yield all([
        fetchSignInWatcher(),
    ])
}