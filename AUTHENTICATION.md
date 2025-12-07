# Guide d'Authentification

Ce projet inclut un système complet d'authentification avec sign in, sign up, auth guard et interceptor.

## Structure

### Modèles
- `src/app/models/user.ts` - Interfaces pour User, AuthResponse, LoginRequest, RegisterRequest

### Services
- `src/app/core/services/auth.service.ts` - Service d'authentification avec signIn, signUp, logout

### Guards
- `src/app/core/guards/auth.guard.ts` - Protège les routes nécessitant une authentification
- `src/app/core/guards/guest.guard.ts` - Empêche les utilisateurs connectés d'accéder aux pages d'authentification

### Interceptors
- `src/app/core/interceptors/auth.interceptor.ts` - Ajoute automatiquement le token Bearer aux requêtes HTTP

### Composants
- `src/app/features/auth/sign-in/` - Composant de connexion
- `src/app/features/auth/sign-up/` - Composant d'inscription

## Utilisation

### Routes protégées

Pour protéger une route avec l'auth guard, ajoutez `canActivate: [authGuard]` :

```typescript
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'tickets',
    component: TicketsComponent,
    canActivate: [authGuard] // Route protégée
  }
];
```

### Utilisation dans les composants

```typescript
import { AuthService } from './core/services/auth.service';

export class MyComponent {
  private authService = inject(AuthService);
  
  // Vérifier si l'utilisateur est connecté
  isAuthenticated$ = this.authService.isAuthenticated$;
  
  // Obtenir l'utilisateur actuel
  currentUser$ = this.authService.currentUser$;
  
  // Déconnexion
  logout() {
    this.authService.logout();
  }
}
```

### Utilisation dans les templates

```html
<div *ngIf="authService.isAuthenticated$ | async">
  Contenu pour utilisateurs connectés
</div>

<div *ngIf="!(authService.isAuthenticated$ | async)">
  Contenu pour utilisateurs non connectés
</div>
```

## Base de données

Le fichier `src/db.json` contient les utilisateurs. Pour utiliser json-server :

```bash
json-server -w src/db.json
```

### Utilisateurs de test

- Email: `admin@example.com`, Password: `admin123`
- Email: `user@example.com`, Password: `user123`

## Routes

- `/auth/sign-in` - Page de connexion (protégée par guestGuard)
- `/auth/sign-up` - Page d'inscription (protégée par guestGuard)
- Routes protégées nécessitent `canActivate: [authGuard]`

## Token

Le token est stocké dans `localStorage` avec la clé `auth_token`. L'interceptor ajoute automatiquement le header `Authorization: Bearer <token>` à toutes les requêtes HTTP.

