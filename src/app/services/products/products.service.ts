import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = 'https://dummyjson.com/products/';

  getProducts() {
    return this.http.get(this.url)
  }

  getProduct(id: number) {
    return this.http.get(this.url+id)
  }
  constructor(private http: HttpClient) {}
}
