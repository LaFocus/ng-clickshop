import { NgForOf } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'main-intro',
  standalone: true,
  imports: [],
  templateUrl: './main-intro.component.html',
  styleUrl: './main-intro.component.scss',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MainIntroComponent {
  ngAfterViewInit(): void {
    register()
  }
}
