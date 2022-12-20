import { SET_EMAIL, SET_PASSWORD } from "../types/signInTypes";

const INITIAL_STATE = {
    email: "",
    password: "",
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
        default: return state;
    }
};