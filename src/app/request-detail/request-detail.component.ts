import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { NavbarComponent } from '../shared/navbar.component';
import { LoggedInNavbarComponent } from '../shared/logged-in-navbar.component';
import { AssociationNavbarComponent } from '../shared/association-navbar.component';
import { DonationModalComponent } from '../shared/donation-modal.component';
import { AuthService } from '../auth/auth.service';
import { UserDataService } from '../user/user-data.service';
import { HelpOfferService } from '../shared/help-offer.service';
import { UserRole } from '../auth/auth.models';

interface Request {
  id: number;
  title: string;
  category_name: string;
  urgency: 'low' | 'medium' | 'high';
  image_url: string;
  description: string;
  full_description: string;
  location: string;
  created_at: string;
  collected_amount: number;
  target_amount: number;
  donors_count: number;
  daysRemaining?: number;
  organization: {
    name: string;
    logo_url?: string;
    verified: boolean;
    description: string;
  };
  needs_money?: boolean;
  needs_object?: boolean;
  needs_service?: boolean;
  association_id: number;
  item_type?: 'request' | 'campaign';
}

interface RelatedRequest {
  id: number;
  title: string;
  category_name: string;
  image_url: string;
  collected_amount: number;
  target_amount: number;
  urgency: 'low' | 'medium' | 'high';
}

