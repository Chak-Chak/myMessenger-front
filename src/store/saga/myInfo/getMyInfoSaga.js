import { call, put, takeEvery } from "redux-saga/effects";
import { updateMyInfo } from "../../actions/myInfoAction";
import { FETCH_GET_MY_INFO } from "../../types/myInfoTypes";

const Request = (accessToken) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`http://10.0.2.2:5194/users/get_my_info`, requestOptions).catch(error => console.log('error', error));
}

function* fetchGetMyInfoWorker({ info }) {
    //console.log(info);
    const data = yield call(
        Request,
        info.accessToken,
    );
    if (data) {
        if (data.status == 200) {
            const json = yield call(() => new Promise((res) => res(data.json())));
            //console.log("-------------> ", json.result)
            yield put(updateMyInfo(json.result));
        }
        else {
            const json = yield call(() => new Promise((res) => res(data.json())));
            console.log(json);
        }
    } else { console.log('Server is not responding...') }
}

export function* fetchGetMyInfoWatcher() {
    yield takeEvery(FETCH_GET_MY_INFO, fetchGetMyInfoWorker);
}