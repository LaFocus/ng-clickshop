import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { NgForOf, NgIf } from '@angular/common';
import { MainContentItemComponent } from '../Main/main-content/main-content-item/main-content-item.component';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgForOf, MainContentItemComponent, RouterLink, NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductComponent {
  info: any;
  imageForView: number = 0
  quantityToOrder: number = 0

  getInfo() {
    const id: any = this.route.snapshot.paramMap.get('id')
    this.productsService.getProduct(id).subscribe((item) => {
      this.info = item;
    });
  }

  changeQuantityToOrder(way: '+' | '-') {
    if (way == '-' && this.quantityToOrder !== 0) {
      this.quantityToOrder--
    }else if (way == '+') {
      this.quantityToOrder++
    }
  }

  ngOnInit() {
    this.getInfo();
  }

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}
}
