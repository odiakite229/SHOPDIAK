import { ActionReducerMap } from '@ngrx/store';
import { CategoriesState, reducer as CategoriesReducer } from 'src/app/features/shop/store/reducers/category.reducers';
import { ProductState, reducer as ProductsReducer } from 'src/app/features/shop/store/reducers/product.reducers';
import { ShoppingState, reducer as ShoppingReducer } from 'src/app/features/shop/store/reducers/shopping.reducers';
import { ItemsState, reducer as ItemsReducer } from 'src/app/features/store/reducers/items.reducers';



// State de notre feature
export interface ElementsState {
    categories: CategoriesState;
    shoppings: ShoppingState,
    items : ItemsState,
    products : ProductState
}
   
// Reducers pour notre state
export const reducers: ActionReducerMap<ElementsState> = {
    categories : CategoriesReducer,
    shoppings : ShoppingReducer,
    items : ItemsReducer,
    products : ProductsReducer
};