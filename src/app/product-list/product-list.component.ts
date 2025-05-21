import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../common/product';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,
              RouterModule

  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'] //
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId:number =1;
  searchMode:boolean | undefined;


  constructor(
    private productService: ProductService,
    private route: ActivatedRoute

  ) {}

  ngOnInit(): void {
     this.route.paramMap.subscribe( () => {
      this.listProducts();
     } )

  }


  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if(this.searchMode) {
      this.handleSearchProducts();
    }else {
      this.handleListProducts();
    }
  }

  handleSearchProducts() {
    const theKeyword:string = this.route.snapshot.paramMap.get('keyword')!;

    this.productService.searchProduct(theKeyword).subscribe(data => {
      this.products  = data;
    })

  }

  handleListProducts(){
    const hasCategoryId:boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId) {
    this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;

    }else {

      this.currentCategoryId = 1;
    }

    this.productService.getProductsByCategory(this.currentCategoryId).subscribe(data => {
      this.products = data;
    })

  }










}
