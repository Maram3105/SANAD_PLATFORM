import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="admin-nav">
      <div class="admin-nav__container">
        <div class="admin-nav__brand">
          <a routerLink="/admin-dashboard" class="brand">
            <img src="assets/logo.png" alt="Sanad" class="brand__logo">
            <span class="brand__text">Sanad Admin</span>
          </a>
        </div>

        <div class="admin-nav__links">
          <a routerLink="/admin-dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            <span class="nav-icon"><i class="fas fa-chart-line"></i></span> Tableau de bord
          </a>
          <a routerLink="/admin/associations" routerLinkActive="active">
            <span class="nav-icon"><i class="fas fa-building"></i></span> Validation association
          </a>
          <a routerLink="/admin/requests" routerLinkActive="active">
            <span class="nav-icon"><i class="fas fa-clipboard-list"></i></span> Demandes
          </a>
          <a routerLink="/admin/users" routerLinkActive="active">
            <span class="nav-icon"><i class="fas fa-users-cog"></i></span> Utilisateurs
          </a>
          <a routerLink="/admin/donations" routerLinkActive="active">
            <span class="nav-icon"><i class="fas fa-hand-holding-usd"></i></span> Dons
          </a>
        </div>

        <div class="admin-nav__actions">
          <button class="logout-button" type="button" (click)="logout()">
            <span class="logout-button__avatar">A</span>
            <span class="logout-button__name">Admin</span>
            <span class="logout-button__icon"><i class="fas fa-sign-out-alt"></i></span>
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    :host { display: block; }

    .admin-nav {
      position: sticky;
      top: 0;
      z-index: 120;
      background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%);
      border-bottom: 1px solid rgba(255,255,255,0.1);
      box-shadow: 0 4px 24px rgba(15,23,42,0.25);
    }

    .admin-nav__container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 24px;
      height: 64px;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 24px;
    }

    .admin-nav__brand {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      color: #fff;
      text-decoration: none;
    }

    .brand__logo {
      height: 32px;
      width: auto;
      object-fit: contain;
    }

    .brand__text {
      font-family: var(--font-heading);
      font-size: 16px;
      letter-spacing: 0.3px;
    }

    .admin-badge {
      font-size: 11px;
      font-weight: 600;
      background: rgba(239,68,68,0.25);
      color: #fca5a5;
      padding: 4px 10px;
      border-radius: 999px;
      border: 1px solid rgba(239,68,68,0.3);
      letter-spacing: 0.3px;
      white-space: nowrap;
    }

    .admin-nav__links {
      display: flex;
      justify-content: center;
      gap: 4px;
    }

    .admin-nav__links a {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: rgba(255,255,255,0.7);
      font-size: 14px;
      font-weight: 500;
      padding: 8px 14px;
      border-radius: 8px;
      text-decoration: none;
      transition: background 0.2s, color 0.2s;
    }

    .admin-nav__links a:hover {
      background: rgba(255,255,255,0.12);
      color: #fff;
    }

    .admin-nav__links a.active {
      background: rgba(255,255,255,0.18);
      color: #fff;
      font-weight: 600;
    }

    .nav-icon { font-size: 15px; }

    .admin-nav__actions { flex-shrink: 0; }

    .logout-button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 14px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.3);
      background: rgba(255,255,255,0.1);
      color: #fff;
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      transition: background 0.2s;
    }

    .logout-button:hover { background: rgba(255,255,255,0.2); }

    .logout-button__avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: rgba(255,255,255,0.25);
      font-size: 12px;
      font-weight: 700;
    }

    .logout-button__icon { opacity: 0.7; }

    @media (max-width: 960px) {
      .admin-nav__container { grid-template-columns: 1fr; height: auto; padding: 12px 24px; gap: 12px; }
      .admin-nav__brand, .admin-nav__links, .admin-nav__actions { justify-content: center; }
      .admin-nav__links { flex-wrap: wrap; }
      .admin-badge { display: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminNavbarComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  logout() {
    this.auth.clearToken();
    this.router.navigateByUrl('/auth/login');
  }
}
