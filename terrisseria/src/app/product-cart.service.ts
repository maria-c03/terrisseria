import { Injectable } from '@angular/core';
import { Product } from './product-list/product';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  // convierto la variable que quiero observar en privada
  private _cartList: Product[]=[];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject (this._cartList);


  constructor() { }

  addToCart(product: Product){
    let item = this._cartList.find((v1) => v1.tipo == product.tipo);
    if(!item){
      this._cartList.push({ ... product});
    }else{
      item.quantity += product.quantity;
    }
    console.log(this._cartList);
    // al behaviorSubject le digo que actualice el valor y notifique que hubo un cambio en mi variable privada
    this.cartList.next(this._cartList);
  }
}
