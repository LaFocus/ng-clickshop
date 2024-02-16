import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { of } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { PaymentsModal } from './payments-modal/payments-modal.component';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [NgFor, NgIf, PaymentsModal, RouterLink, ReactiveFormsModule],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss',
})
export class PaymentsComponent {
  cart: any;
  flag: boolean = false;

  firstName: any = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(30),
  ]);
  lastName: any = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(30),
  ]);
  country: any = new FormControl('', [
    Validators.required,    
  ])
  street: any = new FormControl('', [
    Validators.required,    
  ])
  city: any = new FormControl('', [
    Validators.required,    
  ])
  emailAddress: any = new FormControl('', [
    Validators.email
  ])
  phoneNumber: any = new FormControl('', [
    Validators.pattern(/^\d+$/),
  ])

  getCart() {
    of(this.cartService.cart).subscribe((observer) => (this.cart = observer));
  }

  ngOnInit() {
    this.cartService.getcartItems();
    this.getCart();
  }

  constructor(private cartService: CartService) {}
}
