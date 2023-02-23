import { UPDATE_CONVERSATIONS_LIST, UPDATE_FETCH_GET_MY_CONVERSATIONS_IS_RUNNING } from "../types/conversationsTypes";

const INITIAL_STATE = {
    conversationsList: [],
    fetchGetconversationsIsRunning: false,
};

export const conversationsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_CONVERSATIONS_LIST:
            return {
                ...state,
                conversationsList: action.list
            }
        case UPDATE_FETCH_GET_MY_CONVERSATIONS_IS_RUNNING:
            return {
                ...state,
                fetchGetconversationsIsRunning: action.value
            }
        default: return state;
    }
}