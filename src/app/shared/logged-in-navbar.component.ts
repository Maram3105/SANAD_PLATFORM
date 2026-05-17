import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserDataService } from '../user/user-data.service';

@Component({
  selector: 'app-logged-in-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-left">
          <a routerLink="/dashboard" class="logo">
            <img src="assets/logo.png" alt="Sanad Logo" class="logo-img">
            <span class="logo-text">Sanad</span>
          </a>

          <div class="navbar-menu">
            <a
              routerLink="/dashboard"
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


        <div class="navbar-right">
          <a
            routerLink="/notifications"
            routerLinkActive="active"
            class="icon-button"
            aria-label="Notifications"
          >
            <i class="fas fa-bell"></i>
            <span class="notification-badge" *ngIf="unreadCount > 0">
              {{ unreadCount > 99 ? '99+' : unreadCount }}
            </span>
          </a>

          <div class="profile-menu">
            <button class="profile-trigger" type="button">
              <span class="avatar">{{ getInitials() }}</span>
              <span class="profile-name">{{ getDisplayName() }}</span>
              <span class="chevron"><i class="fas fa-chevron-down"></i></span>
            </button>
            <div class="dropdown">
              <a routerLink="/profile" class="dropdown-item">Mon profil</a>
              <a routerLink="/my-donations" class="dropdown-item">Mes dons</a>
              <a routerLink="/my-requests" class="dropdown-item">Mes demandes</a>
              <a routerLink="/activity" class="dropdown-item">Historique activite</a>
              <div class="dropdown-divider"></div>
              <button type="button" class="dropdown-item danger" (click)="logout()">
                Deconnexion
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './logged-in-navbar.component.css'
})
export class LoggedInNavbarComponent implements OnInit {
  unreadCount = 0;
  currentUser = signal<any>(null);

  constructor(
    private auth: AuthService,
    private router: Router,
    private userData: UserDataService
  ) {}

  ngOnInit(): void {
    const storedName = this.auth.getFullName();
    if (storedName) {
      this.currentUser.set({ fullName: storedName });
    }

    this.userData.getNotifications().subscribe({
      next: (response) => {
        if (response.success) {
          this.unreadCount = response.data.filter((item) => !item.isRead).length;
        }
      }
    });

    this.userData.getProfile().subscribe({
      next: (response) => {
        if (response.success) {
          this.currentUser.set(response.data);
          this.auth.setFullName(response.data.fullName);
        }
      }
    });
  }

  getInitials(): string {
    const displayName = this.getDisplayName();
    if (displayName === 'Utilisateur') return 'U';
    return displayName.split(' ').map((n: string) => n[0]).join('').toUpperCase().substring(0, 2);
  }

  getDisplayName(): string {
    return this.currentUser()?.fullName?.trim() || 'Utilisateur';
  }

  logout() {
    this.auth.clearToken();
    this.router.navigateByUrl('/auth/login');
  }
}
