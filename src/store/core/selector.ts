import { createSelector } from 'reselect';

import { IState } from './types'

const selectState = (state: IState) => state.core;

export const getLoading = createSelector(selectState, (state) => state.loading);

export const getSelectFigure = createSelector(selectState, (state) => state.selectFigure);


