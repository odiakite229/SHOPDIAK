import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ItemsService } from 'src/app/core/services/items.service';
import { GetCategoryActionError } from '../../shop/store/actions/category.actions';
import { GetItemsActionsSuccess, ItemsActionsType } from '../actions/items.actions';

@Injectable()
export class ItemsEffect {
  constructor(
    private actions$: Actions,
    private itemsService: ItemsService) { }
 
  @Effect()
  loadItems$ = this.actions$
        .pipe(ofType(ItemsActionsType.GET_ITEMS))
        .pipe(
            switchMap((action) => {
                return this.itemsService.fetch()
                    .pipe(
                        map(({data}) => {
                            let items : NbMenuItem[] = [];
                            let results = data.categories.results
                            results.filter((result) => {
                                let item : NbMenuItem = {
                                    title : result.name
                                }
                                let children : NbMenuItem[] = []
                                result.children.filter((child) => {
                                    let item_child : NbMenuItem = {
                                        title : child.name,
                                        link : `/feature/shop`,
                                        queryParams : {
                                            q : child.id
                                        },
                                        badge: {
                                            text: `${child.totalProduct}`,
                                            status: 'warning',
                                        },
                                    }
                                    children.push(item_child)
                                })
                                if (children.length != 0){
                                    item.expanded =  true,
                                    item.children = children
                                }
                                items.push(item)
                            })
                            return new GetItemsActionsSuccess(items)
                        },
                        catchError(err => of(new GetCategoryActionError(err)))
                    ));
            })
        );

    // @Effect()
    // expenedMenu = this.actions$
    //                     .pipe(ofType(ItemsActionsType.GET_ITEMS))
}