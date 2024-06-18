import { Component, OnInit } from '@angular/core';
import { Product } from './product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product []= 
  [{
    image: "assets/img/taza.jpg",
    tipo: "Taza",
    precio: 9500,
    stock: 1,
    clearance:false,
  },
  {
    image: "assets/img/plato.jpg",
    tipo: "Plato",
    precio: 12000,
    stock: 0,
    clearance: false,
  },
  {
    image: "assets/img/compotera.jpg",
    tipo: "Compotera",
    precio: 8300,
    stock: 15,
    clearance:true,
  }
  ]
}
