import { ChangeDetectorRef, Component, OnDestroy, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../shared/navbar.component';
import { DonationModalComponent } from '../shared/donation-modal.component';
import { AuthService } from '../auth/auth.service';
import { UserDataService } from '../user/user-data.service';
import { UserRole } from '../auth/auth.models';
import { LoggedInNavbarComponent } from '../shared/logged-in-navbar.component';
import { AssociationNavbarComponent } from '../shared/association-navbar.component';

interface Campaign {
  id: number;
  title: string;
  description: string;
  image: string;
  progress: number;
  target: number;
  category: string;
  status: 'active' | 'completed' | 'paused';
}

interface Association {
  id: number;
  name: string;
  logo?: string;
  cover: string;
  tagline: string;
  description: string;
  fullDescription: string;
  verified: boolean;
  email: string;
  location: string;
  foundedYear: number;
  stats: {
    totalDonations: number;
    campaignCount: number;
    peopleHelped: number;
    donorsCount: number;
  };
  campaigns: Campaign[];
  transparency: {
    operatingCosts: number;
    directAid: number;
    programsEducation: number;
    adminOverhead: number;
  };
}

@Component({
  selector: 'app-association-detail',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink,
    NavbarComponent, 
    LoggedInNavbarComponent,
    AssociationNavbarComponent,
    DonationModalComponent
  ],
  templateUrl: './association-detail.component.html',
  styleUrl: './association-detail.component.css'
})
export class AssociationDetailComponent implements OnInit, OnDestroy {

  readonly role = signal<UserRole | null>(null);
  readonly isLoggedIn = signal(false);
  readonly isAssociation = computed(() => this.role() === 'association');

  association: Association | null = null;
  loading = true;
  error = '';

  yearsActive: number = 0;
  sidebarSticky = false;
  isDonationModalOpen = false;
  private readonly boundHandleScroll = this.handleScroll.bind(this);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private userDataService: UserDataService,
    private cdr: ChangeDetectorRef
  ) {
    this.isLoggedIn.set(Boolean(this.auth.getToken()));
    this.role.set(this.auth.getRole() as UserRole | null);
  }

  ngOnInit() {
    window.addEventListener('scroll', this.boundHandleScroll);
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadAssociation(id);
      } else {
        this.error = 'Association non trouvée';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  loadAssociation(id: string) {
    if (!id || id === 'undefined' || id === 'null') {
      this.error = 'Identifiant d\'association invalide';
      this.loading = false;
      this.cdr.detectChanges();
      return;
    }

    this.loading = true;
    this.error = '';
    
    this.userDataService.getAssociationDetail(id).subscribe({
      next: (res) => {
        try {
          if (res && (res.success || (res as any).status === 'success')) {
            const data = res.data;
            if (!data || !data.association) {
              throw new Error('Données d\'association manquantes dans la réponse');
            }

            this.yearsActive = data.years_active || 0;
            
            this.association = {
              id: data.association.id,
              name: data.association.organization_name || 'Association',
              logo: this.userDataService.imageUrl(data.association.logo_url) || undefined,
              cover: this.userDataService.imageUrl(data.association.cover_url) || '',
              tagline: data.association.description?.split('\n')[0] || 'Association sur Sanad',
              description: data.association.description || '',
              fullDescription: data.association.full_description || data.association.description || '',
              verified: Boolean(data.association.verified),
              email: data.association.email || '',
              location: data.association.location || '',
              foundedYear: data.association.founded_year || new Date().getFullYear(),
              stats: {
                totalDonations: parseFloat(data.association.total_donations) || 0,
                campaignCount: parseInt(data.association.campaign_count) || 0,
                peopleHelped: parseInt(data.association.people_helped) || 0,
                donorsCount: parseInt(data.association.donors_count) || 0
              },
              campaigns: (data.campaigns || []).map((c: any) => ({
                id: c.id,
                title: c.title,
                description: c.description,
                image: this.userDataService.imageUrl(c.image_url) || '',
                progress: parseFloat(c.collected_amount) || 0,
                target: parseFloat(c.target_amount) || 0,
                category: c.category_name || '',
                status: c.status || 'active'
              })),
              transparency: {
                operatingCosts: data.fund_allocation ? parseFloat(data.fund_allocation.operations) || 14 : 14,
                directAid: data.fund_allocation ? parseFloat(data.fund_allocation.direct_aid) || 62 : 62,
                programsEducation: data.fund_allocation ? parseFloat(data.fund_allocation.programs) || 18 : 18,
                adminOverhead: data.fund_allocation ? parseFloat(data.fund_allocation.admin) || 6 : 6
              }
            };
          } else {
            this.error = (res as any)?.message || 'Cette association n\'a pas pu être trouvée.';
          }
        } catch (e: any) {
          console.error('Association Detail Mapping error:', e);
          this.error = 'Une erreur est survenue lors du traitement des données.';
        } finally {
          this.loading = false;
          this.cdr.detectChanges();
        }
      },
      error: (err) => {
        console.error('Association Detail HTTP error:', err);
        if (err.status === 404) {
          this.error = 'Association non trouvée.';
        } else {
          this.error = 'Impossible de se connecter au serveur. Veuillez réessayer plus tard.';
        }
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.boundHandleScroll);
  }

  handleScroll() {
    this.sidebarSticky = window.scrollY > 300;
  }

  getProgressPercent(progress: number, target: number): number {
    if (!target || target <= 0) return 0;
    return Math.min(100, Math.max(0, (progress / target) * 100));
  }

  viewCampaigns() {
    const element = document.querySelector('.campaigns-section') as HTMLElement;
    const offsetTop = element?.offsetTop || 0;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }

  supportAssociation() {
    if (!this.auth.isAuthenticated()) {
      this.auth.redirectUrl = this.router.url;
      this.router.navigate(['/auth/login'], { queryParams: { reason: 'donate' } });
      return;
    }
    this.isDonationModalOpen = true;
  }

  onDonationClosed() {
    this.isDonationModalOpen = false;
  }

  onDonationCompleted(donation: any) {
    console.log('Donation completed:', donation);
    // Mettre à jour les stats de l'association
    if (this.association) {
      this.association.stats.totalDonations += donation.amount;
      this.association.stats.donorsCount += 1;
    }
  }

  shareCampaign() {
    if (!this.association) return;

    if (navigator.share) {
      navigator.share({
        title: this.association.name,
        text: this.association.tagline,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papiers');
    }
  }

  getLogoInitial(): string {
    return this.association?.name ? this.association.name.charAt(0) : '';
  }

  getCampaignStatusClass(status: string): string {
    return `status-${status}`;
  }

  getCampaignStatusLabel(status: string): string {
    switch (status) {
      case 'active':
        return 'Actif';
      case 'completed':
        return 'Complété';
      case 'paused':
        return 'Pausé';
      default:
        return 'Actif';
    }
  }

  getTransparencyAmount(percentage: number): number {
    if (!this.association) return 0;
    return (this.association.stats.totalDonations * percentage) / 100;
  }
}
