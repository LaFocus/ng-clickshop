import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { CartService } from '../../services/cart/cart.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  counter: any = 0;
  isBurgerActive: boolean = false;
  serCounter() {
    this.cartService.getcartItems();
    of(this.cartService.amountOfNames).subscribe(
      (observer: any) => (this.counter = observer)
    );
  }

  ngOnInit() {
    this.cartService.watchStorage().subscribe(observer => {
      this.serCounter();
      
    })
    this.serCounter();
  }

  constructor(private cartService: CartService) {}
}
