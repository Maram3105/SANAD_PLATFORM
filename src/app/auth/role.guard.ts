import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserRole } from './auth.models';

export const roleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  const expectedRoles = route.data['roles'] as UserRole[];
  const userRole = authService.getRole() as UserRole;

  if (authService.isAuthenticated() && expectedRoles.includes(userRole)) {
    return true;
  }

  // If wrong role, redirect to home
  router.navigate(['/']);
  return false;
};
