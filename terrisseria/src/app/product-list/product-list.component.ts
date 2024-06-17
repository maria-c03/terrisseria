import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  product = {
    "Tipo": "Taza",
    "Precio": "1200",
    "Stock": "3",
    "image": "assets/img/taza.jpg"
  }

}
