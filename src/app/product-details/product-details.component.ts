import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { Product } from '../common/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;



  constructor( private productService:ProductService , private route: ActivatedRoute ) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    })

  }

  handleProductDetails() {

    const theProductId:number = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProduct(theProductId).subscribe(data => {
      this.product = data;
    })

  }



}
