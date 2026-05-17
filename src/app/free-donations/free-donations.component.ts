import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { UserRole } from '../auth/auth.models';
import { HelpOfferService, HelpOffer } from '../shared/help-offer.service';
import { ReservationService } from '../shared/reservation.service';
import { NavbarComponent } from '../shared/navbar.component';
import { LoggedInNavbarComponent } from '../shared/logged-in-navbar.component';
import { AssociationNavbarComponent } from '../shared/association-navbar.component';
import { TUNISIA_LOCATIONS } from '../shared/locations';

@Component({
  selector: 'app-free-donations',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    NavbarComponent,
    LoggedInNavbarComponent,
    AssociationNavbarComponent
  ],
  templateUrl: './free-donations.component.html',
  styleUrl: './free-donations.component.css'
})
export class FreeDonationsComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly helpOfferService = inject(HelpOfferService);
  private readonly reservationService = inject(ReservationService);

  readonly isLoggedIn = signal(this.auth.isAuthenticated());
  readonly role = signal<UserRole | null>(this.auth.getRole() as UserRole | null);

  readonly availableItems = signal<HelpOffer[]>([]);
  readonly searchCategory = signal('');
  readonly searchLocation = signal('');
  readonly showPublishModal = signal(false);
  readonly isPublishing = signal(false);
  readonly publishSubmitted = signal(false);
  readonly publishError = signal('');

  readonly categories = ['Alimentation', 'Vêtements', 'Meubles', 'Électronique', 'Santé', 'Éducation'];
  readonly locations = TUNISIA_LOCATIONS;
  readonly deliveryMethods = [
    { value: 'hand', label: 'Remise en main propre' },
    { value: 'delivery', label: 'Livraison possible' }
  ];

  newItem = {
    description: '',
    category: '',
    location: '',
    quantity: 1,
    deliveryMethod: 'hand'
  };

  readonly filteredItems = computed(() => {
    const cat = this.searchCategory();
    const loc = this.searchLocation();
    return this.availableItems().filter(item =>
      (!cat || item.category === cat) &&
      (!loc || item.location === loc)
    );
  });

  constructor() {
    this.loadAvailableItems();
  }

  loadAvailableItems() {
    this.helpOfferService.getOffers({ available: 'true', type: 'object' }).subscribe({
      next: (response) => {
        if (response.success) {
          this.availableItems.set(response.data);
        }
      }
    });
  }

  reserveItem(offerId: number) {
    if (!this.isLoggedIn()) {
      this.auth.redirectUrl = '/free-donations';
      this.router.navigate(['/auth/login'], { queryParams: { reason: 'object' } });
      return;
    }

    this.reservationService.createReservation(offerId).subscribe({
      next: (response) => {
        if (response.success) {
          alert(`Réservé ! Vous avez 48h pour récupérer l'objet. Expire le: ${response.expiresAt}`);
          this.loadAvailableItems();
        } else {
          alert(response.message);
        }
      },
      error: (err) => alert(err.error?.message || 'Erreur lors de la réservation')
    });
  }

  publishItem() {
    if (!this.isLoggedIn()) {
      this.auth.redirectUrl = '/free-donations';
      this.router.navigate(['/auth/login'], { queryParams: { reason: 'object' } });
      return;
    }

    this.openPublishModal();
  }

  openPublishModal() {
    this.resetPublishForm();
    this.showPublishModal.set(true);
  }

  closePublishModal() {
    if (this.isPublishing()) return;
    this.showPublishModal.set(false);
    this.publishError.set('');
    this.publishSubmitted.set(false);
  }

  resetPublishForm() {
    this.newItem = {
      description: '',
      category: '',
      location: '',
      quantity: 1,
      deliveryMethod: 'hand'
    };
    this.publishError.set('');
    this.publishSubmitted.set(false);
  }

  submitItem() {
    this.publishSubmitted.set(true);
    this.publishError.set('');

    const description = this.newItem.description.trim();
    const quantity = Number(this.newItem.quantity);

    if (!description || !this.newItem.category || !this.newItem.location || !Number.isFinite(quantity) || quantity < 1) {
      this.publishError.set('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    this.isPublishing.set(true);
    this.helpOfferService.createOffer({
      type: 'object',
      description,
      quantity,
      category: this.newItem.category,
      location: this.newItem.location,
      deliveryMethod: this.newItem.deliveryMethod
    }).subscribe({
      next: (response) => {
        this.isPublishing.set(false);
        if (response.success) {
          this.showPublishModal.set(false);
          this.resetPublishForm();
          this.loadAvailableItems();
          alert('Votre objet a été publié avec succès.');
          return;
        }
        this.publishError.set(response.message || 'Impossible de publier cet objet.');
      },
      error: (err) => {
        this.isPublishing.set(false);
        this.publishError.set(err.error?.message || 'Erreur lors de la publication.');
      }
    });
  }
}
