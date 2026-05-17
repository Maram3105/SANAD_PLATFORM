import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { AdminService, AdminAssociation } from '../admin.service';

@Component({
  selector: 'app-admin-associations',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, AdminNavbarComponent],
  templateUrl: './admin-associations.component.html',
  styleUrl: './admin-associations.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminAssociationsComponent implements OnInit {
  private readonly adminService = inject(AdminService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  associations: AdminAssociation[] = [];
  loading = true;
  error = '';
  successMessage = '';
  processingId: number | null = null;

  // Filters
  searchQuery = '';
  statusFilter = '';
  total = 0;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['status']) {
        this.statusFilter = params['status'];
      }
      this.loadAssociations();
    });
  }

  loadAssociations(): void {
    this.loading = true;
    this.error = '';
    this.cdr.markForCheck();

    this.adminService.getAssociations({
      search: this.searchQuery,
      status: this.statusFilter,
      limit: 100,
      offset: 0
    }).subscribe({
      next: (res) => {
        if (res && res.success) {
          this.associations = res.data || [];
          this.total = res.pagination?.total || 0;
        } else {
          this.error = res?.message || 'Impossible de charger les associations.';
        }
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Associations load error:', err);
        this.error = err?.message ?? 'Erreur de connexion au serveur.';
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  onSearch(): void {
    this.loadAssociations();
  }

  onFilterChange(): void {
    this.loadAssociations();
  }



  approve(association: AdminAssociation): void {
    if (this.processingId !== null) return;
    this.processingId = association.id;
    this.adminService.updateAssociation(association.id, 'approve').subscribe({
      next: (res) => {
        if (res.success) {
          association.status = 'approved';
          association.verified = true;
          this.showSuccess(`${association.organization_name} approuvée avec succès.`);
        } else {
          this.error = res.message;
        }
        this.processingId = null;
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.error = err?.message ?? 'Erreur lors de l\'approbation.';
        this.processingId = null;
        this.cdr.markForCheck();
      }
    });
  }

  reject(association: AdminAssociation): void {
    if (this.processingId !== null) return;
    if (!confirm(`Rejeter l'association "${association.organization_name}" ?`)) return;
    this.processingId = association.id;
    this.adminService.updateAssociation(association.id, 'reject').subscribe({
      next: (res) => {
        if (res.success) {
          association.status = 'rejected';
          association.verified = false;
          this.showSuccess(`❌ ${association.organization_name} rejetée.`);
        } else {
          this.error = res.message;
        }
        this.processingId = null;
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.error = err?.message ?? 'Erreur lors du rejet.';
        this.processingId = null;
        this.cdr.markForCheck();
      }
    });
  }

  private showSuccess(msg: string): void {
    this.successMessage = msg;
    setTimeout(() => { this.successMessage = ''; this.cdr.markForCheck(); }, 4000);
  }

  getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      pending: 'En attente',
      approved: 'Approuvée',
      rejected: 'Rejetée'
    };
    return labels[status] ?? status;
  }

  get pendingCount(): number {
    return this.associations.filter(a => a.status === 'pending').length;
  }

  trackById(_: number, item: AdminAssociation): number { return item.id; }
}
