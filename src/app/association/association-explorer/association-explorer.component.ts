import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal, effect, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AssociationNavbarComponent } from '../../shared/association-navbar.component';
import { AuthService } from '../../auth/auth.service';
import { UserDataService } from '../../user/user-data.service';

interface RequestCard {
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
}

@Component({
  selector: 'app-association-explorer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, AssociationNavbarComponent],
  templateUrl: './association-explorer.component.html',
  styleUrl: './association-explorer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssociationExplorerComponent {
  private readonly router = inject(Router);
  private readonly auth = inject(AuthService);
  private readonly userData = inject(UserDataService);

  readonly isAssociation = signal(false);
  readonly isLoading = signal(true);
  readonly searchQuery = signal('');
  readonly selectedCategory = signal('');
  readonly selectedLocation = signal('');
  readonly selectedUrgency = signal('');
  readonly sortBy = signal<'recent' | 'most-funded' | 'most-urgent'>('recent');

  readonly categories = ['Alimentation', 'Santé', 'Éducation', 'Logement', 'Emploi', 'Infrastructure'];
  readonly locations = ['Tunis', 'Sfax', 'Sousse', 'Ariana', 'Ben Arous', 'Manouba'];
  readonly urgencies = ['Basse', 'Moyenne', 'Haute'];

  readonly allRequests = signal<RequestCard[]>([]);

  readonly filteredRequests = computed(() => {
    return this.allRequests();
  });

  readonly requests = this.filteredRequests;

  private readonly injector = inject(Injector);

  constructor() {
    this.isAssociation.set(this.auth.getRole() === 'association');

    if (!this.isAssociation()) {
      this.router.navigateByUrl('/explorer');
    }

    // Effect to reload requests when filters or sorting change
    effect(() => {
      // Track signals
      this.searchQuery();
      this.selectedCategory();
      this.selectedLocation();
      this.selectedUrgency();
      this.sortBy();
      
      console.log('Association Explorer: Filters changed, reloading requests...');
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

    this.userData.getRequestsWithParams(params).subscribe({
      next: (response: any) => {
        console.log('API RESPONSE (Association Requests):', response); // DEBUG
        if (response.status === 'success' || response.success) {
          this.allRequests.set(response.data || response);
        } else if (Array.isArray(response)) {
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

  getUrgencyLabel(urgency: 'low' | 'medium' | 'high'): string {
    switch (urgency) {
      case 'high':
        return 'Haute';
      case 'medium':
        return 'Moyenne';
      default:
        return 'Basse';
    }
  }

  getProgressPercent(progress: number, target: number): number {
    if (!target) {
      return 0;
    }
    return Math.min(100, Math.round((progress / target) * 100));
  }

  clearFilters() {
    this.searchQuery.set('');
    this.selectedCategory.set('');
    this.selectedLocation.set('');
    this.selectedUrgency.set('');
    this.sortBy.set('recent');
  }

  openRequest(requestId: number) {
    const item = this.requests().find((request) => request.id === requestId);
    if (item) {
      this.openInitiative(item);
      return;
    }
    this.router.navigate(['/association/request-detail', requestId]);
  }

  openInitiative(request: RequestCard) {
    if (request.item_type === 'campaign') {
      this.router.navigate(['/request-detail', `campaign-${request.id}`]);
      return;
    }
    this.router.navigate(['/association/request-detail', request.id]);
  }

  collaborate(request: RequestCard) {
    this.openInitiative(request);
  }

  supportRequest(request: RequestCard) {
    this.openInitiative(request);
  }

  takeOwnership(request: RequestCard) {
    this.openInitiative(request);
  }

  donateToRequest(request: RequestCard) {
    this.openInitiative(request);
  }

  contactRequester(request: RequestCard) {
    const subject = encodeURIComponent(`Demande ${request.title}`);
    window.location.href = `mailto:support@sanad.tn?subject=${subject}`;
  }

  createCampaignFromRequest(request: RequestCard) {
    if (request.item_type === 'campaign') {
      this.openInitiative(request);
      return;
    }
    this.router.navigate(['/association/campaigns/new'], {
      queryParams: { parentRequestId: request.id }
    });
  }

  getImageUrl(path?: string | null): string | null {
    return this.userData.imageUrl(path);
  }
}
