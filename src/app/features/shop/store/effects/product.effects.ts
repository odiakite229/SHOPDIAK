import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, take, withLatestFrom } from 'rxjs/operators';
import { getCurrentRouteState } from 'src/app/core/router-store/router.selectors';
import { GetProductQuery, GetProductsQuery } from 'src/app/core/services/product.service';
import { GetProductActionError, GetProductActionSelectedError, GetProductActionSelectedRemote, GetProductActionSelectedSuccess, GetProductActionSuccess, ProductActionsType } from '../actions/product.actions';
import { ProductState } from '../reducers/product.reducers';
import { getProductsState } from '../selectors/product.selectors';

@Injectable()
export class ProductEffect{

    constructor(
        private actions$ : Actions,
        private getProductsQuery : GetProductsQuery,
        private getProductQuery : GetProductQuery,
        private store : Store
    ){}

    @Effect()
    loadProducts$ = this.actions$
        .pipe(ofType(ProductActionsType.GET_PRODUCTS))
        .pipe(
            switchMap((action) => {
                return this.getProductsQuery.fetch()
                    .pipe(
                        map(({data}) => new GetProductActionSuccess(data.products),
                        catchError(err => of(new GetProductActionError(err)))
                    )
                );
            })
        )

    @Effect()
    loadProductSelected$ = this.actions$
                .pipe(ofType(ProductActionsType.GET_PRODUCT_SELECTED))
                .pipe(
                    withLatestFrom(
                        this.store.select<any>(getCurrentRouteState),
                        (action, payload) => {
                            console.log(payload)
                            if (!payload.state.params['productId']) {
                                throw { message: 'no product Id given' };
                            }
                            return {
                                action: action,
                                payload: payload.state.params['productId']
                            };
                        }
                    ),
                    switchMap((newPayload : { action : Action, payload : string}) => {
                        return this.store.select<ProductState>(getProductsState).pipe(
                            take(1),
                            map(products => {
                                    let index = products.data.findIndex((product, index) => product.id == newPayload.payload)
                                        if(index != -1){
                                            return new GetProductActionSelectedSuccess(products.data[index])
                                        }else{
                                            return new GetProductActionSelectedRemote()
                                        }
                            } ),
                        )
                    }),
                    catchError(error => of(new GetProductActionSelectedError(error)))
                )

    @Effect()
    loadProductSelectedRemote$ = this.actions$
                                    .pipe(ofType(ProductActionsType.GET_PRODUCT_SELECTED_REMOTE))
                                    .pipe(
                                        withLatestFrom(
                                            this.store.select<any>(getCurrentRouteState),
                                            (action, payload) => {
                                                console.log(payload)
                                                if (!payload.state.params['productId']) {
                                                    throw { message: 'no product Id given' };
                                                }
                                                return {
                                                    action: action,
                                                    payload: payload.state.params['productId']
                                                };
                                            }
                                        ),
                                        switchMap((newPayload : { action : Action, payload : string}) => {
                                            return this.getProductQuery.fetch({ id : newPayload.payload })
                                                .pipe(
                                                    map(({data}) => new GetProductActionSelectedSuccess(data.product),
                                                    catchError(err => of(new GetProductActionSelectedError(err)))
                                                )
                                            );
                                        }),
                                        catchError(error => of(new GetProductActionSelectedError(error)))
                                    )
}