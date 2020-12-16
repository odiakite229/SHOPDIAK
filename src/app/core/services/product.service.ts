import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Category, Product, Response } from '../models/models';

export interface ResponseProducts<T>{
  products :  Response<T>
}
export interface ResponseProduct<T>{
    product :  T
  }

@Injectable({
  providedIn: 'root'
})
export class GetProductsQuery extends Query<ResponseProducts<Product>>  {
  document = gql`query{
        products{
            results{
                id,
                name,
                unitPrice,
                description,
                defaultImage{
                    img
                }
                promo{
                    percent,
                    startDate,
                    endDate
                },
                images{
                    default,
                    id,
                    img
                }
            }
        }
    }`;
}

@Injectable({
    providedIn: 'root'
})
export class GetProductQuery extends Query<ResponseProduct<Product>>  {
    document = gql`query($id : String!){
            product(id : $id){
                id,
                name,
                unitPrice,
                description,
                defaultImage{
                    img
                }
                promo{
                    percent,
                    startDate,
                    endDate
                },
                images{
                    default,
                    id,
                    img
                }
            }
        }`;
}