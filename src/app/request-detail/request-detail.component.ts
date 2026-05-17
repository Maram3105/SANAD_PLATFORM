import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from '../shared/navbar.component';
import { LoggedInNavbarComponent } from '../shared/logged-in-navbar.component';
import { AssociationNavbarComponent } from '../shared/association-navbar.component';
import { DonationModalComponent } from '../shared/donation-modal.component';
import { AuthService } from '../auth/auth.service';
import { UserDataService } from '../user/user-data.service';
import { HelpOfferService } from '../shared/help-offer.service';
import { UserRole } from '../auth/auth.models';
import { TUNISIA_LOCATIONS } from '../shared/locations';

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

interface OfferDraft {
  description: string;
  quantity: number;
  category: string;
  location: string;
  deliveryMethod: 'hand' | 'delivery';
  imageFile: File | null;
  imagePreview: string | null;
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
    FormsModule,
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
  readonly isOfferSubmitting = signal(false);
  readonly offerSubmitAttempted = signal(false);
  readonly offerError = signal('');
  readonly offerSuccess = signal('');
  readonly offerCategories = ['Alimentation', 'Vetements', 'Meubles', 'Sante', 'Education', 'Transport', 'Accompagnement', 'Autre'];
  readonly locations = TUNISIA_LOCATIONS;

  offerDraft: OfferDraft = {
    description: '',
    quantity: 1,
    category: '',
    location: '',
    deliveryMethod: 'hand',
    imageFile: null,
    imagePreview: null
  };

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
    if (action === 'propose-object') this.openOfferForm('object');
    if (action === 'propose-service') this.openOfferForm('service');
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
    const req = this.request();
    if (!req) return;

    this.offerSubmitAttempted.set(true);
    this.offerError.set('');
    this.offerSuccess.set('');

    const type = this.showProposeForm();
    const description = this.offerDraft.description.trim();
    const location = this.offerDraft.location.trim();
    const quantity = Number(this.offerDraft.quantity);

    if (!type) {
      this.offerError.set('Choisissez le type de proposition.');
      return;
    }

    if (!description) {
      this.offerError.set('Decrivez votre proposition.');
      return;
    }

    if (!location) {
      this.offerError.set('Indiquez votre ville ou votre zone de disponibilite.');
      return;
    }

    if (!Number.isFinite(quantity) || quantity < 1) {
      this.offerError.set('La quantite doit etre superieure ou egale a 1.');
      return;
    }

    const offer = new FormData();
    offer.append(req.item_type === 'campaign' ? 'campaignId' : 'requestId', String(req.id));
    offer.append('type', type);
    offer.append('description', description);
    offer.append('quantity', String(quantity));
    offer.append('category', this.offerDraft.category || (type === 'object' ? 'Autre' : 'Accompagnement'));
    offer.append('location', location);
    offer.append('deliveryMethod', this.offerDraft.deliveryMethod);
    if (type === 'object' && this.offerDraft.imageFile) {
      offer.append('image', this.offerDraft.imageFile);
    }

    this.isOfferSubmitting.set(true);
    this.helpOfferService.createOffer(offer).subscribe({
      next: (response) => {
        if (response.success) {
          this.offerSuccess.set(type === 'object'
            ? 'Votre proposition d\'objet a ete envoyee.'
            : 'Votre proposition d\'aide a ete envoyee.');
          this.helpOffers.update((offers) => response.data ? [response.data, ...offers] : offers);
          if (!response.data) {
            this.loadHelpOffers();
          }
          this.resetOfferDraft();
          setTimeout(() => this.closeOfferForm(), 1200);
          return;
        }
        this.offerError.set(response.message || 'Impossible d\'envoyer cette proposition.');
      },
      error: (error) => {
        this.offerError.set(error.error?.message || 'Erreur lors de l\'envoi de la proposition.');
      },
      complete: () => {
        this.isOfferSubmitting.set(false);
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
    this.openOfferForm('object');
  }

  proposeHelp() {
    if (!this.auth.isAuthenticated()) {
      this.auth.redirectUrl = this.router.url;
      this.router.navigate(['/auth/login'], { queryParams: { reason: 'help' } });
      return;
    }
    this.openOfferForm('service');
  }

  openOfferForm(type: 'object' | 'service') {
    this.resetOfferDraft();
    this.offerSubmitAttempted.set(false);
    this.showProposeForm.set(type);
    setTimeout(() => {
      document.querySelector('.propose-form-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  closeOfferForm() {
    if (this.isOfferSubmitting()) return;
    this.showProposeForm.set(null);
    this.offerError.set('');
    this.offerSuccess.set('');
    this.offerSubmitAttempted.set(false);
    this.resetOfferDraft();
  }

  resetOfferDraft() {
    if (this.offerDraft.imagePreview) {
      URL.revokeObjectURL(this.offerDraft.imagePreview);
    }

    this.offerDraft = {
      description: '',
      quantity: 1,
      category: '',
      location: '',
      deliveryMethod: 'hand',
      imageFile: null,
      imagePreview: null
    };
  }

  onOfferImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] || null;

    this.offerError.set('');
    if (!file) {
      this.clearOfferImage(input);
      return;
    }

    const allowedTypes = ['image/png', 'image/jpeg', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      this.offerError.set('Image invalide. Utilisez PNG, JPG ou WebP.');
      this.clearOfferImage(input);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      this.offerError.set('Image trop volumineuse. Maximum 5 Mo.');
      this.clearOfferImage(input);
      return;
    }

    if (this.offerDraft.imagePreview) {
      URL.revokeObjectURL(this.offerDraft.imagePreview);
    }

    this.offerDraft.imageFile = file;
    this.offerDraft.imagePreview = URL.createObjectURL(file);
  }

  clearOfferImage(input?: HTMLInputElement) {
    if (this.offerDraft.imagePreview) {
      URL.revokeObjectURL(this.offerDraft.imagePreview);
    }
    this.offerDraft.imageFile = null;
    this.offerDraft.imagePreview = null;
    if (input) {
      input.value = '';
    }
  }

  onDonationClosed() {
    this.isDonationModalOpen.set(false);
  }

  onDonationCompleted(donation: { amount: number; type?: 'request' | 'campaign' | 'association' | 'platform' }) {
    this.request.update((current) => {
      if (!current) return null;

      const expectedType = current.item_type === 'campaign' ? 'campaign' : 'request';
      if (donation.type && donation.type !== expectedType) {
        return current;
      }

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
