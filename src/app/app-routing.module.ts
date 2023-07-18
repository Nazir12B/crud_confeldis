import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './HomePage/homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PopPupComponent } from './HomePage/Admin/pop-pup/pop-pup.component';
import { AdminHomepageComponent } from './HomePage/Admin/admin-homepage/admin-homepage.component';
import { ProductComponent } from './HomePage/product/product.component';
import { UpdateProductComponent } from './HomePage/Admin/update-product/update-product.component';
import { CreatProductComponent } from './HomePage/Admin/creat-product/creat-product.component';




const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "homepage" },
  { path: "homepage", component: HomepageComponent },
  { path: "admin", component: AdminHomepageComponent },
  { path: "creatProduct", component: CreatProductComponent },
  { path: "product/:id", component: ProductComponent },
  { path: "updateProduct/:id", component: UpdateProductComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
