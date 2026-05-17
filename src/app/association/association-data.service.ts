import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

export interface Category {
  id: number;
  name: string;
  slug: string;
  color: string;
}

export interface DashboardStats {
  total_donations: number;
  campaign_count: number;
  donors_count: number;
  active_campaigns: number;
}

export interface DashboardDonation {
  id: number;
  amount: number;
  created_at: string;
  anonymous: boolean;
  donor_name?: string | null;
  donor_email?: string | null;
  request_title?: string | null;
}

export interface DashboardUpdate {
  id: number;
  title: string;
  description: string;
  created_at: string;
  request_title?: string | null;
  request_id?: number | null;
}

export interface Campaign {
  id: number;
  association_id: number;
  title: string;
  description: string;
  full_description?: string | null;
  category_id?: number | null;
  category_name?: string | null;
  location: string;
  urgency: 'low' | 'medium' | 'high';
  image_url?: string | null;
  target_amount: number;
  collected_amount: number;
  status: 'active' | 'completed' | 'paused' | 'cancelled';
  donors_count?: number | null;
  created_at: string;
}

export interface DonationRow {
  id: number;
  amount: number;
  created_at: string;
  anonymous: boolean;
  donor_name?: string | null;
  donor_email?: string | null;
  message?: string | null;
  request_title?: string | null;
}

export interface RequestDetailPayload {
  id: number;
  title: string;
  description: string;
  full_description?: string | null;
  location: string;
  category_id?: number | null;
  urgency: 'low' | 'medium' | 'high';
  image_url?: string | null;
}

export interface CampaignDetailPayload extends RequestDetailPayload {
  target_amount: number;
  status: 'active' | 'completed' | 'paused' | 'cancelled';
}

export interface AssociationProfile {
  id: number;
  organization_name: string;
  description: string;
  full_description?: string | null;
  location: string;
  website?: string | null;
  logo_url?: string | null;
  cover_url?: string | null;
  verified: number | boolean;
  status: 'pending' | 'approved' | 'rejected';
}

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssociationDataService {
  private readonly apiBase = environment.apiUrl;
  private readonly assetsBase = environment.assetsUrl;
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);

  private authHeaders(): HttpHeaders {
    const token = this.auth.getToken();
    return new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : ''
    });
  }

  imageUrl(path?: string | null): string | null {
    if (!path || path === '') return null;
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    
    let cleanPath = path.startsWith('/') ? path.substring(1) : path;
    if (cleanPath.startsWith('backend/')) {
      cleanPath = cleanPath.substring(8);
    }
    
    const base = this.assetsBase.endsWith('/') ? this.assetsBase : `${this.assetsBase}/`;
    return `${base}${cleanPath}`;
  }

  getCategories(): Observable<{ success: boolean; data: Category[] }> {
    return this.http.get<{ success: boolean; data: Category[] }>(
      `${this.apiBase}get_categories.php`
    );
  }

  getDashboard(): Observable<{
    success: boolean;
    data: {
      stats: DashboardStats;
      recent_donations: DashboardDonation[];
      recent_updates: DashboardUpdate[];
    };
  }> {
    return this.http.get<{
      success: boolean;
      data: {
        stats: DashboardStats;
        recent_donations: DashboardDonation[];
        recent_updates: DashboardUpdate[];
      };
    }>(`${this.apiBase}get_association_dashboard.php`, {
      headers: this.authHeaders()
    });
  }

  getCampaigns(): Observable<{ success: boolean; data: Campaign[] }> {
    return this.http.get<{ success: boolean; data: Campaign[] }>(
      `${this.apiBase}get_association_campaigns.php`,
      { headers: this.authHeaders() }
    );
  }

  createCampaign(payload: FormData): Observable<{ success: boolean; data?: { id: number } }> {
    return this.http.post<{ success: boolean; data?: { id: number } }>(
      `${this.apiBase}create_campaign.php`,
      payload,
      { headers: this.authHeaders() }
    );
  }

  updateCampaign(payload: FormData): Observable<{ success: boolean }>{
    return this.http.post<{ success: boolean }>(
      `${this.apiBase}update_campaign.php`,
      payload,
      { headers: this.authHeaders() }
    );
  }

  deleteCampaign(campaignId: number): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(
      `${this.apiBase}delete_campaign.php`,
      { campaign_id: campaignId },
      { headers: this.authHeaders() }
    );
  }

  getDonations(): Observable<{ success: boolean; data: DonationRow[]; summary: { total_donations: number; total_amount: number } }>{
    return this.http.get<{
      success: boolean;
      data: DonationRow[];
      summary: { total_donations: number; total_amount: number };
    }>(`${this.apiBase}get_association_donations.php`, {
      headers: this.authHeaders()
    });
  }

  getProfile(): Observable<{ success: boolean; data: AssociationProfile }> {
    return this.http.get<{ success: boolean; data: AssociationProfile }>(
      `${this.apiBase}get_association_profile.php`,
      { headers: this.authHeaders() }
    );
  }

  updateProfile(payload: FormData): Observable<{ success: boolean; data?: AssociationProfile; message?: string }> {
    return this.http.post<{ success: boolean; data?: AssociationProfile; message?: string }>(
      `${this.apiBase}update_association_profile.php`,
      payload,
      { headers: this.authHeaders() }
    );
  }

  getUpdates(requestId: number): Observable<{ success: boolean; data: DashboardUpdate[] }> {
    return this.http.get<{ success: boolean; data: DashboardUpdate[] }>(
      `${this.apiBase}get_request_updates.php?request_id=${requestId}`,
      { headers: this.authHeaders() }
    );
  }

  getRequestDetail(requestId: number): Observable<{
    status: string;
    data: { request: RequestDetailPayload };
  }> {
    return this.http.get<{
      status: string;
      data: { request: RequestDetailPayload };
    }>(`${this.apiBase}get_request_detail.php?id=${requestId}`);
  }

  getCampaignDetail(campaignId: number): Observable<{
    success: boolean;
    data: { campaign: CampaignDetailPayload };
  }> {
    return this.http.get<{
      success: boolean;
      data: { campaign: CampaignDetailPayload };
    }>(`${this.apiBase}get_campaign_detail.php?id=${campaignId}`, {
      headers: this.authHeaders()
    });
  }

  createUpdate(payload: { request_id: number; title: string; description: string }): Observable<{ success: boolean }>{
    return this.http.post<{ success: boolean }>(
      `${this.apiBase}create_request_update.php`,
      payload,
      { headers: this.authHeaders() }
    );
  }
}
