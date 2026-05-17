import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

import { SiteFooterComponent } from './shared/site-footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly routesWithInlineFooter = new Set([
    '',
    'home',
    'explorer',
    'associations',
    'free-donations'
  ]);
  private readonly routesWithInlineFooterPrefixes = ['association/request-detail/'];

  showFooter = false;

  constructor(private router: Router) {
    this.updateFooterVisibility(this.router.url);
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.updateFooterVisibility(event.urlAfterRedirects));
  }

  private updateFooterVisibility(url: string) {
    const normalizedPath = url.split('?')[0].split('#')[0].replace(/^\/+/, '');

    this.showFooter =
      !normalizedPath.startsWith('auth/') &&
      !normalizedPath.startsWith('admin') &&
      !this.routesWithInlineFooter.has(normalizedPath) &&
      !this.routesWithInlineFooterPrefixes.some((prefix) => normalizedPath.startsWith(prefix));
  }
}
