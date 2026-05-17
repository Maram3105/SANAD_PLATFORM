import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { AdminService, AdminUser } from '../admin.service';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, AdminNavbarComponent],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminUsersComponent implements OnInit {
  private readonly adminService = inject(AdminService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly router = inject(Router);

  users: AdminUser[] = [];
  loading = true;
  error = '';
  searchQuery = '';
  roleFilter = '';

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.error = '';
    this.cdr.markForCheck();

    this.adminService.getUsers({ 
      search: this.searchQuery,
      role: this.roleFilter
    }).subscribe({
      next: (res) => {
        if (res.success) {
          this.users = res.data;
          console.log('Users loaded:', this.users);
        } else {
          this.error = 'Impossible de charger les utilisateurs.';
        }
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.error = err?.message ?? 'Erreur lors du chargement.';
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  onSearch(): void {
    this.loadUsers();
  }

  onFilterChange(): void {
    this.loadUsers();
  }

  get pendingCount(): number {
    // For demo purposes, we consider 'blocked' or newly registered as pending
    // Or you could fetch real pending counts from backend
    return this.users.filter(u => u.status === 'blocked').length;
  }

  getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      active: 'Actif',
      blocked: 'Bloqué',
      closed: 'Clôturé'
    };
    return labels[status] ?? status;
  }

  getUserColor(name: string): string {
    const colors = [
      'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
      'linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)',
      'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  }

  viewProfile(user: AdminUser): void {
    if (user.role === 'association') {
      this.router.navigate(['/association-detail', user.id]);
    } else {
      // For standard users, we could navigate to a future detail page or just the profile
      // For now, since there's no public user detail, we show an alert or navigate to dashboard
      // Assuming association is the primary detail view needed
      this.router.navigate(['/dashboard'], { queryParams: { userId: user.id } });
    }
  }

  blockUser(user: AdminUser): void {
    if (!confirm(`Bloquer l'utilisateur ${user.name} ?`)) return;
    
    this.adminService.blockUser(user.id).subscribe({
      next: (res) => {
        if (res.success) {
          user.status = 'blocked';
          this.cdr.markForCheck();
        }
      }
    });
  }

  unblockUser(user: AdminUser): void {
    if (!confirm(`Débloquer l'utilisateur ${user.name} ?`)) return;

    this.adminService.unblockUser(user.id).subscribe({
      next: (res) => {
        if (res.success) {
          user.status = 'active';
          this.cdr.markForCheck();
        }
      }
    });
  }

  closeAccount(user: AdminUser): void {
    if (!confirm(`Clôturer définitivement le compte de ${user.name} ?`)) return;

    this.adminService.closeAccount(user.id).subscribe({
      next: (res) => {
        if (res.success) {
          user.status = 'closed';
          this.cdr.markForCheck();
        }
      }
    });
  }


}
