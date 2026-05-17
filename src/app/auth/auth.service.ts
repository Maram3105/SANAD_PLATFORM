import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  LoginPayload,
  LoginResponse,
  RegisterResponse,
  RegisterUserPayload
} from './auth.models';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiBase = environment.apiUrl;
  private readonly tokenKey = 'sanad_token';
  private readonly roleKey = 'sanad_role';
  private readonly statusKey = 'sanad_status';
  private readonly fullNameKey = 'sanad_full_name';
  public redirectUrl: string | null = null;

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    const payload = this.decodeJwtPayload(token);
    if (payload?.exp && Date.now() >= Number(payload.exp) * 1000) {
      this.clearToken();
      return false;
    }

    return true;
  }

  setToken(token: string | null) {
    if (!token) {
      localStorage.removeItem(this.tokenKey);
      return;
    }
    localStorage.setItem(this.tokenKey, token);
  }

  setRole(role: string | null) {
    if (!role) {
      localStorage.removeItem(this.roleKey);
      return;
    }
    localStorage.setItem(this.roleKey, role);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getRole(): string | null {
    return localStorage.getItem(this.roleKey);
  }

  setFullName(fullName: string | null) {
    const cleanName = fullName?.trim();
    if (!cleanName) {
      localStorage.removeItem(this.fullNameKey);
      return;
    }
    localStorage.setItem(this.fullNameKey, cleanName);
  }

  getFullName(): string | null {
    return localStorage.getItem(this.fullNameKey);
  }

  setStatus(status: string | null) {
    if (!status) {
      localStorage.removeItem(this.statusKey);
      return;
    }
    localStorage.setItem(this.statusKey, status);
  }

  getStatus(): string | null {
    return localStorage.getItem(this.statusKey);
  }

  clearToken() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.roleKey);
    localStorage.removeItem(this.statusKey);
    localStorage.removeItem(this.fullNameKey);
  }

  private decodeJwtPayload(token: string): { exp?: number } | null {
    try {
      const payload = token.split('.')[1];
      if (!payload) {
        return null;
      }

      const normalizedPayload = payload.replace(/-/g, '+').replace(/_/g, '/');
      const paddedPayload = normalizedPayload.padEnd(
        normalizedPayload.length + ((4 - normalizedPayload.length % 4) % 4),
        '='
      );
      return JSON.parse(atob(paddedPayload));
    } catch {
      return null;
    }
  }

  login(payload: LoginPayload): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiBase}login.php`, payload);
  }

  registerUser(payload: RegisterUserPayload): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(
      `${this.apiBase}register_user.php`,
      payload
    );
  }

  registerAssociation(payload: FormData): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(
      `${this.apiBase}register_association.php`,
      payload
    );
  }
}
