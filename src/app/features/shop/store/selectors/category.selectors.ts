import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ElementsState } from 'src/app/core/store/reducers';
 
// globalState
export const getElementsState = createFeatureSelector<ElementsState>('elements');
 
// CategoiesState
export const getCategoriesState = createSelector(getElementsState, (state: ElementsState) => state.categories );
 
// pure datas
// export const getAllMovies = createSelector(getMoviesState, getMovies);