import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoggedInNavbarComponent } from '../../shared/logged-in-navbar.component';
import { FavoriteRequest, UserDataService } from '../../user/user-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, LoggedInNavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  userName = 'Utilisateur';

  stats = [
    { label: 'Total dons effectues', value: '0 DT', trend: '0 dons', icon: 'fa-wallet', tone: 'primary' },
    { label: 'Demandes creees', value: '0', trend: '0 actives', icon: 'fa-file-alt', tone: 'soft' },
    { label: 'Demandes aidees', value: '0', trend: 'Impact stable', icon: 'fa-hand-holding-heart', tone: 'soft' }
  ];

  quickActions = [
    {
      title: 'Publier une demande',
      description: 'Lancez une initiative pour obtenir un soutien rapide.',
      link: '/requests/new',
      icon: 'fa-paper-plane'
    },
    {
      title: 'Explorer les demandes',
      description: 'Decouvrez les urgences et les causes a soutenir.',
      link: '/explorer',
      icon: 'fa-compass'
    },
    {
      title: 'Faire un don',
      description: 'Contribuez en quelques clics et suivez votre impact.',
      link: '/donate',
      icon: 'fa-heart'
    }
  ];

  activities: any[] = [];

  savedRequests: Array<{
    requestId: number;
    title: string;
    location: string;
    progress: number;
    donors: number;
  }> = [];

  constructor(
    private userData: UserDataService,
    private auth: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.userName = this.auth.getFullName() || 'Utilisateur';

    this.userData.getDashboard().subscribe({
      next: (response) => {
        if (response.success) {
          this.userName = response.data.profile.fullName?.trim() || this.auth.getFullName() || 'Utilisateur';
          this.auth.setFullName(this.userName);
          this.updateDashboardStats(response.data.stats);
          this.activities = response.data.notifications.map((item) => ({
            type: 'notification',
            title: item.title,
            meta: item.detail
          }));
          this.cdr.detectChanges();
        }
      },
      error: () => {
        this.activities = [];
        this.cdr.detectChanges();
      }
    });

    this.userData.getFavorites().subscribe({
      next: (response) => {
        if (response.success) {
          this.savedRequests = response.data.map((favorite: FavoriteRequest) => {
            const target = Number(favorite.target_amount) || 1;
            const collected = Number(favorite.collected_amount) || 0;
            const progress = Math.min(100, Math.round((collected / target) * 100));
            return {
              requestId: favorite.request_id,
              title: favorite.title,
              location: favorite.location,
              progress,
              donors: Number(favorite.donors_count) || 0
            };
          });
          this.cdr.detectChanges();
        }
      }
    });
  }

  private updateDashboardStats(stats: {
    total_donations: number;
    total_amount: number;
    requests_supported: number;
    total_requests: number;
    active_requests: number;
    pending_requests: number;
  }) {
    this.stats = [
      {
        label: 'Total dons effectues',
        value: `${Math.round(stats.total_amount)} DT`,
        trend: `${stats.total_donations} dons`,
        icon: 'fa-wallet',
        tone: 'primary'
      },
      {
        label: 'Demandes creees',
        value: String(stats.total_requests),
        trend: `${stats.active_requests} actives, ${stats.pending_requests} en attente`,
        icon: 'fa-file-alt',
        tone: 'soft'
      },
      {
        label: 'Demandes aidees',
        value: String(stats.requests_supported),
        trend: 'Impact en hausse',
        icon: 'fa-hand-holding-heart',
        tone: 'soft'
      }
    ];
  }
}
