import {
  LOADING_TRUE,
  LOADING_FALSE,
  SELECT_FIGURE,
} from '../../constants/actionTypes';
import {  IReducer } from "./types";

const INITIAL_STATE = {
  loading: false,
  selectFigure: null,
};


const coreReducer = (state = INITIAL_STATE, {type, payload}: IReducer) => {
  switch (type) {
    case LOADING_TRUE:
      return {
        ...state, loading: true,
      };
    case LOADING_FALSE:
      return {
        ...state, loading: false,
      };
    case SELECT_FIGURE:
      return {
        ...state, selectFigure: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default coreReducer;
