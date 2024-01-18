import { NgForOf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

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

  @Output() clickEvent = new EventEmitter<string> ()
  emitClick(title: string) {
    this.clickEvent.emit(title)
  }
}
