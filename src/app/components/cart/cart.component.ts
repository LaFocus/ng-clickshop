import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CartService } from '../../services/cart/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { of } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MainContentItemComponent } from '../Main/main-content/main-content-item/main-content-item.component';
import { ProductsService } from '../../services/products/products.service';
import { SelectedItems } from '../../services/products/selectedItems.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CartItemComponent,
    NgFor,
    NgIf,
    RouterLink,
    MainContentItemComponent,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CartComponent {
  cart: any = {};
  products: any;
  selected: any;

  getCart() {
    this.cartService.getcartItems();
    of(this.cartService.cart).subscribe(
      (observer: any) => (this.cart = observer)
    );
  }

  getProducts() {
    this.productService
      .getProducts()
      .subscribe((products: any) => (this.products = products.products));
  }

  getSelected() {
    this.selectedService.getSelectedItems();
    of(this.selectedService.selected).pipe(
      // slice(0, 10)
    ).subscribe(
      (observer) => (this.selected = observer)
    );
  }

  ngOnInit() {
    register();
    this.cartService.getcartItems();
    this.getCart();
    this.getProducts();
    this.getSelected();
  }

  constructor(
    private cartService: CartService,
    private productService: ProductsService,
    private selectedService: SelectedItems
  ) {}
}
function slice(): import("rxjs").OperatorFunction<any, unknown> {
  throw new Error('Function not implemented.');
}

