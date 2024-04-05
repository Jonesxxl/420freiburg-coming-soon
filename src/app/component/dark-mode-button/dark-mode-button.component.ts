import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './dark-mode-button.component.html',
  styleUrl: './dark-mode-button.component.css'
})
export class DarkModeButtonComponent {
  // Determine if dark mode is enabled based on user's preference or system preference
  isDarkMode: boolean = localStorage.getItem('color-theme') === 'dark' ||
                        (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

  constructor() {
    this.updateBodyClass();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('color-theme', this.isDarkMode ? 'dark' : 'light');
    this.updateBodyClass();
  }

  private updateBodyClass(): void {
    document.body.classList.toggle('dark', this.isDarkMode);
  }
}
