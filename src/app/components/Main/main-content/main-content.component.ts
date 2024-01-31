import { Component } from '@angular/core';
import { MainContentFilterComponent } from './main-content-filter/main-content-filter.component';
import { MainContentItemComponent } from './main-content-item/main-content-item.component';
import { MainContentMoreComponent } from './main-content-more/main-content-more.component';
import { ProductsService } from '../../../services/products/products.service';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { SelectedItems } from '../../../services/products/selectedItems.service';
import { of } from 'rxjs';

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
  selected: any
  p: number = 1;

  getProducts() {
    this.productsService
      .getProducts()
      .subscribe((products: any) => (this.products = products.products));
  }

  filterProducts(title: string) {
    this.productsService
      .filterProducts(title)
      .subscribe((products) => this.products = products);
  }

  getSelected() {
    this.selectedService.getSelectedItems()
    of(this.selectedService.selected).subscribe((observer) => this.selected = observer)
    
  }

  ngOnInit() {
    this.getProducts();
    this.getSelected()
  }

  constructor(
    private productsService: ProductsService,
    private selectedService: SelectedItems
    ) {}
}
