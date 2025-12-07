import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LoginRequest } from '../../../models/user';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  // Données du formulaire de connexion
  loginData: LoginRequest = {
    email: '',
    password: ''
  };
  
  // Message d'erreur à afficher
  errorMessage: string = '';
  
  // Indicateur de chargement
  isLoading: boolean = false;

  // Injection des services via le constructeur (plus simple pour les débutants)
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /**
   * Méthode appelée lors de la soumission du formulaire
   */
  onSubmit(): void {
    // 1. Vérifier que tous les champs sont remplis
    if (!this.loginData.email || !this.loginData.password) {
      this.errorMessage = 'Veuillez remplir tous les champs';
      return;
    }

    // 2. Afficher le chargement et effacer les erreurs précédentes
    this.isLoading = true;
    this.errorMessage = '';

    // 3. Appeler le service d'authentification
    this.authService.signIn(this.loginData).subscribe({
      // Succès : rediriger l'utilisateur
      next: () => {
        // Récupérer l'URL de retour ou utiliser '/home' par défaut
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
        this.router.navigate([returnUrl]);
        this.isLoading = false;
      },
      // Erreur : afficher le message d'erreur
      error: (error) => {
        this.errorMessage = error.error?.message || 'Email ou mot de passe incorrect';
        this.isLoading = false;
      }
    });
  }
}

