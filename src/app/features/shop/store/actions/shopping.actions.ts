import { Action } from '@ngrx/store';


export enum ShoppingActionsType {
    GET_SHOPPING = "GET_SHOPPING",
    GET_SHOPPING_SUCCESS = "GET_SHOPPING_SUCCESS",
    GET_SHOPPING_ERROR = "GET_SHOPPING_ERROR",

    CREATE_SHOPPING = "CREATE_SHOPPING",
    CREATE_SHOPPING_SUCCESS = "CREATE_SHOPPING_SUCCESS",
    CREATE_SHOPPING_ERROR = "CREATE_SHOPPING_ERROR",

    ON_CHANGE_PRODUCT_SHOPPING_AMOUNT = "ON_CHANGE_PRODUCT_SHOPPING_AMOUNT",
}


export class GetShoppingAction implements Action{
    readonly type = ShoppingActionsType.GET_SHOPPING
}

export class GetShoppingActionSuccess implements Action{
    readonly type = ShoppingActionsType.GET_SHOPPING_SUCCESS
    constructor(public payload : any){}
}

export class GetShoppingActionError implements Action{
    readonly type = ShoppingActionsType.GET_SHOPPING_ERROR
    constructor(public payload : any){}
}

export class CreateShoppingAction implements Action{
    readonly type = ShoppingActionsType.CREATE_SHOPPING
    constructor(public payload : any){}
}

export class CreateShoppingActionSuccess implements Action{
    readonly type = ShoppingActionsType.CREATE_SHOPPING_SUCCESS
    constructor(public payload : any){}
}

export class CreateShoppingActionError implements Action{
    readonly type = ShoppingActionsType.CREATE_SHOPPING_ERROR
    constructor(public payload : any){}
}

export class OnChangeProductShoppingAmount implements Action{
    readonly type = ShoppingActionsType.ON_CHANGE_PRODUCT_SHOPPING_AMOUNT
    constructor(public payload : any){}
}

export type ShoppingAction = GetShoppingAction | 
                            GetShoppingActionSuccess | GetShoppingActionError | 
                                CreateShoppingAction | CreateShoppingActionSuccess | CreateShoppingActionError |
                                OnChangeProductShoppingAmount