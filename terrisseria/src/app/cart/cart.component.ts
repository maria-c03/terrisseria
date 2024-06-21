import { Component } from '@angular/core';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
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
}
