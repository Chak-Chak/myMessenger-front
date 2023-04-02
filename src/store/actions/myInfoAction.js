import { FETCH_GET_MY_INFO, UPDATE_MY_INFO } from "../types/myInfoTypes";

export const fetchGetMyInfo = (info) => ({
    type: FETCH_GET_MY_INFO,
    info
})

export const updateMyInfo = (value) => ({
    type: UPDATE_MY_INFO,
    value
})