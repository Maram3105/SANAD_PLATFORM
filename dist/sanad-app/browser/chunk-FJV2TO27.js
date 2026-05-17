import {
  AuthService,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  HttpClient,
  HttpHeaders,
  Injectable,
  Router,
  RouterLink,
  RouterLinkActive,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BNXH775N.js";

// src/app/association/association-data.service.ts
var AssociationDataService = class _AssociationDataService {
  apiBase = "http://localhost/PROJET%20SANAD/backend/api";
  assetsBase = "http://localhost/PROJET%20SANAD/backend";
  http = inject(HttpClient);
  auth = inject(AuthService);
  authHeaders() {
    const token = this.auth.getToken();
    return new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : ""
    });
  }
  imageUrl(path) {
    if (!path) {
      return null;
    }
    if (path.startsWith("http://") || path.startsWith("https://")) {
      return path;
    }
    return `${this.assetsBase}/${path}`;
  }
  getCategories() {
    return this.http.get(`${this.apiBase}/get_categories.php`);
  }
  getDashboard() {
    return this.http.get(`${this.apiBase}/get_association_dashboard.php`, {
      headers: this.authHeaders()
    });
  }
  getCampaigns() {
    return this.http.get(`${this.apiBase}/get_association_campaigns.php`, { headers: this.authHeaders() });
  }
  createCampaign(payload) {
    return this.http.post(`${this.apiBase}/create_request.php`, payload, { headers: this.authHeaders() });
  }
  updateCampaign(payload) {
    return this.http.post(`${this.apiBase}/update_request.php`, payload, { headers: this.authHeaders() });
  }
  deleteCampaign(requestId) {
    return this.http.post(`${this.apiBase}/delete_request.php`, { request_id: requestId }, { headers: this.authHeaders() });
  }
  getDonations() {
    return this.http.get(`${this.apiBase}/get_association_donations.php`, {
      headers: this.authHeaders()
    });
  }
  getProfile() {
    return this.http.get(`${this.apiBase}/get_association_profile.php`, { headers: this.authHeaders() });
  }
  updateProfile(payload) {
    return this.http.post(`${this.apiBase}/update_association_profile.php`, payload, { headers: this.authHeaders() });
  }
  getUpdates(requestId) {
    return this.http.get(`${this.apiBase}/get_request_updates.php?request_id=${requestId}`, { headers: this.authHeaders() });
  }
  getRequestDetail(requestId) {
    return this.http.get(`${this.apiBase}/get_request_detail.php?id=${requestId}`);
  }
  createUpdate(payload) {
    return this.http.post(`${this.apiBase}/create_request_update.php`, payload, { headers: this.authHeaders() });
  }
  static \u0275fac = function AssociationDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssociationDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssociationDataService, factory: _AssociationDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssociationDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/association-navbar.component.ts
