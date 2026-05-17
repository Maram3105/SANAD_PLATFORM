import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar.component';
import { UserDataService } from '../user/user-data.service';

interface RequestCard {
  id: number;
  title: string;
  description: string;
  organization_name: string;
  location: string;
  collected_amount: number;
  target_amount: number;
  category_name: string;
  image_url?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featuredRequests: RequestCard[] = [];
  globalStats = {
    total_donations: 0,
    persons_helped: 0,
    active_associations: 0
  };
  loading = true;

  constructor(private userData: UserDataService) {}

  ngOnInit() {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    this.userData.getRequests(6).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          this.featuredRequests = response.data;
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });

    this.userData.getGlobalStats().subscribe({
      next: (response) => {
        if (response.success) {
          this.globalStats = response.data;
        }
      }
    });
  }

  getProgressPercent(progress: number, target: number): number {
    if (!target) return 0;
    return Math.round((progress / target) * 100);
  }

  getImageUrl(path?: string): string {
    return this.userData.imageUrl(path) || '/assets/images/placeholders/request-placeholder.svg';
  }
}
