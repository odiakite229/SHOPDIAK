import { Component } from "@angular/core";
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ElementsState } from '../core/store/reducers';
import { GetItemsActions } from './store/actions/items.actions';
import { ItemsState } from './store/reducers/items.reducers';
import { getItemsState } from './store/selectors/items.selectors';

import copy from "fast-copy";

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html'
    // styleUrls: ['./features.component.scss']
})
export class FeaturesComponent{
    items: NbMenuItem[] = []

    items$ : Observable<ItemsState>

    constructor(private store: Store<ElementsState>,
        private menuService: NbMenuService
        ){
        this.items$ = this.store.select<ItemsState>(getItemsState)
        this.store.select<ItemsState>(getItemsState).subscribe(
            (data) => {
                this.items = copy(data.items)
            }
        )
        this.store.dispatch(new GetItemsActions())
    }
}