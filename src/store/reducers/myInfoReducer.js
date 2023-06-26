import { UPDATE_FETCH_MY_INFO_RUNNING, UPDATE_MY_INFO } from "../types/myInfoTypes";

const INITIAL_STATE = {
    info: {},
    fetchMyInfoRunning: true,
};

export const myInfoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_MY_INFO:
            return {
                ...state,
                info: action.value,
            }
        case UPDATE_FETCH_MY_INFO_RUNNING:
            return {
                ...state,
                fetchMyInfoRunning: action.value,
            }
        default: return state;
    }
};