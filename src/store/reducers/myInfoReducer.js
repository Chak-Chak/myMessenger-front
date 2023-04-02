import { UPDATE_MY_INFO } from "../types/myInfoTypes";

const INITIAL_STATE = {
    info: {},
};

export const myInfoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_MY_INFO:
            return {
                ...state,
                info: action.value,
            }
        default: return state;
    }
};