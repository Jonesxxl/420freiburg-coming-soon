import { Component } from '@angular/core';
import { DarkModeButtonComponent } from '../dark-mode-button/dark-mode-button.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [DarkModeButtonComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
