import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ElementsState } from 'src/app/core/store/reducers';
import { ItemsState } from '../reducers/items.reducers';

export const getElementsState = createFeatureSelector<ElementsState>('elements')
export const getItemsState = createSelector(getElementsState, (state : ElementsState) => state.items)