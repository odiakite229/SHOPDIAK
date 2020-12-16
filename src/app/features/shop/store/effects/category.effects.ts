import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CategoryService } from 'src/app/core/services/category.service';
import { CategoryActionsTypes, GetCategoryActionError, GetCategoryActionSuccess } from '../actions/category.actions';

@Injectable()
export class CategoriesEffect {
  constructor(
    private actions$: Actions,
    private categoryService: CategoryService) { }
 
  @Effect()
  loadCategories$ = this.actions$
        .pipe(ofType(CategoryActionsTypes.GET_CATEGORIES))
        .pipe(
            switchMap((action) => {
                return this.categoryService.fetch()
                    .pipe(
                        map(({data}) => new GetCategoryActionSuccess(data.categories),
                        catchError(err => of(new GetCategoryActionError(err)))
                    ));
            })
        );
}