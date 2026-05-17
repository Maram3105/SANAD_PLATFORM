import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

export interface AdminStats {
  pending_associations: number;
  pending_requests: number;
  total_donations: number;
  donations_count: number;
  total_associations: number;
  total_requests: number;
  active_requests: number;
  closed_requests: number;
  distribution_by_category: { category: string; count: number }[];
  distribution_by_region: { region: string; count: number }[];
  monthly_donations?: { month: string; amount: number }[];
  top_donors?: { name: string; total_amount: number; donation_count: number }[];
}

export interface AdminAssociation {
  id: number;
  organization_name: string;
  responsible_name: string;
  email: string;
  phone: string;
  location: string;
  status: 'pending' | 'approved' | 'rejected';
  verified: boolean;
  created_at: string;
  category_name: string | null;
}

export interface AdminRequest {
  id: number;
  item_key?: string;
  item_type?: 'request' | 'campaign';
  title: string;
  description: string;
  location: string;
  urgency: 'low' | 'medium' | 'high';
  status: 'active' | 'completed' | 'paused' | 'cancelled';
  target_amount: number;
  collected_amount: number;
  created_at: string;
  organization_name: string;
  logo_url: string | null;
  category_name: string | null;
  documents?: AdminRequestDocument[];
}

export interface AdminRequestDocument {
  id: number;
  file_path: string;
  file_type: string | null;
  file_name: string | null;
  created_at: string;
}

export interface AdminDonation {
  id: number;
  donor_name: string | null;
  donor_email: string | null;
  amount: number;
  currency: string;
  status: string;
  payment_method: string | null;
  anonymous: boolean;
  created_at: string;
  organization_name: string;
  request_title: string | null;
}

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  phone?: string;
  role: string;
  status: 'active' | 'blocked' | 'closed';
  reliability_score: number;
  created_at: string;
  last_login?: string;
}

export interface AdminListResponse<T> {
  success: boolean;
  data: T[];
  pagination: { total: number; limit: number; offset: number };
  message?: string;
}

