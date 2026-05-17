import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoggedInNavbarComponent } from '../../shared/logged-in-navbar.component';
import { UserDataService, UserDonation, UserDonationStats } from '../user-data.service';

@Component({
  selector: 'app-my-donations',
  standalone: true,
  imports: [CommonModule, RouterLink, LoggedInNavbarComponent],
  templateUrl: './my-donations.component.html',
  styleUrl: './my-donations.component.css'
})
export class MyDonationsComponent implements OnInit {
  donations: UserDonation[] = [];
  stats: UserDonationStats | null = null;
  loading = true;

  constructor(
    private userData: UserDataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.userData.getMyDonations().subscribe({
      next: (response) => {
        if (response.success) {
          this.donations = response.data;
          this.stats = response.stats;
        }
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  getDonationTypeLabel(type: UserDonation['donation_type']): string {
    const labels: Record<UserDonation['donation_type'], string> = {
      request: 'Demande',
      campaign: 'Campagne',
      association: 'Association',
      platform: 'Don libre'
    };

    return labels[type] ?? 'Don';
  }

  getAverageDonation(): number {
    if (!this.stats || this.stats.total_donations === 0) {
      return 0;
    }

    return Math.round(this.stats.total_amount / this.stats.total_donations);
  }
}
