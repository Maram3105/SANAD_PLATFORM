import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth/auth.service';
import { LoggedInNavbarComponent } from '../../shared/logged-in-navbar.component';

type DonationType = 'request' | 'campaign' | 'association' | 'platform';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule, FormsModule, LoggedInNavbarComponent],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);

  readonly quickAmounts = [50, 100, 250, 500];
  readonly selectedType = signal<DonationType>('platform');
  readonly isSubmitting = signal(false);
  readonly successMessage = signal('');
  readonly errorMessage = signal('');

  amount = 120;
  message = '';
  isAnonymous = false;
  requestId?: number;
  campaignId?: number;
  associationId?: number;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const type = this.normalizeType(params['type']);
      const id = this.toPositiveNumber(params['id']);
      this.requestId = this.toPositiveNumber(params['requestId']) || (type === 'request' ? id : undefined);
      this.campaignId = this.toPositiveNumber(params['campaignId']) || (type === 'campaign' ? id : undefined);
      this.associationId = this.toPositiveNumber(params['associationId']) || (type === 'association' ? id : undefined);
      this.selectedType.set(this.canUseType(type) ? type : 'platform');
      this.errorMessage.set('');
      this.successMessage.set('');
    });
  }

  selectType(type: DonationType) {
    this.successMessage.set('');

    if (!this.canUseType(type)) {
      this.errorMessage.set('Ce type de don doit etre ouvert depuis une demande, une campagne ou une association.');
      return;
    }

    this.errorMessage.set('');
    this.selectedType.set(type);
  }

  setAmount(amount: number) {
    this.amount = amount;
    this.errorMessage.set('');
  }

  submitDonation() {
    this.errorMessage.set('');
    this.successMessage.set('');

    const amount = Number(this.amount);
    if (!Number.isFinite(amount) || amount < 5 || amount > 100000) {
      this.errorMessage.set('Le montant doit etre compris entre 5 et 100000 DT.');
      return;
    }

    const payload: any = {
      type: this.selectedType(),
      amount,
      message: this.message,
      isAnonymous: this.isAnonymous,
      paymentMethod: 'simulation'
    };

    if (payload.type === 'request') payload.requestId = this.requestId;
    if (payload.type === 'campaign') payload.campaignId = this.campaignId;
    if (payload.type === 'association') payload.associationId = this.associationId;

    const token = this.auth.getToken();
    const options = token
      ? { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) }
      : {};

    this.isSubmitting.set(true);
    this.http.post<any>(`${environment.apiUrl}create_donation.php`, payload, options).subscribe({
      next: (response) => {
        if (response.success) {
          this.successMessage.set(`Votre don de ${amount} DT a ete enregistre avec succes.`);
          this.message = '';
          return;
        }

        this.errorMessage.set(response.message || 'Impossible de confirmer ce don.');
      },
      error: (error) => {
        if (error.status === 401) {
          this.auth.redirectUrl = this.router.url;
          this.router.navigate(['/auth/login'], { queryParams: { reason: 'donate' } });
          return;
        }

        this.errorMessage.set(error.error?.message || 'Erreur lors du traitement du don.');
      },
      complete: () => this.isSubmitting.set(false)
    });
  }

  isSelected(type: DonationType): boolean {
    return this.selectedType() === type;
  }

  private canUseType(type: DonationType): boolean {
    return type === 'platform'
      || (type === 'request' && Boolean(this.requestId))
      || (type === 'campaign' && Boolean(this.campaignId))
      || (type === 'association' && Boolean(this.associationId));
  }

  private normalizeType(value: unknown): DonationType {
    return value === 'request' || value === 'campaign' || value === 'association' || value === 'platform'
      ? value
      : 'platform';
  }

  private toPositiveNumber(value: unknown): number | undefined {
    const parsed = Number(value);
    return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined;
  }
}
