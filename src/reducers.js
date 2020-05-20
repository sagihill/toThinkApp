import {
  SET_INPUT_FIELD,
  ADD_THINK_ITEM,
  REMOVE_THINK_ITEM,
} from "./constants";

import { addItemToList, removeItemFromList } from "./utils";

const initialState = {
  input: "",
  thinkList: [],
  count: 1,
};

export const changeInputField = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_FIELD:
      return Object.assign({}, state, { input: action.payload });
    default:
      return state;
  }
};

export const changeThinkList = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_THINK_ITEM:
      return {
        ...state,
        input: "",
        count: state.count + 1,
        thinkList: addItemToList(state.thinkList, state.count, action.payload),
      };
    case REMOVE_THINK_ITEM:
      return {
        ...state,
        thinkList: removeItemFromList(state.thinkList, action.payload),
      };

    default:
      return state;
  }
};
