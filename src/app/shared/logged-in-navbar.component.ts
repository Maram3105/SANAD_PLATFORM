import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, OnInit, signal } from '@angular/core';
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

          <div class="profile-menu" [class.open]="isProfileMenuOpen">
            <button class="profile-trigger" type="button" (click)="toggleProfileMenu($event)" aria-haspopup="menu" [attr.aria-expanded]="isProfileMenuOpen">
              <span class="avatar">{{ getInitials() }}</span>
              <span class="profile-name">{{ getDisplayName() }}</span>
              <span class="chevron"><i class="fas fa-chevron-down"></i></span>
            </button>
            <div class="dropdown" role="menu" (click)="$event.stopPropagation()">
              <button type="button" class="dropdown-item" role="menuitem" (click)="navigateTo('/profile')">Mon profil</button>
              <button type="button" class="dropdown-item" role="menuitem" (click)="navigateTo('/my-donations')">Mes dons</button>
              <button type="button" class="dropdown-item" role="menuitem" (click)="navigateTo('/my-requests')">Mes demandes</button>
              <button type="button" class="dropdown-item" role="menuitem" (click)="navigateTo('/activity')">Historique activite</button>
              <div class="dropdown-divider"></div>
              <button type="button" class="dropdown-item danger" role="menuitem" (click)="logout()">
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
  isProfileMenuOpen = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private userData: UserDataService,
    private cdr: ChangeDetectorRef
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
          this.cdr.detectChanges();
        }
      },
      error: () => {
        this.unreadCount = 0;
        this.cdr.detectChanges();
      }
    });

    this.userData.getProfile().subscribe({
      next: (response) => {
        if (response.success) {
          this.currentUser.set(response.data);
          this.auth.setFullName(response.data.fullName);
          this.cdr.detectChanges();
        }
      },
      error: () => {
        this.cdr.detectChanges();
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

  toggleProfileMenu(event: MouseEvent) {
    event.stopPropagation();
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  navigateTo(path: string) {
    this.isProfileMenuOpen = false;
    this.router.navigateByUrl(path);
  }

  @HostListener('document:click')
  closeProfileMenu() {
    this.isProfileMenuOpen = false;
  }

  logout() {
    this.isProfileMenuOpen = false;
    this.auth.clearToken();
    this.router.navigateByUrl('/auth/login');
  }
}
