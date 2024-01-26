import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any;
  totalPrice: number = 0;

  getcartItems() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.getTotalPrice();
  }

  getTotalPrice() {
    this.cart.forEach((element: any) => {
      this.totalPrice += element.price;
    });
  }

  pushToCart(item: any, quantity?: number) {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cart.push({ ...item, quantity: quantity || 1 });
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  deleteFromCart(i: number) {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cart.splice(i, 1);
  }
  
  addQuantityOfItem(item: any, quantity: number) {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    for (let i = 0; i <= this.cart.length; i++) {
      const element = this.cart[i];
      if (element.id !== item.id) {
        continue;
      } else {
        element.quantity += quantity
        console.log(item);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        break;
      }
    }
  }

  addOrDelete(item: any, quantity?: number) {
    for (let i = 0; i <= this.cart.length; i++) {
      const element = this.cart[i];

      if (i == this.cart.length) {
        this.pushToCart(item);
        break;
      }
      if (element.id !== item.id) {
        continue;
      } else {
        this.deleteFromCart(i);
        break;
      }
    }
  }
}
