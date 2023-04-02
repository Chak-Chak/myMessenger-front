import { UPDATE_FETCH_GET_MESSAGES_IS_RUNNING, UPDATE_MESSAGES_LIST, UPDATE_SENDING_MESSAGE_IS_RUNNING } from "../types/messagesTypes";


const INITIAL_STATE = {
    //messagesList: [],
    //fetchGetMessagesIsRunning: false,
    sendingMessageIsRunning: false,
};

export const messagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        /*case UPDATE_FETCH_GET_MESSAGES_IS_RUNNING:
            return {
                ...state,
                fetchGetMessagesIsRunning: action.value
            }
        case UPDATE_MESSAGES_LIST:
            return {
                ...state,
                messagesList: action.list
            }*/
        case UPDATE_SENDING_MESSAGE_IS_RUNNING:
            return {
                ...state,
                sendingMessageIsRunning: action.value
            }
        default: return state;
    }
}