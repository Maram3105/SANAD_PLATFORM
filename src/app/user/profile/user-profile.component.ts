import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoggedInNavbarComponent } from '../../shared/logged-in-navbar.component';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, LoggedInNavbarComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  profile = {
    name: 'Amira Rahman',
    email: 'amira@sanad.tn',
    phone: '+216 22 345 678',
    bio: 'Engagee pour les causes familiales et l\'education des enfants.'
  };

  isEditing = false;

  constructor(private userData: UserDataService) {}

  ngOnInit(): void {
    this.userData.getProfile().subscribe({
      next: (response) => {
        if (response.success) {
          this.profile = {
            name: response.data.fullName,
            email: response.data.email,
            phone: response.data.phone ?? '',
            bio: this.profile.bio
          };
        }
      }
    });
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
}
