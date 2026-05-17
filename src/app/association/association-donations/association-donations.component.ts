import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { AssociationDataService, DonationRow } from '../association-data.service';
import { AssociationNavbarComponent } from '../../shared/association-navbar.component';

@Component({
  selector: 'app-association-donations',
  imports: [CommonModule, AssociationNavbarComponent],
  templateUrl: './association-donations.component.html',
  styleUrl: './association-donations.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssociationDonationsComponent {
  private readonly associationService = inject(AssociationDataService);

  readonly loading = signal(true);
  readonly error = signal('');
  readonly donations = signal<DonationRow[]>([]);
  readonly totalAmount = signal(0);
  readonly totalDonations = signal(0);

  constructor() {
    this.loadDonations();
  }

  loadDonations() {
    this.loading.set(true);
    this.error.set('');

    this.associationService.getDonations().subscribe({
      next: (response) => {
        this.loading.set(false);
        if (!response.success) {
          this.error.set('Impossible de charger les dons.');
          return;
        }
        this.donations.set(response.data);
        this.totalAmount.set(response.summary.total_amount);
        this.totalDonations.set(response.summary.total_donations);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Impossible de charger les dons.');
      }
    });
  }

  donorLabel(donation: DonationRow): string {
    if (donation.anonymous) {
      return 'Anonyme';
    }
    return donation.donor_name || donation.donor_email || 'Anonyme';
  }
}
