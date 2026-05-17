import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../shared/navbar.component';
import { environment } from '../../environments/environment';

interface Donation {
  id: number;
  amount: number;
  donation_type: 'request' | 'association' | 'platform';
  target_name: string;
  request_id?: number;
  association_id?: number;
  association_name?: string;
  message?: string;
  anonymous: boolean;
  created_at: string;
}

interface DonationStats {
  total_donations: number;
  total_amount: number;
  requests_supported: number;
  associations_supported: number;
}

@Component({
  selector: 'app-donation-history',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>

    <section class="donation-history-section">
      <div class="container">
        <!-- Header -->
        <div class="history-header">
          <h1>Mes donations</h1>
          <p class="subtitle">Suivi de vos contributions à la plateforme SANAD</p>
        </div>

        <!-- Stats Cards -->
        <div class="stats-grid" *ngIf="stats">
          <div class="stat-card">
            <div class="stat-icon">
              <i class="fas fa-heart"></i>
            </div>
            <div class="stat-content">
              <p class="stat-label">Donations totales</p>
              <p class="stat-value">{{ stats.total_donations }}</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              <i class="fas fa-euro-sign"></i>
            </div>
            <div class="stat-content">
              <p class="stat-label">Montant total donné</p>
              <p class="stat-value">{{ stats.total_amount | number:'1.2-2' }} DT</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              <i class="fas fa-hand-holding-heart"></i>
            </div>
            <div class="stat-content">
              <p class="stat-label">Demandes soutenues</p>
              <p class="stat-value">{{ stats.requests_supported }}</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              <i class="fas fa-handshake"></i>
            </div>
            <div class="stat-content">
              <p class="stat-label">Organisations soutenues</p>
              <p class="stat-value">{{ stats.associations_supported }}</p>
            </div>
          </div>
        </div>

        <!-- Sort & Filter -->
        <div class="controls">
          <div class="sort-group">
            <label for="sort">Trier par:</label>
            <select id="sort" [(ngModel)]="sortBy" (change)="loadDonations()">
              <option value="recent">Récent</option>
              <option value="amount">Montant élevé</option>
            </select>
          </div>
        </div>

        <!-- Donations List -->
        <div class="donations-container" *ngIf="!loading">
          <div *ngIf="donations.length > 0" class="donations-list">
            <div
              class="donation-item"
              *ngFor="let donation of donations"
              [ngClass]="'type-' + donation.donation_type"
            >
              <!-- Type Badge -->
              <div class="item-type-icon">
                <i
                  class="fas"
                  [ngClass]="getTypeIcon(donation.donation_type)"
                ></i>
              </div>

              <!-- Main Info -->
              <div class="item-main">
                <div class="item-header">
                  <h3 class="item-target">
                    {{ donation.target_name }}
                  </h3>
                  <span class="item-amount">
                    +{{ donation.amount }} DT
                  </span>
                </div>

                <div class="item-meta">
                  <span class="meta-type">
                    {{ getTypeLabel(donation.donation_type) }}
                  </span>
                  <span class="meta-date">
                    {{ donation.created_at | date: 'dd MMM yyyy' }}
                  </span>
                  <span
                    class="meta-anonymous"
                    *ngIf="donation.anonymous"
                  >
                    <i class="fas fa-user-secret"></i> Anonyme
                  </span>
                </div>

                <p class="item-message" *ngIf="donation.message">
                  <i class="fas fa-quote-left"></i>
                  {{ donation.message }}
                </p>
              </div>

              <!-- Actions -->
              <div class="item-actions">
                <button class="action-btn" (click)="viewTarget(donation)">
                  <i class="fas fa-external-link-alt"></i>
                  Voir
                </button>
              </div>
            </div>
          </div>

          <div *ngIf="donations.length === 0" class="empty-state">
            <div class="empty-icon">
              <i class="fas fa-heart"></i>
            </div>
            <h3>Aucune donation pour le moment</h3>
            <p>
              Commencez à soutenir les demandes et associations SANAD pour voir
              votre historique de donations ici.
            </p>
            <a href="/explorer" class="btn-explore">
              Découvrir les demandes
            </a>
          </div>
        </div>

        <!-- Loading State -->
        <div class="loading" *ngIf="loading">
          <i class="fas fa-spinner fa-spin"></i>
          <p>Chargement de vos donations...</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .donation-history-section {
      padding: 60px 20px;
      background: #f9fafb;
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Header */
    .history-header {
      text-align: center;
      margin-bottom: 40px;
    }

    .history-header h1 {
      font-size: 32px;
      font-weight: 700;
      margin: 0 0 8px 0;
      color: #111827;
    }

    .subtitle {
      font-size: 16px;
      color: #6b7280;
      margin: 0;
    }

    /* Stats Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }

    .stat-card {
      background: white;
      padding: 24px;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      display: flex;
      align-items: center;
      gap: 16px;
      transition: all 0.3s ease;
    }

    .stat-card:hover {
      border-color: #2563eb;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
    }

    .stat-icon {
      width: 56px;
      height: 56px;
      border-radius: 12px;
      background: linear-gradient(135deg, #1e3a8a, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 24px;
      flex-shrink: 0;
    }

    .stat-content {
      flex: 1;
    }

    .stat-label {
      font-size: 12px;
      color: #6b7280;
      font-weight: 500;
      text-transform: uppercase;
      margin: 0;
    }

    .stat-value {
      font-size: 24px;
      font-weight: 700;
      color: #111827;
      margin: 4px 0 0 0;
    }

    /* Controls */
    .controls {
      display: flex;
      gap: 16px;
      margin-bottom: 32px;
      background: white;
      padding: 16px;
      border-radius: 8px;
      border: 1px solid #e5e7eb;
    }

    .sort-group {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .sort-group label {
      font-size: 14px;
      font-weight: 500;
      color: #111827;
    }

    .sort-group select {
      padding: 8px 12px;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 14px;
      background: white;
      cursor: pointer;
    }

    /* Donations List */
    .donations-list {
      display: grid;
      gap: 12px;
    }

    .donation-item {
      display: flex;
      align-items: stretch;
      background: white;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .donation-item:hover {
      border-color: #2563eb;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .item-type-icon {
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      color: white;
      flex-shrink: 0;
    }

    .donation-item.type-request .item-type-icon {
      background: linear-gradient(135deg, #1e3a8a, #1d4ed8);
    }

    .donation-item.type-association .item-type-icon {
      background: linear-gradient(135deg, #1e3a8a, #2563eb);
    }

    .donation-item.type-platform .item-type-icon {
      background: linear-gradient(135deg, #1e3a8a, #3b82f6);
    }

    .item-main {
      flex: 1;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-bottom: 8px;
      gap: 16px;
    }

    .item-target {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: #111827;
    }

    .item-amount {
      font-size: 16px;
      font-weight: 700;
      color: #1e3a8a;
      white-space: nowrap;
    }

    .item-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 8px;
      font-size: 12px;
    }

    .meta-type,
    .meta-date,
    .meta-anonymous {
      padding: 4px 8px;
      border-radius: 4px;
      color: #6b7280;
    }

    .meta-type {
      background: #f3f4f6;
    }

    .meta-date {
      background: #f3f4f6;
    }

    .meta-anonymous {
      background: #fef3c7;
      color: #92400e;
    }

    .item-message {
      margin: 0;
      padding: 8px 12px;
      background: #f0f9ff;
      border-left: 3px solid #2563eb;
      font-size: 13px;
      color: #1e40af;
      font-style: italic;
    }

    .item-actions {
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
      background: #f9fafb;
      border-left: 1px solid #e5e7eb;
    }

    .action-btn {
      padding: 8px 12px;
      background: #2563eb;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    .action-btn:hover {
      background: #1d4ed8;
      transform: translateY(-2px);
    }

    /* Empty State */
    .empty-state {
      text-align: center;
      padding: 60px 20px;
      background: white;
      border-radius: 12px;
      border: 2px dashed #d1d5db;
    }

    .empty-icon {
      font-size: 64px;
      color: #d1d5db;
      margin-bottom: 16px;
    }

    .empty-state h3 {
      font-size: 20px;
      font-weight: 600;
      color: #111827;
      margin: 0 0 8px 0;
    }

    .empty-state p {
      font-size: 14px;
      color: #6b7280;
      margin: 0 0 20px 0;
    }

    .btn-explore {
      display: inline-block;
      padding: 10px 20px;
      background: #2563eb;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .btn-explore:hover {
      background: #1d4ed8;
      transform: translateY(-2px);
    }

    /* Loading */
    .loading {
      text-align: center;
      padding: 60px 20px;
      color: #6b7280;
    }

    .loading i {
      font-size: 40px;
      display: block;
      margin-bottom: 16px;
      color: #2563eb;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .donation-history-section {
        padding: 40px 16px;
      }

      .history-header h1 {
        font-size: 24px;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }

      .stat-card {
        flex-direction: column;
        text-align: center;
        padding: 16px;
      }

      .stat-icon {
        width: 48px;
        height: 48px;
        font-size: 20px;
      }

      .donation-item {
        flex-direction: column;
      }

      .item-actions {
        border-left: none;
        border-top: 1px solid #e5e7eb;
        justify-content: flex-end;
      }

      .item-header {
        flex-direction: column;
      }

      .item-amount {
        order: -1;
      }
    }
  `]
})
export class DonationHistoryComponent implements OnInit {
  http = inject(HttpClient);

  donations: Donation[] = [];
  stats: DonationStats | null = null;
  loading = true;
  sortBy: 'recent' | 'amount' = 'recent';

  ngOnInit() {
    this.loadDonations();
  }

  loadDonations() {
    this.loading = true;
    this.http
      .get<any>(`${environment.apiUrl}get_user_donations.php`, {
        params: {
          sort: this.sortBy,
          limit: 20
        }
      })
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.donations = response.data;
            this.stats = response.stats;
          }
        },
        error: (error) => {
          console.error('Error loading donations:', error);
        },
        complete: () => {
          this.loading = false;
        }
      });
  }

  getTypeIcon(type: string): string {
    const icons: Record<string, string> = {
      request: 'fa-hand-holding-heart',
      association: 'fa-handshake',
      platform: 'fa-heart'
    };
    return icons[type] || 'fa-heart';
  }

  getTypeLabel(type: string): string {
    const labels: Record<string, string> = {
      request: 'Demande d\'aide',
      association: 'Association',
      platform: 'Don libre'
    };
    return labels[type] || type;
  }

  viewTarget(donation: Donation) {
    if (donation.donation_type === 'request' && donation.request_id) {
      window.location.href = `/request-detail/${donation.request_id}`;
    } else if (donation.donation_type === 'association' && donation.association_id) {
      window.location.href = `/association-detail/${donation.association_id}`;
    }
  }
}
