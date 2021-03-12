import { createSelector } from 'reselect';

import { IState } from './types'

const selectState = (state: IState) => state.core;

export const getData = createSelector(selectState, (state) => state.data);



