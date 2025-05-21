import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductCategory } from '../common/product-category';
import { ProductCategoryService } from '../services/product-category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [CommonModule,
            RouterModule,
  ],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent implements OnInit {

  productCategories : ProductCategory[] = [];


  constructor(
    private productCategoryService: ProductCategoryService,
    private route: ActivatedRoute  ){}

    ngOnInit():void {
      this.route.paramMap.subscribe(data => {
        this.listProductCategories();

      })
    }

    listProductCategories() {
      this.productCategoryService.getProductCategories().subscribe(data => {
        this.productCategories = data;

      })
    }







}
