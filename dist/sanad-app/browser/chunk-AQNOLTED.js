import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-VFFHWYMA.js";
import {
  AdminNavbarComponent,
  AdminService
} from "./chunk-7DYU3VUS.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  RouterLink,
  SlicePipe,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BNXH775N.js";

// src/app/admin/admin-donations/admin-donations.component.ts
function AdminDonationsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "span", 22);
    \u0275\u0275text(3, "\u{1F4B0} Total collect\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 21)(8, "span", 22);
    \u0275\u0275text(9, "\u2705 Dons compl\xE9t\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 21)(13, "span", 22);
    \u0275\u0275text(14, "\u{1F4CA} Total affich\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 23);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 3, ctx_r0.totalAmount, "1.0-0"), " TND");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.completedCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.donations.length);
  }
}
function AdminDonationsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.donations.length, " transaction(s)");
  }
}
function AdminDonationsComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r0.error);
  }
}
function AdminDonationsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "div", 27);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement des transactions...");
    \u0275\u0275elementEnd()();
  }
}
function AdminDonationsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275text(2, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucune transaction trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Modifiez le filtre pour afficher d'autres r\xE9sultats.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDonationsComponent_div_30_tr_21_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const donation_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(donation_r2.donor_email);
  }
}
function AdminDonationsComponent_div_30_tr_21_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const donation_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", donation_r2.request_title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(2, 3, donation_r2.request_title, 0, 30), "", donation_r2.request_title.length > 30 ? "\u2026" : "", " ");
  }
}
function AdminDonationsComponent_div_30_tr_21_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "Don direct");
    \u0275\u0275elementEnd();
  }
}
function AdminDonationsComponent_div_30_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 34)(5, "span", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminDonationsComponent_div_30_tr_21_span_7_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 37);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 38);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 39);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275template(17, AdminDonationsComponent_div_30_tr_21_span_17_Template, 3, 7, "span", 40)(18, AdminDonationsComponent_div_30_tr_21_span_18_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 39);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 39);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "span", 42);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const donation_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", donation_r2.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getDonorDisplay(donation_r2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !donation_r2.anonymous && donation_r2.donor_email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 13, donation_r2.amount, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", donation_r2.currency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(donation_r2.organization_name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", donation_r2.request_title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !donation_r2.request_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(donation_r2.payment_method || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 16, donation_r2.created_at, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap("status-badge--" + donation_r2.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(donation_r2.status), " ");
  }
}
function AdminDonationsComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "table", 31)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Donateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Montant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Association");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Demande li\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "M\xE9thode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, AdminDonationsComponent_div_30_tr_21_Template, 27, 19, "tr", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r0.donations)("ngForTrackBy", ctx_r0.trackById);
  }
}
var AdminDonationsComponent = class _AdminDonationsComponent {
  adminService = inject(AdminService);
  cdr = inject(ChangeDetectorRef);
  donations = [];
  loading = true;
  error = "";
  statusFilter = "";
  total = 0;
  get totalAmount() {
    return this.donations.filter((d) => d.status === "completed").reduce((s, d) => s + Number(d.amount), 0);
  }
  get completedCount() {
    return this.donations.filter((d) => d.status === "completed").length;
  }
  ngOnInit() {
    this.loadDonations();
  }
  loadDonations() {
    this.loading = true;
    this.error = "";
    this.adminService.getDonations({
      status: this.statusFilter,
      limit: 100,
      offset: 0
    }).subscribe({
      next: (res) => {
        if (res.success) {
          this.donations = res.data;
          this.total = res.pagination.total;
        } else {
          this.error = "Impossible de charger les dons.";
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
  onFilterChange() {
    this.loadDonations();
  }
  getDonorDisplay(donation) {
    if (donation.anonymous)
      return "\u{1F512} Anonyme";
    return donation.donor_name || donation.donor_email || "Inconnu";
  }
  getStatusLabel(status) {
    const labels = {
      pending: "En attente",
      completed: "Compl\xE9t\xE9",
      failed: "\xC9chou\xE9",
      refunded: "Rembours\xE9"
    };
    return labels[status] ?? status;
  }
  trackById(_, item) {
    return item.id;
  }
  static \u0275fac = function AdminDonationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDonationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDonationsComponent, selectors: [["app-admin-donations"]], decls: 31, vars: 7, consts: [[1, "admin-page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["routerLink", "/admin-dashboard", 1, "back-link"], ["class", "summary-row", 4, "ngIf"], [1, "filters-bar"], [1, "filter-group"], ["for", "don-status-filter", 1, "filter-label"], ["id", "don-status-filter", 1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "completed"], ["value", "pending"], ["value", "failed"], ["value", "refunded"], ["class", "results-count", 4, "ngIf"], ["class", "alert alert--error", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], [1, "summary-row"], [1, "summary-card"], [1, "summary-label"], [1, "summary-value"], [1, "results-count"], [1, "alert", "alert--error"], [1, "loading-state"], [1, "spinner"], [1, "empty-state"], [1, "empty-state__icon"], [1, "table-wrapper"], [1, "admin-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cell-id"], [1, "donor-cell"], [1, "donor-name"], ["class", "donor-email", 4, "ngIf"], [1, "amount-value"], [1, "amount-currency"], [1, "cell-secondary"], ["class", "request-ref", 3, "title", 4, "ngIf"], ["class", "cell-empty", 4, "ngIf"], [1, "status-badge"], [1, "donor-email"], [1, "request-ref", 3, "title"], [1, "cell-empty"]], template: function AdminDonationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-admin-navbar");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
      \u0275\u0275text(5, "Surveillance des dons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Analysez les transactions et d\xE9tectez les activit\xE9s frauduleuses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 4);
      \u0275\u0275text(9, "\u2190 Tableau de bord");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, AdminDonationsComponent_div_10_Template, 17, 6, "div", 5);
      \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "label", 8);
      \u0275\u0275text(14, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function AdminDonationsComponent_Template_select_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AdminDonationsComponent_Template_select_change_15_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(16, "option", 10);
      \u0275\u0275text(17, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 11);
      \u0275\u0275text(19, "Compl\xE9t\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 12);
      \u0275\u0275text(21, "En attente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 13);
      \u0275\u0275text(23, "\xC9chou\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 14);
      \u0275\u0275text(25, "Rembours\xE9s");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(26, AdminDonationsComponent_div_26_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(27, AdminDonationsComponent_div_27_Template, 2, 1, "div", 16)(28, AdminDonationsComponent_div_28_Template, 4, 0, "div", 17)(29, AdminDonationsComponent_div_29_Template, 7, 0, "div", 18)(30, AdminDonationsComponent_div_30_Template, 22, 2, "div", 19);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.donations.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.donations.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, AdminNavbarComponent, SlicePipe, DecimalPipe, DatePipe], styles: ["\n.admin-page[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 40px 24px 80px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 32px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 28px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-500);\n  margin: 0;\n}\n.back-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--blue-600);\n  text-decoration: none;\n  padding: 8px 16px;\n  background: rgba(37, 99, 235, 0.08);\n  border-radius: 8px;\n  transition: background 0.2s;\n  white-space: nowrap;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.14);\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 20px 24px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.summary-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--gray-500);\n}\n.summary-value[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 24px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  background: #fff;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 14px;\n  padding: 16px 20px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--gray-700);\n  white-space: nowrap;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 1px solid var(--gray-200);\n  font-size: 13px;\n  font-family: var(--font-body);\n  background: var(--gray-100);\n  cursor: pointer;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--blue-600);\n}\n.results-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--gray-500);\n  margin-left: auto;\n}\n.alert--error[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  font-weight: 500;\n  background: rgba(239, 68, 68, 0.08);\n  color: #b91c1c;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n  color: var(--gray-500);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--gray-200);\n  border-top-color: var(--blue-600);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 24px;\n  color: var(--gray-500);\n}\n.empty-state__icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  box-shadow: 0 2px 16px rgba(15, 23, 42, 0.06);\n  overflow-x: auto;\n}\n.admin-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.admin-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--gray-500);\n  background: #f8fafc;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  white-space: nowrap;\n}\n.admin-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(15, 23, 42, 0.05);\n  transition: background 0.15s;\n}\n.admin-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.admin-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.admin-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  vertical-align: middle;\n}\n.cell-id[_ngcontent-%COMP%] {\n  color: var(--gray-500);\n  font-size: 12px;\n  font-weight: 600;\n}\n.cell-secondary[_ngcontent-%COMP%] {\n  color: var(--gray-500);\n  font-size: 13px;\n}\n.cell-empty[_ngcontent-%COMP%] {\n  color: var(--gray-200);\n  font-size: 13px;\n}\n.donor-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.donor-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n}\n.donor-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--gray-500);\n}\n.amount-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n  font-size: 15px;\n}\n.amount-currency[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--gray-500);\n}\n.request-ref[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--blue-600);\n  font-weight: 500;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.status-badge--completed[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #166534;\n}\n.status-badge--pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #92400e;\n}\n.status-badge--failed[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n}\n.status-badge--refunded[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.1);\n  color: #6d28d9;\n}\n@media (max-width: 768px) {\n  .summary-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .admin-page[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n@media (max-width: 480px) {\n  .summary-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-donations.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDonationsComponent, [{
    type: Component,
    args: [{ selector: "app-admin-donations", standalone: true, imports: [CommonModule, FormsModule, RouterLink, AdminNavbarComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-admin-navbar></app-admin-navbar>

<div class="admin-page">
  <div class="page-header">
    <div>
      <h1 class="page-title">Surveillance des dons</h1>
      <p class="page-subtitle">Analysez les transactions et d\xE9tectez les activit\xE9s frauduleuses</p>
    </div>
    <a routerLink="/admin-dashboard" class="back-link">\u2190 Tableau de bord</a>
  </div>

  <!-- Summary Cards -->
  <div *ngIf="!loading" class="summary-row">
    <div class="summary-card">
      <span class="summary-label">\u{1F4B0} Total collect\xE9</span>
      <span class="summary-value">{{ totalAmount | number: '1.0-0' }} TND</span>
    </div>
    <div class="summary-card">
      <span class="summary-label">\u2705 Dons compl\xE9t\xE9s</span>
      <span class="summary-value">{{ completedCount }}</span>
    </div>
    <div class="summary-card">
      <span class="summary-label">\u{1F4CA} Total affich\xE9</span>
      <span class="summary-value">{{ donations.length }}</span>
    </div>
  </div>

  <!-- Filters -->
  <div class="filters-bar">
    <div class="filter-group">
      <label class="filter-label" for="don-status-filter">Statut</label>
      <select id="don-status-filter" class="filter-select" [(ngModel)]="statusFilter" (change)="onFilterChange()">
        <option value="">Tous</option>
        <option value="completed">Compl\xE9t\xE9s</option>
        <option value="pending">En attente</option>
        <option value="failed">\xC9chou\xE9s</option>
        <option value="refunded">Rembours\xE9s</option>
      </select>
    </div>
    <div class="results-count" *ngIf="!loading">{{ donations.length }} transaction(s)</div>
  </div>

  <div *ngIf="error && !loading" class="alert alert--error">\u26A0\uFE0F {{ error }}</div>

  <!-- Loading -->
  <div *ngIf="loading" class="loading-state">
    <div class="spinner"></div>
    <p>Chargement des transactions...</p>
  </div>

  <!-- Empty -->
  <div *ngIf="!loading && donations.length === 0" class="empty-state">
    <div class="empty-state__icon">\u{1F4B0}</div>
    <h3>Aucune transaction trouv\xE9e</h3>
    <p>Modifiez le filtre pour afficher d'autres r\xE9sultats.</p>
  </div>

  <!-- Table -->
  <div *ngIf="!loading && donations.length > 0" class="table-wrapper">
    <table class="admin-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Donateur</th>
          <th>Montant</th>
          <th>Association</th>
          <th>Demande li\xE9e</th>
          <th>M\xE9thode</th>
          <th>Date</th>
          <th>Statut</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let donation of donations; trackBy: trackById">
          <td class="cell-id">#{{ donation.id }}</td>
          <td>
            <div class="donor-cell">
              <span class="donor-name">{{ getDonorDisplay(donation) }}</span>
              <span *ngIf="!donation.anonymous && donation.donor_email" class="donor-email">{{ donation.donor_email }}</span>
            </div>
          </td>
          <td>
            <span class="amount-value">{{ donation.amount | number: '1.0-0' }}</span>
            <span class="amount-currency"> {{ donation.currency }}</span>
          </td>
          <td class="cell-secondary">{{ donation.organization_name }}</td>
          <td>
            <span *ngIf="donation.request_title" class="request-ref" [title]="donation.request_title">
              {{ donation.request_title | slice: 0:30 }}{{ donation.request_title!.length > 30 ? '\u2026' : '' }}
            </span>
            <span *ngIf="!donation.request_title" class="cell-empty">Don direct</span>
          </td>
          <td class="cell-secondary">{{ donation.payment_method || '\u2014' }}</td>
          <td class="cell-secondary">{{ donation.created_at | date: 'dd/MM/yyyy' }}</td>
          <td>
            <span class="status-badge" [class]="'status-badge--' + donation.status">
              {{ getStatusLabel(donation.status) }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`, styles: ["/* src/app/admin/admin-donations/admin-donations.component.css */\n.admin-page {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 40px 24px 80px;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 32px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title {\n  font-family: var(--font-heading);\n  font-size: 28px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.page-subtitle {\n  font-size: 14px;\n  color: var(--gray-500);\n  margin: 0;\n}\n.back-link {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--blue-600);\n  text-decoration: none;\n  padding: 8px 16px;\n  background: rgba(37, 99, 235, 0.08);\n  border-radius: 8px;\n  transition: background 0.2s;\n  white-space: nowrap;\n}\n.back-link:hover {\n  background: rgba(37, 99, 235, 0.14);\n}\n.summary-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.summary-card {\n  background: #fff;\n  border-radius: 14px;\n  padding: 20px 24px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.summary-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--gray-500);\n}\n.summary-value {\n  font-family: var(--font-heading);\n  font-size: 24px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.filters-bar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  background: #fff;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 14px;\n  padding: 16px 20px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);\n}\n.filter-group {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filter-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--gray-700);\n  white-space: nowrap;\n}\n.filter-select {\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 1px solid var(--gray-200);\n  font-size: 13px;\n  font-family: var(--font-body);\n  background: var(--gray-100);\n  cursor: pointer;\n}\n.filter-select:focus {\n  outline: none;\n  border-color: var(--blue-600);\n}\n.results-count {\n  font-size: 13px;\n  color: var(--gray-500);\n  margin-left: auto;\n}\n.alert--error {\n  padding: 14px 18px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  font-weight: 500;\n  background: rgba(239, 68, 68, 0.08);\n  color: #b91c1c;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n  color: var(--gray-500);\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--gray-200);\n  border-top-color: var(--blue-600);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 80px 24px;\n  color: var(--gray-500);\n}\n.empty-state__icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.empty-state h3 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.table-wrapper {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  box-shadow: 0 2px 16px rgba(15, 23, 42, 0.06);\n  overflow-x: auto;\n}\n.admin-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.admin-table thead th {\n  padding: 14px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--gray-500);\n  background: #f8fafc;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  white-space: nowrap;\n}\n.admin-table tbody tr {\n  border-bottom: 1px solid rgba(15, 23, 42, 0.05);\n  transition: background 0.15s;\n}\n.admin-table tbody tr:last-child {\n  border-bottom: none;\n}\n.admin-table tbody tr:hover {\n  background: #f8fafc;\n}\n.admin-table td {\n  padding: 14px 16px;\n  vertical-align: middle;\n}\n.cell-id {\n  color: var(--gray-500);\n  font-size: 12px;\n  font-weight: 600;\n}\n.cell-secondary {\n  color: var(--gray-500);\n  font-size: 13px;\n}\n.cell-empty {\n  color: var(--gray-200);\n  font-size: 13px;\n}\n.donor-cell {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.donor-name {\n  font-weight: 600;\n  color: #0f172a;\n}\n.donor-email {\n  font-size: 12px;\n  color: var(--gray-500);\n}\n.amount-value {\n  font-weight: 700;\n  color: #0f172a;\n  font-size: 15px;\n}\n.amount-currency {\n  font-size: 12px;\n  color: var(--gray-500);\n}\n.request-ref {\n  font-size: 12px;\n  color: var(--blue-600);\n  font-weight: 500;\n}\n.status-badge {\n  display: inline-flex;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.status-badge--completed {\n  background: rgba(34, 197, 94, 0.12);\n  color: #166534;\n}\n.status-badge--pending {\n  background: rgba(245, 158, 11, 0.15);\n  color: #92400e;\n}\n.status-badge--failed {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n}\n.status-badge--refunded {\n  background: rgba(139, 92, 246, 0.1);\n  color: #6d28d9;\n}\n@media (max-width: 768px) {\n  .summary-row {\n    grid-template-columns: 1fr 1fr;\n  }\n  .admin-page {\n    padding: 24px 16px;\n  }\n  .page-title {\n    font-size: 22px;\n  }\n}\n@media (max-width: 480px) {\n  .summary-row {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-donations.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDonationsComponent, { className: "AdminDonationsComponent", filePath: "app/admin/admin-donations/admin-donations.component.ts", lineNumber: 16 });
})();
export {
  AdminDonationsComponent
};
//# sourceMappingURL=chunk-AQNOLTED.js.map
