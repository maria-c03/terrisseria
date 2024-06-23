import { Component } from '@angular/core';
import { Product } from '../product-list/product';
import { ProductCartService } from '../product-cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartList$: Observable<Product[]>;
  constructor(private cart: ProductCartService){
    // cart.cartList.subscribe((observable) => this.cartList = observable);
    this.cartList$ = cart.cartList.asObservable();
  }
}
