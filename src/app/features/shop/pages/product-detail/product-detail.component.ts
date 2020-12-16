import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { getCurrentRouteState } from 'src/app/core/router-store/router.selectors';
// import { selectCurrentRoute, selectRouteParams, selectRouter, selectUrl } from 'src/app/core/router-store/router.selectors';
import { ElementsState } from 'src/app/core/store/reducers';
import { GetProductActionSelected } from '../../store/actions/product.actions';
import { CreateShoppingActionSuccess } from '../../store/actions/shopping.actions';
import { ProductState } from '../../store/reducers/product.reducers';
import { getProductsState } from '../../store/selectors/product.selectors';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  animations : [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.3s 100ms ease-in')
      ]),
      transition(':leave', [
        animate('0s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ]),
  ]
})
export class ProductDetailComponent implements OnInit {

  products$ : Observable<ProductState>
  showImage : string = "";

  constructor(private store : Store<ElementsState>,
              private router : Router) { }

  ngOnInit(): void {
    this.products$ = this.store.select<ProductState>(getProductsState)

    // this.store.select<any>(getCurrentRouteState).subscribe(
    //   (data) => {
    //     console.log(data, " DATA ROUTER")
    //   })

    this.store.dispatch(new GetProductActionSelected())

  }

  onShopping(){
    this.products$.pipe(
      take(1)
    ).subscribe(
      (data) => {
        this.store.dispatch(new CreateShoppingActionSuccess(data.productSeleted))
      }
    )
  }

  onImageSeleted(image){
    this.showImage = image.img
  }

  onProductDetail(data){
    // console.log(data, " PRODUCT DETAIL")
    // this.store.dispatch(new CreateProductSelected(data))
    this.router.navigate(['/feature/shop/product', data.id])
  }


}
