import * as SecureStore from "expo-secure-store";
import { call, put, takeEvery } from "redux-saga/effects";
import { UpdateFetchSignInRunning, UpdateIsTokensExist } from "../../actions/signInActions";
import { FETCH_SIGN_IN } from "../../types/signInTypes";

const CreateToken = (email, password) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "email": email,
        "password": password
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("http://10.0.2.2:5194/users/login", requestOptions).catch(error => console.log('error', error));
    /*.then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));*/
}

function* fetchSignInWorker({ info }) {
    yield put(UpdateFetchSignInRunning(true))
    //Alert.alert(info.email + " " + info.password)
    const data = yield call(
        CreateToken,
        info.email,
        info.password
    );
    if (data) {
        if (data.status == 200) {
            const json = yield call(() => new Promise((res) => res(data.json())));
            SecureStore.setItemAsync('accessToken', json.result.token);
            //console.log(json.result.refresh.token)
            SecureStore.setItemAsync('refreshToken', json.result.refresh.token);
            yield put(UpdateIsTokensExist(true));
        }
        else {
            const json = yield call(() => new Promise((res) => res(data.json())));
            console.log(json);
        }
    } else { console.log('Server is not responding...') }
    yield put(UpdateFetchSignInRunning(false))
}

export function* fetchSignInWatcher() {
    yield takeEvery(FETCH_SIGN_IN, fetchSignInWorker);
}