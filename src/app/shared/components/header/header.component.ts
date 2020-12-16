import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbSidebarService, NbThemeService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { LayoutService } from 'src/app/core/services/layout.service';
import { ElementsState } from 'src/app/core/store/reducers';
import { CategoriesState } from 'src/app/features/shop/store/reducers/category.reducers';
import { ShoppingState } from 'src/app/features/shop/store/reducers/shopping.reducers';
import { getCategoriesState } from 'src/app/features/shop/store/selectors/category.selectors';
import { getShoppingsState } from 'src/app/features/shop/store/selectors/shopping.selector';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any = {
    name : 'Diakite Ousmane',
    title : 'Web Developer'
  };

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  shoppings$: Observable<ShoppingState>;

  constructor(private layoutService: LayoutService, 
              private sidebarService: NbSidebarService,
              private themeService: NbThemeService,
              private store: Store<ElementsState>,
              private router : Router) {

          this.shoppings$ = this.store.select<ShoppingState>(getShoppingsState);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
  }

  navigateUrl(url){
    this.router.navigate([url])
  }
}
