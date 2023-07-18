import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product!: Product;
  id!: Number ;

  constructor(private productservice: ProductService, private router : Router,    private activeRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      params => {
        this.id = Number(params.get("id"));
      });

      this.productservice.getProduct(this.id).subscribe(
        data => {
          this.product = data;
        }
      );
  }

}
