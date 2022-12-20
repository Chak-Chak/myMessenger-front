import { takeEvery } from "redux-saga/effects";
import { FETCH_SIGN_IN } from "../../types/signInTypes";

const CreateToken = (email, password) => {

}

function* signInWorker({ info }) {
    //Alert.alert(info.email + " " + info.password)
    const data = yield call(
        CreateToken,
        info.email,
        info.password
    );
}

export function* signInWatcher() {
    yield takeEvery(FETCH_SIGN_IN, signInWorker);
}