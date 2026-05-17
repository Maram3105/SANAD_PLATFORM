import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { AdminService, AdminDonation } from '../admin.service';

@Component({
  selector: 'app-admin-donations',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, AdminNavbarComponent],
  templateUrl: './admin-donations.component.html',
  styleUrl: './admin-donations.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDonationsComponent implements OnInit {
  private readonly adminService = inject(AdminService);
  private readonly cdr = inject(ChangeDetectorRef);

  donations: AdminDonation[] = [];
  loading = true;
  error = '';

  statusFilter = '';
  total = 0;

  get totalAmount(): number {
    return this.donations.filter(d => d.status === 'completed').reduce((s, d) => s + Number(d.amount), 0);
  }

  get completedCount(): number {
    return this.donations.filter(d => d.status === 'completed').length;
  }

  ngOnInit(): void {
    this.loadDonations();
  }

  loadDonations(): void {
    this.loading = true;
    this.error = '';
    this.adminService.getDonations({
      status: this.statusFilter,
      limit: 100,
      offset: 0
    }).subscribe({
      next: (res) => {
        if (res.success) {
          this.donations = res.data;
          this.total = res.pagination.total;
        } else {
          this.error = 'Impossible de charger les dons.';
        }
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.error = 'Erreur de connexion au serveur.';
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  onFilterChange(): void { this.loadDonations(); }

  getDonorDisplay(donation: AdminDonation): string {
    if (donation.anonymous) return 'Anonyme';
    return donation.donor_name || donation.donor_email || 'Inconnu';
  }

  getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      pending: 'En attente',
      completed: 'Complété',
      failed: 'Échoué',
      refunded: 'Remboursé'
    };
    return labels[status] ?? status;
  }

  trackById(_: number, item: AdminDonation): number { return item.id; }
}
