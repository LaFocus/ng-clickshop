import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CartService } from '../../services/cart/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CartComponent {
  ngOnInit() {
    register();
    this.cartService.getcartItems()
  }

  constructor(
    private cartService: CartService
  ) {}
}
