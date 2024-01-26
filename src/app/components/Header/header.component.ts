import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { CartService } from '../../services/cart/cart.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  counter: number = 0;

  serCounter() {
    this.cartService.getcartItems()
    of(this.cartService.amountOfNames).subscribe((observer: any) => this.counter = observer);
  }

  ngOnInit() {
    this.serCounter();
  }

  constructor(private cartService: CartService) {}
}
