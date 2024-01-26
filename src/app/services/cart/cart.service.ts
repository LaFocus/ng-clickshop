import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any;

  getcartItems() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]')
  }

  addTocart(item: any) {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');

    for (let i = 0; i <= this.cart.length; i++) {
      const element = this.cart[i];
      
      if (i == this.cart.length) {
        this.cart.push(item);
        break;
      }
      if (element.id !== item.id) {
        continue;
      } else {
        this.cart.splice(i, 1);
        break;
      }
    }

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
