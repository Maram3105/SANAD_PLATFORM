import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import {
  AssociationDataService,
  Campaign,
  Category,
  DashboardUpdate
} from '../association-data.service';
import { AssociationNavbarComponent } from '../../shared/association-navbar.component';

@Component({
  selector: 'app-association-campaigns',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, AssociationNavbarComponent],
  templateUrl: './association-campaigns.component.html',
  styleUrl: './association-campaigns.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssociationCampaignsComponent {
  private readonly associationService = inject(AssociationDataService);

  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly error = signal('');
  readonly campaigns = signal<Campaign[]>([]);
  readonly activeCount = signal(0);
  readonly collectedTotal = signal(0);

  constructor() {
    this.loadCampaigns();
  }

  loadCampaigns() {
    this.loading.set(true);
    this.error.set('');

    this.associationService.getCampaigns().subscribe({
      next: (response: any) => {
        this.loading.set(false);
        if (!response.success && response.status !== 'success' && !Array.isArray(response)) {
          this.error.set('Impossible de charger les campagnes.');
          return;
        }
        const campaigns = response.data || response;
        this.campaigns.set(campaigns);
        this.activeCount.set(campaigns.filter((campaign: Campaign) => campaign.status === 'active').length);
        this.collectedTotal.set(
          campaigns.reduce(
            (total: number, campaign: Campaign) => total + Number(campaign.collected_amount || 0),
            0
          )
        );
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Impossible de charger les campagnes.');
      }
    });
  }

  removeCampaign(campaign: Campaign) {
    if (!confirm(`Voulez-vous vraiment supprimer "${campaign.title}" ?`)) {
      return;
    }

    this.saving.set(true);
    this.associationService.deleteCampaign(campaign.id).subscribe({
      next: (response) => {
        this.saving.set(false);
        if (!response.success) {
          alert('Impossible de supprimer la campagne.');
          return;
        }
        this.campaigns.set(this.campaigns().filter((item) => item.id !== campaign.id));
        this.activeCount.set(this.campaigns().filter((item) => item.status === 'active').length);
        this.collectedTotal.set(
          this.campaigns().reduce(
            (total, item) => total + Number(item.collected_amount || 0),
            0
          )
        );
      },
      error: () => {
        this.saving.set(false);
        alert('Impossible de supprimer la campagne.');
      }
    });
  }

  imagePreview(path?: string | null): string | null {
    return this.associationService.imageUrl(path);
  }

  progressPercent(campaign: Campaign): number {
    if (!campaign.target_amount) return 0;
    return Math.min(100, Math.round((campaign.collected_amount / campaign.target_amount) * 100));
  }

  statusLabel(status: Campaign['status']): string {
    switch (status) {
      case 'completed':
        return 'Terminée';
      case 'paused':
        return 'En pause';
      case 'cancelled':
        return 'Annulée';
      default:
        return 'Active';
    }
  }
}
