// src/OfflineSupportToolkit.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Initial state
const initialState = {
  offlineQueue: [],
};

// Action types
export const ADD_TO_QUEUE = "ADD_TO_QUEUE";
export const REMOVE_FROM_QUEUE = "REMOVE_FROM_QUEUE";

// Action creators
export const addToQueue = (action) => ({
  type: ADD_TO_QUEUE,
  payload: action,
});

export const removeFromQueue = () => ({
  type: REMOVE_FROM_QUEUE,
});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_QUEUE:
      return {
        ...state,
        offlineQueue: [...state.offlineQueue, action.payload],
      };
    case REMOVE_FROM_QUEUE:
      return {
        ...state,
        offlineQueue: state.offlineQueue.slice(1),
      };
    default:
      return state;
  }
};

// Store
export const store = createStore(reducer, initialState, applyMiddleware(thunk));
