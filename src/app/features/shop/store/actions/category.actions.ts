import { Action } from '@ngrx/store';
 
// Les types des differentes actions
export enum CategoryActionsTypes{
    GET_CATEGORIES = 'GET_CATEGORIES',
    GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS',
    GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR'
}
 
// Les actions
export class GetCategoryAction implements Action {
  readonly type = CategoryActionsTypes.GET_CATEGORIES;
}
 
export class GetCategoryActionSuccess implements Action {
  readonly type = CategoryActionsTypes.GET_CATEGORIES_SUCCESS;
  constructor(public payload: any) { }
}
 
export class GetCategoryActionError implements Action {
  readonly type = CategoryActionsTypes.GET_CATEGORIES_ERROR;
  constructor(public payload: any) { }
}

export type CategoryAction = GetCategoryAction | GetCategoryActionSuccess | GetCategoryActionError