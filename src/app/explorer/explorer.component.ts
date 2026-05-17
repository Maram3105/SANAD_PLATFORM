import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal, effect, Injector, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { NavbarComponent } from '../shared/navbar.component';
import { LoggedInNavbarComponent } from '../shared/logged-in-navbar.component';
import { AssociationNavbarComponent } from '../shared/association-navbar.component';
import { AuthService } from '../auth/auth.service';
import { UserDataService } from '../user/user-data.service';
import { UserRole } from '../auth/auth.models';

interface Request {
  id: number;
  item_key?: string;
  item_type?: 'request' | 'campaign';
  association_id?: number | null;
  title: string;
  description: string;
  organization_name: string;
  location: string;
  category_name: string;
  urgency: 'low' | 'medium' | 'high';
  collected_amount: number;
  target_amount: number;
  image_url?: string;
  needs_money?: boolean;
  needs_object?: boolean;
  needs_service?: boolean;
}

@Component({
  selector: 'app-explorer',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NavbarComponent,
    LoggedInNavbarComponent,
    AssociationNavbarComponent
  ],
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExplorerComponent implements OnInit {
  private readonly userData = inject(UserDataService);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly role = signal<UserRole | null>(null);
  readonly isLoggedIn = signal(false);
  readonly isAssociation = computed(() => this.role() === 'association');

  readonly searchQuery = signal('');
  readonly selectedCategory = signal('');
  readonly selectedLocation = signal('');
  readonly selectedUrgency = signal('');
  readonly sortBy = signal<'recent' | 'most-funded' | 'most-urgent'>('recent');

  readonly categories = ['Alimentation', 'Santé', 'Éducation', 'Logement', 'Emploi', 'Infrastructure'];
  readonly locations = ['Tunis', 'Sfax', 'Sousse', 'Ariana', 'Ben Arous', 'Manouba'];
  readonly urgencies = ['Basse', 'Moyenne', 'Haute'];

  readonly allRequests = signal<Request[]>([]);
  readonly isLoading = signal(false);

  readonly favoriteIds = signal(new Set<number>());

  readonly filteredRequests = computed(() => {
    return this.allRequests();
  });

  readonly requests = this.filteredRequests;

  private readonly injector = inject(Injector);

  constructor() {
    this.isLoggedIn.set(Boolean(this.auth.getToken()));
    this.role.set(this.auth.getRole() as UserRole | null);
  }

  ngOnInit(): void {
    if (this.isLoggedIn() && this.isAssociation()) {
      this.router.navigateByUrl('/association/explorer');
      return;
    }

    if (this.isLoggedIn() && !this.isAssociation()) {
      this.loadFavorites();
    }

    // Effect to reload requests when filters or sorting change
    effect(() => {
      // Track signals
      this.searchQuery();
      this.selectedCategory();
      this.selectedLocation();
      this.selectedUrgency();
      this.sortBy();
      
      console.log('Explorer: Filters changed, reloading requests...');
      this.loadRequests();
    }, { injector: this.injector });
  }

  loadRequests() {
    this.isLoading.set(true);
    const params = {
      search: this.searchQuery(),
      category: this.selectedCategory(),
      location: this.selectedLocation(),
      urgency: this.mapUrgencyToApi(this.selectedUrgency()),
      sort: this.sortBy()
    };

    // We need to add a proper getRequests method to UserDataService that takes these params
    this.userData.getRequestsWithParams(params).subscribe({
      next: (response: any) => {
        console.log('API RESPONSE (Requests):', response); // DEBUG
        if (response.status === 'success' || response.success) {
          const data = response.data || response;
          console.log('Explorer first request image_url:', data[0]?.image_url);
          this.allRequests.set(data);
        } else if (Array.isArray(response)) {
          console.log('Explorer first request image_url (array):', response[0]?.image_url);
          this.allRequests.set(response);
        }
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  private mapUrgencyToApi(label: string): string {
    const map: Record<string, string> = { 'Basse': 'low', 'Moyenne': 'medium', 'Haute': 'high' };
    return map[label] || '';
  }

  loadFavorites() {
    if (!this.auth.getToken()) {
      return;
    }

    this.userData.getFavorites().subscribe({
      next: (response) => {
        if (response.success) {
          this.favoriteIds.set(new Set(response.data.map((item) => item.request_id)));
        }
      }
    });
  }

  toggleFavorite(requestId: number) {
    if (!this.auth.getToken()) {
      return;
    }

    if (this.favoriteIds().has(requestId)) {
      this.userData.removeFavorite(requestId).subscribe({
        next: (response) => {
          if (response.success) {
            const next = new Set(this.favoriteIds());
            next.delete(requestId);
            this.favoriteIds.set(next);
          }
        }
      });
      return;
    }

    this.userData.addFavorite(requestId).subscribe({
      next: (response) => {
        if (response.success) {
          const next = new Set(this.favoriteIds());
          next.add(requestId);
          this.favoriteIds.set(next);
        }
      }
    });
  }

  getProgressPercent(progress: number, target: number): number {
    if (!target) {
      return 0;
    }
    return Math.min(100, Math.round((progress / target) * 100));
  }

  getUrgencyLabel(urgency: 'low' | 'medium' | 'high'): string {
    const labels = { low: 'Basse', medium: 'Moyenne', high: 'Haute' };
    return labels[urgency];
  }

  getImageUrl(path?: string | null): string | null {
    return this.userData.imageUrl(path);
  }

  clearFilters() {
    this.searchQuery.set('');
    this.selectedCategory.set('');
    this.selectedLocation.set('');
    this.selectedUrgency.set('');
    this.sortBy.set('recent');
  }

  handleDonation(requestId?: number) {
    if (!this.auth.isAuthenticated()) {
      this.auth.redirectUrl = requestId ? `/donate?requestId=${requestId}` : '/donate';
      this.router.navigateByUrl('/auth/login');
      return;
    }
    
    if (requestId) {
      this.router.navigate(['/donate'], { queryParams: { requestId } });
    } else {
      this.router.navigate(['/donate']);
    }
  }

  handleRequestHelp() {
    console.log('CLICK WORKING - Requesting help from Hero');
    if (!this.auth.isAuthenticated()) {
      this.auth.redirectUrl = '/requests/new';
      this.router.navigate(['/auth/login'], { queryParams: { reason: 'publish' } });
      return;
    }
    this.router.navigate(['/requests/new']);
  }

  proposeObject(requestId: number) {
    if (!this.auth.isAuthenticated()) {
      this.auth.redirectUrl = `/request-detail/${requestId}?action=propose-object`;
      this.router.navigateByUrl('/auth/login');
      return;
    }
    this.router.navigate(['/request-detail', requestId], { queryParams: { action: 'propose-object' } });
  }

  proposeService(requestId: number) {
    if (!this.auth.isAuthenticated()) {
      this.auth.redirectUrl = `/request-detail/${requestId}?action=propose-service`;
      this.router.navigateByUrl('/auth/login');
      return;
    }
    this.router.navigate(['/request-detail', requestId], { queryParams: { action: 'propose-service' } });
  }

  openRequest(requestId: number) {
    const item = this.requests().find((request) => request.id === requestId);
    if (item?.item_type === 'campaign') {
      this.openInitiative(item);
      return;
    }
    this.router.navigate(['/request-detail', requestId]);
  }

  openInitiative(request: Request) {
    if (request.item_type === 'campaign') {
      this.router.navigate(['/request-detail', `campaign-${request.id}`]);
      return;
    }
    this.router.navigate(['/request-detail', request.id]);
  }

  collaborate(request: Request) {
    this.router.navigate(['/request-detail', request.id], {
      queryParams: { action: 'collaborer' }
    });
  }

  supportRequest(request: Request) {
    this.router.navigate(['/request-detail', request.id], {
      queryParams: { action: 'soutenir' }
    });
  }

  takeOwnership(request: Request) {
    this.router.navigate(['/request-detail', request.id], {
      queryParams: { action: 'prendre-en-charge' }
    });
  }

  createCampaignFromRequest(request: Request) {
    this.router.navigate(['/association/campaigns/new'], {
      queryParams: { parentRequestId: request.id }
    });
  }

  contactRequester(request: Request) {
    const subject = encodeURIComponent(`Demande ${request.title}`);
    window.location.href = `mailto:support@sanad.tn?subject=${subject}`;
  }
}
