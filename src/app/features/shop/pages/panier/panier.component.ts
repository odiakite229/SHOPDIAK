import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ElementsState } from 'src/app/core/store/reducers';
import { OnChangeProductShoppingAmount } from '../../store/actions/shopping.actions';
import { ShoppingState } from '../../store/reducers/shopping.reducers';
import { getShoppingsState } from '../../store/selectors/shopping.selector';
import copy from "fast-copy";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  constructor(private store : Store<ElementsState>) { }

  panier$ : Observable<ShoppingState>;
  ngOnInit(): void {
    this.panier$ = this.store.select<ShoppingState>(getShoppingsState)
  }

  onchange(product : any, type : string){
    let product_clone = copy(product)
    product_clone.type = type
    this.store.dispatch(new OnChangeProductShoppingAmount(product_clone));
  }

}
