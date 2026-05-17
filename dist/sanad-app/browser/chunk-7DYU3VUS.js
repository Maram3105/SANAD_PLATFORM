import {
  AuthService,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  HttpClient,
  HttpHeaders,
  HttpParams,
  Injectable,
  Router,
  RouterLink,
  RouterLinkActive,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-BNXH775N.js";

// src/app/admin/admin-navbar/admin-navbar.component.ts
var _c0 = () => ({ exact: true });
var AdminNavbarComponent = class _AdminNavbarComponent {
  auth = inject(AuthService);
  router = inject(Router);
  logout() {
    this.auth.clearToken();
    this.router.navigateByUrl("/auth/login");
  }
  static \u0275fac = function AdminNavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminNavbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminNavbarComponent, selectors: [["app-admin-navbar"]], decls: 35, vars: 2, consts: [[1, "admin-nav"], [1, "admin-nav__container"], [1, "admin-nav__brand"], ["routerLink", "/admin-dashboard", 1, "brand"], [1, "brand__mark"], [1, "brand__text"], [1, "admin-badge"], [1, "admin-nav__links"], ["routerLink", "/admin-dashboard", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [1, "nav-icon"], ["routerLink", "/admin/associations", "routerLinkActive", "active"], ["routerLink", "/admin/requests", "routerLinkActive", "active"], ["routerLink", "/admin/donations", "routerLinkActive", "active"], [1, "admin-nav__actions"], ["type", "button", 1, "logout-button", 3, "click"], [1, "logout-button__avatar"], [1, "logout-button__name"], [1, "logout-button__icon"]], template: function AdminNavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "span", 4);
      \u0275\u0275text(5, "\u26A1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7, "Sanad Admin");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "span", 6);
      \u0275\u0275text(9, "Panneau d'administration");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7)(11, "a", 8)(12, "span", 9);
      \u0275\u0275text(13, "\u{1F4CA}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Tableau de bord ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 10)(16, "span", 9);
      \u0275\u0275text(17, "\u{1F3E2}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Associations ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 11)(20, "span", 9);
      \u0275\u0275text(21, "\u{1F4CB}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Demandes ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 12)(24, "span", 9);
      \u0275\u0275text(25, "\u{1F4B0}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " Dons ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 13)(28, "button", 14);
      \u0275\u0275listener("click", function AdminNavbarComponent_Template_button_click_28_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(29, "span", 15);
      \u0275\u0275text(30, "A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 16);
      \u0275\u0275text(32, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span", 17);
      \u0275\u0275text(34, "\u21A9");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(1, _c0));
    }
  }, dependencies: [CommonModule, RouterLink, RouterLinkActive], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.admin-nav[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 120;\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a8a 0%,\n      #1d4ed8 100%);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.25);\n}\n.admin-nav__container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 24px;\n  height: 64px;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 24px;\n}\n.admin-nav__brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 700;\n  color: #fff;\n  text-decoration: none;\n}\n.brand__mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.2);\n  font-size: 18px;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.brand__text[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 16px;\n  letter-spacing: 0.3px;\n}\n.admin-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  background: rgba(239, 68, 68, 0.25);\n  color: #fca5a5;\n  padding: 4px 10px;\n  border-radius: 999px;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  letter-spacing: 0.3px;\n  white-space: nowrap;\n}\n.admin-nav__links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 4px;\n}\n.admin-nav__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n  font-weight: 500;\n  padding: 8px 14px;\n  border-radius: 8px;\n  text-decoration: none;\n  transition: background 0.2s, color 0.2s;\n}\n.admin-nav__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n}\n.admin-nav__links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n  color: #fff;\n  font-weight: 600;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.admin-nav__actions[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.logout-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  border-radius: 999px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  transition: background 0.2s;\n}\n.logout-button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.logout-button__avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.25);\n  font-size: 12px;\n  font-weight: 700;\n}\n.logout-button__icon[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n@media (max-width: 960px) {\n  .admin-nav__container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    height: auto;\n    padding: 12px 24px;\n    gap: 12px;\n  }\n  .admin-nav__brand[_ngcontent-%COMP%], \n   .admin-nav__links[_ngcontent-%COMP%], \n   .admin-nav__actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .admin-nav__links[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .admin-badge[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=admin-navbar.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminNavbarComponent, [{
    type: Component,
    args: [{ selector: "app-admin-navbar", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], template: `
    <nav class="admin-nav">
      <div class="admin-nav__container">
        <div class="admin-nav__brand">
          <a routerLink="/admin-dashboard" class="brand">
            <span class="brand__mark">\u26A1</span>
            <span class="brand__text">Sanad Admin</span>
          </a>
          <span class="admin-badge">Panneau d'administration</span>
        </div>

        <div class="admin-nav__links">
          <a routerLink="/admin-dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            <span class="nav-icon">\u{1F4CA}</span> Tableau de bord
          </a>
          <a routerLink="/admin/associations" routerLinkActive="active">
            <span class="nav-icon">\u{1F3E2}</span> Associations
          </a>
          <a routerLink="/admin/requests" routerLinkActive="active">
            <span class="nav-icon">\u{1F4CB}</span> Demandes
          </a>
          <a routerLink="/admin/donations" routerLinkActive="active">
            <span class="nav-icon">\u{1F4B0}</span> Dons
          </a>
        </div>

        <div class="admin-nav__actions">
          <button class="logout-button" type="button" (click)="logout()">
            <span class="logout-button__avatar">A</span>
            <span class="logout-button__name">Admin</span>
            <span class="logout-button__icon">\u21A9</span>
          </button>
        </div>
      </div>
    </nav>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;07eaa5ed8f8ccf9c9f0d1aae78a2bd14474c432156640e7961fb60cc7e7db870;C:/xampp/htdocs/PROJET SANAD/src/app/admin/admin-navbar/admin-navbar.component.ts */\n:host {\n  display: block;\n}\n.admin-nav {\n  position: sticky;\n  top: 0;\n  z-index: 120;\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a8a 0%,\n      #1d4ed8 100%);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.25);\n}\n.admin-nav__container {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 24px;\n  height: 64px;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 24px;\n}\n.admin-nav__brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 700;\n  color: #fff;\n  text-decoration: none;\n}\n.brand__mark {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.2);\n  font-size: 18px;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.brand__text {\n  font-family: var(--font-heading);\n  font-size: 16px;\n  letter-spacing: 0.3px;\n}\n.admin-badge {\n  font-size: 11px;\n  font-weight: 600;\n  background: rgba(239, 68, 68, 0.25);\n  color: #fca5a5;\n  padding: 4px 10px;\n  border-radius: 999px;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  letter-spacing: 0.3px;\n  white-space: nowrap;\n}\n.admin-nav__links {\n  display: flex;\n  justify-content: center;\n  gap: 4px;\n}\n.admin-nav__links a {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n  font-weight: 500;\n  padding: 8px 14px;\n  border-radius: 8px;\n  text-decoration: none;\n  transition: background 0.2s, color 0.2s;\n}\n.admin-nav__links a:hover {\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n}\n.admin-nav__links a.active {\n  background: rgba(255, 255, 255, 0.18);\n  color: #fff;\n  font-weight: 600;\n}\n.nav-icon {\n  font-size: 15px;\n}\n.admin-nav__actions {\n  flex-shrink: 0;\n}\n.logout-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  border-radius: 999px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  transition: background 0.2s;\n}\n.logout-button:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.logout-button__avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.25);\n  font-size: 12px;\n  font-weight: 700;\n}\n.logout-button__icon {\n  opacity: 0.7;\n}\n@media (max-width: 960px) {\n  .admin-nav__container {\n    grid-template-columns: 1fr;\n    height: auto;\n    padding: 12px 24px;\n    gap: 12px;\n  }\n  .admin-nav__brand,\n  .admin-nav__links,\n  .admin-nav__actions {\n    justify-content: center;\n  }\n  .admin-nav__links {\n    flex-wrap: wrap;\n  }\n  .admin-badge {\n    display: none;\n  }\n}\n/*# sourceMappingURL=admin-navbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminNavbarComponent, { className: "AdminNavbarComponent", filePath: "app/admin/admin-navbar/admin-navbar.component.ts", lineNumber: 187 });
})();

// src/app/admin/admin.service.ts
var AdminService = class _AdminService {
  http;
  auth;
  apiBase = "http://localhost/PROJET%20SANAD/backend/api";
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  headers() {
    const token = this.auth.getToken();
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
  getStats() {
    return this.http.get(`${this.apiBase}/admin_get_stats.php`, { headers: this.headers() });
  }
  getAssociations(params) {
    let p = new HttpParams();
    if (params.search)
      p = p.set("search", params.search);
    if (params.status)
      p = p.set("status", params.status);
    if (params.limit != null)
      p = p.set("limit", params.limit.toString());
    if (params.offset != null)
      p = p.set("offset", params.offset.toString());
    return this.http.get(`${this.apiBase}/admin_get_associations.php`, { headers: this.headers(), params: p });
  }
  updateAssociation(associationId, action) {
    return this.http.post(`${this.apiBase}/admin_update_association.php`, { association_id: associationId, action }, { headers: this.headers() });
  }
  getRequests(params) {
    let p = new HttpParams();
    if (params.search)
      p = p.set("search", params.search);
    if (params.status)
      p = p.set("status", params.status);
    if (params.urgency)
      p = p.set("urgency", params.urgency);
    if (params.limit != null)
      p = p.set("limit", params.limit.toString());
    if (params.offset != null)
      p = p.set("offset", params.offset.toString());
    return this.http.get(`${this.apiBase}/admin_get_requests.php`, { headers: this.headers(), params: p });
  }
  updateRequest(requestId, action) {
    return this.http.post(`${this.apiBase}/admin_update_request.php`, { request_id: requestId, action }, { headers: this.headers() });
  }
  getDonations(params) {
    let p = new HttpParams();
    if (params.status)
      p = p.set("status", params.status);
    if (params.limit != null)
      p = p.set("limit", params.limit.toString());
    if (params.offset != null)
      p = p.set("offset", params.offset.toString());
    return this.http.get(`${this.apiBase}/admin_get_donations.php`, { headers: this.headers(), params: p });
  }
  static \u0275fac = function AdminService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminService, factory: _AdminService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

export {
  AdminNavbarComponent,
  AdminService
};
//# sourceMappingURL=chunk-7DYU3VUS.js.map
