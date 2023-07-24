import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';

import { ProdctdetelsComponent } from './prodctdetels/prodctdetels.component';
import { CartComponent } from './cart/cart.component';
import { ProdactsComponent } from './prodacts/prodacts.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { ProductComponent } from './admin/product/product.component';
import { ProductsComponent } from './admin/products/products.component';
import { CheckoutComponent } from './admin/checkout/checkout.component';
import { OrderComponent } from './admin/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    ProdctdetelsComponent,
    CartComponent,
    ProdactsComponent,
    LoginComponent,
    DashbordComponent,
    ProductComponent,
    ProductsComponent,
    CheckoutComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
