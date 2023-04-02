import { call, put, takeEvery } from "redux-saga/effects";
import { UpdateConversationsList, UpdateFetchGetMyConversationsIsRunning } from "../../actions/conversationsActions";
import { FETCH_GET_MY_CONVERSATIONS } from "../../types/conversationsTypes";


const getMyConversations = (accessToken) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch("http://10.0.2.2:5194/users/get_my_conversations", requestOptions).catch(error => console.log('error', error));
}

function* fetchGetMyConversationsWorker({ info }) {
    //console.log(info);
    yield put(UpdateFetchGetMyConversationsIsRunning(true));
    const data = yield call(
        getMyConversations,
        info.accessToken,
    );
    const json = yield call(() => new Promise((res) => res(data.json())));
    //console.log(json.result);
    yield put(UpdateConversationsList(json.result));
    yield put(UpdateFetchGetMyConversationsIsRunning(false));
}

export function* fetchGetMyConversationsWatcher() {
    yield takeEvery(FETCH_GET_MY_CONVERSATIONS, fetchGetMyConversationsWorker);
}