import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PanierComponent } from './pages/panier/panier.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
    {
        path : "",
        component : ShopComponent,
        children : [
            {
                path : "",
                component : HomeComponent
            },
            {
                path : "product/:productId",
                component : ProductDetailComponent
            },
            {
                path : "panier",
                component : PanierComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopRoutingModule {}