import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { DialogInitializer,DialogLayoutDisplay, ButtonLayoutDisplay,ButtonMaker} from '@costlydeveloper/ngx-awesome-popup';
import {PopPupComponent } from'../pop-pup/pop-pup.component'
import { Product } from 'src/app/model/Products';
@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent {

  products!:Product[];
  users:any;
  constructor(
    private router : Router,
    private productService: ProductService,
    ) { }
  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(
      data => {
        this.products = data;

      }
    );  }


  creatProduct(){
    this.router.navigate(['creatProduct']);
  }




  confirmBox(product:Product) {
     // Instance of DialogInitializer includes any valid angular component as argument.
     const confirmBox = new DialogInitializer(PopPupComponent);

     // Any data can be sent to AnyAngularComponent.
     confirmBox.setCustomData({product:product, id: product.id, name: product.name}); // optional

     // Set some configuration.
     confirmBox.setConfig({
         width     : '700px',
         layoutType: DialogLayoutDisplay.NONE // SUCCESS | INFO | NONE | DANGER | WARNING
     });

     // Set some custom buttons as list.
     // SUCCESS | INFO | NONE | DANGER | WARNING | PRIMARY | SECONDARY | LINK | DARK | LIGHT
     confirmBox.setButtons([
         new ButtonMaker('OK', 'submit', ButtonLayoutDisplay.SUCCESS),
         new ButtonMaker('Annuler', 'cancel', ButtonLayoutDisplay.SECONDARY)
     ]);

     // Simply open the popup and observe which button is clicked and,
     // receive optional payload from AnyAngularComponent.
     confirmBox.openDialog$().subscribe(resp => {
        //  console.log('dialog response: ', resp);
     });
  }

  gotoUpdateProduct(id:any){
    this.router.navigate(['updateProduct/'+id]);
  }

}

