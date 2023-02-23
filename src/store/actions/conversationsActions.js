import { FETCH_GET_MY_CONVERSATIONS, UPDATE_CONVERSATIONS_LIST, UPDATE_FETCH_GET_MY_CONVERSATIONS_IS_RUNNING } from "../types/conversationsTypes";

export const UpdateConversationsList = (list) => ({
    type: UPDATE_CONVERSATIONS_LIST,
    list
})

export const UpdateFetchGetMyConversationsIsRunning = (value) => ({
    type: UPDATE_FETCH_GET_MY_CONVERSATIONS_IS_RUNNING,
    value,
})

export const fetchGetMyConversations = (info) => ({
    type: FETCH_GET_MY_CONVERSATIONS,
    info,
})