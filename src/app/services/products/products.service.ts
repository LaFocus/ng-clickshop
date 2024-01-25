import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = 'https://dummyjson.com/products/';

  getProducts() {
    return this.http.get(this.url);
  }

  getProduct(id: number) {
    return this.http.get(this.url + id);
  }

  filterProducts(categoryArg?: string) {
    return this.http.get(this.url).pipe(
      map((response: any) => response.products.filter((item: any) => item.category == categoryArg)),
    );
  }
  
  constructor(private http: HttpClient) {}
}