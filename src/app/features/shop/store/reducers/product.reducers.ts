import { Product } from 'src/app/core/models/models';
import { ProductAction, ProductActionsType } from '../actions/product.actions';

export interface ProductState {
    loading : boolean,
    data : Product[],
    totalCount : number,
    productSeleted? : Product,
    error : ""
}


export const initialState : ProductState = {
    loading : false,
    data : [],
    totalCount : 0,
    // productSeleted : {},
    error : ""
}


export function reducer(state = initialState, action : ProductAction) : ProductState {
    switch(action.type){
        case ProductActionsType.GET_PRODUCTS : {
            return {
                ...state,
                loading : true
            }
        }
        case ProductActionsType.GET_PRODUCTS_SUCCESS : {
            return {
                ...state,
                data : action.payload.results,
                totalCount : action.payload.totalCount + state.totalCount,
                loading : false
            }
        }
        case ProductActionsType.GET_PRODUCTS_ERROR :{
            return {
                ...state,
                error : action.payload,
                loading : false
            }
        }
        case ProductActionsType.GET_PRODUCT_SELECTED : {
            return {
                ...state,
                loading : true
            }
        }
        case ProductActionsType.GET_PRODUCT_SELECTED_REMOTE : {
            return {
                ...state,
                loading : true
            }
        }
        case ProductActionsType.GET_PRODUCT_SELECTED_SUCCESS : {
            return {
                ...state,
                productSeleted : action.playload,
                loading : false
            }
        }
        default : {
            return state
        }
    }
}