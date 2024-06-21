import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerrisseriaProductsComponent } from './terrisseria-products/terrisseria-products.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: TerrisseriaProductsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
