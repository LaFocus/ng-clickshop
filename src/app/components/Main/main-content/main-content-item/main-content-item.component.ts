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
  @Input() selected: any;

  selectedIconFill: '#030A8C' | 'none' = 'none'

  roundValue = (value: number) => {
    return Math.floor(value);
  };

  pushToSelected() {
    this.selectedService.addToSelected(this.item);
    this.changeSelection() 
  }

  pushToCart() {
    this.cartService.addOrDelete(this.item);
  }

  checkForSelection() {
    for (let i = 0; i < this.selected.length; i++) {
      const element = this.selected[i];
      if (element.id == this.item.id) {
        this.selectedIconFill = '#030A8C'
      }
    }
  }

  changeSelection() {
    this.selectedIconFill = this.selectedIconFill == '#030A8C' ? 'none' : '#030A8C'
  }

  ngOnInit() {
    this.checkForSelection()
  }

  constructor(
    private selectedService: SelectedItems,
    private cartService: CartService
  ) {}
}
