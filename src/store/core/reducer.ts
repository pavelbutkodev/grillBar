import {
  GET_DATA
} from '../../constants/actionTypes';
import {  IReducer } from "./types";

const INITIAL_STATE = {
  data: {},
};


const coreReducer = (state = INITIAL_STATE, {type, payload}: IReducer) => {
  switch (type) {
    case GET_DATA:
      return {
        ...state, data: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default coreReducer;
