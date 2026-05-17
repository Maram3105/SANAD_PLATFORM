import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="navbar-container">
        <!-- Left Section: Logo + Navigation -->
        <div class="navbar-left">
          <!-- Logo -->
          <a routerLink="/" class="logo">
            <img src="assets/logo.png" alt="Sanad Logo" class="logo-img">
            <span class="logo-text">Sanad</span>
          </a>

          <!-- Navigation Links -->
          <div class="navbar-menu">
            <a 
              routerLink="/" 
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="nav-link"
            >
              Accueil
            </a>
            <a 
              routerLink="/explorer" 
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="nav-link"
            >
              Explorer
            </a>
            <a 
              routerLink="/associations" 
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="nav-link"
            >
              Associations
            </a>
            <a 
              routerLink="/free-donations" 
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="nav-link"
            >
              Dons libres
            </a>
          </div>
        </div>

        <!-- Right Section: Auth Buttons -->
        <div class="navbar-auth">
          <a routerLink="/auth/register" class="btn-cta">S'inscrire</a>
          <a routerLink="/auth/login" class="btn-link">Se connecter</a>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {}
