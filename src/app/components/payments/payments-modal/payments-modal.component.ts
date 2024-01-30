import { Component, EventEmitter, Input, Output } from '@angular/core';
import { of } from 'rxjs';
import { CartService } from '../../../services/cart/cart.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'payments-modal',
  templateUrl: './payments-modal.component.html',
  styleUrl: './payments-modal.component.scss',
  standalone: true,
  imports: [NgFor, NgIf]
})
export class PaymentsModal {
  @Output() closeModalEmitter = new EventEmitter
  cart: any;

  closeModal() {
    this.closeModalEmitter.emit()
  }

  getCart() {
    of(this.cartService.cart).subscribe((observer) => (this.cart = observer));
  }
  ngOnInit() {
    this.cartService.getcartItems();
    this.getCart();
  }

  constructor(private cartService: CartService) {}
}
