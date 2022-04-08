import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';

import { productsUrl } from 'src/app/config/api';

// const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, "Aardbei", "fruit", 0.90, 1, "assets/img/products/aardbei.jpg"),
    new Product(2, "Appel", "fruit", 1.10, 1, "assets/img/products/appel.jpg"),
    new Product(3, "sinasappel", "fruit", 2.90, 1, "assets/img/products/sinasappel.jpg"),
    new Product(4, "kers", "fruit", 3.40, 1, "assets/img/products/kers.jpg"),
    new Product(5, "banaan", "fruit", 0.50, 1, "assets/img/products/banaan.jpg"),
    new Product(6, "peer", "fruit", 4.70, 1, "assets/img/products/peer.jpg"),
    new Product(7, "garnaal", "vis", 3.20, 1, "assets/img/products/garnaal.jpg"),
  ]

  constructor(private http: HttpClient) { }

  // getProducts(): Product[] {
  //   return this.products;
  // }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }
}
