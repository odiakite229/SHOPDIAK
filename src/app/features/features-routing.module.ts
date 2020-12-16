import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';

const routes : Routes = [
    {
        path : '',
        component : FeaturesComponent,
        children : [
            {
                path: 'shop',
                loadChildren: () => import('./shop/shop.module')
                  .then(m => m.ShopModule),
            },
        ]
    }
]

@NgModule({
    declarations : [],
    providers : [],
    imports :[
        RouterModule.forChild(routes)
    ],
    exports : [
        RouterModule
    ]
})
export class FeaturesRoutingModule{}