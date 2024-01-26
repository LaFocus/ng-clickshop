import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: any;
  amountOfNames: number = 0;
  totalAmount: number = 0;
  subTotalPrice: number = 0;
  totalPrice: number = 0;
  cart: any

  getcartItems() {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    this.products = cart.products || [];

    this.updateCartsInfo()

    this.cart = {
      products: this.products,
      amountOfNames: this.amountOfNames,
      totalAmount: this.totalAmount,
      subTotalPrice: this.subTotalPrice,
      totalPrice: this.totalPrice,
    }
  }

  pushCartsItems() {
    localStorage.setItem(
      'cart',
      JSON.stringify({
        products: this.products,
        amountOfNames: this.amountOfNames,
        totalAmount: this.totalAmount,
        subTotalPrice: this.subTotalPrice,
        totalPrice: this.totalPrice,
      })
    );
  }

  changeQuantityOfItem(item: any, quantity: number) {
    this.getcartItems();
    for (let i = 0; i <= this.products.length; i++) {
      const element = this.products[i];
      if (i == this.products.length) {
        this.addOrDelete(item)
      }
      if (element.id !== item.id) {
        continue;
      } else {
        element.quantity += quantity;
        console.log(item);
        this.updateCartsInfo();
        this.pushCartsItems();
        break;
      }
    }
  }

  addOrDelete(item: any, quantity?: number) {
    this.getcartItems();
    
    if (!this.products.length) {
      console.log(this.products);
      this.products.push({ ...item, quantity: quantity || 1 });
    } else {
      for (let i = 0; i <= this.products.length; i++) {
        const element = this.products[i];
        
        if (i == this.products.length) {
          this.products.push({ ...item, quantity: quantity || 1 });
          break;
        }
        if (element.id !== item.id) {
          continue;
        } else {
          this.products.splice(i, 1);
          break;
        }
      }
    }
    this.updateCartsInfo();
    this.pushCartsItems();
  }

  updateCartsInfo() {
    this.amountOfNames = 0
    this.totalAmount = 0
    this.subTotalPrice = 0
    this.totalPrice = 0
    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
      this.amountOfNames = this.products.length;
      this.totalAmount += element.quantity;
      this.subTotalPrice += element.price * element.quantity;
      this.totalPrice +=
        Math.floor((element.price - (element.price * (element.discountPercentage / 100))) * element.quantity);
    }
  }
}
