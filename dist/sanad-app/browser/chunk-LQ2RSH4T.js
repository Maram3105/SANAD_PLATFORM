import {
  DefaultValueAccessor,
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
  ActivatedRoute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  NgForOf,
  NgIf,
  RouterLink,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BNXH775N.js";

// src/app/admin/admin-associations/admin-associations.component.ts
function AdminAssociationsComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.associations.length, " r\xE9sultat(s)");
  }
}
function AdminAssociationsComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.pendingCount, " en attente");
  }
}
function AdminAssociationsComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function AdminAssociationsComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r0.error);
  }
}
function AdminAssociationsComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "div", 28);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement des associations...");
    \u0275\u0275elementEnd()();
  }
}
function AdminAssociationsComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275text(2, "\u{1F3E2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucune association trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Modifiez vos filtres pour afficher d'autres r\xE9sultats.");
    \u0275\u0275elementEnd()();
  }
}
function AdminAssociationsComponent_div_34_tr_21_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "\u2713 V\xE9rifi\xE9");
    \u0275\u0275elementEnd();
  }
}
function AdminAssociationsComponent_div_34_tr_21_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const assoc_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(assoc_r2.category_name);
  }
}
function AdminAssociationsComponent_div_34_tr_21_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminAssociationsComponent_div_34_tr_21_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function AdminAssociationsComponent_div_34_tr_21_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const assoc_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.approve(assoc_r2));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Approuver ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.processingId !== null);
  }
}
function AdminAssociationsComponent_div_34_tr_21_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function AdminAssociationsComponent_div_34_tr_21_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const assoc_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.reject(assoc_r2));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Rejeter ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.processingId !== null);
  }
}
function AdminAssociationsComponent_div_34_tr_21_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1, "Approuv\xE9e \u2713");
    \u0275\u0275elementEnd();
  }
}
function AdminAssociationsComponent_div_34_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 34)(3, "div", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 36)(6, "span", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AdminAssociationsComponent_div_34_tr_21_span_8_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "div", 40)(13, "span", 41);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 42);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "td", 39);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275template(20, AdminAssociationsComponent_div_34_tr_21_span_20_Template, 2, 1, "span", 43)(21, AdminAssociationsComponent_div_34_tr_21_span_21_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 39);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "span", 45);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td")(29, "div", 46);
    \u0275\u0275template(30, AdminAssociationsComponent_div_34_tr_21_button_30_Template, 4, 1, "button", 47)(31, AdminAssociationsComponent_div_34_tr_21_button_31_Template, 4, 1, "button", 48)(32, AdminAssociationsComponent_div_34_tr_21_span_32_Template, 2, 0, "span", 49);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const assoc_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row--processing", ctx_r0.processingId === assoc_r2.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(assoc_r2.organization_name.charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(assoc_r2.organization_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", assoc_r2.verified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(assoc_r2.responsible_name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(assoc_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(assoc_r2.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", assoc_r2.location);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", assoc_r2.category_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !assoc_r2.category_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 18, assoc_r2.created_at, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap("status-badge--" + assoc_r2.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(assoc_r2.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", assoc_r2.status !== "approved");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", assoc_r2.status !== "rejected");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", assoc_r2.status === "approved");
  }
}
function AdminAssociationsComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "table", 32)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Organisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Responsable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Localisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Date d'inscription");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, AdminAssociationsComponent_div_34_tr_21_Template, 33, 21, "tr", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r0.associations)("ngForTrackBy", ctx_r0.trackById);
  }
}
var AdminAssociationsComponent = class _AdminAssociationsComponent {
  adminService = inject(AdminService);
  cdr = inject(ChangeDetectorRef);
  route = inject(ActivatedRoute);
  associations = [];
  loading = true;
  error = "";
  successMessage = "";
  processingId = null;
  // Filters
  searchQuery = "";
  statusFilter = "";
  total = 0;
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params["status"]) {
        this.statusFilter = params["status"];
      }
      this.loadAssociations();
    });
  }
  loadAssociations() {
    this.loading = true;
    this.error = "";
    this.adminService.getAssociations({
      search: this.searchQuery,
      status: this.statusFilter,
      limit: 100,
      offset: 0
    }).subscribe({
      next: (res) => {
        if (res.success) {
          this.associations = res.data;
          this.total = res.pagination.total;
        } else {
          this.error = "Impossible de charger les associations.";
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
  onSearch() {
    this.loadAssociations();
  }
  onFilterChange() {
    this.loadAssociations();
  }
  approve(association) {
    if (this.processingId !== null)
      return;
    this.processingId = association.id;
    this.adminService.updateAssociation(association.id, "approve").subscribe({
      next: (res) => {
        if (res.success) {
          association.status = "approved";
          association.verified = true;
          this.showSuccess(`\u2705 ${association.organization_name} approuv\xE9e avec succ\xE8s.`);
        } else {
          this.error = res.message;
        }
        this.processingId = null;
        this.cdr.markForCheck();
      },
      error: () => {
        this.error = "Erreur lors de l'approbation.";
        this.processingId = null;
        this.cdr.markForCheck();
      }
    });
  }
  reject(association) {
    if (this.processingId !== null)
      return;
    if (!confirm(`Rejeter l'association "${association.organization_name}" ?`))
      return;
    this.processingId = association.id;
    this.adminService.updateAssociation(association.id, "reject").subscribe({
      next: (res) => {
        if (res.success) {
          association.status = "rejected";
          association.verified = false;
          this.showSuccess(`\u274C ${association.organization_name} rejet\xE9e.`);
        } else {
          this.error = res.message;
        }
        this.processingId = null;
        this.cdr.markForCheck();
      },
      error: () => {
        this.error = "Erreur lors du rejet.";
        this.processingId = null;
        this.cdr.markForCheck();
      }
    });
  }
  showSuccess(msg) {
    this.successMessage = msg;
    setTimeout(() => {
      this.successMessage = "";
      this.cdr.markForCheck();
    }, 4e3);
  }
  getStatusLabel(status) {
    const labels = {
      pending: "En attente",
      approved: "Approuv\xE9e",
      rejected: "Rejet\xE9e"
    };
    return labels[status] ?? status;
  }
  get pendingCount() {
    return this.associations.filter((a) => a.status === "pending").length;
  }
  trackById(_, item) {
    return item.id;
  }
  static \u0275fac = function AdminAssociationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminAssociationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminAssociationsComponent, selectors: [["app-admin-associations"]], decls: 35, vars: 9, consts: [[1, "admin-page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["routerLink", "/admin-dashboard", 1, "back-link"], [1, "filters-bar"], [1, "search-wrapper"], [1, "search-icon"], ["id", "assoc-search", "type", "text", "placeholder", "Rechercher par nom, email, ville...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [1, "filter-group"], ["for", "status-filter", 1, "filter-label"], ["id", "status-filter", 1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "pending"], ["value", "approved"], ["value", "rejected"], [1, "results-count"], [4, "ngIf"], ["class", "pending-badge", 4, "ngIf"], ["class", "alert alert--success", 4, "ngIf"], ["class", "alert alert--error", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], [1, "pending-badge"], [1, "alert", "alert--success"], [1, "alert", "alert--error"], [1, "loading-state"], [1, "spinner"], [1, "empty-state"], [1, "empty-state__icon"], [1, "table-wrapper"], [1, "admin-table"], [3, "row--processing", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "org-cell"], [1, "org-avatar"], [1, "org-info"], [1, "org-name"], ["class", "verified-mark", 4, "ngIf"], [1, "cell-secondary"], [1, "contact-cell"], [1, "contact-email"], [1, "contact-phone"], ["class", "category-tag", 4, "ngIf"], ["class", "cell-empty", 4, "ngIf"], [1, "status-badge"], [1, "action-buttons"], ["class", "action-btn action-btn--approve", "title", "Approuver", 3, "disabled", "click", 4, "ngIf"], ["class", "action-btn action-btn--reject", "title", "Rejeter", 3, "disabled", "click", 4, "ngIf"], ["class", "approved-label", 4, "ngIf"], [1, "verified-mark"], [1, "category-tag"], [1, "cell-empty"], ["title", "Approuver", 1, "action-btn", "action-btn--approve", 3, "click", "disabled"], ["title", "Rejeter", 1, "action-btn", "action-btn--reject", 3, "click", "disabled"], [1, "approved-label"]], template: function AdminAssociationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-admin-navbar");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
      \u0275\u0275text(5, "Gestion des associations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, " Validez, approuvez ou rejetez les demandes d'inscription des associations ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 4);
      \u0275\u0275text(9, "\u2190 Tableau de bord");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "span", 7);
      \u0275\u0275text(13, "\u{1F50D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function AdminAssociationsComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("input", function AdminAssociationsComponent_Template_input_input_14_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 9)(16, "label", 10);
      \u0275\u0275text(17, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function AdminAssociationsComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AdminAssociationsComponent_Template_select_change_18_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(19, "option", 12);
      \u0275\u0275text(20, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 13);
      \u0275\u0275text(22, "En attente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 14);
      \u0275\u0275text(24, "Approuv\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 15);
      \u0275\u0275text(26, "Rejet\xE9es");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 16);
      \u0275\u0275template(28, AdminAssociationsComponent_span_28_Template, 2, 1, "span", 17)(29, AdminAssociationsComponent_span_29_Template, 2, 1, "span", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(30, AdminAssociationsComponent_div_30_Template, 2, 1, "div", 19)(31, AdminAssociationsComponent_div_31_Template, 2, 1, "div", 20)(32, AdminAssociationsComponent_div_32_Template, 4, 0, "div", 21)(33, AdminAssociationsComponent_div_33_Template, 7, 0, "div", 22)(34, AdminAssociationsComponent_div_34_Template, 22, 2, "div", 23);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pendingCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.associations.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.associations.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, AdminNavbarComponent, DatePipe], styles: ["\n.admin-page[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 40px 24px 80px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 32px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 28px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-500);\n  margin: 0;\n}\n.back-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--blue-600);\n  text-decoration: none;\n  padding: 8px 16px;\n  background: rgba(37, 99, 235, 0.08);\n  border-radius: 8px;\n  transition: background 0.2s;\n  white-space: nowrap;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.14);\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  background: #fff;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 14px;\n  padding: 16px 20px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 15px;\n  pointer-events: none;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px 10px 38px;\n  border-radius: 10px;\n  border: 1px solid var(--gray-200);\n  font-size: 14px;\n  font-family: var(--font-body);\n  transition: border 0.2s, box-shadow 0.2s;\n  background: var(--gray-100);\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--blue-600);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  background: #fff;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--gray-700);\n  white-space: nowrap;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 1px solid var(--gray-200);\n  font-size: 13px;\n  font-family: var(--font-body);\n  background: var(--gray-100);\n  cursor: pointer;\n  transition: border 0.2s;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--blue-600);\n}\n.results-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 13px;\n  color: var(--gray-500);\n  white-space: nowrap;\n}\n.pending-badge[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #92400e;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  font-weight: 500;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.alert--success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #166534;\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n.alert--error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n  color: #b91c1c;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n  color: var(--gray-500);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--gray-200);\n  border-top-color: var(--blue-600);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 24px;\n  color: var(--gray-500);\n}\n.empty-state__icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  box-shadow: 0 2px 16px rgba(15, 23, 42, 0.06);\n  overflow-x: auto;\n}\n.admin-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.admin-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--gray-500);\n  background: #f8fafc;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  white-space: nowrap;\n}\n.admin-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(15, 23, 42, 0.05);\n  transition: background 0.15s;\n}\n.admin-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.admin-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.admin-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row--processing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.admin-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  vertical-align: middle;\n}\n.org-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.org-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a8a,\n      #2563eb);\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.org-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.org-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  white-space: nowrap;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.verified-mark[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #16a34a;\n  font-weight: 600;\n}\n.cell-secondary[_ngcontent-%COMP%] {\n  color: var(--gray-500);\n}\n.contact-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.contact-email[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #0f172a;\n}\n.contact-phone[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--gray-500);\n}\n.category-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: rgba(37, 99, 235, 0.1);\n  color: #1d4ed8;\n}\n.cell-empty[_ngcontent-%COMP%] {\n  color: var(--gray-200);\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 5px 12px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.status-badge--pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #92400e;\n}\n.status-badge--approved[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #166534;\n}\n.status-badge--rejected[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: nowrap;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  border: none;\n  font-size: 12px;\n  font-weight: 700;\n  font-family: var(--font-body);\n  cursor: pointer;\n  transition: opacity 0.2s, transform 0.2s;\n  white-space: nowrap;\n}\n.action-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n}\n.action-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.action-btn--approve[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #166534;\n  border: 1px solid rgba(34, 197, 94, 0.25);\n}\n.action-btn--approve[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #22c55e;\n  color: #fff;\n}\n.action-btn--reject[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n.action-btn--reject[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ef4444;\n  color: #fff;\n}\n.approved-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #16a34a;\n}\n@media (max-width: 768px) {\n  .filters-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .admin-page[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=admin-associations.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminAssociationsComponent, [{
    type: Component,
    args: [{ selector: "app-admin-associations", standalone: true, imports: [CommonModule, FormsModule, RouterLink, AdminNavbarComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-admin-navbar></app-admin-navbar>

<div class="admin-page">
  <!-- Page Header -->
  <div class="page-header">
    <div>
      <h1 class="page-title">Gestion des associations</h1>
      <p class="page-subtitle">
        Validez, approuvez ou rejetez les demandes d'inscription des associations
      </p>
    </div>
    <a routerLink="/admin-dashboard" class="back-link">\u2190 Tableau de bord</a>
  </div>

  <!-- Filters & Search -->
  <div class="filters-bar">
    <div class="search-wrapper">
      <span class="search-icon">\u{1F50D}</span>
      <input
        id="assoc-search"
        class="search-input"
        type="text"
        placeholder="Rechercher par nom, email, ville..."
        [(ngModel)]="searchQuery"
        (input)="onSearch()"
      />
    </div>

    <div class="filter-group">
      <label class="filter-label" for="status-filter">Statut</label>
      <select id="status-filter" class="filter-select" [(ngModel)]="statusFilter" (change)="onFilterChange()">
        <option value="">Tous</option>
        <option value="pending">En attente</option>
        <option value="approved">Approuv\xE9es</option>
        <option value="rejected">Rejet\xE9es</option>
      </select>
    </div>

    <div class="results-count">
      <span *ngIf="!loading">{{ associations.length }} r\xE9sultat(s)</span>
      <span *ngIf="pendingCount > 0" class="pending-badge">{{ pendingCount }} en attente</span>
    </div>
  </div>

  <!-- Success / Error Messages -->
  <div *ngIf="successMessage" class="alert alert--success">{{ successMessage }}</div>
  <div *ngIf="error && !loading" class="alert alert--error">\u26A0\uFE0F {{ error }}</div>

  <!-- Loading -->
  <div *ngIf="loading" class="loading-state">
    <div class="spinner"></div>
    <p>Chargement des associations...</p>
  </div>

  <!-- Empty State -->
  <div *ngIf="!loading && associations.length === 0" class="empty-state">
    <div class="empty-state__icon">\u{1F3E2}</div>
    <h3>Aucune association trouv\xE9e</h3>
    <p>Modifiez vos filtres pour afficher d'autres r\xE9sultats.</p>
  </div>

  <!-- Table -->
  <div *ngIf="!loading && associations.length > 0" class="table-wrapper">
    <table class="admin-table">
      <thead>
        <tr>
          <th>Organisation</th>
          <th>Responsable</th>
          <th>Contact</th>
          <th>Localisation</th>
          <th>Cat\xE9gorie</th>
          <th>Date d'inscription</th>
          <th>Statut</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let assoc of associations; trackBy: trackById" [class.row--processing]="processingId === assoc.id">
          <td>
            <div class="org-cell">
              <div class="org-avatar">{{ assoc.organization_name.charAt(0).toUpperCase() }}</div>
              <div class="org-info">
                <span class="org-name">{{ assoc.organization_name }}</span>
                <span *ngIf="assoc.verified" class="verified-mark">\u2713 V\xE9rifi\xE9</span>
              </div>
            </div>
          </td>
          <td class="cell-secondary">{{ assoc.responsible_name }}</td>
          <td>
            <div class="contact-cell">
              <span class="contact-email">{{ assoc.email }}</span>
              <span class="contact-phone">{{ assoc.phone }}</span>
            </div>
          </td>
          <td class="cell-secondary">\u{1F4CD} {{ assoc.location }}</td>
          <td>
            <span class="category-tag" *ngIf="assoc.category_name">{{ assoc.category_name }}</span>
            <span class="cell-empty" *ngIf="!assoc.category_name">\u2014</span>
          </td>
          <td class="cell-secondary">{{ assoc.created_at | date: 'dd/MM/yyyy' }}</td>
          <td>
            <span class="status-badge" [class]="'status-badge--' + assoc.status">
              {{ getStatusLabel(assoc.status) }}
            </span>
          </td>
          <td>
            <div class="action-buttons">
              <button
                *ngIf="assoc.status !== 'approved'"
                class="action-btn action-btn--approve"
                [disabled]="processingId !== null"
                (click)="approve(assoc)"
                title="Approuver"
              >
                <span>\u2713</span> Approuver
              </button>
              <button
                *ngIf="assoc.status !== 'rejected'"
                class="action-btn action-btn--reject"
                [disabled]="processingId !== null"
                (click)="reject(assoc)"
                title="Rejeter"
              >
                <span>\u2715</span> Rejeter
              </button>
              <span *ngIf="assoc.status === 'approved'" class="approved-label">Approuv\xE9e \u2713</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`, styles: ["/* src/app/admin/admin-associations/admin-associations.component.css */\n.admin-page {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 40px 24px 80px;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 32px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title {\n  font-family: var(--font-heading);\n  font-size: 28px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.page-subtitle {\n  font-size: 14px;\n  color: var(--gray-500);\n  margin: 0;\n}\n.back-link {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--blue-600);\n  text-decoration: none;\n  padding: 8px 16px;\n  background: rgba(37, 99, 235, 0.08);\n  border-radius: 8px;\n  transition: background 0.2s;\n  white-space: nowrap;\n}\n.back-link:hover {\n  background: rgba(37, 99, 235, 0.14);\n}\n.filters-bar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  background: #fff;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 14px;\n  padding: 16px 20px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);\n}\n.search-wrapper {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 15px;\n  pointer-events: none;\n}\n.search-input {\n  width: 100%;\n  padding: 10px 14px 10px 38px;\n  border-radius: 10px;\n  border: 1px solid var(--gray-200);\n  font-size: 14px;\n  font-family: var(--font-body);\n  transition: border 0.2s, box-shadow 0.2s;\n  background: var(--gray-100);\n}\n.search-input:focus {\n  outline: none;\n  border-color: var(--blue-600);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  background: #fff;\n}\n.filter-group {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.filter-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--gray-700);\n  white-space: nowrap;\n}\n.filter-select {\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 1px solid var(--gray-200);\n  font-size: 13px;\n  font-family: var(--font-body);\n  background: var(--gray-100);\n  cursor: pointer;\n  transition: border 0.2s;\n}\n.filter-select:focus {\n  outline: none;\n  border-color: var(--blue-600);\n}\n.results-count {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 13px;\n  color: var(--gray-500);\n  white-space: nowrap;\n}\n.pending-badge {\n  background: rgba(245, 158, 11, 0.15);\n  color: #92400e;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.alert {\n  padding: 14px 18px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  font-weight: 500;\n  animation: fadeIn 0.3s ease;\n}\n.alert--success {\n  background: rgba(34, 197, 94, 0.1);\n  color: #166534;\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n.alert--error {\n  background: rgba(239, 68, 68, 0.08);\n  color: #b91c1c;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n  color: var(--gray-500);\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--gray-200);\n  border-top-color: var(--blue-600);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 80px 24px;\n  color: var(--gray-500);\n}\n.empty-state__icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.empty-state h3 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.table-wrapper {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  box-shadow: 0 2px 16px rgba(15, 23, 42, 0.06);\n  overflow-x: auto;\n}\n.admin-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.admin-table thead th {\n  padding: 14px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--gray-500);\n  background: #f8fafc;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  white-space: nowrap;\n}\n.admin-table tbody tr {\n  border-bottom: 1px solid rgba(15, 23, 42, 0.05);\n  transition: background 0.15s;\n}\n.admin-table tbody tr:last-child {\n  border-bottom: none;\n}\n.admin-table tbody tr:hover {\n  background: #f8fafc;\n}\n.admin-table tbody tr.row--processing {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.admin-table td {\n  padding: 14px 16px;\n  vertical-align: middle;\n}\n.org-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.org-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a8a,\n      #2563eb);\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.org-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.org-name {\n  font-weight: 600;\n  color: #0f172a;\n  white-space: nowrap;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.verified-mark {\n  font-size: 11px;\n  color: #16a34a;\n  font-weight: 600;\n}\n.cell-secondary {\n  color: var(--gray-500);\n}\n.contact-cell {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.contact-email {\n  font-size: 13px;\n  color: #0f172a;\n}\n.contact-phone {\n  font-size: 12px;\n  color: var(--gray-500);\n}\n.category-tag {\n  display: inline-flex;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: rgba(37, 99, 235, 0.1);\n  color: #1d4ed8;\n}\n.cell-empty {\n  color: var(--gray-200);\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 5px 12px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.status-badge--pending {\n  background: rgba(245, 158, 11, 0.15);\n  color: #92400e;\n}\n.status-badge--approved {\n  background: rgba(34, 197, 94, 0.12);\n  color: #166534;\n}\n.status-badge--rejected {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n}\n.action-buttons {\n  display: flex;\n  gap: 8px;\n  flex-wrap: nowrap;\n}\n.action-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  border: none;\n  font-size: 12px;\n  font-weight: 700;\n  font-family: var(--font-body);\n  cursor: pointer;\n  transition: opacity 0.2s, transform 0.2s;\n  white-space: nowrap;\n}\n.action-btn:hover:not(:disabled) {\n  transform: translateY(-1px);\n}\n.action-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.action-btn--approve {\n  background: rgba(34, 197, 94, 0.12);\n  color: #166534;\n  border: 1px solid rgba(34, 197, 94, 0.25);\n}\n.action-btn--approve:hover:not(:disabled) {\n  background: #22c55e;\n  color: #fff;\n}\n.action-btn--reject {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n.action-btn--reject:hover:not(:disabled) {\n  background: #ef4444;\n  color: #fff;\n}\n.approved-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #16a34a;\n}\n@media (max-width: 768px) {\n  .filters-bar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .admin-page {\n    padding: 24px 16px;\n  }\n  .page-title {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=admin-associations.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminAssociationsComponent, { className: "AdminAssociationsComponent", filePath: "app/admin/admin-associations/admin-associations.component.ts", lineNumber: 16 });
})();
export {
  AdminAssociationsComponent
};
//# sourceMappingURL=chunk-LQ2RSH4T.js.map
