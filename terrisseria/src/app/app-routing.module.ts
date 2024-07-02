import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerrisseriaProductsComponent } from './terrisseria-products/terrisseria-products.component';
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
    path: 'contact',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
