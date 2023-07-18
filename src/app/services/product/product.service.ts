import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/model/Products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


    constructor(private http: HttpClient) { }

    getAllProduct(): Observable<Product[]> {
      return this.http.get<Product[]>("http://localhost:8080/produit/read");
    }
    getProduct (id:Number): Observable<Product>{
      return this.http.get<Product>("http://localhost:8080/produit/read/"+id);
    }

    addProduct(product:any) {
      return this.http.post("http://localhost:8080/produit/create",product);
     }

     deleteProduct(id:Number) {
      return this.http.delete("http://localhost:8080/produit/delete/"+id, {responseType: 'text'});
     }
     updateProduct(id:Number,product:Product) {
      return this.http.put("http://localhost:8080/produit//update/"+ id, product);
    }
}
