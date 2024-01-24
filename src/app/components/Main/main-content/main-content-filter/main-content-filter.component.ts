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
  categories: any = [
    {
      title: 'smartphones',
      active: false
    },
    {
      title: 'laptops',
      active: false
    },
    {
      title: 'fragrances',
      active: false
    },
    {
      title: 'skincare',
      active: false
    },
    {
      title: 'groceries',
      active: false
    },
  ];

  @Output() clickEvent = new EventEmitter<string> ()
  emitClick(item: any) {
    for (let i = 0; i < this.categories.length; i++) {
      const element = this.categories[i];
      element.active = false
    }
    item.active = !item.active
    this.clickEvent.emit(item.title)
  }
}
