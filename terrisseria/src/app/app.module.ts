import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { TerrisseriaProductsComponent } from './terrisseria-products/terrisseria-products.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    ContactComponent,
    TerrisseriaProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
