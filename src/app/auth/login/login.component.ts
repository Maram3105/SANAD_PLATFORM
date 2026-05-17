import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { AuthService } from '../auth.service';
import { NavbarComponent } from '../../shared/navbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements AfterViewInit {
  private fb = inject(FormBuilder);

  isSubmitting = false;
  showPassword = false;
  loginError = '';
  forgotMessage = '';
  authMessage = '';
  readonly fieldOrder = ['email', 'password'];

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    remember: [false]
  });

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const reason = params['reason'];
      if (reason === 'donate') {
        this.authMessage = 'Veuillez vous connecter pour faire un don.';
      } else if (reason === 'object') {
        this.authMessage = 'Veuillez vous connecter pour proposer un objet.';
      } else if (reason === 'help') {
        this.authMessage = 'Veuillez vous connecter pour aider.';
      } else if (reason === 'publish') {
        this.authMessage = 'Veuillez vous connecter pour publier une demande d\'aide.';
      }
    });
  }

  ngAfterViewInit() {
    this.clearLoginFields();
    window.setTimeout(() => this.clearLoginFields(), 250);
  }

  private clearLoginFields() {
    this.form.reset({
      email: '',
      password: '',
      remember: false
    });
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  get emailControl() {
    return this.form.controls.email;
  }

  get passwordControl() {
    return this.form.controls.password;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onForgot(event: Event) {
    event.preventDefault();
    this.forgotMessage = 'Veuillez contacter le support pour reinitialiser votre mot de passe.';
  }

  onFieldFocus(index: number) {
    for (let i = 0; i < index; i++) {
      const controlName = this.fieldOrder[i] as 'email' | 'password';
      const control = this.form.controls[controlName];
      control.markAsTouched();
      control.updateValueAndValidity({ onlySelf: true });

      if (control.invalid || !String(control.value ?? '').trim()) {
        window.setTimeout(() => document.getElementById(controlName)?.focus());
        return;
      }
    }
  }

  onLoginFocusIn(event: FocusEvent) {
    const target = event.target as HTMLElement | null;
    const index = this.fieldOrder.indexOf(target?.id || '');

    if (index > -1) {
      this.onFieldFocus(index);
    }
  }

  onLoginMouseDown(event: MouseEvent) {
    const target = event.target as HTMLElement | null;
    const index = this.fieldOrder.indexOf(target?.id || '');

    if (index < 0) {
      return;
    }

    for (let i = 0; i < index; i++) {
      const controlName = this.fieldOrder[i] as 'email' | 'password';
      const control = this.form.controls[controlName];
      control.markAsTouched();
      control.updateValueAndValidity({ onlySelf: true });

      if (control.invalid || !String(control.value ?? '').trim()) {
        event.preventDefault();
        event.stopPropagation();
        window.setTimeout(() => document.getElementById(controlName)?.focus());
        return;
      }
    }
  }

  onLoginKeyDown(event: KeyboardEvent) {
    if (event.key !== 'Tab' || event.shiftKey) {
      return;
    }

    const target = event.target as HTMLElement | null;
    const controlName = target?.id as 'email' | 'password';

    if (!this.fieldOrder.includes(controlName)) {
      return;
    }

    const control = this.form.controls[controlName];
    control.markAsTouched();
    control.updateValueAndValidity({ onlySelf: true });

    if (control.invalid || !String(control.value ?? '').trim()) {
      event.preventDefault();
      window.setTimeout(() => document.getElementById(controlName)?.focus());
    }
  }

  submit() {
    if (this.form.invalid || this.isSubmitting) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.loginError = '';

    const payload = {
      email: String(this.emailControl.value ?? '').trim(),
      password: String(this.passwordControl.value ?? ''),
      remember: Boolean(this.form.controls.remember.value)
    };

    this.auth.login(payload).subscribe({
      next: (response) => {
        this.isSubmitting = false;

        if (!response.success || !response.role) {
          this.loginError = 'E-mail ou mot de passe incorrect';
          return;
        }

        if (response.token) {
          this.auth.setToken(response.token);
        }
        this.auth.setRole(response.role);
        this.auth.setFullName(response.fullName ?? null);

        if (response.role === 'admin') {
          this.router.navigateByUrl('/admin-dashboard');
          return;
        }

        if (response.role === 'association') {
          const status = response.associationStatus ?? 'approved';
          this.auth.setStatus(status);

          if (status === 'pending') {
            this.router.navigateByUrl('/auth/pending');
            return;
          }

          if (status === 'rejected') {
            this.router.navigateByUrl('/auth/rejected');
            return;
          }

          this.router.navigateByUrl('/association/dashboard');
          return;
        }

        if (this.auth.redirectUrl) {
          const url = this.auth.redirectUrl;
          this.auth.redirectUrl = null;
          this.router.navigateByUrl(url);
          return;
        }

        this.router.navigateByUrl('/dashboard');
      },
      error: () => {
        this.isSubmitting = false;
        this.loginError = 'E-mail ou mot de passe incorrect';
      }
    });
  }
}
