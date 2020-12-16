import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';

@NgModule({
    declarations : [FeaturesComponent],
    providers : [],
    imports :[
        SharedModule,
        FeaturesRoutingModule
    ],
    exports : []
})
export class FeaturesModule{}