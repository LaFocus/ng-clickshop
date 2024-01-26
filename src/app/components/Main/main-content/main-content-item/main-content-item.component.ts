import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SelectedItems } from '../../../../services/products/selectedItems.service';
import { CartService } from '../../../../services/cart/cart.service';

@Component({
  selector: 'main-content-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-content-item.component.html',
  styleUrl: './main-content-item.component.scss',
})
export class MainContentItemComponent {
  @Input() item: any;

  roundValue = (value: number) => {
    return Math.floor(value);
  };

  pushToSelected() {
    this.selectedService.addToSelected(this.item)
  }

  pushToCart() {
    this.cartService.addTocart(this.item)
  }

  constructor(
    private selectedService: SelectedItems,
    private cartService: CartService,
  ) {}
}
