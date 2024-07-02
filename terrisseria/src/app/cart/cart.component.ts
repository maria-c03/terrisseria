import { Component } from '@angular/core';
import { Product } from '../product-list/product';
import { ProductCartService } from '../product-cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})

export class CartComponent {

  cartList$: Observable<Product[]>;
  total!: Observable<number>;
  constructor(private cart: ProductCartService){
    // cart.cartList.subscribe((observable) => this.cartList = observable);
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
    this.total = this.cartList$.pipe(
      map(products => products.reduce((total, product) => total + (product.precio * product.quantity), 0))
    );
  }

  buyProduct(){
    alert("gracias por su compra")
  }
  clearCart(): void {
    this.cart.clearCart();
  }
}
