import { EventEmitter, Injectable } from '@angular/core';
import { Product } from './product-list/product';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  private _cartList: Product[] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList);
  cartCleared: EventEmitter<void> = new EventEmitter<void>(); // Evento para notificar que el carrito ha sido vaciado


  constructor() { }

  addToCart(product: Product) {
    if (product.quantity > 0) {
      let item = this._cartList.find((v1) => v1.tipo == product.tipo);
      if (!item) {
        this._cartList.push({ ...product });
      } else {
        item.quantity += product.quantity;
      }
      // Notificar el cambio en la lista del carrito
      this.cartList.next(this._cartList);
    }
  }

  clearCart(): void {
    // Vaciar el carrito
    this._cartList = [];
    this.cartList.next(this._cartList);
     // Emitir el evento de que el carrito ha sido vaciado
    this.cartCleared.emit();
  }
}
