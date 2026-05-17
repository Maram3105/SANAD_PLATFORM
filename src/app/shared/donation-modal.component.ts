import { Component, inject, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';

interface DonationData {
  type: 'request' | 'campaign' | 'association' | 'platform';
  amount: number;
  message?: string;
  isAnonymous: boolean;
  requestId?: number;
  campaignId?: number;
  associationId?: number;
}

@Component({
  selector: 'app-donation-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="donation-modal-overlay" *ngIf="isOpen" (click)="closeModal()">
      <div class="donation-modal" (click)="$event.stopPropagation()">
        <!-- Header -->
        <div class="modal-header">
          <h2 class="modal-title"><i class="fas fa-heart"></i> Faire un don</h2>
          <button class="close-btn" (click)="closeModal()"><i class="fas fa-times"></i></button>
        </div>

        <!-- Step 1: Type Selection -->
        <div *ngIf="currentStep === 1" class="modal-content">
          <p class="step-label">Étape 1: Choisissez le type de don</p>

          <div class="donation-types">
            <button
              *ngIf="allowedTypes.includes('request')"
              class="type-card"
              [class.selected]="donationForm.type === 'request'"
              (click)="selectType('request')"
            >
              <i class="fas fa-hand-holding-heart"></i>
              <h3>Aider une demande</h3>
              <p>Soutenir une demande d'aide spécifique</p>
            </button>

            <button
              *ngIf="allowedTypes.includes('campaign')"
              class="type-card"
              [class.selected]="donationForm.type === 'campaign'"
              (click)="selectType('campaign')"
            >
              <i class="fas fa-bullhorn"></i>
              <h3>Soutenir une campagne</h3>
              <p>Contribuer à une campagne spécifique</p>
            </button>

            <button
              *ngIf="allowedTypes.includes('association')"
              class="type-card"
              [class.selected]="donationForm.type === 'association'"
              (click)="selectType('association')"
            >
              <i class="fas fa-handshake"></i>
              <h3>Soutenir une association</h3>
              <p>Aider une organisation dans son œuvre</p>
            </button>

            <button
              class="type-card"
              [class.selected]="donationForm.type === 'platform'"
              (click)="selectType('platform')"
            >
              <i class="fas fa-heart"></i>
              <h3>Don libre</h3>
              <p>Contribution générale à la plateforme</p>
            </button>
          </div>

          <div class="modal-actions">
            <button class="btn-next" (click)="goToStep2()" [disabled]="!donationForm.type">
              Continuer <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <!-- Step 2: Form -->
        <div *ngIf="currentStep === 2" class="modal-content">
          <p class="step-label">Étape 2: Détails du don</p>

          <form (ngSubmit)="submitDonation()">
            <!-- Type Summary -->
            <div class="donation-summary">
              <p>
                <i class="fas" [ngClass]="getTypeIcon()"></i>
                <strong>{{ getTypeLabel() }}</strong>
              </p>
            </div>

            <!-- Amount Input -->
            <div class="form-group">
              <label for="amount">Montant (DT) *</label>
              <div class="amount-input-wrapper">
                <input
                  id="amount"
                  type="number"
                  [(ngModel)]="donationForm.amount"
                  #modalAmountCtrl="ngModel"
                  name="amount"
                  placeholder="25"
                  min="5"
                  max="100000"
                  step="1"
                  required
                  class="amount-input"
                  [class.invalid]="(!donationForm.amount || donationForm.amount < 5 || donationForm.amount > 100000) && (modalAmountCtrl.dirty || modalAmountCtrl.touched || submitAttempted)"
                />
                <span class="currency">DT</span>
              </div>
              <div class="field-warning" *ngIf="(!donationForm.amount || donationForm.amount < 5 || donationForm.amount > 100000) && (modalAmountCtrl.dirty || modalAmountCtrl.touched || submitAttempted)">
                Le montant est obligatoire et doit etre compris entre 5 et 100000 DT.
              </div>
              <small class="amount-info">Minimum: 5 DT</small>
            </div>

            <!-- Quick Amount Buttons -->
            <div class="quick-amounts">
              <button
                type="button"
                *ngFor="let amt of quickAmounts"
                class="quick-btn"
                [class.selected]="donationForm.amount === amt"
                (click)="donationForm.amount = amt"
              >
                {{ amt }} DT
              </button>
            </div>

            <!-- Message (Optional) -->
            <div class="form-group">
              <label for="message">Message (optionnel)</label>
              <textarea
                id="message"
                [(ngModel)]="donationForm.message"
                name="message"
                placeholder="Partagez un message de soutien..."
                rows="3"
                maxlength="500"
                class="message-textarea"
              ></textarea>
              <small class="char-count">
                {{ (donationForm.message || '').length }}/500
              </small>
            </div>

            <!-- Anonymous Checkbox -->
            <div class="form-group checkbox">
              <input
                id="anonymous"
                type="checkbox"
                [(ngModel)]="donationForm.isAnonymous"
                name="anonymous"
                class="checkbox-input"
              />
              <label for="anonymous" class="checkbox-label">
                <i class="fas fa-check"></i> Don anonyme
              </label>
              <small class="checkbox-help">
                Votre nom ne sera pas affiché publiquement
              </small>
            </div>

            <!-- Trust Indicators -->
            <div class="trust-indicators">
              <div class="trust-badge">
                <i class="fas fa-shield-alt"></i>
                <span>Paiement sécurisé</span>
              </div>
              <div class="trust-badge">
                <i class="fas fa-lock"></i>
                <span>Données protégées</span>
              </div>
              <div class="trust-badge">
                <i class="fas fa-check-circle"></i>
                <span>Transparence garantie</span>
              </div>
            </div>

            <!-- Actions -->
            <div class="modal-actions">
              <button type="button" class="btn-back" (click)="currentStep = 1">
                <i class="fas fa-arrow-left"></i> Retour
              </button>
              <button
                type="submit"
                class="btn-submit"
                [disabled]="isSubmitting || !donationForm.amount || donationForm.amount < 5"
              >
                <span *ngIf="!isSubmitting"><i class="fas fa-check"></i> Confirmer le don</span>
                <span *ngIf="isSubmitting">
                  <i class="fas fa-spinner fa-spin"></i> Traitement...
                </span>
              </button>
            </div>
          </form>
        </div>

        <!-- Step 3: Success -->
        <div *ngIf="currentStep === 3" class="modal-content success">
          <div class="success-animation">
            <i class="fas fa-heart-pulse"></i>
          </div>
          <h3 class="success-title">Merci pour votre aide! <i class="fas fa-heart"></i></h3>
          <p class="success-message">
            Votre don de <strong>{{ donationForm.amount }} DT</strong> a été reçu avec succès.
          </p>
          <p class="success-detail">
            Vous recevrez une confirmation par email.
          </p>

          <div class="success-impact">
            <p class="impact-label">💪 Impact de votre don:</p>
            <div class="impact-items">
              <div *ngFor="let item of getImpactItems()" class="impact-item">
                <strong>{{ item.amount }} DT</strong> = {{ item.description }}
              </div>
            </div>
          </div>

          <div class="modal-actions">
            <button class="btn-close" (click)="closeModal()">
              Fermer
            </button>
            <button class="btn-share" (click)="shareDonation()">
              <i class="fas fa-share-alt"></i> Partager
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .donation-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      backdrop-filter: blur(4px);
      animation: fadeIn 0.3s ease;
    }

    .donation-modal {
      background: white;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      max-width: 450px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      animation: slideUp 0.3s ease;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px;
      border-bottom: 1px solid #f0f0f0;
      position: sticky;
      top: 0;
      background: white;
      z-index: 10;
    }

    .modal-title {
      font-size: 20px;
      font-weight: 600;
      margin: 0;
      color: #111827;
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #6b7280;
      padding: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      transition: all 0.2s ease;
    }

    .close-btn:hover {
      background: #f3f4f6;
      color: #111827;
    }

    .modal-content {
      padding: 24px;
    }

    .step-label {
      font-size: 14px;
      color: #6b7280;
      font-weight: 500;
      margin: 0 0 16px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    /* Type Selection */
    .donation-types {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
      margin: 20px 0;
    }

    .type-card {
      padding: 16px;
      border: 2px solid #e5e7eb;
      border-radius: 12px;
      background: #f9fafb;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: center;
      color: #111827;
      font-size: 14px;
    }

    .type-card:hover {
      border-color: #2563eb;
      background: #eff6ff;
    }

    .type-card.selected {
      border-color: #2563eb;
      background: #eff6ff;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    .type-card i {
      font-size: 28px;
      color: #2563eb;
      display: block;
      margin-bottom: 8px;
    }

    .type-card h3 {
      margin: 8px 0 4px 0;
      font-size: 14px;
      font-weight: 600;
    }

    .type-card p {
      margin: 0;
      font-size: 12px;
      color: #6b7280;
    }

    /* Form */
    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 8px;
      color: #111827;
    }

    .amount-input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }

    .amount-input {
      width: 100%;
      padding: 12px 40px 12px 12px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .amount-input:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    .currency {
      position: absolute;
      right: 12px;
      font-size: 14px;
      font-weight: 600;
      color: #6b7280;
    }

    .amount-info {
      display: block;
      font-size: 12px;
      color: #6b7280;
      margin-top: 4px;
    }

    /* Quick Amounts */
    .quick-amounts {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      margin: 16px 0 20px 0;
    }

    .quick-btn {
      padding: 8px 12px;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      background: white;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      color: #6b7280;
    }

    .quick-btn:hover {
      border-color: #2563eb;
      color: #2563eb;
    }

    .quick-btn.selected {
      background: #2563eb;
      color: white;
      border-color: #2563eb;
    }

    /* Message */
    .message-textarea {
      width: 100%;
      padding: 12px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-family: inherit;
      font-size: 14px;
      resize: none;
      transition: all 0.3s ease;
    }

    .message-textarea:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    .char-count {
      display: block;
      font-size: 12px;
      color: #6b7280;
      margin-top: 4px;
      text-align: right;
    }

    /* Checkbox */
    .checkbox {
      margin-bottom: 16px;
    }

    .checkbox-input {
      width: 20px;
      height: 20px;
      cursor: pointer;
      margin-right: 8px;
      accent-color: #2563eb;
    }

    .checkbox-label {
      display: inline-flex;
      align-items: center;
      font-weight: 500;
      color: #111827;
      cursor: pointer;
    }

    .checkbox-help {
      display: block;
      font-size: 12px;
      color: #6b7280;
      margin-left: 28px;
      margin-top: 4px;
    }

    /* Trust Indicators */
    .trust-indicators {
      display: grid;
      grid-template-columns: 1fr;
      gap: 8px;
      margin: 20px 0;
      padding: 16px;
      background: #f0fdf4;
      border-radius: 8px;
    }

    .trust-badge {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: #15803d;
      font-weight: 500;
    }

    .trust-badge i {
      color: #22c55e;
    }

    /* Donation Summary */
    .donation-summary {
      padding: 12px;
      background: #eff6ff;
      border-left: 4px solid #2563eb;
      border-radius: 4px;
      margin-bottom: 20px;
    }

    .donation-summary p {
      margin: 0;
      font-size: 14px;
      color: #1e40af;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* Modal Actions */
    .modal-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px solid #f0f0f0;
    }

    .btn-next,
    .btn-back,
    .btn-submit,
    .btn-close,
    .btn-share {
      padding: 12px 16px;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-next,
    .btn-submit {
      grid-column: span 2;
      background: #2563eb;
      color: white;
    }

    .btn-next:hover:not(:disabled),
    .btn-submit:hover:not(:disabled) {
      background: #1d4ed8;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    }

    .btn-next:disabled,
    .btn-submit:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .btn-back {
      background: #f3f4f6;
      color: #111827;
    }

    .btn-back:hover {
      background: #e5e7eb;
    }

    .btn-close {
      background: #f3f4f6;
      color: #111827;
    }

    .btn-close:hover {
      background: #e5e7eb;
    }

    .btn-share {
      background: #22c55e;
      color: white;
    }

    .btn-share:hover {
      background: #16a34a;
    }

    /* Success State */
    .modal-content.success {
      text-align: center;
    }

    .success-animation {
      font-size: 64px;
      margin: 20px 0;
      animation: heartBeat 0.6s ease;
    }

    .success-title {
      font-size: 24px;
      font-weight: 700;
      color: #22c55e;
      margin: 16px 0 12px 0;
    }

    .success-message {
      font-size: 16px;
      color: #111827;
      margin: 12px 0;
      font-weight: 500;
    }

    .success-detail {
      font-size: 14px;
      color: #6b7280;
      margin: 8px 0 20px 0;
    }

    .success-impact {
      background: #f0fdf4;
      padding: 16px;
      border-radius: 8px;
      margin: 20px 0;
    }

    .impact-label {
      font-size: 14px;
      font-weight: 600;
      color: #15803d;
      margin: 0 0 12px 0;
    }

    .impact-items {
      display: grid;
      gap: 8px;
    }

    .impact-item {
      font-size: 13px;
      color: #166534;
      padding: 6px;
    }

    /* Animations */
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes heartBeat {
      0%, 100% {
        transform: scale(1);
      }
      25% {
        transform: scale(1.1);
      }
      50% {
        transform: scale(1.2);
      }
    }

    /* Responsive */
    @media (max-width: 768px) {
      .donation-modal {
        max-width: 100%;
        width: 95%;
        border-radius: 12px;
      }

      .modal-header,
      .modal-content {
        padding: 16px;
      }

      .modal-title {
        font-size: 18px;
      }

      .quick-amounts {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class DonationModalComponent implements OnInit, OnChanges {
  @Input() isOpen = false;
  @Input() requestId?: number;
  @Input() campaignId?: number;
  @Input() associationId?: number;
  @Input() defaultType: 'request' | 'campaign' | 'association' | 'platform' = 'platform';
  @Output() closed = new EventEmitter<void>();
  @Output() donated = new EventEmitter<DonationData>();

  http = inject(HttpClient);
  router = inject(Router);
  auth = inject(AuthService);

  currentStep: 1 | 2 | 3 = 1;
  isSubmitting = false;
  submitAttempted = false;
  quickAmounts = [5, 25, 50, 100, 250, 500];

  donationForm: DonationData = {
    type: 'platform',
    amount: 25,
    message: '',
    isAnonymous: false
  };

  get allowedTypes(): Array<'request' | 'campaign' | 'association' | 'platform'> {
    const types: Array<'request' | 'campaign' | 'association' | 'platform'> = [];
    if (this.requestId) types.push('request');
    if (this.campaignId) types.push('campaign');
    if (this.associationId) types.push('association');
    types.push('platform');
    return types;
  }

  ngOnInit() {
    this.resetFormToContext();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['requestId'] || changes['campaignId'] || changes['associationId'] || changes['defaultType']) {
      this.resetFormToContext();
    }
  }

  private getInitialType(): 'request' | 'campaign' | 'association' | 'platform' {
    if (this.campaignId) {
      return 'campaign';
    }

    if (this.requestId) {
      return 'request';
    }

    if (this.associationId) {
      return 'association';
    }

    if (this.allowedTypes.includes(this.defaultType)) {
      return this.defaultType;
    }

    return 'platform';
  }

  private resetFormToContext() {
    const amount = this.donationForm?.amount || 25;
    const message = this.donationForm?.message || '';
    const isAnonymous = this.donationForm?.isAnonymous || false;
    this.donationForm = {
      type: this.getInitialType(),
      amount,
      message,
      isAnonymous
    };
    this.applyTargetForType(this.donationForm.type);
  }

  private applyTargetForType(type: 'request' | 'campaign' | 'association' | 'platform') {
    delete this.donationForm.requestId;
    delete this.donationForm.campaignId;
    delete this.donationForm.associationId;

    if (type === 'request' && this.requestId) {
      this.donationForm.requestId = this.requestId;
    }

    if (type === 'campaign' && this.campaignId) {
      this.donationForm.campaignId = this.campaignId;
    }

    if (type === 'association' && this.associationId) {
      this.donationForm.associationId = this.associationId;
    }
  }

  selectType(type: 'request' | 'campaign' | 'association' | 'platform') {
    if (!this.allowedTypes.includes(type)) {
      return;
    }

    this.donationForm.type = type;
    this.applyTargetForType(type);
  }

  getTypeIcon(): string {
    const icons: Record<string, string> = {
      request: 'fa-hand-holding-heart',
      campaign: 'fa-bullhorn',
      association: 'fa-handshake',
      platform: 'fa-heart'
    };
    return icons[this.donationForm.type] || 'fa-heart';
  }

  getTypeLabel(): string {
    const labels: Record<string, string> = {
      request: 'Donation à une demande',
      campaign: 'Donation à une campagne',
      association: 'Donation à une association',
      platform: 'Don libre'
    };
    return labels[this.donationForm.type] || '';
  }

  goToStep2() {
    if (this.donationForm.type) {
      this.currentStep = 2;
    }
  }

  submitDonation() {
    this.submitAttempted = true;
    if (!this.donationForm.amount || this.donationForm.amount < 5 || this.donationForm.amount > 100000) {
      alert('Le montant doit etre compris entre 5 et 100000 DT');
      return;
    }

    this.isSubmitting = true;

    const token = this.auth.getToken();
    const options = token
      ? { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) }
      : {};

    this.http.post(`${environment.apiUrl}create_donation.php`, this.donationForm, options).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.currentStep = 3;
          this.donated.emit({
            ...this.donationForm,
            ...(response.data || {})
          });
        } else {
          alert(response.message || 'Erreur lors du traitement du don');
        }
      },
      error: (error) => {
        console.error('Donation error:', error);
        if (error.status === 401) {
          this.router.navigate(['/auth/login']);
          this.closeModal();
        } else {
          alert('Erreur lors du traitement du don. Veuillez réessayer.');
        }
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }

  getImpactItems() {
    const items = [
      { amount: '5', description: '1 pain pour une famille' },
      { amount: '25', description: '1 panier de nourriture' },
      { amount: '50', description: '1 semaine de repas' },
      { amount: '100', description: 'Fournitures scolaires complètes' },
      { amount: '250', description: 'Consultation médicale + médicaments' }
    ];
    return items;
  }

  shareDonation() {
    const message = `J'ai fait un don de ${this.donationForm.amount} DT sur SANAD pour soutenir l'aide sociale. Rejoignez-moi!`;
    
    if (navigator.share) {
      navigator.share({
        title: 'SANAD - Plateforme d\'aide sociale',
        text: message,
        url: window.location.href
      });
    } else {
      // Fallback
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://twitter.com/intent/tweet?text=${encodedMessage}`, '_blank');
    }
  }

  closeModal() {
    this.isOpen = false;
    this.currentStep = 1;
    this.submitAttempted = false;
    this.donationForm = {
      type: this.getInitialType(),
      amount: 25,
      message: '',
      isAnonymous: false
    };
    this.applyTargetForType(this.donationForm.type);
    this.closed.emit();
  }
}
