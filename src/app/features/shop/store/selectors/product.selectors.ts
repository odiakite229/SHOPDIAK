import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ElementsState } from 'src/app/core/store/reducers';

export const getElementsState = createFeatureSelector<ElementsState>('elements')
export const getProductsState = createSelector(getElementsState, (state : ElementsState) => state.products)