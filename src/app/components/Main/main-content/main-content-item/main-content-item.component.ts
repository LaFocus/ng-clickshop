import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'main-content-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-content-item.component.html',
  styleUrl: './main-content-item.component.scss',
})
export class MainContentItemComponent {
  @Input() item: any;

  roundValue = (value: number) => {
    return Math.floor(value);
  };
}
