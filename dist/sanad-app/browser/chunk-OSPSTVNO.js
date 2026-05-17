import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-VFFHWYMA.js";
import {
  AssociationDataService,
  AssociationNavbarComponent
} from "./chunk-FJV2TO27.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BNXH775N.js";

// src/app/association/association-profile/association-profile.component.ts
function AssociationProfileComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, "Chargement du profil...");
    \u0275\u0275elementEnd();
  }
}
function AssociationProfileComponent_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function AssociationProfileComponent_Conditional_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((((tmp_2_0 = ctx_r1.profile()) == null ? null : tmp_2_0.organization_name) || "A").charAt(0));
  }
}
function AssociationProfileComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, AssociationProfileComponent_Conditional_11_Conditional_0_Template, 2, 1, "div", 4);
    \u0275\u0275elementStart(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "span", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275conditionalCreate(7, AssociationProfileComponent_Conditional_11_Conditional_7_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 10)(9, "h2");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 11)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 12);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "form", 13)(19, "div", 14)(20, "label", 15);
    \u0275\u0275text(21, "Nom officiel");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 14)(24, "label", 17);
    \u0275\u0275text(25, "Description courte");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "textarea", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 14)(28, "label", 19);
    \u0275\u0275text(29, "Description detaillee");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "textarea", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 21)(32, "div", 14)(33, "label", 22);
    \u0275\u0275text(34, "Localisation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 14)(37, "label", 24);
    \u0275\u0275text(38, "Site web");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 21)(41, "div", 14)(42, "label", 26);
    \u0275\u0275text(43, "Logo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 27);
    \u0275\u0275listener("change", function AssociationProfileComponent_Conditional_11_Template_input_change_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogoSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 14)(46, "label", 28);
    \u0275\u0275text(47, "Image de couverture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 29);
    \u0275\u0275listener("change", function AssociationProfileComponent_Conditional_11_Template_input_change_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCoverSelected($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 30)(50, "button", 31);
    \u0275\u0275listener("click", function AssociationProfileComponent_Conditional_11_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(51, "Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.error() ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-image", ctx_r1.coverPreviewUrl() ? "url(" + ctx_r1.coverPreviewUrl() + ")" : "linear-gradient(135deg, rgba(14, 165, 233, 0.25), rgba(34, 197, 94, 0.25))");
    \u0275\u0275advance();
    \u0275\u0275classProp("pending", ((tmp_3_0 = ctx_r1.profile()) == null ? null : tmp_3_0.status) !== "approved");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel((tmp_4_0 = ctx_r1.profile()) == null ? null : tmp_4_0.status), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", ctx_r1.logoPreviewUrl() ? "url(" + ctx_r1.logoPreviewUrl() + ")" : "linear-gradient(135deg, #0ea5e9, #22c55e)");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.logoPreviewUrl() ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r1.profile()) == null ? null : tmp_7_0.organization_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_8_0 = ctx_r1.profile()) == null ? null : tmp_8_0.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_9_0 = ctx_r1.profile()) == null ? null : tmp_9_0.location);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", (tmp_10_0 = ctx_r1.profile()) == null ? null : tmp_10_0.verified);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_11_0 = ctx_r1.profile()) == null ? null : tmp_11_0.verified) ? "Verifiee" : "Non verifiee", " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(32);
    \u0275\u0275property("disabled", ctx_r1.saving());
  }
}
var AssociationProfileComponent = class _AssociationProfileComponent {
  associationService = inject(AssociationDataService);
  fb = inject(FormBuilder);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  profile = signal(null, ...ngDevMode ? [{ debugName: "profile" }] : (
    /* istanbul ignore next */
    []
  ));
  logoFile = signal(null, ...ngDevMode ? [{ debugName: "logoFile" }] : (
    /* istanbul ignore next */
    []
  ));
  coverFile = signal(null, ...ngDevMode ? [{ debugName: "coverFile" }] : (
    /* istanbul ignore next */
    []
  ));
  logoPreviewUrl = computed(() => {
    const file = this.logoFile();
    if (file) {
      return URL.createObjectURL(file);
    }
    return this.associationService.imageUrl(this.profile()?.logo_url || null);
  }, ...ngDevMode ? [{ debugName: "logoPreviewUrl" }] : (
    /* istanbul ignore next */
    []
  ));
  coverPreviewUrl = computed(() => {
    const file = this.coverFile();
    if (file) {
      return URL.createObjectURL(file);
    }
    return this.associationService.imageUrl(this.profile()?.cover_url || null);
  }, ...ngDevMode ? [{ debugName: "coverPreviewUrl" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.group({
    organization_name: ["", Validators.required],
    description: ["", Validators.required],
    full_description: [""],
    location: ["", Validators.required],
    website: [""]
  });
  constructor() {
    this.loadProfile();
  }
  loadProfile() {
    this.loading.set(true);
    this.error.set("");
    this.associationService.getProfile().subscribe({
      next: (response) => {
        this.loading.set(false);
        if (!response.success) {
          this.error.set("Impossible de charger le profil.");
          return;
        }
        this.profile.set(response.data);
        this.form.patchValue({
          organization_name: response.data.organization_name,
          description: response.data.description,
          full_description: response.data.full_description || "",
          location: response.data.location,
          website: response.data.website || ""
        });
      },
      error: () => {
        this.loading.set(false);
        this.error.set("Impossible de charger le profil.");
      }
    });
  }
  onLogoSelected(event) {
    const input = event.target;
    this.logoFile.set(input.files?.[0] ?? null);
  }
  onCoverSelected(event) {
    const input = event.target;
    this.coverFile.set(input.files?.[0] ?? null);
  }
  submit() {
    if (this.form.invalid || this.saving()) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.error.set("");
    const formData = new FormData();
    formData.append("organization_name", String(this.form.value.organization_name ?? "").trim());
    formData.append("description", String(this.form.value.description ?? "").trim());
    formData.append("full_description", String(this.form.value.full_description ?? "").trim());
    formData.append("location", String(this.form.value.location ?? "").trim());
    formData.append("website", String(this.form.value.website ?? "").trim());
    const logo = this.logoFile();
    const cover = this.coverFile();
    if (logo) {
      formData.append("logo", logo);
    }
    if (cover) {
      formData.append("cover", cover);
    }
    this.associationService.updateProfile(formData).subscribe({
      next: (response) => {
        this.saving.set(false);
        if (!response.success) {
          this.error.set("Impossible de mettre a jour le profil.");
          return;
        }
        this.loadProfile();
      },
      error: () => {
        this.saving.set(false);
        this.error.set("Impossible de mettre a jour le profil.");
      }
    });
  }
  statusLabel(status) {
    switch (status) {
      case "pending":
        return "En attente de validation";
      case "rejected":
        return "Profil rejete";
      default:
        return "Approuve";
    }
  }
  static \u0275fac = function AssociationProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssociationProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssociationProfileComponent, selectors: [["app-association-profile"]], decls: 12, vars: 1, consts: [[1, "profile-shell"], [1, "profile-header"], [1, "kicker"], [1, "state"], [1, "state", "state--error"], [1, "profile-grid"], [1, "profile-preview"], [1, "cover"], [1, "status-badge"], [1, "logo"], [1, "preview-content"], [1, "meta"], [1, "verified"], [1, "profile-form", 3, "formGroup"], [1, "field"], ["for", "organization_name"], ["id", "organization_name", "type", "text", "formControlName", "organization_name"], ["for", "description"], ["id", "description", "rows", "3", "formControlName", "description"], ["for", "full_description"], ["id", "full_description", "rows", "5", "formControlName", "full_description"], [1, "grid"], ["for", "location"], ["id", "location", "type", "text", "formControlName", "location"], ["for", "website"], ["id", "website", "type", "text", "formControlName", "website", "placeholder", "https://"], ["for", "logo"], ["id", "logo", "type", "file", 3, "change"], ["for", "cover"], ["id", "cover", "type", "file", 3, "change"], [1, "actions"], ["type", "button", 1, "primary", 3, "click", "disabled"]], template: function AssociationProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-association-navbar");
      \u0275\u0275elementStart(1, "section", 0)(2, "header", 1)(3, "div")(4, "p", 2);
      \u0275\u0275text(5, "Profil association");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "Votre identite officielle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "Gardez un profil clair et verifie pour instaurer la confiance.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(10, AssociationProfileComponent_Conditional_10_Template, 2, 0, "div", 3)(11, AssociationProfileComponent_Conditional_11_Template, 52, 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.loading() ? 10 : 11);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, AssociationNavbarComponent], styles: ["\n.profile-shell[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 32px 24px 80px;\n}\n.kicker[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n  color: #64748b;\n}\n.profile-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-family: var(--font-heading);\n}\n.profile-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #475569;\n}\n.profile-grid[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.profile-preview[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  overflow: hidden;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  box-shadow: 0 18px 32px rgba(15, 23, 42, 0.08);\n}\n.cover[_ngcontent-%COMP%] {\n  height: 180px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n.status-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  background: rgba(34, 197, 94, 0.9);\n  color: #fff;\n  padding: 6px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.status-badge.pending[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.9);\n}\n.logo[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  border-radius: 20px;\n  margin: -45px 0 0 20px;\n  background-size: cover;\n  background-position: center;\n  display: grid;\n  place-items: center;\n  font-size: 28px;\n  font-weight: 700;\n  color: #fff;\n  border: 4px solid #fff;\n}\n.preview-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.preview-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n}\n.preview-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: #475569;\n}\n.meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  font-size: 12px;\n  color: #64748b;\n}\n.verified[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 999px;\n  background: rgba(148, 163, 184, 0.2);\n}\n.verified.active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.16);\n  color: #0f5132;\n}\n.profile-form[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px;\n  border-radius: 20px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  box-shadow: 0 18px 32px rgba(15, 23, 42, 0.08);\n  display: grid;\n  gap: 16px;\n}\n.field[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.4);\n  padding: 10px 12px;\n  font-family: inherit;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.primary[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  border-radius: 12px;\n  border: none;\n  background: #0ea5e9;\n  color: #fff;\n  font-weight: 600;\n}\n.state[_ngcontent-%COMP%] {\n  padding: 18px;\n  border-radius: 16px;\n  background: rgba(226, 232, 240, 0.5);\n  color: #475569;\n}\n.state--error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #b91c1c;\n}\n@media (max-width: 1000px) {\n  .profile-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=association-profile.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssociationProfileComponent, [{
    type: Component,
    args: [{ selector: "app-association-profile", imports: [CommonModule, ReactiveFormsModule, AssociationNavbarComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-association-navbar></app-association-navbar>\r
\r
<section class="profile-shell">\r
  <header class="profile-header">\r
    <div>\r
      <p class="kicker">Profil association</p>\r
      <h1>Votre identite officielle</h1>\r
      <p>Gardez un profil clair et verifie pour instaurer la confiance.</p>\r
    </div>\r
  </header>\r
\r
  @if (loading()) {\r
    <div class="state">Chargement du profil...</div>\r
  } @else {\r
    @if (error()) {\r
      <div class="state state--error">{{ error() }}</div>\r
    }\r
\r
    <div class="profile-grid">\r
      <div class="profile-preview">\r
        <div class="cover" [style.background-image]="coverPreviewUrl() ? 'url(' + coverPreviewUrl() + ')' : 'linear-gradient(135deg, rgba(14, 165, 233, 0.25), rgba(34, 197, 94, 0.25))'">\r
          <span class="status-badge" [class.pending]="profile()?.status !== 'approved'">\r
            {{ statusLabel(profile()?.status) }}\r
          </span>\r
        </div>\r
        <div class="logo" [style.background-image]="logoPreviewUrl() ? 'url(' + logoPreviewUrl() + ')' : 'linear-gradient(135deg, #0ea5e9, #22c55e)'">\r
          @if (!logoPreviewUrl()) {\r
            <span>{{ (profile()?.organization_name || 'A').charAt(0) }}</span>\r
          }\r
        </div>\r
        <div class="preview-content">\r
          <h2>{{ profile()?.organization_name }}</h2>\r
          <p>{{ profile()?.description }}</p>\r
          <div class="meta">\r
            <span>{{ profile()?.location }}</span>\r
            <span class="verified" [class.active]="profile()?.verified">\r
              {{ profile()?.verified ? 'Verifiee' : 'Non verifiee' }}\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <form [formGroup]="form" class="profile-form">\r
        <div class="field">\r
          <label for="organization_name">Nom officiel</label>\r
          <input id="organization_name" type="text" formControlName="organization_name" />\r
        </div>\r
        <div class="field">\r
          <label for="description">Description courte</label>\r
          <textarea id="description" rows="3" formControlName="description"></textarea>\r
        </div>\r
        <div class="field">\r
          <label for="full_description">Description detaillee</label>\r
          <textarea id="full_description" rows="5" formControlName="full_description"></textarea>\r
        </div>\r
        <div class="grid">\r
          <div class="field">\r
            <label for="location">Localisation</label>\r
            <input id="location" type="text" formControlName="location" />\r
          </div>\r
          <div class="field">\r
            <label for="website">Site web</label>\r
            <input id="website" type="text" formControlName="website" placeholder="https://" />\r
          </div>\r
        </div>\r
        <div class="grid">\r
          <div class="field">\r
            <label for="logo">Logo</label>\r
            <input id="logo" type="file" (change)="onLogoSelected($event)" />\r
          </div>\r
          <div class="field">\r
            <label for="cover">Image de couverture</label>\r
            <input id="cover" type="file" (change)="onCoverSelected($event)" />\r
          </div>\r
        </div>\r
\r
        <div class="actions">\r
          <button type="button" class="primary" (click)="submit()" [disabled]="saving()">Enregistrer</button>\r
        </div>\r
      </form>\r
    </div>\r
  }\r
</section>\r
`, styles: ["/* src/app/association/association-profile/association-profile.component.css */\n.profile-shell {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 32px 24px 80px;\n}\n.kicker {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n  color: #64748b;\n}\n.profile-header h1 {\n  margin: 0 0 8px;\n  font-family: var(--font-heading);\n}\n.profile-header p {\n  margin: 0;\n  color: #475569;\n}\n.profile-grid {\n  margin-top: 24px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.profile-preview {\n  background: #fff;\n  border-radius: 20px;\n  overflow: hidden;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  box-shadow: 0 18px 32px rgba(15, 23, 42, 0.08);\n}\n.cover {\n  height: 180px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n.status-badge {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  background: rgba(34, 197, 94, 0.9);\n  color: #fff;\n  padding: 6px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.status-badge.pending {\n  background: rgba(234, 179, 8, 0.9);\n}\n.logo {\n  width: 90px;\n  height: 90px;\n  border-radius: 20px;\n  margin: -45px 0 0 20px;\n  background-size: cover;\n  background-position: center;\n  display: grid;\n  place-items: center;\n  font-size: 28px;\n  font-weight: 700;\n  color: #fff;\n  border: 4px solid #fff;\n}\n.preview-content {\n  padding: 20px;\n}\n.preview-content h2 {\n  margin: 0 0 8px;\n}\n.preview-content p {\n  margin: 0 0 12px;\n  color: #475569;\n}\n.meta {\n  display: flex;\n  gap: 12px;\n  font-size: 12px;\n  color: #64748b;\n}\n.verified {\n  padding: 4px 8px;\n  border-radius: 999px;\n  background: rgba(148, 163, 184, 0.2);\n}\n.verified.active {\n  background: rgba(34, 197, 94, 0.16);\n  color: #0f5132;\n}\n.profile-form {\n  background: #fff;\n  padding: 22px;\n  border-radius: 20px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  box-shadow: 0 18px 32px rgba(15, 23, 42, 0.08);\n  display: grid;\n  gap: 16px;\n}\n.field {\n  display: grid;\n  gap: 8px;\n}\n.field input,\n.field textarea {\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.4);\n  padding: 10px 12px;\n  font-family: inherit;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.actions {\n  display: flex;\n  justify-content: flex-end;\n}\n.primary {\n  padding: 12px 18px;\n  border-radius: 12px;\n  border: none;\n  background: #0ea5e9;\n  color: #fff;\n  font-weight: 600;\n}\n.state {\n  padding: 18px;\n  border-radius: 16px;\n  background: rgba(226, 232, 240, 0.5);\n  color: #475569;\n}\n.state--error {\n  background: rgba(239, 68, 68, 0.12);\n  color: #b91c1c;\n}\n@media (max-width: 1000px) {\n  .profile-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=association-profile.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssociationProfileComponent, { className: "AssociationProfileComponent", filePath: "app/association/association-profile/association-profile.component.ts", lineNumber: 15 });
})();
export {
  AssociationProfileComponent
};
//# sourceMappingURL=chunk-OSPSTVNO.js.map
