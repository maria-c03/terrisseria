import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product []= [];
  
  constructor(private cart: ProductCartService, private productsDataService: ProductDataService){
  }

  ngOnInit():void{
    this.productsDataService.getAll().subscribe(products => {
      this.products = products
  });
  this.cart.cartCleared.subscribe(() => {
    this.ngOnInit();
  });
   
  }

  addToCart(product: Product): void{
    this.cart.addToCart(product);
    product.stock -=product.quantity;
    product.quantity = 0;
  }

}
