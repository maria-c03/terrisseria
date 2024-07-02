import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from './product-list/product';

const URL = 'https://6679ba8b18a459f6395138cf.mockapi.io/Terrisseria/home';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }


  public getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(URL)
               .pipe(
                tap((products: Product[]) => {
                console.log('Productos recibidos:', products);
                 products.forEach(product => product.quantity = 0
                )
                })
                );
  }
}
