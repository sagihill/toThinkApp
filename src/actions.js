import {
    SET_INPUT_FIELD,
    ADD_THINK_ITEM,
    REMOVE_THINK_ITEM
} from './constants';

export const setInputField = (text) => ({
    type: SET_INPUT_FIELD,
    payload: text
});

export const addThinkItem = (text) => ({
    type: ADD_THINK_ITEM,
    payload: text
});

export const removeThinkItem = (id) => ({
    type: REMOVE_THINK_ITEM,
    payload: id
});