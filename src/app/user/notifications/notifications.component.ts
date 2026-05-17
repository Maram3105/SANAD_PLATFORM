import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoggedInNavbarComponent } from '../../shared/logged-in-navbar.component';
import { UserDataService, NotificationItem } from '../user-data.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, LoggedInNavbarComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit {
  notifications: NotificationItem[] = [];
  loading = true;
  isUpdating = false;

  constructor(private userData: UserDataService) {}

  ngOnInit(): void {
    this.userData.getNotifications().subscribe({
      next: (response) => {
        if (response.success) {
          this.notifications = response.data;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
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
      },
      error: () => {
        this.isUpdating = false;
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
      },
      error: () => {
        this.isUpdating = false;
      }
    });
  }
}
