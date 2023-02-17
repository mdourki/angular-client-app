import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "http://localhost:8082/products"

  constructor(private http : HttpClient) { }

  findAll():Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.apiUrl);
  }

  fetchProducts() {
    return this.http.get<Result>(this.apiUrl);
  }
}
