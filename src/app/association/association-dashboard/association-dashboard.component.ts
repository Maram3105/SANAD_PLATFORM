import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  AssociationDataService,
  DashboardDonation,
  DashboardStats,
  DashboardUpdate
} from '../association-data.service';
import { AssociationNavbarComponent } from '../../shared/association-navbar.component';

@Component({
  selector: 'app-association-dashboard',
  imports: [CommonModule, RouterLink, AssociationNavbarComponent],
  templateUrl: './association-dashboard.component.html',
  styleUrl: './association-dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssociationDashboardComponent {
  private readonly associationService = inject(AssociationDataService);

  readonly loading = signal(true);
  readonly stats = signal<DashboardStats | null>(null);
  readonly recentDonations = signal<DashboardDonation[]>([]);
  readonly recentUpdates = signal<DashboardUpdate[]>([]);
  readonly error = signal('');

  readonly orgName = signal('Association');
  readonly coverUrl = signal<string | null>(null);

  readonly formattedTotal = computed(() => {
    const value = this.stats()?.total_donations ?? 0;
    return value;
  });

  constructor() {
    this.loadDashboard();
    this.loadProfile();
  }

  loadProfile() {
    this.associationService.getProfile().subscribe({
      next: (res) => {
        if (res.success) {
          this.orgName.set(res.data.organization_name);
          this.coverUrl.set(this.associationService.imageUrl(res.data.cover_url));
        }
      }
    });
  }

  loadDashboard() {
    this.loading.set(true);
    this.error.set('');

    this.associationService.getDashboard().subscribe({
      next: (response) => {
        this.loading.set(false);
        if (!response.success) {
          this.error.set('Impossible de charger le tableau de bord.');
          return;
        }
        this.stats.set(response.data.stats);
        this.recentDonations.set(response.data.recent_donations || []);
        this.recentUpdates.set(response.data.recent_updates || []);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Impossible de charger le tableau de bord.');
      }
    });
  }

  donationLabel(donation: DashboardDonation): string {
    if (donation.anonymous) {
      return 'Anonyme';
    }
    return donation.donor_name || donation.donor_email || 'Anonyme';
  }
}
