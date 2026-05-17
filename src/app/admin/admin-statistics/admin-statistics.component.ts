import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { AdminService, AdminStats } from '../admin.service';

declare var Chart: any;

@Component({
  selector: 'app-admin-statistics',
  standalone: true,
  imports: [CommonModule, RouterLink, AdminNavbarComponent],
  templateUrl: './admin-statistics.component.html',
  styleUrl: './admin-statistics.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminStatisticsComponent implements OnInit, AfterViewInit {
  private readonly adminService = inject(AdminService);
  private readonly cdr = inject(ChangeDetectorRef);

  @ViewChild('requestsChart') requestsChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('categoryChart') categoryChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('regionChart') regionChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('donationsChart') donationsChartRef!: ElementRef<HTMLCanvasElement>;

  stats: AdminStats | null = null;
  loading = true;
  error = '';
  
  // Chart instances to manage updates or destruction
  private charts: any[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    // Initial charts are built after data is loaded and DOM is ready
  }

  loadData(): void {
    this.loading = true;
    this.adminService.getStatisticsSummary().subscribe({
      next: (res) => {
        if (res.success) {
          this.stats = res.data;
          this.cdr.detectChanges(); // Use detectChanges to ensure view is updated before building charts
          this.buildCharts();
        } else {
          this.error = 'Impossible de charger les statistiques.';
        }
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.error = err?.message ?? 'Erreur de connexion au serveur.';
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  private buildCharts(): void {
    if (!this.stats) return;

    // Destroy existing charts if any
    this.charts.forEach(c => c.destroy());
    this.charts = [];

    setTimeout(() => {
      this.createRequestsChart();
      this.createCategoryChart();
      this.createRegionChart();
      this.createDonationsChart();
    }, 100);
  }

  private createRequestsChart(): void {
    if (!this.requestsChartRef) return;
    const ctx = this.requestsChartRef.nativeElement.getContext('2d');
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Actives', 'Clôturées', 'En attente'],
        datasets: [{
          label: 'Nombre de demandes',
          data: [this.stats?.active_requests, this.stats?.closed_requests, this.stats?.pending_requests],
          backgroundColor: ['#3b82f6', '#10b981', '#f59e0b'],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, grid: { display: false } } }
      }
    });
    this.charts.push(chart);
  }

  private createCategoryChart(): void {
    if (!this.categoryChartRef || !this.stats?.distribution_by_category) return;
    const ctx = this.categoryChartRef.nativeElement.getContext('2d');
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: this.stats.distribution_by_category.map(c => c.category),
        datasets: [{
          data: this.stats.distribution_by_category.map(c => c.count),
          backgroundColor: ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        cutout: '70%',
        plugins: {
          legend: { position: 'bottom', labels: { usePointStyle: true, padding: 20 } }
        }
      }
    });
    this.charts.push(chart);
  }

  private createRegionChart(): void {
    if (!this.regionChartRef || !this.stats?.distribution_by_region) return;
    const ctx = this.regionChartRef.nativeElement.getContext('2d');
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.stats.distribution_by_region.map(r => r.region),
        datasets: [{
          label: 'Nombre de demandes',
          data: this.stats.distribution_by_region.map(r => r.count),
          backgroundColor: '#3b82f6',
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { x: { beginAtZero: true, grid: { display: false } } }
      }
    });
    this.charts.push(chart);
  }

  private createDonationsChart(): void {
    if (!this.donationsChartRef || !this.stats?.monthly_donations) return;
    const ctx = this.donationsChartRef.nativeElement.getContext('2d');
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.stats.monthly_donations.map(d => this.formatMonth(d.month)),
        datasets: [{
          label: 'Montant (DT)',
          data: this.stats.monthly_donations.map(d => d.amount),
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37, 99, 235, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: '#2563eb'
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { 
          y: { beginAtZero: true, grid: { color: '#f1f5f9' } },
          x: { grid: { display: false } }
        }
      }
    });
    this.charts.push(chart);
  }

  formatAmount(amount: number): string {
    return new Intl.NumberFormat('fr-TN', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount) + ' DT';
  }

  private formatMonth(monthStr: string): string {
    const [year, month] = monthStr.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('fr-FR', { month: 'short' });
  }
}