@Component({
  selector: 'app-request-detail',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    LoggedInNavbarComponent,
    AssociationNavbarComponent,
    DonationModalComponent,
    RouterLink
  ],
  templateUrl: './request-detail.component.html',
  styleUrl: './request-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestDetailComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly userData = inject(UserDataService);
  private readonly auth = inject(AuthService);
  private readonly helpOfferService = inject(HelpOfferService);

  readonly role = signal<UserRole | null>(null);
  readonly isLoggedIn = signal(false);
  readonly isAssociation = computed(() => this.role() === 'association');

  readonly isFavorite = signal(false);
  readonly sidebarSticky = signal(false);
  readonly isDonationModalOpen = signal(false);
  readonly isLoading = signal(true);

  readonly request = signal<Request | null>(null);

  readonly relatedRequests = signal<RelatedRequest[]>([]);

  readonly helpOffers = signal<any[]>([]);
  readonly showProposeForm = signal<'object' | 'service' | null>(null);

  constructor() {
    this.isLoggedIn.set(Boolean(this.auth.getToken()));
    this.role.set(this.auth.getRole() as UserRole | null);
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  ngOnInit(): void {
    const requestId = this.route.snapshot.paramMap.get('id');
    if (requestId) {
      this.loadRequest(requestId);
    } else {
      this.router.navigate(['/explorer']);
    }
    
    // Check for query params to show form
    const action = this.route.snapshot.queryParamMap.get('action');
    if (action === 'propose-object') this.showProposeForm.set('object');
    if (action === 'propose-service') this.showProposeForm.set('service');
  }

  loadRequest(id: number | string) {
    this.isLoading.set(true);
    this.userData.getRequestDetail(id).subscribe({
      next: (response: any) => {
        if (response.status === 'success' || response.success) {
          const data = response.data.request;
          this.request.set({
            ...data,
            organization: {
              name: data.organization_name,
              logo_url: data.logo_url,
              verified: data.verified === 1 || data.verified === true,
              description: data.assoc_description || 'Aucune description disponible.'
            }
          });
          this.helpOffers.set(response.data.help_offers || []);
          this.relatedRequests.set(response.data.related_requests || []);
          this.loadFavorite();
        } else {
          this.router.navigate(['/explorer']);
        }
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.router.navigate(['/explorer']);
      }
    });
  }

  loadHelpOffers() {
    const currentRequest = this.request();
    if (!currentRequest) return;

    const params = currentRequest.item_type === 'campaign'
      ? { campaignId: currentRequest.id }
      : { requestId: currentRequest.id };

    this.helpOfferService.getOffers(params).subscribe({
      next: (response) => {
        if (response.success) {
          this.helpOffers.set(response.data);
        }
      }
    });
  }

  submitOffer(event: Event) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const req = this.request();
    if (!req) return;

    const offer = {
      ...(req.item_type === 'campaign' ? { campaignId: req.id } : { requestId: req.id }),
      type: this.showProposeForm() as 'object' | 'service',
      description: formData.get('description') as string,
      quantity: Number(formData.get('quantity') || 1),
      category: formData.get('category') as string,
      location: formData.get('location') as string,
      deliveryMethod: formData.get('deliveryMethod') as string
    };

    this.helpOfferService.createOffer(offer).subscribe({
      next: (response) => {
        if (response.success) {
          alert('Merci ! Votre proposition a été envoyée.');
          this.showProposeForm.set(null);
          this.loadHelpOffers();
        }
      }
    });
  }

  updateOfferStatus(offerId: number, status: string) {
    this.helpOfferService.updateStatus(offerId, status).subscribe({
      next: (response) => {
        if (response.success) {
          this.loadHelpOffers();
        }
      }
    });
  }

  loadFavorite() {
    if (!this.auth.getToken() || this.isAssociation() || this.request()?.item_type === 'campaign') {
      return;
    }

    this.userData.getFavorites().subscribe({
      next: (response) => {
        if (response.success) {
          const req = this.request();
          if (!req) return;
          
          this.isFavorite.set(
            response.data.some((item) => item.request_id === req.id)
          );
        }
      }
    });
  }

  toggleFavorite() {
    if (!this.auth.getToken()) {
      return;
    }

    const req = this.request();
    if (!req) return;
    if (req.item_type === 'campaign') return;

    if (this.isFavorite()) {
      this.userData.removeFavorite(req.id).subscribe({
        next: (response) => {
          if (response.success) {
            this.isFavorite.set(false);
          }
        }
      });
      return;
    }

    this.userData.addFavorite(req.id).subscribe({
      next: (response) => {
        if (response.success) {
          this.isFavorite.set(true);
        }
      }
    });
  }

  handleScroll() {
    this.sidebarSticky.set(window.scrollY > 300);
  }

  getProgressPercent(progress: number, target: number): number {
    if (!target) return 0;
    return Math.min(100, Math.round((progress / target) * 100));
  }

  getUrgencyLabel(urgency: string): string {
    switch (urgency) {
      case 'high':
        return 'Urgent';
      case 'medium':
        return 'Important';
      case 'low':
        return 'Standard';
      default:
        return 'Standard';
    }
  }

  helpNow() {
    if (!this.auth.isAuthenticated()) {
      this.auth.redirectUrl = this.router.url;
      this.router.navigate(['/auth/login'], { queryParams: { reason: 'donate' } });
      return;
    }
    this.isDonationModalOpen.set(true);
  }

  proposeObject() {
    if (!this.auth.isAuthenticated()) {
      this.auth.redirectUrl = this.router.url;
      this.router.navigate(['/auth/login'], { queryParams: { reason: 'object' } });
      return;
    }
    this.showProposeForm.set('object');
  }

  proposeHelp() {
    if (!this.auth.isAuthenticated()) {
      this.auth.redirectUrl = this.router.url;
      this.router.navigate(['/auth/login'], { queryParams: { reason: 'help' } });
      return;
    }
    this.showProposeForm.set('service');
  }

  onDonationClosed() {
    this.isDonationModalOpen.set(false);
  }

  onDonationCompleted(donation: { amount: number }) {
    this.request.update((current) => {
      if (!current) return null;
      return {
        ...current,
        collected_amount: (current.collected_amount || 0) + donation.amount,
        donors_count: (current.donors_count || 0) + 1
      };
    });
  }

  shareRequest() {
    const current = this.request();
    if (!current) return;

    if (navigator.share) {
      navigator.share({
        title: current.title,
        text: current.description,
        url: window.location.href
      });
    } else {
      alert('Lien copié dans le presse-papiers');
      navigator.clipboard.writeText(window.location.href);
    }
  }

  getLogoInitial(): string {
    const current = this.request();
    return current ? current.organization.name.charAt(0) : '?';
  }

  collaborate() {
    this.router.navigate(['/association/campaigns']);
  }

  supportRequest() {
    this.router.navigate(['/association/campaigns']);
  }

  takeOwnership() {
    this.router.navigate(['/association/campaigns']);
  }

  createCampaignFromRequest() {
    const req = this.request();
    if (!req) return;
    if (req.item_type === 'campaign') return;

    this.router.navigate(['/association/campaigns/new'], {
      queryParams: { parentRequestId: req.id }
    });
  }

  contactRequester() {
    const req = this.request();
    if (!req) return;

    const subject = encodeURIComponent(`Demande ${req.title}`);
    window.location.href = `mailto:support@sanad.tn?subject=${subject}`;
  }

  getImageUrl(path?: string): string {
    return this.userData.imageUrl(path) || '/assets/images/placeholders/request-placeholder.svg';
  }

  getLogoUrl(path?: string): string | null {
    return this.userData.imageUrl(path);
  }
}
