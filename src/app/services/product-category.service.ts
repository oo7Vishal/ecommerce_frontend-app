import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductCategory } from '../common/product-category';


@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private apiUrl = "http://localhost:8080/api/product-category";

  constructor( private httpClient: HttpClient ) { }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductCategory>(this.apiUrl)
                          .pipe(map(response => response._embedded.productCategory ))
  }


}


interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];  // ✅ match exactly what your API sends
  };
}



//   interface GetResponseProductCategory {
//     _embedded: {
//  productCategories: ProductCategory[];

//     }

// };



