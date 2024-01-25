import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SelectedItems } from '../../services/products/selectedItems.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-selected',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './selected.component.html',
  styleUrl: './selected.component.scss'
})

export class SelectedComponent {
  selectedProducts: any[] = []


  getSelectedItems() {
    of(this.selectedService.selected).subscribe((observer) => {
      this.selectedProducts = observer
    })
  }

  addItemToSelected(item: any) {
    this.selectedService.addToSelected(item)
    this.getSelectedItems()
  }


  ngOnInit() {
    this.selectedService.getSelectedItems()
    this.getSelectedItems()
  }

  constructor(
    private selectedService: SelectedItems
  ) {}
}
