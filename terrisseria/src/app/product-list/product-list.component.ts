import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductCartService } from '../product-cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product []= 
  [{
    image: "img/taza.jpg",
    tipo: "Taza",
    precio: 9500,
    stock: 1,
    clearance:false,
    quantity:0,
  },
  {
    image: "img/plato.jpg",
    tipo: "Plato",
    precio: 12000,
    stock: 0,
    clearance: false,
    quantity:0,
  },
  {
    image: "img/compotera.jpg",
    tipo: "Compotera",
    precio: 8300,
    stock: 15,
    clearance:true,
    quantity:0,
  },
  ]

  constructor(private cart: ProductCartService){
  }

  addToCart(product: Product): void{
    this.cart.addToCart(product);
    product.stock -=product.quantity;
    product.quantity = 0;
  }
}
