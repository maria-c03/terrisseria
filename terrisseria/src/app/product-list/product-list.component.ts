import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';
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

  upQuantity(product: Product): void{
    if(product.quantity < product.stock)
    product.quantity++;
  }

  downQuantity(product: Product): void{
    if(product.quantity>0)
    product.quantity--;

  }
  onChangeQuantity(event: any, product: Product): void {
    if(product.stock < product.quantity){
      product.quantity = product.stock;
      console.log("no podes pedir mas")
    }
    if(product.quantity < 0){
      product.quantity = 0;
      console.log("no podes pedir menos de 0")
    }
    event.preventDefault(event);
  }
}
