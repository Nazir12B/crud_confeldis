import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-creat-product',
  templateUrl: './creat-product.component.html',
  styleUrls: ['./creat-product.component.css']
})
export class CreatProductComponent {
  constructor(
    private productservice: ProductService,
    private router : Router) { }
  ngOnInit(){

  }

  createProduct(createProductrForm:any){

    this.productservice.addProduct({
      "name":createProductrForm.value.name,
      "price":createProductrForm.value.price,
      "quantity":createProductrForm.value.quantity,
    }).subscribe(
      ()=>{
           this.router.navigate(['admin']);
      }
    );

  }

}
