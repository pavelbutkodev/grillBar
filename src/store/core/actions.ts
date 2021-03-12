import {
  GET_DATA,
} from '../../constants/actionTypes';

export const setDataA = (data: any) => ({
  type: GET_DATA,
  payload: data,
});


