import {
  LOADING_FALSE,
  LOADING_TRUE,
  SELECT_FIGURE,
} from '../../constants/actionTypes';

export const loadingTrue = () => ({
  type: LOADING_TRUE,
});

export const loadingFalse = () => ({
  type: LOADING_FALSE,
});

export const selectFigure = (figure: string) => ({
  type: SELECT_FIGURE,
  payload: figure,
});