var _c0 = () => ({ exact: true });
var AssociationNavbarComponent = class _AssociationNavbarComponent {
  associationService = inject(AssociationDataService);
  auth = inject(AuthService);
  router = inject(Router);
  organizationName = signal("Association", ...ngDevMode ? [{ debugName: "organizationName" }] : (
    /* istanbul ignore next */
    []
  ));
  status = signal("approved", ...ngDevMode ? [{ debugName: "status" }] : (
    /* istanbul ignore next */
    []
  ));
  initials = computed(() => {
    const name = this.organizationName().trim();
    return name ? name.charAt(0).toUpperCase() : "A";
  }, ...ngDevMode ? [{ debugName: "initials" }] : (
    /* istanbul ignore next */
    []
  ));
  statusLabel = computed(() => {
    switch (this.status()) {
      case "pending":
        return "Validation en cours";
      case "rejected":
        return "Profil rejete";
      default:
        return "Association verifiee";
    }
  }, ...ngDevMode ? [{ debugName: "statusLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.associationService.getProfile().subscribe({
      next: (response) => {
        if (response.success) {
          this.organizationName.set(response.data.organization_name);
          this.status.set(response.data.status);
        }
      }
    });
  }
  logout() {
    this.auth.clearToken();
    this.router.navigateByUrl("/auth/login");
  }
  static \u0275fac = function AssociationNavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssociationNavbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssociationNavbarComponent, selectors: [["app-association-navbar"]], decls: 29, vars: 9, consts: [[1, "association-nav"], [1, "association-nav__container"], [1, "association-nav__brand"], ["routerLink", "/association/dashboard", 1, "brand"], [1, "brand__mark"], [1, "brand__text"], [1, "association-nav__status"], [1, "association-nav__links"], ["routerLink", "/association/dashboard", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/association/explorer", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/association/campaigns", "routerLinkActive", "active"], ["routerLink", "/association/donations", "routerLinkActive", "active"], ["routerLink", "/association/profile", "routerLinkActive", "active"], [1, "association-nav__actions"], ["routerLink", "/association/campaigns/new", 1, "action-button"], ["type", "button", 1, "profile-button", 3, "click"], [1, "profile-button__avatar"], [1, "profile-button__name"]], template: function AssociationNavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "span", 4);
      \u0275\u0275text(5, "S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7, "Sanad Association");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "span", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7)(11, "a", 8);
      \u0275\u0275text(12, "Tableau de bord");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 9);
      \u0275\u0275text(14, "Explorer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 10);
      \u0275\u0275text(16, "Mes campagnes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 11);
      \u0275\u0275text(18, "Dons recus");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 12);
      \u0275\u0275text(20, "Profil");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 13)(22, "a", 14);
      \u0275\u0275text(23, "Creer une campagne");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 15);
      \u0275\u0275listener("click", function AssociationNavbarComponent_Template_button_click_24_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(25, "span", 16);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 17);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275classProp("pending", ctx.status() !== "approved");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.statusLabel(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(7, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.initials());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.organizationName());
    }
  }, dependencies: [CommonModule, RouterLink, RouterLinkActive], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.association-nav[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 120;\n  background: rgba(255, 255, 255, 0.92);\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  box-shadow: 0 12px 26px rgba(15, 23, 42, 0.08);\n}\n.association-nav__container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 16px 24px;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 24px;\n}\n.association-nav__brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.brand__mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #22c55e);\n  color: #fff;\n  font-weight: 700;\n}\n.brand__text[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 15px;\n}\n.association-nav__status[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  background: rgba(34, 197, 94, 0.16);\n  color: #0f5132;\n  padding: 6px 10px;\n  border-radius: 999px;\n}\n.association-nav__status.pending[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.16);\n  color: #92400e;\n}\n.association-nav__links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 18px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.association-nav__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #475569;\n  position: relative;\n  padding-bottom: 4px;\n}\n.association-nav__links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.association-nav__links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #0ea5e9,\n      #22c55e);\n}\n.association-nav__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.action-button[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #2563eb);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  box-shadow: 0 12px 20px rgba(37, 99, 235, 0.2);\n}\n.profile-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-radius: 999px;\n  border: 1px solid rgba(148, 163, 184, 0.5);\n  background: #fff;\n  cursor: pointer;\n}\n.profile-button__avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: #1e293b;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n}\n.profile-button__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #0f172a;\n}\n@media (max-width: 960px) {\n  .association-nav__container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    justify-items: center;\n  }\n  .association-nav__links[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=association-navbar.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssociationNavbarComponent, [{
    type: Component,
    args: [{ selector: "app-association-navbar", imports: [CommonModule, RouterLink, RouterLinkActive], template: `
    <nav class="association-nav">
      <div class="association-nav__container">
        <div class="association-nav__brand">
          <a routerLink="/association/dashboard" class="brand">
            <span class="brand__mark">S</span>
            <span class="brand__text">Sanad Association</span>
          </a>
          <span class="association-nav__status" [class.pending]="status() !== 'approved'">
            {{ statusLabel() }}
          </span>
        </div>

        <div class="association-nav__links">
          <a routerLink="/association/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Tableau de bord</a>
          <a routerLink="/association/explorer" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Explorer</a>
          <a routerLink="/association/campaigns" routerLinkActive="active">Mes campagnes</a>
          <a routerLink="/association/donations" routerLinkActive="active">Dons recus</a>
          <a routerLink="/association/profile" routerLinkActive="active">Profil</a>
        </div>

        <div class="association-nav__actions">
          <a class="action-button" routerLink="/association/campaigns/new">Creer une campagne</a>
          <button class="profile-button" type="button" (click)="logout()">
            <span class="profile-button__avatar">{{ initials() }}</span>
            <span class="profile-button__name">{{ organizationName() }}</span>
          </button>
        </div>
      </div>
    </nav>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* src/app/shared/association-navbar.component.css */\n:host {\n  display: block;\n}\n.association-nav {\n  position: sticky;\n  top: 0;\n  z-index: 120;\n  background: rgba(255, 255, 255, 0.92);\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  box-shadow: 0 12px 26px rgba(15, 23, 42, 0.08);\n}\n.association-nav__container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 16px 24px;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 24px;\n}\n.association-nav__brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.brand__mark {\n  width: 36px;\n  height: 36px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #22c55e);\n  color: #fff;\n  font-weight: 700;\n}\n.brand__text {\n  font-family: var(--font-heading);\n  font-size: 15px;\n}\n.association-nav__status {\n  font-size: 12px;\n  font-weight: 600;\n  background: rgba(34, 197, 94, 0.16);\n  color: #0f5132;\n  padding: 6px 10px;\n  border-radius: 999px;\n}\n.association-nav__status.pending {\n  background: rgba(234, 179, 8, 0.16);\n  color: #92400e;\n}\n.association-nav__links {\n  display: flex;\n  justify-content: center;\n  gap: 18px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.association-nav__links a {\n  color: #475569;\n  position: relative;\n  padding-bottom: 4px;\n}\n.association-nav__links a.active {\n  color: #0f172a;\n}\n.association-nav__links a.active::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #0ea5e9,\n      #22c55e);\n}\n.association-nav__actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.action-button {\n  padding: 10px 14px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #2563eb);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  box-shadow: 0 12px 20px rgba(37, 99, 235, 0.2);\n}\n.profile-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-radius: 999px;\n  border: 1px solid rgba(148, 163, 184, 0.5);\n  background: #fff;\n  cursor: pointer;\n}\n.profile-button__avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: #1e293b;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n}\n.profile-button__name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #0f172a;\n}\n@media (max-width: 960px) {\n  .association-nav__container {\n    grid-template-columns: 1fr;\n    justify-items: center;\n  }\n  .association-nav__links {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=association-navbar.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssociationNavbarComponent, { className: "AssociationNavbarComponent", filePath: "app/shared/association-navbar.component.ts", lineNumber: 45 });
})();

export {
  AssociationDataService,
  AssociationNavbarComponent
};
//# sourceMappingURL=chunk-FJV2TO27.js.map
