import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './HomePage/homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PopPupComponent } from './HomePage/Admin/pop-pup/pop-pup.component';
import { AdminHomepageComponent } from './HomePage/Admin/admin-homepage/admin-homepage.component';
import { ProductComponent } from './HomePage/product/product.component';
import { UpdateProductComponent } from './HomePage/Admin/update-product/update-product.component';
import { CreatProductComponent } from './HomePage/Admin/creat-product/creat-product.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  NgxAwesomePopupModule,
  DialogConfigModule,
  ConfirmBoxConfigModule,
  ToastNotificationConfigModule
} from '@costlydeveloper/ngx-awesome-popup';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    PopPupComponent,
    AdminHomepageComponent,
    ProductComponent,
    UpdateProductComponent,
    CreatProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxAwesomePopupModule.forRoot(), // Essential, mandatory main module.
    DialogConfigModule.forRoot(), // Needed for instantiating dynamic components.
    ConfirmBoxConfigModule.forRoot(), // Needed for instantiating confirm boxes.
    ToastNotificationConfigModule.forRoot() // Needed for instantiating toast notifications.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
