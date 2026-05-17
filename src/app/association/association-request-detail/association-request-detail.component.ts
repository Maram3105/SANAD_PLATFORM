import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AssociationNavbarComponent } from '../../shared/association-navbar.component';
import { NavbarComponent } from '../../shared/navbar.component';
import { LoggedInNavbarComponent } from '../../shared/logged-in-navbar.component';
import { AuthService } from '../../auth/auth.service';
import { UserDataService } from '../../user/user-data.service';
import { HelpOfferService } from '../../shared/help-offer.service';

interface Request {
  id: number;
  title: string;
  category_name: string;
  urgency: 'low' | 'medium' | 'high';
  image_url: string;
  description: string;
  full_description: string;
  location: string;
  created_at: string;
  collected_amount: number;
  target_amount: number;
  donors_count: number;
  organization_name: string;
}

@Component({
  selector: 'app-association-request-detail',
  standalone: true,
  imports: [
    CommonModule,
    AssociationNavbarComponent,
    NavbarComponent,
    LoggedInNavbarComponent,
    RouterLink
  ],
  templateUrl: './association-request-detail.component.html',
  styleUrl: './association-request-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssociationRequestDetailComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly userData = inject(UserDataService);
  private readonly auth = inject(AuthService);
  private readonly helpOfferService = inject(HelpOfferService);

  readonly isLoading = signal(true);
  readonly request = signal<Request | null>(null);
  readonly isLoggedIn = signal(false);
  readonly isAssociation = signal(false);
  readonly showProposeForm = signal<'object' | 'service' | null>(null);

  ngOnInit(): void {
    this.checkAccess();
    
    const requestId = Number(this.route.snapshot.paramMap.get('id'));
    if (requestId) {
      this.loadRequest(requestId);
    } else {
      this.router.navigate(['/association/explorer']);
    }
  }

  private checkAccess() {
    const token = this.auth.getToken();
    const role = this.auth.getRole();
    
    this.isLoggedIn.set(!!token);
    this.isAssociation.set(role === 'association');

    if (!token) {
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: this.router.url } });
      return;
    }

    if (role !== 'association') {
      const requestId = this.route.snapshot.paramMap.get('id');
      this.router.navigate(['/request-detail', requestId]);
    }
  }

  private loadRequest(id: number) {
    this.isLoading.set(true);
    this.userData.getRequestDetail(id).subscribe({
      next: (response: any) => {
        if (response.success || response.status === 'success') {
          this.request.set(response.data.request);
        } else {
          this.router.navigate(['/association/explorer']);
        }
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.router.navigate(['/association/explorer']);
      }
    });
  }

  getProgressPercent(progress: number, target: number): number {
    if (!target) return 0;
    return Math.min(100, (progress / target) * 100);
  }

  getUrgencyLabel(urgency: string): string {
    switch (urgency) {
      case 'high': return 'Urgent';
      case 'medium': return 'Important';
      case 'low': return 'Standard';
      default: return 'Standard';
    }
  }

  getImageUrl(path?: string): string {
    return this.userData.imageUrl(path) || '/assets/images/placeholders/request-placeholder.svg';
  }

  // Action methods
  faireDon() {
    this.router.navigate(['/donate'], { queryParams: { requestId: this.request()?.id } });
  }

  donnerObjets() {
    this.showProposeForm.set('object');
  }

  aiderService() {
    this.showProposeForm.set('service');
  }

  collaborer() {
    this.router.navigate(['/association/campaigns/new'], { queryParams: { parentRequestId: this.request()?.id } });
  }

  submitOffer(event: Event) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const req = this.request();
    if (!req) return;

    const offer = {
      requestId: req.id,
      type: this.showProposeForm() as 'object' | 'service',
      description: formData.get('description') as string,
      quantity: Number(formData.get('quantity') || 1),
      category: formData.get('category') as string || 'General',
      location: formData.get('location') as string,
      deliveryMethod: formData.get('deliveryMethod') as string
    };

    this.helpOfferService.createOffer(offer).subscribe({
      next: (response: any) => {
        if (response.success) {
          alert('Merci ! Votre proposition a été envoyée.');
          this.showProposeForm.set(null);
        }
      }
    });
  }
}
