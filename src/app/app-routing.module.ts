import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProdactsComponent } from './prodacts/prodacts.component';
import { ProdctdetelsComponent } from './prodctdetels/prodctdetels.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { ProductComponent } from './admin/product/product.component';
import { ProductsComponent } from './admin/products/products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './admin/checkout/checkout.component';
import { OrderComponent } from './admin/order/order.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"prodacts",component:ProdactsComponent},
  {path:"prodctdetels/:id",component:ProdctdetelsComponent},
  {path:"login",component:LoginComponent},
  {path:"dashbord",component:ProductComponent},
  {path:"admin/product", component:ProductComponent},
  {path:"admin/products", component:ProductsComponent},
  {path:"admin/product/:id", component:ProductComponent},
  {path:"cart",component:CartComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"admin/order",component:OrderComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