export interface AdminActionResponse {
  success: boolean;
  message: string;
  new_status?: string;
}

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly apiBase = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {}

  private headers(): HttpHeaders {
    const token = this.auth.getToken();
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let message: string;
    if (err.status === 0) {
      message = 'Erreur réseau : Impossible de contacter le serveur. Vérifiez votre connexion ou le statut de XAMPP.';
    } else if (err.status === 401) {
      message = 'Session expirée. Veuillez vous reconnecter.';
    } else if (err.status === 403) {
      message = 'Accès refusé. Droits administrateur requis.';
    } else if (err.status === 404) {
      message = 'Ressource introuvable (404). Vérifiez l\'URL de l\'API.';
    } else if (err.status >= 500) {
      message = `Erreur serveur (${err.status}). Veuillez réessayer plus tard.`;
    } else if (err.error?.message) {
      message = err.error.message;
    } else {
      message = `Une erreur inattendue est survenue (${err.status})`;
    }
    return throwError(() => new Error(message));
  }

  getStats(): Observable<{ success: boolean; data: AdminStats }> {
    return this.http.get<{ success: boolean; data: AdminStats }>(
      `${this.apiBase}admin_get_stats.php`,
      { headers: this.headers() }
    ).pipe(catchError(this.handleError));
  }

  getAssociations(params: {
    search?: string;
    status?: string;
    limit?: number;
    offset?: number;
  }): Observable<AdminListResponse<AdminAssociation>> {
    let p = new HttpParams();
    if (params.search) p = p.set('search', params.search);
    if (params.status) p = p.set('status', params.status);
    if (params.limit != null) p = p.set('limit', params.limit.toString());
    if (params.offset != null) p = p.set('offset', params.offset.toString());

    return this.http.get<AdminListResponse<AdminAssociation>>(
      `${this.apiBase}admin_get_associations.php`,
      { headers: this.headers(), params: p }
    ).pipe(catchError(this.handleError));
  }

  updateAssociation(associationId: number, action: 'approve' | 'reject'): Observable<AdminActionResponse> {
    return this.http.post<AdminActionResponse>(
      `${this.apiBase}admin_update_association.php`,
      { association_id: associationId, action },
      { headers: this.headers() }
    ).pipe(catchError(this.handleError));
  }

  getRequests(params: {
    search?: string;
    status?: string;
    urgency?: string;
    limit?: number;
    offset?: number;
  }): Observable<AdminListResponse<AdminRequest>> {
    let p = new HttpParams();
    if (params.search) p = p.set('search', params.search);
    if (params.status) p = p.set('status', params.status);
    if (params.urgency) p = p.set('urgency', params.urgency);
    if (params.limit != null) p = p.set('limit', params.limit.toString());
    if (params.offset != null) p = p.set('offset', params.offset.toString());

    return this.http.get<AdminListResponse<AdminRequest>>(
      `${this.apiBase}admin_get_requests.php`,
      { headers: this.headers(), params: p }
    ).pipe(catchError(this.handleError));
  }

  updateRequest(requestId: number, action: 'approve' | 'reject' | 'complete' | 'delete', itemType: 'request' | 'campaign' = 'request'): Observable<AdminActionResponse> {
    return this.http.post<AdminActionResponse>(
      `${this.apiBase}admin_update_request.php`,
      { request_id: requestId, action, item_type: itemType },
      { headers: this.headers() }
    ).pipe(catchError(this.handleError));
  }

  getDonations(params: {
    status?: string;
    limit?: number;
    offset?: number;
  }): Observable<AdminListResponse<AdminDonation>> {
    let p = new HttpParams();
    if (params.status) p = p.set('status', params.status);
    if (params.limit != null) p = p.set('limit', params.limit.toString());
    if (params.offset != null) p = p.set('offset', params.offset.toString());

    return this.http.get<AdminListResponse<AdminDonation>>(
      `${this.apiBase}admin_get_donations.php`,
      { headers: this.headers(), params: p }
    ).pipe(catchError(this.handleError));
  }

  getUsers(params: {
    search?: string;
    role?: string;
    status?: string;
    limit?: number;
    offset?: number;
  }): Observable<AdminListResponse<AdminUser>> {
    let p = new HttpParams();
    if (params.search) p = p.set('search', params.search);
    if (params.role) p = p.set('role', params.role);
    if (params.status) p = p.set('status', params.status);
    if (params.limit != null) p = p.set('limit', params.limit.toString());
    if (params.offset != null) p = p.set('offset', params.offset.toString());

    return this.http.get<AdminListResponse<AdminUser>>(
      `${this.apiBase}admin_get_users.php`,
      { headers: this.headers(), params: p }
    ).pipe(catchError(this.handleError));
  }

  blockUser(userId: number): Observable<AdminActionResponse> {
    return this.http.patch<AdminActionResponse>(
      `${this.apiBase}users/${userId}/block`,
      {},
      { headers: this.headers() }
    ).pipe(catchError(this.handleError));
  }

  unblockUser(userId: number): Observable<AdminActionResponse> {
    return this.http.patch<AdminActionResponse>(
      `${this.apiBase}users/${userId}/unblock`,
      {},
      { headers: this.headers() }
    ).pipe(catchError(this.handleError));
  }

  closeAccount(userId: number): Observable<AdminActionResponse> {
    return this.http.patch<AdminActionResponse>(
      `${this.apiBase}users/${userId}/close`,
      {},
      { headers: this.headers() }
    ).pipe(catchError(this.handleError));
  }

  updateReliabilityScore(userId: number, score: number): Observable<AdminActionResponse> {
    return this.http.patch<AdminActionResponse>(
      `${this.apiBase}users/${userId}/score`,
      { reliability_score: score },
      { headers: this.headers() }
    ).pipe(catchError(this.handleError));
  }

  // --- Statistics Methods ---
  getStatisticsSummary(): Observable<{ success: boolean; data: AdminStats }> {
    return this.getStats();
  }

  getRequestsStats(): Observable<{ success: boolean; data: AdminStats }> {
    return this.getStats();
  }

  getDonationsStats(): Observable<{ success: boolean; data: AdminStats }> {
    return this.getStats();
  }

  getTopDonors(): Observable<{ success: boolean; data: AdminStats }> {
    return this.getStats();
  }
}
