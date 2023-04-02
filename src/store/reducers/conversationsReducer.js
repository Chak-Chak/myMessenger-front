import { startMapper } from "react-native-reanimated/lib/reanimated2/core";
import { FETCH_GET_CONVERSATION_MESSAGES, UPDATE_ACTIVE_CONVERSATION_ID, UPDATE_CONVERSATIONS_LIST, UPDATE_CONVERSATION_MESSAGES_LIST, UPDATE_FETCH_GET_CONVERSATION_MESSAGES_IS_RUNNING, UPDATE_FETCH_GET_MY_CONVERSATIONS_IS_RUNNING, UPDATE_RECEIVER_ID, UPDATE_SENDER_ID } from "../types/conversationsTypes";

const INITIAL_STATE = {
    conversationsList: [],
    conversationMessagesList: [],
    activeConversationId: null,
    senderId: null,
    receiverId: [],
    fetchGetconversationsIsRunning: false,
    fetchGetConversationMessagesIsRunning: false,
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
        case UPDATE_FETCH_GET_CONVERSATION_MESSAGES_IS_RUNNING:
            return {
                ...state,
                fetchGetConversationMessagesIsRunning: action.value
            }
        case UPDATE_CONVERSATION_MESSAGES_LIST:
            return {
                ...state,
                conversationMessagesList: action.list
            }
        case UPDATE_ACTIVE_CONVERSATION_ID:
            return {
                ...state,
                activeConversationId: action.value
            }
        case UPDATE_SENDER_ID:
            return {
                ...state,
                senderId: action.value
            }
        case UPDATE_RECEIVER_ID:
            return {
                ...state,
                receiverId: action.value
            }
        default: return state;
    }
}