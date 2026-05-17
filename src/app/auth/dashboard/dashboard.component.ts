import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoggedInNavbarComponent } from '../../shared/logged-in-navbar.component';
import { FavoriteRequest, UserDataService, UserDonationStats, UserRequest } from '../../user/user-data.service';

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

  constructor(private userData: UserDataService, private auth: AuthService) {}

  ngOnInit(): void {
    this.userName = this.auth.getFullName() || 'Utilisateur';

    this.userData.getProfile().subscribe({
      next: (response) => {
        if (response.success) {
          this.userName = response.data.fullName?.trim() || this.auth.getFullName() || 'Utilisateur';
          this.auth.setFullName(this.userName);
        }
      }
    });

    this.userData.getMyDonations().subscribe({
      next: (response) => {
        if (response.success && response.stats) {
          this.updateDonationStats(response.stats);
        }
      }
    });

    this.userData.getMyRequests().subscribe({
      next: (response) => {
        if (response.success) {
          this.updateRequestStats(response.data);
        }
      }
    });

    this.userData.getNotifications().subscribe({
      next: (response) => {
        if (response.success && response.data.length > 0) {
          this.activities = response.data.map((item) => ({
            type: 'notification',
            title: item.title,
            meta: item.detail
          }));
        }
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
        }
      }
    });
  }

  private updateDonationStats(stats: UserDonationStats) {
    this.stats[0] = {
      label: 'Total dons effectues',
      value: `${Math.round(stats.total_amount)} DT`,
      trend: `${stats.total_donations} dons`,
      icon: 'fa-wallet',
      tone: 'primary'
    };

    this.stats[2] = {
      label: 'Demandes aidees',
      value: String(stats.requests_supported),
      trend: 'Impact en hausse',
      icon: 'fa-hand-holding-heart',
      tone: 'soft'
    };
  }

  private updateRequestStats(requests: UserRequest[]) {
    const activeCount = requests.filter((request) => request.status === 'active').length;
    this.stats[1] = {
      label: 'Demandes creees',
      value: String(requests.length),
      trend: `${activeCount} actives`,
      icon: 'fa-file-alt',
      tone: 'soft'
    };
  }
}
