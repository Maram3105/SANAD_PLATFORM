import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';

export interface HelpOffer {
  id: number;
  user_id: number;
  request_id: number | null;
  campaign_id?: number | null;
  type: 'object' | 'service';
  description: string;
  quantity: number;
  category: string;
  location: string;
  delivery_method: 'hand' | 'delivery';
  deliveryMethod?: string;
  image_url?: string | null;
  status: 'pending' | 'accepted' | 'reserved' | 'completed' | 'rejected';
  donor_name?: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class HelpOfferService {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);
  private readonly apiUrl = environment.apiUrl;

  private getHeaders() {
    const token = this.auth.getToken();
    return token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : new HttpHeaders();
  }

  createOffer(offer: Partial<HelpOffer> | FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}create_help_offer.php`, offer, {
      headers: this.getHeaders()
    });
  }

  getOffers(params: any = {}): Observable<{ success: boolean; data: HelpOffer[] }> {
    return this.http.get<{ success: boolean; data: HelpOffer[] }>(`${this.apiUrl}get_help_offers.php`, {
      params
    });
  }

  updateStatus(offerId: number, status: string): Observable<any> {
    return this.http.post(`${this.apiUrl}update_help_offer_status.php`, { offerId, status }, {
      headers: this.getHeaders()
    });
  }
}
