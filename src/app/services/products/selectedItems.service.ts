import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectedItems {
  addToSelected(item: any) {
    let selected: any;
    selected = JSON.parse(localStorage.getItem('selected') || '[]');
    selected.push(item);
    localStorage.setItem('selected', JSON.stringify(selected));
  }
}
