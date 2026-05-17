import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    const role = authService.getRole();
    const status = authService.getStatus();

    if (role === 'association' && (status === 'pending' || status === 'rejected')) {
      if (status === 'pending' && state.url !== '/auth/pending') {
        router.navigate(['/auth/pending']);
        return false;
      }
      if (status === 'rejected' && state.url !== '/auth/rejected') {
        router.navigate(['/auth/rejected']);
        return false;
      }
    }
    return true;
  }

  // Store the attempted URL for redirection after login
  authService.redirectUrl = state.url;
  router.navigate(['/auth/login']);
  return false;
};
