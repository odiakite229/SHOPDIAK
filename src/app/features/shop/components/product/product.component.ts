import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  @Input() product : any
  @Output() shopping : EventEmitter<any> = new EventEmitter()
  @Output() productDetail : EventEmitter<any> = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() : void {
  }

  onShopping(){
    this.shopping.emit(this.product)
  }

  onProductDetail(){
    this.productDetail.emit(this.product)
  }

}
