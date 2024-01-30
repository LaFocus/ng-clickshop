import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { NgForOf, NgIf, CommonModule } from '@angular/common';
import { MainContentItemComponent } from '../Main/main-content/main-content-item/main-content-item.component';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { SelectedItems } from '../../services/products/selectedItems.service';
import { CartService } from '../../services/cart/cart.service';
import { of } from 'rxjs';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgForOf, MainContentItemComponent, RouterLink, NgIf, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductComponent {
  info: any;
  imageForView: number = 0;
  quantityToOrder: number = 1;
  id: any = this.route.snapshot.paramMap.get('id');
  products: any;
  selected: any;

  getInfo() {
    this.productsService.getProduct(this.id).subscribe((observer) => {
      this.info = observer;
    });
  }

  changeQuantityToOrder(way: '+' | '-') {
    if (way == '-' && this.quantityToOrder !== 0) {
      this.quantityToOrder--;
    } else if (way == '+') {
      this.quantityToOrder++;
    }
  }

  pushToSelected() {
    this.selectedService.addToSelected(this.info);
  }

  addToCart() {
    this.cartService.changeQuantityOfItem(this.info, this.quantityToOrder);
  }

  getProducts() {
    this.productsService
      .getProducts()
      .subscribe((products: any) => (this.products = products.products));
  }

  getSelected() {
    this.selectedService.getSelectedItems();
    of(this.selectedService.selected).subscribe(
      (observer) => (this.selected = observer)
    );
  }

  ngOnInit() {
    register()
    this.getInfo();
    this.getProducts()
    this.getSelected()
  }

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private selectedService: SelectedItems,
    private cartService: CartService
  ) {}
}
