import { NgModule } from "@angular/core";
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopRoutingModule } from './shop.routing.module';

import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './shop.component';
import { CardCategoryComponent } from './components/card-category/card-category.component';
import { FilterTablePipe } from './pipes/filter-table.pipe';
import { PercentComputePipe } from './pipes/percent-compute.pipe';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { PanierComponent } from './pages/panier/panier.component';

@NgModule({
    declarations : [
        HomeComponent, 
        ShopComponent,
        ProductComponent,
        CardCategoryComponent,
        ProductDetailComponent,
        PanierComponent,

        // Pipes
        FilterTablePipe,
        PercentComputePipe,
    ],
    providers : [],
    imports : [
        SharedModule,
        ShopRoutingModule
    ],
    exports : []
})
export class ShopModule{}