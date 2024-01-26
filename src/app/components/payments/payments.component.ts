import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { of } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {

  cart: any
  flag: boolean = false

  getCart() {
    of(this.cartService.cart).subscribe((observer) => this.cart = observer)
  }

  ngOnInit() {
    this.cartService.getcartItems()
    this.getCart()
  }

  constructor(
    private cartService: CartService
  ) {}
}
