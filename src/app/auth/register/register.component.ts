import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../auth.service';
import {
  passwordMatchValidator,
  passwordStrengthValidator
} from '../auth.validators';
import { NavbarComponent } from '../../shared/navbar.component';
import { TUNISIA_LOCATIONS } from '../../shared/locations';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, NavbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private fb = inject(FormBuilder);

  mode: 'user' | 'association' = 'user';
  associationStep = 1;
  isSubmitting = false;
  registerError = '';
  registerSuccess = '';
  showPassword = false;
  showConfirm = false;
  documentName = '';
  readonly locations = TUNISIA_LOCATIONS;
  readonly userFieldOrder = ['fullName', 'email', 'password', 'confirmPassword', 'phone'];
  readonly associationStepOneOrder = [
    'organizationName',
    'responsibleName',
    'email',
    'password',
    'confirmPassword',
    'phone',
    'location'
  ];
  readonly associationStepTwoOrder = ['description', 'document'];

  userForm = this.fb.group(
    {
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordStrengthValidator]],
      confirmPassword: ['', [Validators.required]],
      phone: ['', [Validators.pattern(/^\d{8}$/)]]
    },
    { validators: passwordMatchValidator('password', 'confirmPassword') }
  );

  associationForm = this.fb.group(
    {
      organizationName: ['', [Validators.required]],
      responsibleName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordStrengthValidator]],
      confirmPassword: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      location: ['', [Validators.required]],
      description: ['', [Validators.required]],
      document: this.fb.control<File | null>(null, Validators.required)
    },
    { validators: passwordMatchValidator('password', 'confirmPassword') }
  );

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  setMode(mode: 'user' | 'association') {
    this.mode = mode;
    this.associationStep = 1;
    this.registerError = '';
    this.registerSuccess = '';
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirm() {
    this.showConfirm = !this.showConfirm;
  }

  onFileSelected(event: Event) {
    if (!this.ensurePreviousFields(this.associationForm, this.associationStepTwoOrder, 1)) {
      const input = event.target as HTMLInputElement;
      input.value = '';
      return;
    }

    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.documentName = file ? file.name : '';
    this.associationForm.controls.document.setValue(file);
  }

  onFieldFocus(form: any, order: string[], index: number) {
    this.ensurePreviousFields(form, order, index);
  }

  onRegisterFocusIn(event: FocusEvent) {
    const target = event.target as HTMLElement | null;
    const controlName = this.controlNameFromElement(target?.id || '');

    if (!controlName) {
      return;
    }

    const order =
      this.mode === 'user'
        ? this.userFieldOrder
        : this.associationStep === 1
          ? this.associationStepOneOrder
          : this.associationStepTwoOrder;
    const index = order.indexOf(controlName);

    if (index > -1) {
      const form = this.mode === 'user' ? this.userForm : this.associationForm;
      this.ensurePreviousFields(form, order, index);
    }
  }

  onRegisterMouseDown(event: MouseEvent) {
    const target = event.target as HTMLElement | null;
    const controlName = this.controlNameFromElement(target?.id || '');
    const guard = this.registerGuardForControl(controlName);

    if (!guard || this.ensurePreviousFields(guard.form, guard.order, guard.index)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
  }

  onRegisterKeyDown(event: KeyboardEvent) {
    if (event.key !== 'Tab' || event.shiftKey) {
      return;
    }

    const target = event.target as HTMLElement | null;
    const controlName = this.controlNameFromElement(target?.id || '');
    const guard = this.registerGuardForControl(controlName);

    if (!guard || !controlName) {
      return;
    }

    const control = guard.form.get(controlName);
    guard.form.updateValueAndValidity({ onlySelf: false });
    control?.markAsTouched();
    control?.updateValueAndValidity({ onlySelf: true });

    if (control?.invalid || !String(control?.value ?? '').trim() || (controlName === 'confirmPassword' && guard.form.errors?.['passwordMismatch'])) {
      event.preventDefault();
      this.focusField(controlName);
    }
  }

  onPhoneInput(form: any, controlName: string, event: Event) {
    const input = event.target as HTMLInputElement;
    const digits = input.value.replace(/\D/g, '').slice(0, 8);

    if (input.value !== digits) {
      input.value = digits;
    }

    const control = form.get(controlName);
    control?.setValue(digits, { emitEvent: false });
    control?.markAsTouched();
    control?.updateValueAndValidity({ emitEvent: false });
  }

  private ensurePreviousFields(form: any, order: string[], index: number): boolean {
    form.updateValueAndValidity({ onlySelf: false });

    for (let i = 0; i < index; i++) {
      const controlName = order[i];
      const control = form.get(controlName);

      if (!control) {
        continue;
      }

      control.markAsTouched();
      control.updateValueAndValidity({ onlySelf: true });

      if (control.invalid || !String(control.value ?? '').trim()) {
        this.focusField(controlName);
        return false;
      }

      if (controlName === 'confirmPassword' && form.errors?.['passwordMismatch']) {
        control.markAsTouched();
        this.focusField(controlName);
        return false;
      }
    }

    return true;
  }

  private registerGuardForControl(controlName: string | null): { form: any; order: string[]; index: number } | null {
    if (!controlName) {
      return null;
    }

    const order =
      this.mode === 'user'
        ? this.userFieldOrder
        : this.associationStep === 1
          ? this.associationStepOneOrder
          : this.associationStepTwoOrder;
    const index = order.indexOf(controlName);

    if (index < 0) {
      return null;
    }

    return {
      form: this.mode === 'user' ? this.userForm : this.associationForm,
      order,
      index
    };
  }

  private focusField(controlName: string) {
    const elementIdByControl: Record<string, string> = {
      fullName: 'fullName',
      email: this.mode === 'association' ? 'associationEmail' : 'email',
      password: this.mode === 'association' ? 'associationPassword' : 'password',
      confirmPassword: this.mode === 'association' ? 'associationConfirm' : 'confirmPassword',
      phone: this.mode === 'association' ? 'associationPhone' : 'phone',
      organizationName: 'organizationName',
      responsibleName: 'responsibleName',
      location: 'associationLocation',
      description: 'description',
      document: 'verificationDocument'
    };

    window.setTimeout(() => {
      document.getElementById(elementIdByControl[controlName] || controlName)?.focus();
    });
  }

  private controlNameFromElement(id: string): string | null {
    const controlNameById: Record<string, string> = {
      fullName: 'fullName',
      email: 'email',
      password: 'password',
      confirmPassword: 'confirmPassword',
      phone: 'phone',
      organizationName: 'organizationName',
      responsibleName: 'responsibleName',
      associationEmail: 'email',
      associationPassword: 'password',
      associationConfirm: 'confirmPassword',
      associationPhone: 'phone',
      associationLocation: 'location',
      description: 'description',
      verificationDocument: 'document'
    };

    return controlNameById[id] || null;
  }

  get passwordStrength() {
    const value =
      this.mode === 'user'
        ? String(this.userForm.controls.password.value ?? '')
        : String(this.associationForm.controls.password.value ?? '');

    const rules = [
      value.length >= 8,
      /[A-Z]/.test(value),
      /[0-9]/.test(value)
    ];
    const score = rules.filter(Boolean).length;
    const percent = Math.round((score / 3) * 100);

    if (score <= 1) {
      return { label: 'Faible', percent, tone: 'weak' } as const;
    }
    if (score === 2) {
      return { label: 'Moyen', percent, tone: 'medium' } as const;
    }
    return { label: 'Fort', percent, tone: 'strong' } as const;
  }

  goToStep(step: number) {
    if (step === 2) {
      this.nextAssociationStep();
      return;
    }

    this.associationStep = step;
  }

  nextAssociationStep() {
    const controls = this.associationForm.controls;
    controls.organizationName.markAsTouched();
    controls.responsibleName.markAsTouched();
    controls.email.markAsTouched();
    controls.phone.markAsTouched();
    controls.location.markAsTouched();
    controls.password.markAsTouched();
    controls.confirmPassword.markAsTouched();

    if (
      controls.organizationName.invalid ||
      controls.responsibleName.invalid ||
      controls.email.invalid ||
      controls.phone.invalid ||
      controls.location.invalid ||
      controls.password.invalid ||
      controls.confirmPassword.invalid ||
      this.associationForm.errors?.['passwordMismatch']
    ) {
      return;
    }

    this.associationStep = 2;
  }

  submit() {
    if (this.isSubmitting) {
      return;
    }

    if (this.mode === 'user') {
      if (this.userForm.invalid) {
        this.userForm.markAllAsTouched();
        return;
      }
    } else if (this.associationStep === 1) {
      this.nextAssociationStep();
      return;
    }

    if (this.mode === 'user') {
      this.isSubmitting = true;
      this.registerError = '';
      const payload = {
        fullName: String(this.userForm.value.fullName ?? '').trim(),
        email: String(this.userForm.value.email ?? '').trim(),
        password: String(this.userForm.value.password ?? ''),
        phone: String(this.userForm.value.phone ?? '').trim() || undefined
      };

      this.auth.registerUser(payload).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          if (!response.success) {
            this.registerError = response.message || 'Impossible de creer le compte.';
            return;
          }
          this.registerSuccess = 'Compte cree. Vous pouvez vous connecter.';
          this.router.navigateByUrl('/auth/login');
        },
        error: () => {
          this.isSubmitting = false;
          this.registerError = 'Impossible de creer le compte.';
        }
      });
      return;
    }

    this.registerError = '';
    this.associationForm.controls.description.markAsTouched();
    this.associationForm.controls.document.markAsTouched();

    if (this.associationForm.invalid) {
      console.log('Association Form Invalid:', this.associationForm.errors);
      this.associationForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    console.log('Submitting Association Registration...');

    const formData = new FormData();
    formData.append(
      'organizationName',
      String(this.associationForm.value.organizationName ?? '').trim()
    );
    formData.append(
      'responsibleName',
      String(this.associationForm.value.responsibleName ?? '').trim()
    );
    formData.append(
      'email',
      String(this.associationForm.value.email ?? '').trim()
    );
    formData.append(
      'password',
      String(this.associationForm.value.password ?? '')
    );
    formData.append(
      'phone',
      String(this.associationForm.value.phone ?? '').trim()
    );
    formData.append(
      'location',
      String(this.associationForm.value.location ?? '').trim()
    );
    formData.append(
      'description',
      String(this.associationForm.value.description ?? '').trim()
    );

    const documentFile = this.associationForm.controls.document.value as File | null;
    if (documentFile) {
      formData.append('document', documentFile);
    }

    this.auth.registerAssociation(formData).subscribe({
      next: (response) => {
        console.log('Registration Response:', response);
        this.isSubmitting = false;
        if (!response.success) {
          this.registerError = response.message || 'Impossible de soumettre la demande.';
          return;
        }
        this.router.navigateByUrl('/auth/pending');
      },
      error: (err) => {
        console.error('Registration Error:', err);
        this.isSubmitting = false;
        this.registerError = 'Impossible de soumettre la demande.';
      }
    });
  }
}
