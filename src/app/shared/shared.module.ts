import { CommonModule } from '@angular/common';
import { NgModule }  from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {NbActionsModule, 
        NbBadgeModule, 
        NbButtonModule, 
        NbCardModule, 
        NbContextMenuModule, 
        NbIconModule, 
        NbInputModule, 
        NbLayoutModule, 
        NbListModule, 
        NbMenuModule, 
        NbSearchModule, 
        NbSelectModule, 
        NbSidebarModule, 
        NbSpinnerModule, 
        NbThemeModule, 
        NbUserModule } from '@nebular/theme';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { OneColumnLayoutComponent } from './layouts/one-column-layout/one-column-layout.component';
import { TwoColumnLayoutComponent } from './layouts/two-column-layout/two-column-layout.component';

const MODULE_NB = [
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSearchModule,
    NbSelectModule,
    NbActionsModule,
    NbUserModule,
    NbContextMenuModule,
    NbSidebarModule,
    NbMenuModule,
    NbCardModule,
    NbBadgeModule,
    NbButtonModule,
    NbIconModule,
    NbSpinnerModule,
    NbInputModule,
    NbListModule
]


@NgModule({
    declarations: [
        OneColumnLayoutComponent, 
        TwoColumnLayoutComponent, 
        HeaderComponent, 
        FooterComponent,
        LoadingComponent
    ],
    imports: [CommonModule, FlexLayoutModule, ContentLoaderModule, ...MODULE_NB],
    exports: [
        FlexLayoutModule,
        CommonModule, 
        ContentLoaderModule,
        OneColumnLayoutComponent, 
        TwoColumnLayoutComponent,
        LoadingComponent,
        ...MODULE_NB
    ]
  })
export class SharedModule { 

}