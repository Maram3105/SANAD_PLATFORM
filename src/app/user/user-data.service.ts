import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

export interface UserProfile {
  id: number;
  fullName: string;
  email: string;
  phone?: string;
  role: string;
}

export interface UserRequest {
  id: number;
  title: string;
  status: string;
  target_amount: number;
  collected_amount: number;
  donors_count: number;
  created_at: string;
}

export interface UserDonation {
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

export interface UserDonationStats {
  total_donations: number;
  total_amount: number;
  requests_supported: number;
  associations_supported: number;
}

export interface NotificationItem {
  id: number;
  title: string;
  detail: string;
  isRead: boolean;
  date: string;
}

export interface FavoriteRequest {
  id: number;
  request_id: number;
  title: string;
  location: string;
  urgency: string;
  image_url?: string;
  target_amount: number;
  collected_amount: number;
  donors_count: number;
}

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private readonly apiBase = environment.apiUrl;
  private readonly assetsBase = environment.assetsUrl;

  constructor(private http: HttpClient, private auth: AuthService) {}

  imageUrl(path?: string | null): string | null {
    if (!path || path === '') return null;
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    
    // Remove any leading 'backend/' if it's already in the path to avoid duplication with assetsBase
    let cleanPath = path.startsWith('/') ? path.substring(1) : path;
    if (cleanPath.startsWith('backend/')) {
      cleanPath = cleanPath.substring(8);
    }
    
    // Ensure assetsBase ends with a slash and cleanPath doesn't start with one
    const base = this.assetsBase.endsWith('/') ? this.assetsBase : `${this.assetsBase}/`;
    return `${base}${cleanPath}`;
  }

  private authHeaders(): HttpHeaders {
    const token = this.auth.getToken();
    return new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : ''
    });
  }

  getProfile(): Observable<{ success: boolean; data: UserProfile }> {
    return this.http.get<{ success: boolean; data: UserProfile }>(
      `${this.apiBase}get_me.php`,
      { headers: this.authHeaders() }
    );
  }

  getMyRequests(): Observable<{ success: boolean; data: UserRequest[] }> {
    return this.http.get<{ success: boolean; data: UserRequest[] }>(
      `${this.apiBase}get_my_requests.php`,
      { headers: this.authHeaders() }
    );
  }

  getMyDonations(): Observable<{
    success: boolean;
    data: UserDonation[];
    stats: UserDonationStats;
  }> {
    return this.http.get<{
      success: boolean;
      data: UserDonation[];
      stats: UserDonationStats;
    }>(`${this.apiBase}get_user_donations.php`, { headers: this.authHeaders() });
  }

  getNotifications(): Observable<{ success: boolean; data: NotificationItem[] }> {
    return this.http.get<{ success: boolean; data: NotificationItem[] }>(
      `${this.apiBase}get_notifications.php`,
      { headers: this.authHeaders() }
    );
  }

  markNotificationRead(id: number): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(
      `${this.apiBase}mark_notification_read.php`,
      { id },
      { headers: this.authHeaders() }
    );
  }

  markAllNotificationsRead(): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(
      `${this.apiBase}mark_all_notifications_read.php`,
      {},
      { headers: this.authHeaders() }
    );
  }

  getRequests(limit = 3): Observable<{ status: string; data: UserRequest[] }> {
    return this.http.get<{ status: string; data: UserRequest[] }>(
      `${this.apiBase}get_requests.php?limit=${limit}`
    );
  }

  getRequestsWithParams(params: any): Observable<{ status: string; data: any[] }> {
    let url = `${this.apiBase}get_requests.php`;
    const queryParts = [];
    if (params.search) queryParts.push(`search=${encodeURIComponent(params.search)}`);
    if (params.category) queryParts.push(`category=${encodeURIComponent(params.category)}`);
    if (params.location) queryParts.push(`location=${encodeURIComponent(params.location)}`);
    if (params.urgency) queryParts.push(`urgency=${encodeURIComponent(params.urgency)}`);
    if (params.sort) queryParts.push(`sort=${encodeURIComponent(params.sort)}`);
    
    if (queryParts.length > 0) {
      url += '?' + queryParts.join('&');
    }
    
    return this.http.get<{ status: string; data: any[] }>(url);
  }

  getFavorites(): Observable<{ success: boolean; data: FavoriteRequest[] }> {
    return this.http.get<{ success: boolean; data: FavoriteRequest[] }>(
      `${this.apiBase}get_favorites.php`,
      { headers: this.authHeaders() }
    );
  }

  addFavorite(requestId: number): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(
      `${this.apiBase}add_favorite.php`,
      { request_id: requestId },
      { headers: this.authHeaders() }
    );
  }

  removeFavorite(requestId: number): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(
      `${this.apiBase}remove_favorite.php`,
      { request_id: requestId },
      { headers: this.authHeaders() }
    );
  }

  getAssociations(params: any = {}): Observable<{ status: string; data: any[] }> {
    let url = `${this.apiBase}get_associations.php`;
    const queryParts = [];
    if (params.search) queryParts.push(`search=${encodeURIComponent(params.search)}`);
    if (params.category) queryParts.push(`category=${encodeURIComponent(params.category)}`);
    if (params.location) queryParts.push(`location=${encodeURIComponent(params.location)}`);
    
    if (queryParts.length > 0) {
      url += '?' + queryParts.join('&');
    }
    
    return this.http.get<{ status: string; data: any[] }>(url);
  }

  getRequestDetail(id: number | string): Observable<{ success: boolean; data: any }> {
    return this.http.get<{ success: boolean; data: any }>(
      `${this.apiBase}get_request_detail.php?id=${encodeURIComponent(String(id))}`
    );
  }

  getAssociationDetail(id: number | string): Observable<{ success: boolean; data: any }> {
    return this.http.get<{ success: boolean; data: any }>(
      `${this.apiBase}get_association_detail.php?id=${id}`
    );
  }

  getCampaigns(): Observable<{ success: boolean; data: any[] }> {
    return this.http.get<{ success: boolean; data: any[] }>(
      `${this.apiBase}get_campaigns.php`
    );
  }

  getGlobalStats(): Observable<{ success: boolean; data: any }> {
    return this.http.get<{ success: boolean; data: any }>(
      `${this.apiBase}get_global_stats.php`
    );
  }
}
