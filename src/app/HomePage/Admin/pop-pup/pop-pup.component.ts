import { Component,Inject } from '@angular/core';
import {Subscription} from 'rxjs';
import { ProductService } from '../../../services/product/product.service';
import {DialogBelonging} from '@costlydeveloper/ngx-awesome-popup';
@Component({
  selector: 'app-pop-pup',
  templateUrl: './pop-pup.component.html',
  styleUrls: ['./pop-pup.component.css']
})
export class PopPupComponent {
  private subscriptions: Subscription = new Subscription();
  name!:String;
  hasError: boolean = false;
  message: string= "";
  constructor(@Inject('dialogBelonging')
   public dialogBelonging: DialogBelonging,
   private productservice: ProductService,
  ) {}

    ngOnInit(): void {

      console.log(this.dialogBelonging.customData)
        this.subscriptions.add(

          this.dialogBelonging.eventsController.onButtonClick$.subscribe((_Button) => {
                 if (_Button.ID === 'submit') {

                   if(this.name==this.dialogBelonging.customData.name){
                       this.productservice.deleteProduct(this.dialogBelonging.customData.id).subscribe(
                        ()=>{
                          this.hasError = false;
                          this.message = "Suppression effectuée avec succès";
                          setTimeout(() => {
                            window.location.reload();
                            this.dialogBelonging.eventsController.close();
                          }, 150);
                        },
                       );
                   }else{
                    this.hasError = true;
                    this.message = "Rassurer vous que le nom du produit renseigner est correct et appuis sur OK. !!!";

                   }
                }
                else if (_Button.ID === 'cancel') {
                    this.dialogBelonging.eventsController.close();
                }
            })
        );
        setTimeout(() => {
            this.dialogBelonging.eventsController.closeLoader();
        }, 1000);
    }


    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
