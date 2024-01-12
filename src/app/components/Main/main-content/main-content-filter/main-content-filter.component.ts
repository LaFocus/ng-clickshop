import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'main-content-filter',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './main-content-filter.component.html',
  styleUrls: ['./main-content-filter.component.scss'],
})
export class MainContentFilterComponent {
  categories: string[] = [
    'smartphones',
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
  ];
}
