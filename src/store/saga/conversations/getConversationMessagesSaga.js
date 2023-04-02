import { call, put, takeEvery } from "redux-saga/effects";
import { UpdateConversationMessagesList, UpdateFetchGetConversationMessagesIsRunning } from "../../actions/conversationsActions";
import { FETCH_GET_CONVERSATION_MESSAGES } from "../../types/conversationsTypes";


const getConversationMessages = (accessToken, conversationId) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`http://10.0.2.2:5194/users/get_conversation_messages?conversationId=${conversationId}`, requestOptions).catch(error => console.log('error', error));
}

function* fetchGetConversationMessagesWorker({ info }) {
    //console.log(info);
    yield put(UpdateFetchGetConversationMessagesIsRunning(true));
    const data = yield call(
        getConversationMessages,
        info.accessToken,
        info.conversationId
    );
    const json = yield call(() => new Promise((res) => res(data.json())));
    //console.log("--->", json.result);
    yield put(UpdateConversationMessagesList(json.result));
    yield put(UpdateFetchGetConversationMessagesIsRunning(false));
}

export function* fetchGetConversationMessagesWatcher() {
    yield takeEvery(FETCH_GET_CONVERSATION_MESSAGES, fetchGetConversationMessagesWorker);
}