import { CategoryAction, CategoryActionsTypes } from '../actions/category.actions';


// State Type
export interface CategoriesState {
    data: any[];
    totalCount: number,
    loading: boolean;
    error: string;
}

// Initial state
export const initialState: CategoriesState = {
    data: [],
    totalCount : 0,
    loading: false,
    error: ''
};
   
// REDUCER
export function reducer(state = initialState, action: CategoryAction ): CategoriesState {
    switch (action.type) {
      case CategoryActionsTypes.GET_CATEGORIES: {
        return {
          ...state,
          loading: true
        };
      }
      case CategoryActionsTypes.GET_CATEGORIES_SUCCESS: {
        return {
          ...state,
          loading: false,
          totalCount : state.totalCount + action.payload.totalCount,
          data: action.payload.results
        };
      }
      case CategoryActionsTypes.GET_CATEGORIES_ERROR: {
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      }
      default: {
        return state;
      }
    }
}