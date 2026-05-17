import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { LoggedInNavbarComponent } from '../../shared/logged-in-navbar.component';
import { UserDataService, UserDonation, UserRequest, NotificationItem } from '../user-data.service';

interface ActivityItem {
  type: 'donation' | 'request' | 'notification';
  title: string;
  meta: string;
  date: string;
}

@Component({
  selector: 'app-activity-history',
  standalone: true,
  imports: [CommonModule, LoggedInNavbarComponent],
  templateUrl: './activity-history.component.html',
  styleUrl: './activity-history.component.css'
})
export class ActivityHistoryComponent implements OnInit {
  activities: ActivityItem[] = [];
  loading = true;

  constructor(
    private userData: UserDataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    forkJoin({
      donations: this.userData.getMyDonations(),
      requests: this.userData.getMyRequests(),
      notifications: this.userData.getNotifications()
    }).subscribe({
      next: ({ donations, requests, notifications }) => {
        const activityList: ActivityItem[] = [];

        if (donations?.success) {
          donations.data.forEach((item: UserDonation) => {
            activityList.push({
              type: 'donation',
              title: `Don de ${item.amount} DT`,
              meta: item.target_name,
              date: item.created_at
            });
          });
        }

        if (requests?.success) {
          requests.data.forEach((item: UserRequest) => {
            activityList.push({
              type: 'request',
              title: 'Demande publiee',
              meta: item.title,
              date: item.created_at
            });
          });
        }

        if (notifications?.success) {
          notifications.data.forEach((item: NotificationItem) => {
            activityList.push({
              type: 'notification',
              title: item.title,
              meta: item.detail,
              date: item.date
            });
          });
        }

        this.activities = activityList.sort((a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
