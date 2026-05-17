import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoggedInNavbarComponent } from '../../shared/logged-in-navbar.component';
import { FavoriteRequest, UserDataService } from '../user-data.service';

@Component({
  selector: 'app-saved-requests',
  standalone: true,
  imports: [CommonModule, RouterLink, LoggedInNavbarComponent],
  templateUrl: './saved-requests.component.html',
  styleUrl: './saved-requests.component.css'
})
export class SavedRequestsComponent implements OnInit {
  favorites: FavoriteRequest[] = [];
  loading = true;

  constructor(private userData: UserDataService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites() {
    this.userData.getFavorites().subscribe({
      next: (response) => {
        if (response.success) {
          this.favorites = response.data;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  removeFavorite(requestId: number) {
    this.userData.removeFavorite(requestId).subscribe({
      next: (response) => {
        if (response.success) {
          this.favorites = this.favorites.filter((item) => item.request_id !== requestId);
        }
      }
    });
  }

  getProgress(item: FavoriteRequest): number {
    const target = Number(item.target_amount) || 1;
    const collected = Number(item.collected_amount) || 0;
    return Math.min(100, Math.round((collected / target) * 100));
  }
}
