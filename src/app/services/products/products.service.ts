import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = 'https://dummyjson.com/products/?limit=100';

  getProducts() {
    console.log(this.http.get(this.url));
    return this.http.get(this.url)
  }

  getProduct(id: number) {
    return this.http.get(this.url+id)
  }

  // filterProducts(category: string) {
  //   return this.http.get(this.url).pipe(
  //     filter((value: any) => value.category == category)
  //   )
  // }
  constructor(private http: HttpClient) {}
}
