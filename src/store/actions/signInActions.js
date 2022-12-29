import { FETCH_SIGN_IN, SET_EMAIL, SET_PASSWORD, UPDATE_FETCH_SIGN_IN_RUNNING } from "../types/signInTypes";

export const setEmail = (value) => ({
    type: SET_EMAIL,
    value
})

export const setPassword = (value) => ({
    type: SET_PASSWORD,
    value
})

export const fetchSignIn = (info) => ({
    type: FETCH_SIGN_IN,
    info
})

export const UpdateFetchSignInRunning = (value) => ({
    type: UPDATE_FETCH_SIGN_IN_RUNNING,
    value
})