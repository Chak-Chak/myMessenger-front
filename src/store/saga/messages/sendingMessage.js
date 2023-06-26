import { call, takeEvery } from "redux-saga/effects";
import { FETCH_SENDING_MESSAGE } from "../../types/messagesTypes";

const Request = (accessToken, messageText, conversationId) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "messageText": messageText,
        "conversationId": conversationId
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`http://10.0.2.2:5194/users/send_message`, requestOptions).catch(error => console.log('error', error));
}

function* fetchSendingMessageWorker({ info }) {
    //console.log('INFO: ', info);
    const data = yield call(
        Request,
        info.accessToken,
        info.messageText,
        info.conversationId,
    );
    if (data) {
        if (data.status == 200) {
            const json = yield call(() => new Promise((res) => res(data.json())));
            //console.log("RESULT: ", json)
            //yield put(updateMyInfo(json.result));
        }
        else {
            const json = yield call(() => new Promise((res) => res(data.json())));
            //console.log(json);
        }
    } else { console.log('Server is not responding...') }
}

export function* fetchSendingMessageWatcher() {
    yield takeEvery(FETCH_SENDING_MESSAGE, fetchSendingMessageWorker);
}