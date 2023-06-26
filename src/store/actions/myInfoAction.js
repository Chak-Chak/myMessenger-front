import { FETCH_GET_MY_INFO, UPDATE_FETCH_MY_INFO_RUNNING, UPDATE_MY_INFO } from "../types/myInfoTypes";

export const fetchGetMyInfo = (info) => ({
    type: FETCH_GET_MY_INFO,
    info
})

export const updateMyInfo = (value) => ({
    type: UPDATE_MY_INFO,
    value
})

export const UpdateFetchMyInfoRunning = (value) => ({
    type: UPDATE_FETCH_MY_INFO_RUNNING,
    value
})