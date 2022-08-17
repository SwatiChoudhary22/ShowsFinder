import { Show } from "../models";
import { PET_TYPES_FETCH, PET_TYPES_FETCHED, SHOWS_TYPES_FETCHED } from "./action";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga, { sagaMiddleware } from "./saga";
import { applyMiddleware, combineReducers, createStore, AnyAction } from "redux";

export type AppState = {
  petTypes: any[];
  shows: Show[];
};
const initialState: AppState = {
  petTypes: [],
  shows: [],
};

export const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case PET_TYPES_FETCHED:
      return { ...state, petTypes: action.payload };
    case SHOWS_TYPES_FETCHED:
      return { ...state, shows: action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
