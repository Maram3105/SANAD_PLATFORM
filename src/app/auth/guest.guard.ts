import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const guestGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    return true;
  }

  // If already logged in, redirect to dashboard
  const role = authService.getRole();
  const status = authService.getStatus();

  if (role === 'association') {
    if (status === 'pending') {
      router.navigate(['/auth/pending']);
    } else if (status === 'rejected') {
      router.navigate(['/auth/rejected']);
    } else {
      router.navigate(['/association/dashboard']);
    }
  } else if (role === 'admin') {
    router.navigate(['/admin-dashboard']);
  } else {
    router.navigate(['/dashboard']);
  }
  
  return false;
};
