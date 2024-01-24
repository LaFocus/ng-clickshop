import { Component } from '@angular/core';
import { MainIntroComponent } from './main-intro/main-intro.component';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainIntroComponent, MainContentComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})

export class MainComponent {}
