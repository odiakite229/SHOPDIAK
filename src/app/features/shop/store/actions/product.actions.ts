import { Action } from '@ngrx/store';


export enum ProductActionsType{
    GET_PRODUCTS = "GET_PRODUCTS",
    GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS",
    GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR",


    // CREATE_PRODUCT_SELECTED = "CREATE_PRODUCTS_SELECTED",
    GET_PRODUCT_SELECTED = "GET_PRODUCT_SELECTED",
    GET_PRODUCT_SELECTED_REMOTE = "GET_PRODUCT_SELECTED_REMOTE",
    GET_PRODUCT_SELECTED_SUCCESS = "GET_PRODUCT_SELECTED_SUCCESS",
    GET_PRODUCT_SELECTED_ERROR = "GET_PRODUCT_SELECTED_ERROR"
}

export class GetProductAction implements Action{
    readonly type = ProductActionsType.GET_PRODUCTS
}

export class GetProductActionSuccess implements Action{
    readonly type = ProductActionsType.GET_PRODUCTS_SUCCESS
    constructor(public payload : any){}
}

export class GetProductActionError implements Action{
    readonly type = ProductActionsType.GET_PRODUCTS_ERROR
    constructor(public payload : any){}
}

// export class CreateProductSelected implements Action{
//     readonly type = ProductActionsType.CREATE_PRODUCT_SELECTED
//     constructor(public payload : any){}
// }

export class GetProductActionSelected implements Action{
    readonly type = ProductActionsType.GET_PRODUCT_SELECTED
}

export class GetProductActionSelectedRemote implements Action{
    readonly type = ProductActionsType.GET_PRODUCT_SELECTED_REMOTE
}

export class GetProductActionSelectedSuccess implements Action{
    readonly type = ProductActionsType.GET_PRODUCT_SELECTED_SUCCESS
    constructor(public playload : any){}
}

export class GetProductActionSelectedError implements Action{
    readonly type = ProductActionsType.GET_PRODUCT_SELECTED_ERROR
    constructor(public playload : any){}
}

export type ProductAction = GetProductAction | GetProductActionSuccess | GetProductActionError 
                             | GetProductActionSelected | GetProductActionSelectedRemote | GetProductActionSelectedSuccess | GetProductActionSelectedError
