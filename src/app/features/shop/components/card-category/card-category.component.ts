import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.scss'],
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
export class CardCategoryComponent implements OnInit {
  @Input() category : any
  @Output() product_shopping : EventEmitter<any> = new EventEmitter()

  product_pagine : object = {
    page : 1,
    count_per_page : 5
  }

  number_of_product : number
  pageList : number[] = []


  constructor() { }

  ngOnInit(): void {
    this.number_of_product = this.category?.products.length
    this.pageList =this.getNumberOfPage(this.number_of_product)

  }

  getNumberOfPage(total) : number[]{
    let limit = this.product_pagine['count_per_page'];
    let totalPages = Math.ceil(total/limit)
    let pageList = Array.from(new Array(totalPages), (value, index) => {
      return index + 1
    })
    console.log(pageList)
    return pageList;
  }

  getPageContent(page){
    console.log(page)
    if(this.product_pagine['page'] == page){
      return
    }
    this.product_pagine = {
      page : page,
      count_per_page : 5
    }
    console.log(this.product_pagine)
  }

  getStatus(page){
    if(this.product_pagine['page'] == page){
      return true
    }
  }

  onShopping(data){
    this.product_shopping.emit(data)
  }

}
