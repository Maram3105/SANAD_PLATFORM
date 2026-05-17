import { Component, OnInit, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../shared/navbar.component';
import { LoggedInNavbarComponent } from '../shared/logged-in-navbar.component';
import { AssociationNavbarComponent } from '../shared/association-navbar.component';
import { UserDataService } from '../user/user-data.service';
import { AuthService } from '../auth/auth.service';

interface Association {
  id: number;
  organization_name: string;
  logo_url?: string;
  cover_url?: string;
  location: string;
  category_name: string;
  description: string;
  verified: boolean;
  campaign_count: number;
  total_donations: number;
}

@Component({
  selector: 'app-associations',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NavbarComponent, LoggedInNavbarComponent, AssociationNavbarComponent],
  templateUrl: './associations.component.html',
  styleUrl: './associations.component.css'
})
export class AssociationsComponent implements OnInit {
  
  readonly searchQuery = signal('');
  readonly selectedCategory = signal('');
  readonly selectedLocation = signal('');
  readonly sortBy = signal('name');

  readonly categories = ['Alimentation', 'Santé', 'Éducation', 'Logement', 'Emploi', 'Infrastructure'];
  readonly locations = ['Tunis', 'Sfax', 'Sousse', 'Ariana', 'Ben Arous', 'Manouba'];

  readonly allAssociations = signal<Association[]>([]);
  readonly filteredAssociations = signal<Association[]>([]);
  readonly loading = signal(true);

  readonly isLoggedIn = signal(false);
  readonly isAssociation = signal(false);

  constructor(
    private userData: UserDataService, 
    private auth: AuthService,
    private router: Router
  ) {
    this.isLoggedIn.set(this.auth.isAuthenticated());
    this.isAssociation.set(this.auth.getRole() === 'association');

    // Effect to reactively load associations
    effect(() => {
      // Track signals
      this.searchQuery();
      this.selectedCategory();
      this.selectedLocation();
      this.sortBy();
      
      this.applyFilters();
    }, { allowSignalWrites: true });
  }

  ngOnInit() {
    // Initial fetch happens via the effect
  }

  openProfile(id: number) {
    this.router.navigate(['/association-detail', id]);
  }

  applyFilters() {
    this.loading.set(true);
    const params = {
      search: this.searchQuery(),
      category: this.selectedCategory(),
      location: this.selectedLocation()
    };

    this.userData.getAssociations(params).subscribe({
      next: (response: any) => {
        let data: Association[] = [];
        if (response.status === 'success' || response.success) {
          data = response.data || response;
        } else if (Array.isArray(response)) {
          data = response;
        }

        this.allAssociations.set(data);
        this.sortAssociations(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  sortAssociations(data: Association[]) {
    const sorted = [...data];
    switch (this.sortBy()) {
      case 'name':
        sorted.sort((a, b) => a.organization_name.localeCompare(b.organization_name));
        break;
      case 'most-active':
        sorted.sort((a, b) => b.campaign_count - a.campaign_count);
        break;
      case 'most-funded':
        sorted.sort((a, b) => b.total_donations - a.total_donations);
        break;
    }
    this.filteredAssociations.set(sorted);
  }

  getLogoUrl(path?: string): string | null {
    return this.userData.imageUrl(path);
  }

  getLogoInitials(logo: string | undefined, name: string): string {
    return name.charAt(0);
  }

  clearFilters() {
    this.searchQuery.set('');
    this.selectedCategory.set('');
    this.selectedLocation.set('');
    this.sortBy.set('name');
  }
}

