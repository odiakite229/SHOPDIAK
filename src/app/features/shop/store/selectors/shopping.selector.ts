import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ElementsState } from 'src/app/core/store/reducers';
import { ShoppingState } from '../reducers/shopping.reducers';

export const getElementsState = createFeatureSelector<ElementsState>('elements')
export const getShoppingsState = createSelector(getElementsState, (state : ElementsState) => state.shoppings)
export const getShoppingData = (state: ShoppingState) => state.data;