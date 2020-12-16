import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';


import { LayoutService } from './services/layout.service';


import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { CategoryService } from './services/category.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { CategoriesEffect } from '../features/shop/store/effects/category.effects';
import { ShoppingEffect } from '../features/shop/store/effects/shopping.effects';
import { ItemsEffect } from '../features/store/effects/items.effects';
import { NbMenuService } from '@nebular/theme';
import { ProductEffect } from '../features/shop/store/effects/product.effects';
import { routerReducers } from './router-store/router.reducers';
// import { routerReducers } from './router-store/router.reducers';
// import { routerReducers } from './router-store/router.reducers';

 
@NgModule({
  imports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,

    StoreModule.forRoot({}),
    StoreModule.forFeature('elements', reducers),
    StoreModule.forFeature('router', routerReducers),

    EffectsModule.forRoot([]),
    EffectsModule.forFeature([CategoriesEffect, ShoppingEffect, ItemsEffect, ProductEffect])
  ],
  providers: [
    CategoryService,
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:8000/graphql/',
          }),
        };
      },
      deps: [HttpLink],
    },
    LayoutService,
    NbMenuService
  ],
  declarations: []
})
export class CoreModule { 
 
  constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
        throw new Error("You should import core module only in the root module")
    }
  }
}