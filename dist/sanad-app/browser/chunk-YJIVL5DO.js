import {
  AdminNavbarComponent,
  AdminService
} from "./chunk-7DYU3VUS.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  NgIf,
  RouterLink,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BNXH775N.js";

// src/app/admin/admin-dashboard/admin-dashboard.component.ts
var _c0 = () => ({ status: "pending" });
var _c1 = () => ({ status: "paused" });
function AdminDashboardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement des statistiques...");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r0.error);
  }
}
function AdminDashboardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16);
    \u0275\u0275text(3, "\u{1F3E2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17)(5, "div", 18);
    \u0275\u0275text(6, "Associations en attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "a", 21);
    \u0275\u0275text(12, " V\xE9rifier \u2192 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 22)(14, "div", 16);
    \u0275\u0275text(15, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17)(17, "div", 18);
    \u0275\u0275text(18, "Demandes en attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 19);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 20);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "a", 23);
    \u0275\u0275text(24, " Examiner \u2192 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 24)(26, "div", 16);
    \u0275\u0275text(27, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 17)(29, "div", 18);
    \u0275\u0275text(30, "Total des dons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 19);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 20);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "a", 25);
    \u0275\u0275text(36, " Surveiller \u2192 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 26)(38, "div", 16);
    \u0275\u0275text(39, "\u{1F4C8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 17)(41, "div", 18);
    \u0275\u0275text(42, "Plateforme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 19);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 20);
    \u0275\u0275text(46, "Entit\xE9s g\xE9r\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "a", 27);
    \u0275\u0275text(48, " G\xE9rer \u2192 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.stats.pending_associations);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.stats.total_associations, " au total");
    \u0275\u0275advance();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.stats.pending_requests);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.stats.total_requests, " au total");
    \u0275\u0275advance();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(10, _c1));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.formatAmount(ctx_r0.stats.total_donations));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.stats.donations_count, " transactions");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.stats.total_associations + ctx_r0.stats.total_requests);
  }
}
function AdminDashboardComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "h2", 29);
    \u0275\u0275text(2, "Actions rapides");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "a", 31)(5, "div", 32);
    \u0275\u0275text(6, "\u{1F3E2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 33)(8, "div", 34);
    \u0275\u0275text(9, "Valider les associations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 35)(11, "span", 36);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Approuver ou rejeter les nouvelles inscriptions ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 37);
    \u0275\u0275text(15, "\u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "a", 38)(17, "div", 39);
    \u0275\u0275text(18, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 33)(20, "div", 34);
    \u0275\u0275text(21, "Mod\xE9rer les demandes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 35)(23, "span", 40);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Valider ou supprimer le contenu frauduleux ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 37);
    \u0275\u0275text(27, "\u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "a", 41)(29, "div", 42);
    \u0275\u0275text(30, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 33)(32, "div", 34);
    \u0275\u0275text(33, "Surveiller les dons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 35)(35, "span", 43);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " Analyser les flux de dons et d\xE9tecter les fraudes ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 37);
    \u0275\u0275text(39, "\u2192");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r0.stats.pending_associations, " en attente");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", ctx_r0.stats.pending_requests, " en attente");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", ctx_r0.stats.donations_count, " transactions");
  }
}
function AdminDashboardComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275text(2, "\u{1F6E1}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46)(4, "strong");
    \u0275\u0275text(5, "Gardien de confiance de la plateforme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "En tant qu'administrateur, vous \xEAtes responsable de maintenir la transparence, la s\xE9curit\xE9 et la validit\xE9 de toutes les donn\xE9es sur Sanad.");
    \u0275\u0275elementEnd()()();
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  adminService = inject(AdminService);
  cdr = inject(ChangeDetectorRef);
  stats = null;
  loading = true;
  error = "";
  ngOnInit() {
    this.adminService.getStats().subscribe({
      next: (res) => {
        if (res.success) {
          this.stats = res.data;
        } else {
          this.error = "Impossible de charger les statistiques.";
        }
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.error = "Erreur de connexion au serveur.";
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
  formatAmount(amount) {
    return new Intl.NumberFormat("fr-TN", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount) + " TND";
  }
  static \u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 16, vars: 5, consts: [[1, "admin-page"], [1, "admin-page__header"], [1, "admin-page__title"], [1, "admin-page__subtitle"], [1, "header-time"], [1, "time-badge"], ["class", "loading-state", 4, "ngIf"], ["class", "error-banner", 4, "ngIf"], ["class", "stats-grid", 4, "ngIf"], ["class", "quick-nav", 4, "ngIf"], ["class", "trust-banner", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "error-banner"], [1, "stats-grid"], [1, "stat-card", "stat-card--warning"], [1, "stat-card__icon"], [1, "stat-card__content"], [1, "stat-card__label"], [1, "stat-card__value"], [1, "stat-card__sub"], ["routerLink", "/admin/associations", 1, "stat-card__action", 3, "queryParams"], [1, "stat-card", "stat-card--blue"], ["routerLink", "/admin/requests", 1, "stat-card__action", 3, "queryParams"], [1, "stat-card", "stat-card--green"], ["routerLink", "/admin/donations", 1, "stat-card__action"], [1, "stat-card", "stat-card--purple"], ["routerLink", "/admin/associations", 1, "stat-card__action"], [1, "quick-nav"], [1, "section-title"], [1, "quick-nav__grid"], ["routerLink", "/admin/associations", 1, "quick-card", 3, "queryParams"], [1, "quick-card__icon", "quick-card__icon--orange"], [1, "quick-card__content"], [1, "quick-card__title"], [1, "quick-card__desc"], [1, "badge", "badge--orange"], [1, "quick-card__arrow"], ["routerLink", "/admin/requests", 1, "quick-card"], [1, "quick-card__icon", "quick-card__icon--blue"], [1, "badge", "badge--blue"], ["routerLink", "/admin/donations", 1, "quick-card"], [1, "quick-card__icon", "quick-card__icon--green"], [1, "badge", "badge--green"], [1, "trust-banner"], [1, "trust-banner__icon"], [1, "trust-banner__content"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-admin-navbar");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
      \u0275\u0275text(5, "Tableau de bord");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Vue d'ensemble de la plateforme Sanad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 4)(9, "span", 5);
      \u0275\u0275text(10, "\u{1F7E2} En ligne");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, AdminDashboardComponent_div_11_Template, 4, 0, "div", 6)(12, AdminDashboardComponent_div_12_Template, 3, 1, "div", 7)(13, AdminDashboardComponent_div_13_Template, 49, 11, "div", 8)(14, AdminDashboardComponent_div_14_Template, 40, 5, "div", 9)(15, AdminDashboardComponent_div_15_Template, 8, 0, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.stats && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.stats && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.stats && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, RouterLink, AdminNavbarComponent], styles: ['\n.admin-page[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 40px 24px 80px;\n}\n.admin-page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 40px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.admin-page__title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 32px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.admin-page__subtitle[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--gray-500);\n  margin: 0;\n}\n.header-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.time-badge[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  background: rgba(34, 197, 94, 0.12);\n  color: #15803d;\n  padding: 8px 16px;\n  border-radius: 999px;\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n  color: var(--gray-500);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--gray-200);\n  border-top-color: var(--blue-600);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: #b91c1c;\n  padding: 16px 20px;\n  border-radius: var(--radius-md);\n  margin-bottom: 24px;\n  font-weight: 500;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n  margin-bottom: 40px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  padding: 24px;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);\n  border: 1px solid rgba(15, 23, 42, 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  position: relative;\n  overflow: hidden;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);\n}\n.stat-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  border-radius: 18px 18px 0 0;\n}\n.stat-card--warning[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #fbbf24);\n}\n.stat-card--blue[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #60a5fa);\n}\n.stat-card--green[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #4ade80);\n}\n.stat-card--purple[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #8b5cf6,\n      #a78bfa);\n}\n.stat-card__icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 52px;\n  height: 52px;\n  display: grid;\n  place-items: center;\n  border-radius: 14px;\n  background: var(--gray-100);\n}\n.stat-card--warning[_ngcontent-%COMP%]   .stat-card__icon[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n}\n.stat-card--blue[_ngcontent-%COMP%]   .stat-card__icon[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.1);\n}\n.stat-card--green[_ngcontent-%COMP%]   .stat-card__icon[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n}\n.stat-card--purple[_ngcontent-%COMP%]   .stat-card__icon[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.1);\n}\n.stat-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--gray-500);\n}\n.stat-card__value[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 30px;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1;\n}\n.stat-card__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--gray-500);\n}\n.stat-card__action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--blue-600);\n  text-decoration: none;\n  gap: 4px;\n  margin-top: auto;\n  transition: gap 0.2s;\n}\n.stat-card__action[_ngcontent-%COMP%]:hover {\n  gap: 8px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 20px;\n}\n.quick-nav[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.quick-nav__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.quick-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.06);\n  text-decoration: none;\n  color: inherit;\n  transition: transform 0.2s, box-shadow 0.2s;\n  cursor: pointer;\n}\n.quick-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);\n}\n.quick-card__icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.quick-card__icon--orange[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n}\n.quick-card__icon--blue[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.1);\n}\n.quick-card__icon--green[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n}\n.quick-card__content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.quick-card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 6px;\n}\n.quick-card__desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--gray-500);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 999px;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #92400e;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.12);\n  color: #1d4ed8;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #166534;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #b91c1c;\n}\n.quick-card__arrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--gray-500);\n  transition: transform 0.2s, color 0.2s;\n  flex-shrink: 0;\n}\n.quick-card[_ngcontent-%COMP%]:hover   .quick-card__arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n  color: var(--blue-600);\n}\n.trust-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #eef2ff 0%,\n      #f0fdf4 100%);\n  border: 1px solid rgba(37, 99, 235, 0.15);\n  border-radius: 16px;\n  padding: 24px 28px;\n}\n.trust-banner__icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  flex-shrink: 0;\n}\n.trust-banner__content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 6px;\n}\n.trust-banner__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-500);\n  margin: 0;\n  line-height: 1.6;\n}\n@media (max-width: 1100px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .quick-nav__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .admin-page[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .admin-page__title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .stat-card__value[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", standalone: true, imports: [CommonModule, RouterLink, AdminNavbarComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-admin-navbar></app-admin-navbar>

<div class="admin-page">
  <div class="admin-page__header">
    <div>
      <h1 class="admin-page__title">Tableau de bord</h1>
      <p class="admin-page__subtitle">Vue d'ensemble de la plateforme Sanad</p>
    </div>
    <div class="header-time">
      <span class="time-badge">\u{1F7E2} En ligne</span>
    </div>
  </div>

  <!-- Loading State -->
  <div *ngIf="loading" class="loading-state">
    <div class="spinner"></div>
    <p>Chargement des statistiques...</p>
  </div>

  <!-- Error State -->
  <div *ngIf="error && !loading" class="error-banner">
    <span>\u26A0\uFE0F {{ error }}</span>
  </div>

  <!-- Stats Grid -->
  <div *ngIf="stats && !loading" class="stats-grid">
    <!-- Pending Associations -->
    <div class="stat-card stat-card--warning">
      <div class="stat-card__icon">\u{1F3E2}</div>
      <div class="stat-card__content">
        <div class="stat-card__label">Associations en attente</div>
        <div class="stat-card__value">{{ stats.pending_associations }}</div>
        <div class="stat-card__sub">{{ stats.total_associations }} au total</div>
      </div>
      <a routerLink="/admin/associations" [queryParams]="{ status: 'pending' }" class="stat-card__action">
        V\xE9rifier \u2192
      </a>
    </div>

    <!-- Pending Requests -->
    <div class="stat-card stat-card--blue">
      <div class="stat-card__icon">\u{1F4CB}</div>
      <div class="stat-card__content">
        <div class="stat-card__label">Demandes en attente</div>
        <div class="stat-card__value">{{ stats.pending_requests }}</div>
        <div class="stat-card__sub">{{ stats.total_requests }} au total</div>
      </div>
      <a routerLink="/admin/requests" [queryParams]="{ status: 'paused' }" class="stat-card__action">
        Examiner \u2192
      </a>
    </div>

    <!-- Total Donations -->
    <div class="stat-card stat-card--green">
      <div class="stat-card__icon">\u{1F4B0}</div>
      <div class="stat-card__content">
        <div class="stat-card__label">Total des dons</div>
        <div class="stat-card__value">{{ formatAmount(stats.total_donations) }}</div>
        <div class="stat-card__sub">{{ stats.donations_count }} transactions</div>
      </div>
      <a routerLink="/admin/donations" class="stat-card__action">
        Surveiller \u2192
      </a>
    </div>

    <!-- Platform Overview -->
    <div class="stat-card stat-card--purple">
      <div class="stat-card__icon">\u{1F4C8}</div>
      <div class="stat-card__content">
        <div class="stat-card__label">Plateforme</div>
        <div class="stat-card__value">{{ stats.total_associations + stats.total_requests }}</div>
        <div class="stat-card__sub">Entit\xE9s g\xE9r\xE9es</div>
      </div>
      <a routerLink="/admin/associations" class="stat-card__action">
        G\xE9rer \u2192
      </a>
    </div>
  </div>

  <!-- Quick Navigation Section -->
  <div *ngIf="stats && !loading" class="quick-nav">
    <h2 class="section-title">Actions rapides</h2>
    <div class="quick-nav__grid">
      <a routerLink="/admin/associations" [queryParams]="{ status: 'pending' }" class="quick-card">
        <div class="quick-card__icon quick-card__icon--orange">\u{1F3E2}</div>
        <div class="quick-card__content">
          <div class="quick-card__title">Valider les associations</div>
          <div class="quick-card__desc">
            <span class="badge badge--orange">{{ stats.pending_associations }} en attente</span>
            Approuver ou rejeter les nouvelles inscriptions
          </div>
        </div>
        <div class="quick-card__arrow">\u2192</div>
      </a>

      <a routerLink="/admin/requests" class="quick-card">
        <div class="quick-card__icon quick-card__icon--blue">\u{1F4CB}</div>
        <div class="quick-card__content">
          <div class="quick-card__title">Mod\xE9rer les demandes</div>
          <div class="quick-card__desc">
            <span class="badge badge--blue">{{ stats.pending_requests }} en attente</span>
            Valider ou supprimer le contenu frauduleux
          </div>
        </div>
        <div class="quick-card__arrow">\u2192</div>
      </a>

      <a routerLink="/admin/donations" class="quick-card">
        <div class="quick-card__icon quick-card__icon--green">\u{1F4B0}</div>
        <div class="quick-card__content">
          <div class="quick-card__title">Surveiller les dons</div>
          <div class="quick-card__desc">
            <span class="badge badge--green">{{ stats.donations_count }} transactions</span>
            Analyser les flux de dons et d\xE9tecter les fraudes
          </div>
        </div>
        <div class="quick-card__arrow">\u2192</div>
      </a>
    </div>
  </div>

  <!-- Platform Trust Banner -->
  <div *ngIf="stats && !loading" class="trust-banner">
    <div class="trust-banner__icon">\u{1F6E1}\uFE0F</div>
    <div class="trust-banner__content">
      <strong>Gardien de confiance de la plateforme</strong>
      <p>En tant qu'administrateur, vous \xEAtes responsable de maintenir la transparence, la s\xE9curit\xE9 et la validit\xE9 de toutes les donn\xE9es sur Sanad.</p>
    </div>
  </div>
</div>
`, styles: ['/* src/app/admin/admin-dashboard/admin-dashboard.component.css */\n.admin-page {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 40px 24px 80px;\n}\n.admin-page__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 40px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.admin-page__title {\n  font-family: var(--font-heading);\n  font-size: 32px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.admin-page__subtitle {\n  font-size: 15px;\n  color: var(--gray-500);\n  margin: 0;\n}\n.header-time {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.time-badge {\n  font-size: 13px;\n  font-weight: 600;\n  background: rgba(34, 197, 94, 0.12);\n  color: #15803d;\n  padding: 8px 16px;\n  border-radius: 999px;\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n  color: var(--gray-500);\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--gray-200);\n  border-top-color: var(--blue-600);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-banner {\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: #b91c1c;\n  padding: 16px 20px;\n  border-radius: var(--radius-md);\n  margin-bottom: 24px;\n  font-weight: 500;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n  margin-bottom: 40px;\n}\n.stat-card {\n  background: #fff;\n  border-radius: 18px;\n  padding: 24px;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);\n  border: 1px solid rgba(15, 23, 42, 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  position: relative;\n  overflow: hidden;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);\n}\n.stat-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  border-radius: 18px 18px 0 0;\n}\n.stat-card--warning::before {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #fbbf24);\n}\n.stat-card--blue::before {\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #60a5fa);\n}\n.stat-card--green::before {\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #4ade80);\n}\n.stat-card--purple::before {\n  background:\n    linear-gradient(\n      90deg,\n      #8b5cf6,\n      #a78bfa);\n}\n.stat-card__icon {\n  font-size: 28px;\n  width: 52px;\n  height: 52px;\n  display: grid;\n  place-items: center;\n  border-radius: 14px;\n  background: var(--gray-100);\n}\n.stat-card--warning .stat-card__icon {\n  background: rgba(245, 158, 11, 0.12);\n}\n.stat-card--blue .stat-card__icon {\n  background: rgba(37, 99, 235, 0.1);\n}\n.stat-card--green .stat-card__icon {\n  background: rgba(34, 197, 94, 0.1);\n}\n.stat-card--purple .stat-card__icon {\n  background: rgba(139, 92, 246, 0.1);\n}\n.stat-card__label {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--gray-500);\n}\n.stat-card__value {\n  font-family: var(--font-heading);\n  font-size: 30px;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1;\n}\n.stat-card__sub {\n  font-size: 12px;\n  color: var(--gray-500);\n}\n.stat-card__action {\n  display: inline-flex;\n  align-items: center;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--blue-600);\n  text-decoration: none;\n  gap: 4px;\n  margin-top: auto;\n  transition: gap 0.2s;\n}\n.stat-card__action:hover {\n  gap: 8px;\n}\n.section-title {\n  font-family: var(--font-heading);\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 20px;\n}\n.quick-nav {\n  margin-bottom: 40px;\n}\n.quick-nav__grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.quick-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.06);\n  text-decoration: none;\n  color: inherit;\n  transition: transform 0.2s, box-shadow 0.2s;\n  cursor: pointer;\n}\n.quick-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);\n}\n.quick-card__icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.quick-card__icon--orange {\n  background: rgba(245, 158, 11, 0.12);\n}\n.quick-card__icon--blue {\n  background: rgba(37, 99, 235, 0.1);\n}\n.quick-card__icon--green {\n  background: rgba(34, 197, 94, 0.1);\n}\n.quick-card__content {\n  flex: 1;\n  min-width: 0;\n}\n.quick-card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 6px;\n}\n.quick-card__desc {\n  font-size: 13px;\n  color: var(--gray-500);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 999px;\n}\n.badge--orange {\n  background: rgba(245, 158, 11, 0.15);\n  color: #92400e;\n}\n.badge--blue {\n  background: rgba(37, 99, 235, 0.12);\n  color: #1d4ed8;\n}\n.badge--green {\n  background: rgba(34, 197, 94, 0.12);\n  color: #166534;\n}\n.badge--red {\n  background: rgba(239, 68, 68, 0.12);\n  color: #b91c1c;\n}\n.quick-card__arrow {\n  font-size: 18px;\n  color: var(--gray-500);\n  transition: transform 0.2s, color 0.2s;\n  flex-shrink: 0;\n}\n.quick-card:hover .quick-card__arrow {\n  transform: translateX(4px);\n  color: var(--blue-600);\n}\n.trust-banner {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #eef2ff 0%,\n      #f0fdf4 100%);\n  border: 1px solid rgba(37, 99, 235, 0.15);\n  border-radius: 16px;\n  padding: 24px 28px;\n}\n.trust-banner__icon {\n  font-size: 36px;\n  flex-shrink: 0;\n}\n.trust-banner__content strong {\n  display: block;\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 6px;\n}\n.trust-banner__content p {\n  font-size: 14px;\n  color: var(--gray-500);\n  margin: 0;\n  line-height: 1.6;\n}\n@media (max-width: 1100px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .stats-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .quick-nav__grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  .admin-page {\n    padding: 24px 16px;\n  }\n  .admin-page__title {\n    font-size: 24px;\n  }\n  .stat-card__value {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "app/admin/admin-dashboard/admin-dashboard.component.ts", lineNumber: 15 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-YJIVL5DO.js.map
