import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCategory } from './common/product-category';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
   { path: 'search/:keyword', component: ProductListComponent },
   {path: 'products/:id' , component: ProductDetailsComponent  },
   {path: 'category/:id', component:ProductListComponent },
  {path: 'category', component:ProductListComponent },
  {path: 'products', component:ProductListComponent },
  {path: '', redirectTo:'/products', pathMatch: 'full' },
  {path: '**', redirectTo:'/products', pathMatch: 'full' },

];
