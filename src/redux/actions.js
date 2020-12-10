import {GET_NEWS_BEGIN, GET_NEWS_FAILURE, GET_NEWS_SUCCESS} from "./actionsTypes";


export const getNewsBegin = () =>({
    type: GET_NEWS_BEGIN
})

export const getNewsSuccess = (data) =>({
    type: GET_NEWS_SUCCESS,
    payload: data
})

export const getNewsFailure = () =>({
    type: GET_NEWS_FAILURE
})

