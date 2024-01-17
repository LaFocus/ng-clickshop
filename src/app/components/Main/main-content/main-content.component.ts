import { Component } from '@angular/core';
import { MainContentFilterComponent } from './main-content-filter/main-content-filter.component';
import { MainContentItemComponent } from './main-content-item/main-content-item.component';
import { MainContentMoreComponent } from './main-content-more/main-content-more.component';
import { ProductsService } from '../../../services/products/products.service';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'main-content',
  standalone: true,
  imports: [
    MainContentItemComponent,
    MainContentFilterComponent,
    MainContentMoreComponent,
    NgForOf,
    CommonModule,
    NgxPaginationModule,
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
  p: number = 1

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