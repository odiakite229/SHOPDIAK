import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Category, Response } from '../models/models';

export interface ResponseCategory<T>{
  categories :  Response<T>
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends Query<ResponseCategory<Category>>  {
  document = gql`query {
    categories{
      totalCount,
      results{
        id,
        name,
        totalProduct,
        products{
          id,
          name,
          unitPrice,
          promo{
            percent
          }
        }
      }
    }
  }`;
}
