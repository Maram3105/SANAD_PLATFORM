import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { AssociationDataService, AssociationProfile } from '../association-data.service';
import { AssociationNavbarComponent } from '../../shared/association-navbar.component';

@Component({
  selector: 'app-association-profile',
  imports: [CommonModule, ReactiveFormsModule, AssociationNavbarComponent],
  templateUrl: './association-profile.component.html',
  styleUrl: './association-profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssociationProfileComponent {
  private readonly associationService = inject(AssociationDataService);
  private readonly fb = inject(FormBuilder);

  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly error = signal('');
  readonly profile = signal<AssociationProfile | null>(null);
  readonly logoFile = signal<File | null>(null);
  readonly coverFile = signal<File | null>(null);

  readonly logoPreviewUrl = computed(() => {
    const file = this.logoFile();
    if (file) {
      return URL.createObjectURL(file);
    }
    return this.associationService.imageUrl(this.profile()?.logo_url || null);
  });

  readonly coverPreviewUrl = computed(() => {
    const file = this.coverFile();
    if (file) {
      return URL.createObjectURL(file);
    }
    return this.associationService.imageUrl(this.profile()?.cover_url || null);
  });

  readonly form = this.fb.group({
    organization_name: ['', Validators.required],
    description: ['', Validators.required],
    full_description: [''],
    location: [''],
    website: ['']
  });

  constructor() {
    this.loadProfile();
  }

  loadProfile() {
    this.loading.set(true);
    this.error.set('');

    this.associationService.getProfile().subscribe({
      next: (response) => {
        this.loading.set(false);
        if (!response.success) {
          this.error.set('Impossible de charger le profil.');
          return;
        }
        this.profile.set(response.data);
        this.form.patchValue({
          organization_name: response.data.organization_name,
          description: response.data.description,
          full_description: response.data.full_description || '',
          location: response.data.location,
          website: response.data.website || ''
        });
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Impossible de charger le profil.');
      }
    });
  }

  onLogoSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.logoFile.set(input.files?.[0] ?? null);
  }

  onCoverSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.coverFile.set(input.files?.[0] ?? null);
  }

  submit() {
    if (this.form.invalid || this.saving()) {
      this.form.markAllAsTouched();
      if (this.form.invalid) {
        this.error.set('Veuillez renseigner le nom officiel et la description courte.');
      }
      return;
    }

    this.saving.set(true);
    this.error.set('');

    const formData = new FormData();
    formData.append('organization_name', String(this.form.value.organization_name ?? '').trim());
    formData.append('description', String(this.form.value.description ?? '').trim());
    formData.append('full_description', String(this.form.value.full_description ?? '').trim());
    formData.append('location', String(this.form.value.location ?? '').trim());
    formData.append('website', String(this.form.value.website ?? '').trim());

    const logo = this.logoFile();
    const cover = this.coverFile();
    if (logo) {
      formData.append('logo', logo);
    }
    if (cover) {
      formData.append('cover', cover);
    }

    this.associationService.updateProfile(formData).subscribe({
      next: (response) => {
        this.saving.set(false);
        if (!response.success) {
          this.error.set(response.message || 'Impossible de mettre a jour le profil.');
          return;
        }
        this.logoFile.set(null);
        this.coverFile.set(null);
        if (response.data) {
          this.profile.set(response.data);
          this.form.patchValue({
            organization_name: response.data.organization_name,
            description: response.data.description,
            full_description: response.data.full_description || '',
            location: response.data.location || '',
            website: response.data.website || ''
          });
        } else {
          this.loadProfile();
        }
      },
      error: (error) => {
        this.saving.set(false);
        this.error.set(error.error?.message || 'Impossible de mettre a jour le profil.');
      }
    });
  }

  statusLabel(status?: string): string {
    switch (status) {
      case 'pending':
        return 'En attente de validation';
      case 'rejected':
        return 'Profil rejete';
      default:
        return 'Approuve';
    }
  }
}
