import { Component } from '@angular/core';
import { MainContentFilterComponent } from './main-content-filter/main-content-filter.component';
import { MainContentItemComponent } from './main-content-item/main-content-item.component';
import { MainContentPaginationComponent } from './main-content-pagination/main-content-pagination.component';
import { MainContentMoreComponent } from './main-content-more/main-content-more.component';
import { ProductsService } from '../../../services/products/products.service';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'main-content',
  standalone: true,
  imports: [
    MainContentItemComponent,
    MainContentFilterComponent,
    MainContentPaginationComponent,
    MainContentMoreComponent,
    NgForOf,
    CommonModule
  ],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent {
  categories: string[] = [
    'smartphones',
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
  ];

  products: any = [];

  getProducts() {
    this.productsService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  ngOnInit() {
    this.getProducts();
  }

  constructor(private productsService: ProductsService) {}
}