import { CanActivateFn } from '@angular/router';

export const page02GuardGuard: CanActivateFn = (route, state) => {
  auth = inject(AuthService)
  if(auth.isAdmin()){}
  return false;
};
