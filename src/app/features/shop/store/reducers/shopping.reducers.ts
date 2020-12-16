import { InitialState } from '@ngrx/store/src/models';
import { ShoppingAction, ShoppingActionsType } from '../actions/shopping.actions';

export interface ShoppingState{
    data : any[],
    total_items : number,
    total_price : number,
    loading : boolean,
    error : string
}


export const initialState : ShoppingState = {
    data : [],
    total_items : 0,
    total_price : 0,
    loading : false,
    error : ""
}

export function reducer(state = initialState, action : ShoppingAction) : ShoppingState{
    switch (action.type) {
        case ShoppingActionsType.CREATE_SHOPPING: {
            return {
                ...state,
                loading : true
            }
        }
        case ShoppingActionsType.CREATE_SHOPPING_SUCCESS: {
            console.log(action.payload)
            return {
                ...state,
                loading : false,
                data : [...action.payload.data],
                total_items: action.payload.total_items,
                total_price : action.payload.total_price,
            }
        }
        case ShoppingActionsType.CREATE_SHOPPING_ERROR: {
            console.error(action.payload)
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        }
        default:{
            return state
        }
    }
}