import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { map, Observable } from 'rxjs';
import { response } from 'express';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl  = "http://localhost:8080/api/products";


  constructor(private httpClient:HttpClient) { }

 getProductsByCategory(theCategoryId: number): Observable<Product[]> {
  const searchUrl = `${this.apiUrl}/search/findByCategoryId?id=${theCategoryId}`;
  return this.httpClient.get<GetResponse>(searchUrl)
                        .pipe(map(response => response._embedded.products));
}

getProduct(theProductId: number ) : Observable<Product> {
  const productUrl = `${this.apiUrl}/${theProductId}`;
  return this.httpClient.get<Product>(productUrl);

}


searchProduct(theKeyword:string) : Observable<Product[]> {
  const searchUrl = `${this.apiUrl}/search/findByNameContaining?name=${theKeyword}`;
 return this.httpClient.get<GetResponse>(searchUrl)
                        .pipe(map(response => response._embedded.products ));
}



private getProducts(searchUrl : string): Observable<Product[] > {
  const apiUrls =`${this.apiUrl}/${searchUrl}`;
   return this.httpClient.get<GetResponse>(searchUrl)
                        .pipe(map(response => response._embedded.products ));

}

//   getProducts(): Observable<Product[]> {

//  return this.httpClient.get<GetResponse>(this.apiUrl)
//                        .pipe(map(response => response._embedded.products ));

//   }

}

interface GetResponse {
  _embedded: {
    products:Product[];

  }
}

