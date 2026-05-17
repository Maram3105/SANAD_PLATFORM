import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoggedInNavbarComponent } from '../../shared/logged-in-navbar.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-publish-request',
  standalone: true,
  imports: [CommonModule, FormsModule, LoggedInNavbarComponent],
  templateUrl: './publish-request.component.html',
  styleUrl: './publish-request.component.css'
})
export class PublishRequestComponent {
  private http = inject(HttpClient);
  private router = inject(Router);
  private auth = inject(AuthService);

  readonly locations = ['Tunis', 'Sfax', 'Sousse', 'Kairouan', 'Bizerte', 'Gabès', 'Ariana', 'Gafsa', 'La Marsa', 'Sidi Bouzid'];

  model = {
    title: '',
    category: '',
    urgency: 'high',
    location: '',
    amount: '',
    description: '',
    needs_money: true,
    needs_object: false,
    needs_service: false
  };

  selectedFiles: File[] = [];
  documentError = '';

  onCancel() {
    this.router.navigate(['/explorer']);
  }

  onFileSelected(event: any) {
    if (event.target.files) {
      this.selectedFiles = Array.from(event.target.files);
      this.documentError = '';
    }
  }

  onSubmit() {
    if (!this.model.needs_money && !this.model.needs_object && !this.model.needs_service) {
      alert('Veuillez sélectionner au moins un type de besoin.');
      return;
    }

    if (this.selectedFiles.length === 0) {
      this.documentError = 'Veuillez ajouter au moins un justificatif avant de soumettre votre demande.';
      return;
    }

    const formData = new FormData();
    formData.append('title', this.model.title);
    formData.append('category', this.model.category);
    formData.append('urgency', this.model.urgency);
    formData.append('location', this.model.location);
    formData.append('amount', this.model.amount);
    formData.append('description', this.model.description);
    formData.append('needs_money', this.model.needs_money ? '1' : '0');
    formData.append('needs_object', this.model.needs_object ? '1' : '0');
    formData.append('needs_service', this.model.needs_service ? '1' : '0');

    this.selectedFiles.forEach(file => {
      formData.append('documents[]', file);
    });

    const token = this.auth.getToken();
    const options = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

    this.http.post(`${environment.apiUrl}create_request.php`, formData, options).subscribe({
      next: (res: any) => {
        if (res.success) {
          alert(res.message || 'Votre demande est en attente de validation par un administrateur.');
          this.router.navigate(['/explorer']);
        } else {
          alert(res.message || 'Une erreur est survenue.');
        }
      },
      error: () => alert('Erreur de connexion au serveur.')
    });
  }
}

