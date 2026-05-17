import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoggedInNavbarComponent } from '../../shared/logged-in-navbar.component';
import { UserDataService, NotificationItem } from '../user-data.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, RouterLink, LoggedInNavbarComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit {
  notifications: NotificationItem[] = [];
  loading = true;
  isUpdating = false;
  error = '';

  constructor(
    private userData: UserDataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.userData.getNotifications().subscribe({
      next: (response) => {
        if (response.success) {
          this.notifications = response.data;
          this.error = '';
        } else {
          this.error = 'Impossible de charger les notifications.';
        }
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = err?.status === 401
          ? 'Votre session a expire. Veuillez vous reconnecter.'
          : 'Impossible de charger les notifications.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  markAllRead() {
    if (this.isUpdating) {
      return;
    }

    this.isUpdating = true;
    this.userData.markAllNotificationsRead().subscribe({
      next: (response) => {
        if (response.success) {
          this.notifications = this.notifications.map((item) => ({
            ...item,
            isRead: true
          }));
        }
        this.isUpdating = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isUpdating = false;
        this.cdr.detectChanges();
      }
    });
  }

  markRead(item: NotificationItem) {
    if (this.isUpdating || item.isRead) {
      return;
    }

    this.isUpdating = true;
    this.userData.markNotificationRead(item.id).subscribe({
      next: (response) => {
        if (response.success) {
          item.isRead = true;
        }
        this.isUpdating = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isUpdating = false;
        this.cdr.detectChanges();
      }
    });
  }
}
