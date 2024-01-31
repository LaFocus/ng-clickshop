import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SelectedItems } from '../../../../services/products/selectedItems.service';
import { CartService } from '../../../../services/cart/cart.service';
import { of } from 'rxjs';

@Component({
  selector: 'main-content-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-content-item.component.html',
  styleUrl: './main-content-item.component.scss',
})
export class MainContentItemComponent {
  @Input() item: any;
  @Input() selected: any;

  selectedIconFill: '#030A8C' | 'none' = 'none';
  cartIconFill: '#000000' | '#030A8C' = '#030A8C';

  cart: any;

  roundValue = (value: number) => {
    return Math.floor(value);
  };

  pushToSelected() {
    this.selectedService.addToSelected(this.item);
    this.selectedIconFill =
      this.selectedIconFill == '#030A8C' ? 'none' : '#030A8C';
  }

  pushToCart() {
    this.cartService.addOrDelete(this.item);
    this.cartIconFill = this.cartIconFill == '#030A8C' ? '#000000' : '#030A8C';
  }

  checkForSelectionAndCart() {
    for (let i = 0; i < this.selected.length; i++) {
      const element = this.selected[i];
      if (element.id == this.item.id) {
        this.selectedIconFill = '#030A8C';
      }
    }
    for (let i = 0; i < this.cart.products.length; i++) {
      const element = this.cart.products[i];
      if (element.id == this.item.id) {
        this.cartIconFill = '#000000';
      }
    }
  }

  ngOnInit() {
    of(this.cartService.cart).subscribe((observer) => this.cart = observer)
    this.checkForSelectionAndCart();
    this.cartService.getcartItems();
  }

  constructor(
    private selectedService: SelectedItems,
    private cartService: CartService
  ) {}
}
