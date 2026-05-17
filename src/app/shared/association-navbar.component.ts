import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { AssociationDataService } from '../association/association-data.service';

@Component({
  selector: 'app-association-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="association-nav">
      <div class="association-nav__container">
        <div class="association-nav__brand">
          <a routerLink="/association/dashboard" class="brand">
            <img src="assets/logo.png" alt="Sanad" class="brand__logo">
            <span class="brand__text">Sanad Association</span>
          </a>
          <span class="association-nav__status" [class.pending]="status() !== 'approved'">
            {{ statusLabel() }}
          </span>
        </div>

        <div class="association-nav__links">
          <a routerLink="/association/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Tableau de bord</a>
          <a routerLink="/association/explorer" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Explorer</a>
          <a routerLink="/associations" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Associations</a>
          <a routerLink="/free-donations" routerLinkActive="active">Dons libres</a>
          <a routerLink="/association/profile" routerLinkActive="active">Profil</a>
        </div>

        <div class="association-nav__actions">
          <button class="profile-button" type="button" (click)="logout()">
            @if (logoUrl()) {
              <img [src]="logoUrl()" alt="Logo" class="profile-button__image">
            } @else {
              <span class="profile-button__avatar">{{ initials() }}</span>
            }
            <span class="profile-button__name">{{ organizationName() }}</span>
          </button>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './association-navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssociationNavbarComponent {
  private readonly associationService = inject(AssociationDataService);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly organizationName = signal('Association');
  readonly status = signal<'pending' | 'approved' | 'rejected'>('approved');
  readonly logoUrl = signal<string | null>(null);

  readonly initials = computed(() => {
    const name = this.organizationName().trim();
    return name ? name.charAt(0).toUpperCase() : 'A';
  });

  readonly statusLabel = computed(() => {
    switch (this.status()) {
      case 'pending':
        return 'Validation en cours';
      case 'rejected':
        return 'Profil rejete';
      default:
        return 'Association verifiee';
    }
  });

  constructor() {
    this.associationService.getProfile().subscribe({
      next: (response) => {
        if (response.success) {
          this.organizationName.set(response.data.organization_name);
          this.status.set(response.data.status);
          this.logoUrl.set(this.associationService.imageUrl(response.data.logo_url));
        }
      }
    });
  }

  logout() {
    this.auth.clearToken();
    this.router.navigateByUrl('/auth/login');
  }
}
