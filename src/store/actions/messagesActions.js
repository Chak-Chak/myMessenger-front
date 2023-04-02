import { FETCH_SENDING_MESSAGE, UPDATE_FETCH_GET_MESSAGES_IS_RUNNING, UPDATE_MESSAGES_LIST, UPDATE_SENDING_MESSAGE_IS_RUNNING } from "../types/messagesTypes";


export const UpdateFetchGetMessagesIsRunning = (value) => ({
    type: UPDATE_FETCH_GET_MESSAGES_IS_RUNNING,
    value
});

export const UpdateMessagesList = (value) => ({
    type: UPDATE_MESSAGES_LIST,
    value
});

export const FetchSendingMessage = (info) => ({
    type: FETCH_SENDING_MESSAGE,
    info
});

export const UpdateSendinMessageIsRunning = (value) => ({
    type: UPDATE_SENDING_MESSAGE_IS_RUNNING,
    value
});