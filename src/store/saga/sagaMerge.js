import { all } from "redux-saga/effects";
import { fetchGetMyConversationsWatcher } from "./conversations/getMyConversationsSaga";
import { fetchSignInWatcher } from "./signIn/signInSaga";

export function* rootWatcher() {
    yield all([
        fetchSignInWatcher(),
        fetchGetMyConversationsWatcher(),
    ])
}