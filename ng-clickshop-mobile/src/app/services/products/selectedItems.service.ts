import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectedItems {
  selected: any;

  getSelectedItems() {
    this.selected = JSON.parse(localStorage.getItem('selected') || '[]')
  }

  addToSelected(item: any) {
    this.selected = JSON.parse(localStorage.getItem('selected') || '[]');

    for (let i = 0; i <= this.selected.length; i++) {
      const element = this.selected[i];
      
      if (i == this.selected.length) {
        this.selected.push(item);
        break;
      }
      if (element.id !== item.id) {
        continue;
      } else {
        this.selected.splice(i, 1);
        break;
      }
    }

    localStorage.setItem('selected', JSON.stringify(this.selected));
  }
}
