import { Action } from '@ngrx/store';


export enum ItemsActionsType {
    GET_ITEMS = "GET_ITEMS",
    GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS",
    GET_ITEMS_ERROR = "GET_ITEMS_ERROR",


    EXPANDED_ITEMS = "EXPANDED_ITEMS",
    EXPANDED_ITEMS_SUCCESS = "EXPANDED_ITEMS_SUCCESS",
    EXPANDED_ITEMS_ERROR = "EXPANDED_ITEMS_ERROR"
}


export class GetItemsActions implements Action{
    readonly type = ItemsActionsType.GET_ITEMS
}

export class GetItemsActionsSuccess implements Action{
    readonly type = ItemsActionsType.GET_ITEMS_SUCCESS
    constructor(public payload : any) {}
}

export class GetItemsActionsError implements Action{
    readonly type = ItemsActionsType.GET_ITEMS_ERROR
    constructor(public payload : any) {}
}

export class ExpenedItemsActions implements Action{
    readonly type = ItemsActionsType.EXPANDED_ITEMS
}

export class ExpenedItemsActionsSuccess implements Action{
    readonly type = ItemsActionsType.EXPANDED_ITEMS_SUCCESS
    constructor(public payload : any){}
}

export class ExpenedItemsActionsError implements Action{
    readonly type = ItemsActionsType.EXPANDED_ITEMS_ERROR
    constructor(public payload : any){}
} 

export type ItemsActions = GetItemsActions | GetItemsActionsSuccess | GetItemsActionsError |
                            ExpenedItemsActions | ExpenedItemsActionsSuccess | ExpenedItemsActionsError