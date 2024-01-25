import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-selected',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './selected.component.html',
  styleUrl: './selected.component.scss'
})
export class SelectedComponent {
  selectedProducts: any[] = []
  ngOnInit() {
    this.selectedProducts = JSON.parse(localStorage.getItem('selected') || '[]') 
  }

}
