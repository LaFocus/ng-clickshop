import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CartService } from '../../services/cart/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { of } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, NgFor, NgIf, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class CartComponent {

  cart: any = {}

  getCart() {
    this.cartService.getcartItems()
    of(this.cartService.cart).subscribe((observer: any) => this.cart = observer)
  }

  ngOnInit() {
    register();
    this.cartService.getcartItems()
    this.getCart()
  }

  constructor(
    private cartService: CartService
  ) {}
}
