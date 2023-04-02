import { FETCH_GET_CONVERSATION_MESSAGES, FETCH_GET_MY_CONVERSATIONS, UPDATE_ACTIVE_CONVERSATION_ID, UPDATE_CONVERSATIONS_LIST, UPDATE_CONVERSATION_MESSAGES_LIST, UPDATE_FETCH_GET_MY_CONVERSATIONS_IS_RUNNING, UPDATE_RECEIVER_ID, UPDATE_SENDER_ID } from "../types/conversationsTypes";

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

export const fetchGetConversationMessages = (info) => ({
    type: FETCH_GET_CONVERSATION_MESSAGES,
    info,
})

export const UpdateFetchGetConversationMessagesIsRunning = (value) => ({
    type: UPDATE_FETCH_GET_MY_CONVERSATIONS_IS_RUNNING,
    value,
})

export const UpdateConversationMessagesList = (list) => ({
    type: UPDATE_CONVERSATION_MESSAGES_LIST,
    list
})

export const UpdateActiveConversationId = (value) => ({
    type: UPDATE_ACTIVE_CONVERSATION_ID,
    value
})

export const UpdateSenderId = (value) => ({
    type: UPDATE_SENDER_ID,
    value
})

export const UpdateReceiverId = (value) => ({
    type: UPDATE_RECEIVER_ID,
    value
})