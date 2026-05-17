import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

export const adminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const role = auth.getRole();
  const token = auth.getToken();

  if (token && role === 'admin') {
    return true;
  }

  router.navigateByUrl('/auth/login');
  return false;
};
