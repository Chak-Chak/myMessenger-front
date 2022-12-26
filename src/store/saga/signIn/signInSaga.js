import { call, takeEvery } from "redux-saga/effects";
import { FETCH_SIGN_IN } from "../../types/signInTypes";

const CreateToken = (email, password) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "refreshToken=mfQ%2F2XPaTHt8vchclUWopRhuW%2FiCeIPIwKaR6ogAlsIA80%2BC%2FGEyrCtsHymMowqR4E77Ftfw54q%2Fx7LDnQyK7g%3D%3D");

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

    return fetch("http://192.168.0.35:5194/users/login", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function* fetchSignInWorker({ info }) {
    //Alert.alert(info.email + " " + info.password)
    const data = yield call(
        CreateToken,
        info.email,
        info.password
    );

    /*if (data) {
        const json = yield call(() => new Promise((res) => res(data.json())));
        Alert.alert(json.result);
    }*/
}

export function* fetchSignInWatcher() {
    yield takeEvery(FETCH_SIGN_IN, fetchSignInWorker);
}