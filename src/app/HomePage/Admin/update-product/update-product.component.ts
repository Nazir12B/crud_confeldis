import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Products';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

  id!:Number;
  product!:Product;

  constructor(
    private productservice: ProductService,
    private router : Router,
    private activeRoute: ActivatedRoute) { }
  ngOnInit(){
    this.activeRoute.paramMap.subscribe(
      params => {
        this.id = Number(params.get("id"));
      });
     this.productservice.getProduct(this.id).subscribe(
      data => {
        this.product=data;
      }
    );

  }

  updateProduct(){

     this.productservice.updateProduct(this.product.id,this.product).subscribe(
       () => {
         this.router.navigate(['admin']);
       }
     );

  }
}
