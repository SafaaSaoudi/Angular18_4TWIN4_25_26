import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Guard pour protéger les routes d'authentification (sign-in, sign-up)
 * Si l'utilisateur est déjà connecté, il est redirigé vers la page d'accueil
 */
export const guestGuard: CanActivateFn = (route, state) => {
  // Récupérer les services nécessaires
  const authService = inject(AuthService);
  const router = inject(Router);

  // Vérifier si l'utilisateur n'est PAS connecté
  if (!authService.isLoggedIn()) {
    // L'utilisateur n'est pas connecté, autoriser l'accès aux pages d'authentification
    return true;
  }

  // L'utilisateur est déjà connecté, rediriger vers la page d'accueil
  router.navigate(['/home']);
  return false;
};

