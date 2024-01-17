import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = 'https://dummyjson.com/products/?limit=100';

  getProducts() {
    return this.http.get(this.url)
  }

  getProduct(id: number) {
    return this.http.get(this.url+id)
  }
  constructor(private http: HttpClient) {}
}
