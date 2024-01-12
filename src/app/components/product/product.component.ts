import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { NgForOf } from '@angular/common';
import { MainContentItemComponent } from '../Main/main-content/main-content-item/main-content-item.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgForOf, MainContentItemComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductComponent {
  info: any;

  getInfo() {
    this.productsService.getProduct(1).subscribe((item) => {
      this.info = item;
    });
  }

  ngOnInit() {
    this.getInfo();
  }

  constructor(private productsService: ProductsService) {}
}
