import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoggedInNavbarComponent } from '../../shared/logged-in-navbar.component';

import { inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule, FormsModule, LoggedInNavbarComponent],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent implements OnInit {
  private route = inject(ActivatedRoute);
  
  amount = 120;
  isPlatformDonation = signal(false);

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.isPlatformDonation.set(params['type'] === 'platform');
    });
  }
}
