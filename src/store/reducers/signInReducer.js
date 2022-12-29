import { SET_EMAIL, SET_PASSWORD, UPDATE_FETCH_SIGN_IN_RUNNING } from "../types/signInTypes";

const INITIAL_STATE = {
    email: "",
    password: "",
    fetchSignInRunning: false,
};

export const signInReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_EMAIL:
            return {
                ...state,
                email: action.value,
            }
        case SET_PASSWORD:
            return {
                ...state,
                password: action.value,
            }
        case UPDATE_FETCH_SIGN_IN_RUNNING:
            return {
                ...state,
                fetchSignInRunning: action.value,
            }
        default: return state;
    }
};