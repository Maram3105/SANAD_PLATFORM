import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  constructor(private userData: UserDataService) {}

  ngOnInit(): void {
    this.userData.getMyDonations().subscribe({
      next: (response) => {
        if (response.success) {
          this.donations = response.data;
          this.stats = response.stats;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
