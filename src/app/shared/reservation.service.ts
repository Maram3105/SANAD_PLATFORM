import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';

export interface Reservation {
  id: number;
  help_offer_id: number;
  reserved_by: number;
  status: 'active' | 'completed' | 'cancelled' | 'expired';
  expires_at: string;
  item_description?: string;
  donor_name?: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);
  private readonly apiUrl = environment.apiUrl;

  private getHeaders() {
    const token = this.auth.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  createReservation(offerId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}create_reservation.php`, { offerId }, {
      headers: this.getHeaders()
    });
  }

  getReservations(params: any = {}): Observable<{ success: boolean; data: Reservation[] }> {
    return this.http.get<{ success: boolean; data: Reservation[] }>(`${this.apiUrl}get_reservations.php`, {
      params,
      headers: this.getHeaders()
    });
  }
}
