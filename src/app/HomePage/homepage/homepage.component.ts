import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Products';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  products: Product[] = [];;
  searchTerm! : String;
  constructor(private productservice: ProductService, private router : Router) { }
  ngOnInit(): void {

    this.getAllProduct();
  }

  getAllProduct(){
    this.productservice.getAllProduct().subscribe(
      data => {
        this.products = data ;
      }
    );
  }
  gotoProduct(id:any){
    this.router.navigate(['product/'+id]);
  }

  filterList(){
    (this.searchTerm)? this.products = this.products.filter(product => product.name.toLowerCase().includes(this.searchTerm.toLowerCase())) : this.getAllProduct();

  }

}
