export type UserRole = 'user' | 'association' | 'admin';
export type AssociationStatus = 'pending' | 'rejected' | 'approved';

export interface LoginPayload {
  email: string;
  password: string;
  remember: boolean;
}

export interface LoginResponse {
  success: boolean;
  role?: UserRole;
  fullName?: string;
  associationStatus?: AssociationStatus;
  token?: string;
  message?: string;
}

export interface RegisterResponse {
  success: boolean;
  message?: string;
}

export interface RegisterUserPayload {
  fullName: string;
  email: string;
  password: string;
  phone?: string;
}
