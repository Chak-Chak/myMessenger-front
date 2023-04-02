import { all } from "redux-saga/effects";
import { fetchGetConversationMessagesWatcher } from "./conversations/getConversationMessagesSaga";
import { fetchGetMyConversationsWatcher } from "./conversations/getMyConversationsSaga";
import { fetchSendingMessageWatcher } from "./messages/sendingMessage";
import { fetchGetMyInfoWatcher } from "./myInfo/getMyInfoSaga";
import { fetchSignInWatcher } from "./signIn/signInSaga";

export function* rootWatcher() {
    yield all([
        fetchSignInWatcher(),
        fetchGetMyConversationsWatcher(),
        fetchGetConversationMessagesWatcher(),
        fetchGetMyInfoWatcher(),
        fetchSendingMessageWatcher()
    ])
}