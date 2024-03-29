import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input() item: any
  @Output() deleteItemEmit = new EventEmitter()
  
  deleteItem(item: any) {
    this.cartService.addOrDelete(item)
    this.deleteItemEmit.emit()
  }


  changeQuantity(item: any, way: "+" | "-") {
    way == "+" ? this.cartService.changeQuantityOfItem(item, 1) : this.cartService.changeQuantityOfItem(item, -1)
    this.deleteItemEmit.emit()
  }
  constructor(private cartService: CartService) {}
}
