import { NbMenuItem } from '@nebular/theme';
import { act } from '@ngrx/effects';
import { ItemsActions, ItemsActionsType } from '../actions/items.actions';

export interface ItemsState{
    items : NbMenuItem[],
    loading : boolean,
    error: string
}

export const initialItemsState = {
    items : [],
    loading : false,
    error : ''
}

export function reducer(state = initialItemsState, action : ItemsActions) : ItemsState{

    switch(action.type){
        case ItemsActionsType.GET_ITEMS : {
            return {
                loading : true,
                ...state
            }
        }
        case ItemsActionsType.GET_ITEMS_SUCCESS : {
            return {
                ...state,
                loading : false,
                items : action.payload
            }
        }
        case ItemsActionsType.GET_ITEMS_ERROR : {
            return {
                loading : false,
                error : action.payload,
                ...state
            }
        }
        case ItemsActionsType.EXPANDED_ITEMS : {
            return {
                ...state
            }
        }
        default : {
            return state
        }
    }

}