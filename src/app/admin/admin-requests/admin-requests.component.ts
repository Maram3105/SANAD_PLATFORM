import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { AdminService, AdminRequest } from '../admin.service';

@Component({
  selector: 'app-admin-requests',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, AdminNavbarComponent],
  templateUrl: './admin-requests.component.html',
  styleUrl: './admin-requests.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminRequestsComponent implements OnInit {
  private readonly adminService = inject(AdminService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly route = inject(ActivatedRoute);

  requests: AdminRequest[] = [];
  loading = true;
  error = '';
  successMessage = '';
  processingId: number | null = null;

  // Filters
  searchQuery = '';
  statusFilter = '';
  urgencyFilter = '';
  total = 0;

  // Detail modal
  selectedRequest: AdminRequest | null = null;

  get pendingCount(): number {
    return this.requests.filter(r => r.status === 'paused').length;
  }

  get activeCount(): number {
    return this.requests.filter(r => r.status === 'active').length;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['status']) {
        this.statusFilter = params['status'];
      }
      this.loadRequests();
    });
  }

  loadRequests(): void {
    this.loading = true;
    this.error = '';
    this.adminService.getRequests({
      search: this.searchQuery,
      status: this.statusFilter,
      urgency: this.urgencyFilter,
      limit: 100,
      offset: 0
    }).subscribe({
      next: (res) => {
        if (res.success) {
          this.requests = res.data;
          this.total = res.pagination.total;
        } else {
          this.error = 'Impossible de charger les demandes.';
        }
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.error = err?.message ?? 'Erreur de connexion au serveur.';
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  onSearch(): void { this.loadRequests(); }
  onFilterChange(): void { this.loadRequests(); }


  /**
   * Valide une demande (pending -> active)
   */
  validateRequest(req: AdminRequest): void {
    if (this.processingId !== null) return;
    this.processingId = req.id;
    this.adminService.updateRequest(req.id, 'approve').subscribe({
      next: (res) => {
        if (res.success) {
          req.status = 'active';
          this.showSuccess(`Demande "${req.title}" validée et publiée.`);
        } else {
          this.error = res.message;
        }
        this.processingId = null;
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.error = err?.message ?? 'Erreur lors de la validation.';
        this.processingId = null;
        this.cdr.markForCheck();
      }
    });
  }

  /**
   * Suspend une demande (pending/active -> suspended)
   */
  suspendRequest(req: AdminRequest): void {
    if (this.processingId !== null) return;
    if (!confirm(`Êtes-vous sûr de vouloir suspendre cette demande ?`)) return;
    
    this.processingId = req.id;
    this.adminService.updateRequest(req.id, 'reject').subscribe({
      next: (res) => {
        if (res.success) {
          req.status = 'cancelled'; // Map suspended to cancelled in backend
          this.showSuccess(`Demande suspendue temporairement.`);
        } else {
          this.error = res.message;
        }
        this.processingId = null;
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.error = err?.message ?? 'Erreur lors de la suspension.';
        this.processingId = null;
        this.cdr.markForCheck();
      }
    });
  }

  /**
   * Clôture une demande (active/suspended -> closed)
   */
  closeRequest(req: AdminRequest): void {
    if (this.processingId !== null) return;
    if (!confirm(`Êtes-vous sûr de vouloir clôturer définitivement cette demande ?`)) return;

    this.processingId = req.id;
    // Currently mapping to 'reject' because backend doesn't have a 'complete' action in admin_update_request.php
    this.adminService.updateRequest(req.id, 'reject').subscribe({
      next: (res) => {
        if (res.success) {
          req.status = 'completed'; // Set to completed locally to match "closed"
          this.showSuccess(`Demande clôturée définitivement.`);
        } else {
          this.error = res.message;
        }
        this.processingId = null;
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.error = err?.message ?? 'Erreur lors de la clôture.';
        this.processingId = null;
        this.cdr.markForCheck();
      }
    });
  }

  /**
   * Réactive une demande (suspended -> active)
   */
  reactivateRequest(req: AdminRequest): void {
    if (this.processingId !== null) return;
    this.processingId = req.id;
    this.adminService.updateRequest(req.id, 'approve').subscribe({
      next: (res) => {
        if (res.success) {
          req.status = 'active';
          this.showSuccess(`Demande réactivée.`);
        } else {
          this.error = res.message;
        }
        this.processingId = null;
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.error = err?.message ?? 'Erreur lors de la réactivation.';
        this.processingId = null;
        this.cdr.markForCheck();
      }
    });
  }

  /**
   * Change le statut via le select
   */
  changeStatus(req: AdminRequest, newStatus: string): void {
    if (req.status === newStatus) return;

    // Règles de transition
    if (req.status === 'paused' && (newStatus !== 'active' && newStatus !== 'cancelled')) {
      this.error = 'Transition non autorisée.';
      return;
    }
    if (req.status === 'active' && (newStatus !== 'cancelled' && newStatus !== 'completed')) {
      this.error = 'Transition non autorisée.';
      return;
    }
    if (req.status === 'cancelled' && (newStatus !== 'active' && newStatus !== 'completed')) {
      this.error = 'Transition non autorisée.';
      return;
    }
    if (req.status === 'completed') {
      this.error = 'Impossible de modifier une demande clôturée.';
      return;
    }

    // Mapping des statuts aux fonctions existantes
    if (newStatus === 'active') this.validateRequest(req);
    else if (newStatus === 'cancelled') this.suspendRequest(req);
    else if (newStatus === 'completed') this.closeRequest(req);
  }

  deleteRequest(req: AdminRequest): void {
    if (this.processingId !== null) return;
    if (!confirm(`Supprimer définitivement la demande "${req.title}" ? Cette action est irréversible.`)) return;
    this.processingId = req.id;
    this.adminService.updateRequest(req.id, 'delete').subscribe({
      next: (res) => {
        if (res.success) {
          this.requests = this.requests.filter(r => r.id !== req.id);
          this.showSuccess(`Demande "${req.title}" supprimée.`);
        } else {
          this.error = res.message;
        }
        this.processingId = null;
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.error = err?.message ?? 'Erreur lors de la suppression.';
        this.processingId = null;
        this.cdr.markForCheck();
      }
    });
  }

  viewRequest(req: AdminRequest): void {
    this.selectedRequest = req;
    this.cdr.markForCheck();
  }

  closeModal(): void {
    this.selectedRequest = null;
    this.cdr.markForCheck();
  }

  private showSuccess(msg: string): void {
    this.successMessage = msg;
    this.error = '';
    setTimeout(() => { this.successMessage = ''; this.cdr.markForCheck(); }, 4000);
  }

  getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      active: 'Active',
      completed: 'Terminée',
      paused: 'En attente',
      cancelled: 'Suspendue'
    };
    return labels[status] ?? status;
  }

  getUrgencyLabel(urgency: string): string {
    const labels: Record<string, string> = { low: 'Faible', medium: 'Moyenne', high: 'Haute' };
    return labels[urgency] ?? urgency;
  }

  getProgress(req: AdminRequest): number {
    if (!req.target_amount || req.target_amount === 0) return 0;
    return Math.min(100, Math.round((req.collected_amount / req.target_amount) * 100));
  }

  trackById(_: number, item: AdminRequest): number { return item.id; }
}
