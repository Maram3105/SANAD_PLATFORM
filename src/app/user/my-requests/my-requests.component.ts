import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoggedInNavbarComponent } from '../../shared/logged-in-navbar.component';
import { UserDataService, UserRequest } from '../user-data.service';

@Component({
  selector: 'app-my-requests',
  standalone: true,
  imports: [CommonModule, RouterLink, LoggedInNavbarComponent],
  templateUrl: './my-requests.component.html',
  styleUrl: './my-requests.component.css'
})
export class MyRequestsComponent implements OnInit {
  requests: UserRequest[] = [];
  loading = true;

  constructor(private userData: UserDataService) {}

  ngOnInit(): void {
    this.userData.getMyRequests().subscribe({
      next: (response) => {
        if (response.success) {
          this.requests = response.data;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  getProgress(request: UserRequest): number {
    const target = Number(request.target_amount) || 1;
    const collected = Number(request.collected_amount) || 0;
    return Math.min(100, Math.round((collected / target) * 100));
  }

  getAmountLabel(request: UserRequest): string {
    const collected = Math.round(Number(request.collected_amount) || 0);
    const target = Math.round(Number(request.target_amount) || 0);
    return `${collected} / ${target} DT`;
  }
}
