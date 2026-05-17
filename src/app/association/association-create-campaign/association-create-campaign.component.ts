import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import {
  AssociationDataService,
  Category,
  RequestDetailPayload
} from '../association-data.service';
import { AssociationNavbarComponent } from '../../shared/association-navbar.component';

@Component({
  selector: 'app-association-create-campaign',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, AssociationNavbarComponent],
  templateUrl: './association-create-campaign.component.html',
  styleUrl: './association-create-campaign.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssociationCreateCampaignComponent {
  private readonly associationService = inject(AssociationDataService);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly categories = signal<Category[]>([]);
  readonly originalImageUrl = signal<string | null>(null);
  readonly isEditMode = signal(false);
  readonly requestId = signal<number | null>(null);
  readonly parentRequestId = signal<number | null>(null);
  readonly parentRequest = signal<RequestDetailPayload | null>(null);
  readonly imageFile = signal<File | null>(null);
  readonly submitting = signal(false);
  readonly previewUrl = computed(() => {
    const file = this.imageFile();
    if (file) {
      return URL.createObjectURL(file);
    }
    return this.associationService.imageUrl(this.originalImageUrl());
  });

  readonly derivedImageUrl = computed(() =>
    this.associationService.imageUrl(this.parentRequest()?.image_url || null)
  );

  readonly form = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    full_description: [''],
    goal_amount: [0, [Validators.required, Validators.min(1)]],
    category_id: [null as number | null, Validators.required],
    location: ['', Validators.required],
    urgency: ['medium' as 'low' | 'medium' | 'high', Validators.required]
  });

  constructor() {
    this.associationService.getCategories().subscribe({
      next: (response) => {
        if (response.success) {
          this.categories.set(response.data);
        }
      }
    });

    // Check for Edit ID
    const editId = this.route.snapshot.paramMap.get('id');
    if (editId) {
      this.isEditMode.set(true);
      this.requestId.set(Number(editId));
      this.loadCampaignForEdit(Number(editId));
    } else {
      // Check for Parent ID (Prefill)
      const requestIdParam = this.route.snapshot.queryParamMap.get('parentRequestId');
      const requestId = requestIdParam ? Number(requestIdParam) : null;
      if (requestId && Number.isFinite(requestId)) {
        this.parentRequestId.set(requestId);
        this.prefillFromRequest(requestId);
      }
    }
  }

  loadCampaignForEdit(id: number) {
    this.associationService.getCampaignDetail(id).subscribe({
      next: (response) => {
        if (response.success) {
          const campaign = response.data.campaign;
          this.originalImageUrl.set(campaign.image_url || null);
          this.form.patchValue({
            title: campaign.title,
            description: campaign.description,
            full_description: campaign.full_description || '',
            goal_amount: campaign.target_amount || 0,
            category_id: campaign.category_id,
            location: campaign.location,
            urgency: campaign.urgency
          });
        }
      }
    });
  }

  prefillFromRequest(requestId: number) {
    this.associationService.getRequestDetail(requestId).subscribe({
      next: (response) => {
        if (response.status !== 'success') {
          return;
        }
        const request = response.data.request;
        this.parentRequest.set(request);
        this.form.patchValue({
          title: request.title,
          description: request.description,
          full_description: request.full_description || request.description,
          location: request.location,
          category_id: request.category_id ?? null,
          urgency: request.urgency
        });
      }
    });
  }

  readonly error = signal('');

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.imageFile.set(input.files?.[0] ?? null);
  }

  submit() {
    if (this.form.invalid || this.submitting()) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    this.error.set('');

    const formData = new FormData();
    formData.append('title', String(this.form.value.title ?? '').trim());
    formData.append('description', String(this.form.value.description ?? '').trim());
    formData.append('full_description', String(this.form.value.full_description ?? '').trim());
    formData.append('goal_amount', String(this.form.value.goal_amount ?? 0));
    formData.append('category_id', String(this.form.value.category_id ?? ''));
    formData.append('location', String(this.form.value.location ?? '').trim());
    formData.append('urgency', String(this.form.value.urgency ?? 'medium'));

    if (this.isEditMode()) {
      formData.append('campaign_id', String(this.requestId()));
    }

    const parentId = this.parentRequestId();
    if (parentId && !this.isEditMode()) {
      formData.append('parent_request_id', String(parentId));
      const derivedImage = this.parentRequest()?.image_url;
      if (derivedImage) {
        formData.append('image_url', derivedImage);
      }
    }

    const image = this.imageFile();
    if (image) {
      formData.append('image', image);
    }

    const request$ = this.isEditMode() 
      ? this.associationService.updateCampaign(formData)
      : this.associationService.createCampaign(formData);

    request$.subscribe({
      next: (response) => {
        this.submitting.set(false);
        if (!response.success) {
          this.error.set(this.isEditMode() ? 'Impossible de modifier la campagne.' : 'Impossible de creer la campagne.');
          return;
        }
        this.router.navigateByUrl('/association/campaigns');
      },
      error: () => {
        this.submitting.set(false);
        this.error.set(this.isEditMode() ? 'Impossible de modifier la campagne.' : 'Impossible de creer la campagne.');
      }
    });
  }
}
