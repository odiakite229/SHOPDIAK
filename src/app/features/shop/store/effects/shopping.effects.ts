import { Injectable } from '@angular/core';
import { act, Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { CreateShoppingActionError, CreateShoppingActionSuccess, ShoppingActionsType } from '../actions/shopping.actions';
import { getShoppingData, getShoppingsState } from '../selectors/shopping.selector';
import copy from "fast-copy";



@Injectable()
export class ShoppingEffect {
  constructor(
    private actions$: Actions,
    private store : Store) { }

    calculPercent(product) : number{
        if(!product.promo){
            return product.unitPrice
        }else{
            return ((product.promo.percent * product.unitPrice)/100)
        }
    }
 
  @Effect()
  createShopping$ = this.actions$
        .pipe(
            ofType(ShoppingActionsType.CREATE_SHOPPING),
            switchMap((action : any) => {
                
                return this.store.select(getShoppingsState).pipe(
                    take(1),
                    map(({ data }) => {

                        let data_shop_clone = copy(data)
                        let new_shop : object
                        let index = data_shop_clone.findIndex((shop, index) => action.payload.id == shop.product.id)
                        if(index != -1){
                            new_shop = {
                                amount : data_shop_clone[index].amount + 1,
                                sous_total : data_shop_clone[index].sous_total + this.calculPercent( action.payload),
                                product : action.payload
                            }
                            data_shop_clone[index] = new_shop
                        }else{
                            new_shop = {
                                amount : 1,
                                sous_total : this.calculPercent( action.payload),
                                product : action.payload
                            }
                            data_shop_clone.push(new_shop)
                        }
                        // Calcul totalPrice
                        let total_price = data_shop_clone.reduce((total_price, current) => {
                            total_price = current.sous_total + total_price
                            return total_price
                        }, 0)
                        // Calcul amount
                        let total_amount = data_shop_clone.reduce((total_amount, current) => {
                            total_amount = current.amount + total_amount
                            return total_amount
                        }, 0)

                        return new CreateShoppingActionSuccess({
                            data : data_shop_clone,
                            total_price : total_price,
                            total_items : total_amount
                        })
                    })
                )
            }),
            catchError((error) => of(new CreateShoppingActionError(error)))
        );

    @Effect()
    OnChangeProductShoppingAmount$ = this.actions$
                                        .pipe(ofType(ShoppingActionsType.ON_CHANGE_PRODUCT_SHOPPING_AMOUNT))
                                        .pipe(
                                            switchMap((action : any) => {
                                                return this.store.select(getShoppingsState).pipe(
                                                    take(1),
                                                    map(({ data }) => {
                                                        let data_shop_clone = copy(data)
                                                        let index = data_shop_clone.findIndex((data, index) => data.product.id == action.payload.product.id)
                                                        if(index != -1){
                                                            switch(action.payload.type){
                                                                case 'increment': {
                                                                    data_shop_clone[index].amount += 1
                                                                    data_shop_clone[index].sous_total += this.calculPercent(data_shop_clone[index].product)
                                                                    break;
                                                                }
                                                                case 'decrement': {
                                                                    data_shop_clone[index].amount -= 1
                                                                    data_shop_clone[index].sous_total -= this.calculPercent(data_shop_clone[index].product)
                                                                    if ( data_shop_clone[index].amount  <= 0){
                                                                        data_shop_clone.splice(index, 1)
                                                                    }
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                        // Calcul totalPrice
                                                        let total_price = data_shop_clone.reduce((total_price, current) => {
                                                            total_price = current.sous_total + total_price
                                                            return total_price
                                                        }, 0)
                                                        // Calcul amount
                                                        let total_amount = data_shop_clone.reduce((total_amount, current) => {
                                                            total_amount = current.amount + total_amount
                                                            return total_amount
                                                        }, 0)
                                                        return new CreateShoppingActionSuccess({
                                                            data : data_shop_clone,
                                                            total_price : total_price,
                                                            total_items : total_amount
                                                        })
                                                    })
                                                )
                                            })
                                        )
}