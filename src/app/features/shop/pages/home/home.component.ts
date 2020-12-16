import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Category, Response } from 'src/app/core/models/models';
// import { selectRouteParams, selectRouter, selectRouterData } from 'src/app/core/router-store/router.selectors';
// import { MyRouterStateSnapshot } from 'src/app/core/router-store/router.reducers';
// import { getRouterState } from 'src/app/core/router-store/router.selectors';
import { CategoryService, ResponseCategory } from 'src/app/core/services/category.service';
import { ElementsState } from 'src/app/core/store/reducers';
import { GetCategoryAction } from '../../store/actions/category.actions';
import {  GetProductAction } from '../../store/actions/product.actions';
import { CreateShoppingAction, CreateShoppingActionSuccess, GetShoppingAction } from '../../store/actions/shopping.actions';
import { CategoriesState } from '../../store/reducers/category.reducers';
import { ProductState } from '../../store/reducers/product.reducers';
import { ShoppingState } from '../../store/reducers/shopping.reducers';
import { getCategoriesState } from '../../store/selectors/category.selectors';
import { getProductsState } from '../../store/selectors/product.selectors';
import { getShoppingsState } from '../../store/selectors/shopping.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products$: Observable<ProductState>;

  private querySubscription: Subscription;
  constructor(private store: Store<ElementsState>,
              private router : Router) { }

  ngOnInit(): void {
    this.products$ = this.store.select<ProductState>(getProductsState)
    this.store.dispatch(new GetProductAction());
  }

  onShopping(data){
    this.store.dispatch(new CreateShoppingAction(data))
  }

  onProductDetail(data){
    this.router.navigate(['/feature/shop/product', data.id])
  }

}
