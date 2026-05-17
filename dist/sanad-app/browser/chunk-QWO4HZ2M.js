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
  DecimalPipe,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BNXH775N.js";

// src/app/admin/admin-requests/admin-requests.component.ts
function AdminRequestsComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.requests.length, " r\xE9sultat(s)");
  }
}
function AdminRequestsComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function AdminRequestsComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r0.error);
  }
}
function AdminRequestsComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "div", 33);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement des demandes...");
    \u0275\u0275elementEnd()();
  }
}
function AdminRequestsComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucune demande trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Modifiez vos filtres pour afficher d'autres r\xE9sultats.");
    \u0275\u0275elementEnd()();
  }
}
function AdminRequestsComponent_div_47_tr_21_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const req_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(req_r3.category_name);
  }
}
function AdminRequestsComponent_div_47_tr_21_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function AdminRequestsComponent_div_47_tr_21_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const req_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.approve(req_r3));
    });
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.processingId !== null);
  }
}
function AdminRequestsComponent_div_47_tr_21_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function AdminRequestsComponent_div_47_tr_21_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const req_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.reject(req_r3));
    });
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.processingId !== null);
  }
}
function AdminRequestsComponent_div_47_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 39)(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminRequestsComponent_div_47_tr_21_span_5_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "div", 42)(8, "div", 43);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 44);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "td", 45);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 46);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "div", 47)(19, "div", 48);
    \u0275\u0275element(20, "div", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 50);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "td", 45);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td")(27, "span", 51);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "div", 52)(31, "button", 53);
    \u0275\u0275listener("click", function AdminRequestsComponent_div_47_tr_21_Template_button_click_31_listener() {
      const req_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewDetails(req_r3));
    });
    \u0275\u0275text(32, "\u{1F441}");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, AdminRequestsComponent_div_47_tr_21_button_33_Template, 2, 1, "button", 54)(34, AdminRequestsComponent_div_47_tr_21_button_34_Template, 2, 1, "button", 55);
    \u0275\u0275elementStart(35, "button", 56);
    \u0275\u0275listener("click", function AdminRequestsComponent_div_47_tr_21_Template_button_click_35_listener() {
      const req_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteRequest(req_r3));
    });
    \u0275\u0275text(36, "\u{1F5D1}");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const req_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row--processing", ctx_r0.processingId === req_r3.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(req_r3.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", req_r3.category_name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(req_r3.organization_name.charAt(0).toUpperCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r3.organization_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", req_r3.location);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("urgency-badge--" + req_r3.urgency);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getUrgencyLabel(req_r3.urgency), " ");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r0.getProgress(req_r3), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getProgress(req_r3), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 20, req_r3.created_at, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap("status-badge--" + req_r3.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(req_r3.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", req_r3.status !== "active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", req_r3.status === "active");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.processingId !== null);
  }
}
function AdminRequestsComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "table", 37)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Demande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Association");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Localisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Urgence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, AdminRequestsComponent_div_47_tr_21_Template, 37, 23, "tr", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r0.requests)("ngForTrackBy", ctx_r0.trackById);
  }
}
function AdminRequestsComponent_div_48_button_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function AdminRequestsComponent_div_48_button_62_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.approve(ctx_r0.selectedRequest);
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(1, "\u2713 Approuver");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.processingId !== null);
  }
}
function AdminRequestsComponent_div_48_button_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function AdminRequestsComponent_div_48_button_63_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.reject(ctx_r0.selectedRequest);
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(1, "\u2715 Rejeter");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.processingId !== null);
  }
}
function AdminRequestsComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function AdminRequestsComponent_div_48_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 61);
    \u0275\u0275listener("click", function AdminRequestsComponent_div_48_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 62)(3, "h2", 63);
    \u0275\u0275text(4, "D\xE9tails de la demande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 64);
    \u0275\u0275listener("click", function AdminRequestsComponent_div_48_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 65)(8, "div", 66)(9, "span", 67);
    \u0275\u0275text(10, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 68);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 66)(14, "span", 67);
    \u0275\u0275text(15, "Association");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 68);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 66)(19, "span", 67);
    \u0275\u0275text(20, "Localisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 68);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 66)(24, "span", 67);
    \u0275\u0275text(25, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 68);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 66)(29, "span", 67);
    \u0275\u0275text(30, "Urgence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 46);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 66)(34, "span", 67);
    \u0275\u0275text(35, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 51);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 66)(39, "span", 67);
    \u0275\u0275text(40, "Objectif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 68);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 66)(45, "span", 67);
    \u0275\u0275text(46, "Collect\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 68);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 69)(51, "span", 67);
    \u0275\u0275text(52, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p", 70);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 66)(56, "span", 67);
    \u0275\u0275text(57, "Cr\xE9\xE9e le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 68);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 71);
    \u0275\u0275template(62, AdminRequestsComponent_div_48_button_62_Template, 2, 1, "button", 72)(63, AdminRequestsComponent_div_48_button_63_Template, 2, 1, "button", 73);
    \u0275\u0275elementStart(64, "button", 74);
    \u0275\u0275listener("click", function AdminRequestsComponent_div_48_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.deleteRequest(ctx_r0.selectedRequest);
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(65, "\u{1F5D1} Supprimer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 75);
    \u0275\u0275listener("click", function AdminRequestsComponent_div_48_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(67, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.selectedRequest.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedRequest.organization_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedRequest.location);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedRequest.category_name || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275classMap("urgency-badge--" + ctx_r0.selectedRequest.urgency);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getUrgencyLabel(ctx_r0.selectedRequest.urgency), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classMap("status-badge--" + ctx_r0.selectedRequest.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(ctx_r0.selectedRequest.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(43, 18, ctx_r0.selectedRequest.target_amount, "1.0-0"), " TND");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(49, 21, ctx_r0.selectedRequest.collected_amount, "1.0-0"), " TND (", ctx_r0.getProgress(ctx_r0.selectedRequest), "%)");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.selectedRequest.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 24, ctx_r0.selectedRequest.created_at, "dd/MM/yyyy \xE0 HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.selectedRequest.status !== "active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedRequest.status === "active");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.processingId !== null);
  }
}
var AdminRequestsComponent = class _AdminRequestsComponent {
  adminService = inject(AdminService);
  cdr = inject(ChangeDetectorRef);
  route = inject(ActivatedRoute);
  requests = [];
  loading = true;
  error = "";
  successMessage = "";
  processingId = null;
  // Filters
  searchQuery = "";
  statusFilter = "";
  urgencyFilter = "";
  total = 0;
  // Detail modal
  selectedRequest = null;
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params["status"]) {
        this.statusFilter = params["status"];
      }
      this.loadRequests();
    });
  }
  loadRequests() {
    this.loading = true;
    this.error = "";
    this.adminService.getRequests({
      search: this.searchQuery,
      status: this.statusFilter,
      urgency: this.urgencyFilter,
      limit: 100,
      offset: 0
    }).subscribe({
      next: (res) => {
        if (res.success) {
          this.requests = res.data;
          this.total = res.pagination.total;
        } else {
          this.error = "Impossible de charger les demandes.";
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
    this.loadRequests();
  }
  onFilterChange() {
    this.loadRequests();
  }
  approve(req) {
    if (this.processingId !== null)
      return;
    this.processingId = req.id;
    this.adminService.updateRequest(req.id, "approve").subscribe({
      next: (res) => {
        if (res.success) {
          req.status = "active";
          this.showSuccess(`\u2705 Demande "${req.title}" approuv\xE9e.`);
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
  reject(req) {
    if (this.processingId !== null)
      return;
    if (!confirm(`Rejeter la demande "${req.title}" ?`))
      return;
    this.processingId = req.id;
    this.adminService.updateRequest(req.id, "reject").subscribe({
      next: (res) => {
        if (res.success) {
          req.status = "cancelled";
          this.showSuccess(`\u274C Demande "${req.title}" rejet\xE9e.`);
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
  deleteRequest(req) {
    if (this.processingId !== null)
      return;
    if (!confirm(`\u26A0\uFE0F Supprimer d\xE9finitivement la demande "${req.title}" ? Cette action est irr\xE9versible.`))
      return;
    this.processingId = req.id;
    this.adminService.updateRequest(req.id, "delete").subscribe({
      next: (res) => {
        if (res.success) {
          this.requests = this.requests.filter((r) => r.id !== req.id);
          this.showSuccess(`\u{1F5D1}\uFE0F Demande "${req.title}" supprim\xE9e.`);
        } else {
          this.error = res.message;
        }
        this.processingId = null;
        this.cdr.markForCheck();
      },
      error: () => {
        this.error = "Erreur lors de la suppression.";
        this.processingId = null;
        this.cdr.markForCheck();
      }
    });
  }
  viewDetails(req) {
    this.selectedRequest = req;
    this.cdr.markForCheck();
  }
  closeModal() {
    this.selectedRequest = null;
    this.cdr.markForCheck();
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
      active: "Active",
      completed: "Compl\xE9t\xE9e",
      paused: "En attente",
      cancelled: "Annul\xE9e"
    };
    return labels[status] ?? status;
  }
  getUrgencyLabel(urgency) {
    const labels = { low: "Faible", medium: "Moyenne", high: "Haute" };
    return labels[urgency] ?? urgency;
  }
  getProgress(req) {
    if (!req.target_amount || req.target_amount === 0)
      return 0;
    return Math.min(100, Math.round(req.collected_amount / req.target_amount * 100));
  }
  trackById(_, item) {
    return item.id;
  }
  static \u0275fac = function AdminRequestsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminRequestsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminRequestsComponent, selectors: [["app-admin-requests"]], decls: 49, vars: 10, consts: [[1, "admin-page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["routerLink", "/admin-dashboard", 1, "back-link"], [1, "filters-bar"], [1, "search-wrapper"], [1, "search-icon"], ["id", "req-search", "type", "text", "placeholder", "Rechercher par titre, description, association...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [1, "filter-group"], ["for", "req-status-filter", 1, "filter-label"], ["id", "req-status-filter", 1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "active"], ["value", "paused"], ["value", "completed"], ["value", "cancelled"], ["for", "req-urgency-filter", 1, "filter-label"], ["id", "req-urgency-filter", 1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", "high"], ["value", "medium"], ["value", "low"], [1, "results-count"], [4, "ngIf"], ["class", "alert alert--success", 4, "ngIf"], ["class", "alert alert--error", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "alert", "alert--success"], [1, "alert", "alert--error"], [1, "loading-state"], [1, "spinner"], [1, "empty-state"], [1, "empty-state__icon"], [1, "table-wrapper"], [1, "admin-table"], [3, "row--processing", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "request-cell"], [1, "request-title"], ["class", "category-tag", 4, "ngIf"], [1, "assoc-cell"], [1, "assoc-avatar"], [1, "assoc-name"], [1, "cell-secondary"], [1, "urgency-badge"], [1, "progress-cell"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-label"], [1, "status-badge"], [1, "action-buttons"], ["title", "Voir les d\xE9tails", 1, "action-btn", "action-btn--detail", 3, "click"], ["class", "action-btn action-btn--approve", "title", "Approuver", 3, "disabled", "click", 4, "ngIf"], ["class", "action-btn action-btn--reject", "title", "Rejeter", 3, "disabled", "click", 4, "ngIf"], ["title", "Supprimer", 1, "action-btn", "action-btn--delete", 3, "click", "disabled"], [1, "category-tag"], ["title", "Approuver", 1, "action-btn", "action-btn--approve", 3, "click", "disabled"], ["title", "Rejeter", 1, "action-btn", "action-btn--reject", 3, "click", "disabled"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal__header"], [1, "modal__title"], [1, "modal__close", 3, "click"], [1, "modal__body"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], [1, "detail-row", "detail-row--full"], [1, "detail-description"], [1, "modal__footer"], ["class", "action-btn action-btn--approve modal-action", 3, "disabled", "click", 4, "ngIf"], ["class", "action-btn action-btn--reject modal-action", 3, "disabled", "click", 4, "ngIf"], [1, "action-btn", "action-btn--delete", "modal-action", 3, "click", "disabled"], [1, "modal-close-btn", 3, "click"], [1, "action-btn", "action-btn--approve", "modal-action", 3, "click", "disabled"], [1, "action-btn", "action-btn--reject", "modal-action", 3, "click", "disabled"]], template: function AdminRequestsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-admin-navbar");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
      \u0275\u0275text(5, "Gestion des demandes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, " Mod\xE9rez, approuvez et supprimez les demandes d'aide publi\xE9es sur la plateforme ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 4);
      \u0275\u0275text(9, "\u2190 Tableau de bord");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "span", 7);
      \u0275\u0275text(13, "\u{1F50D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function AdminRequestsComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("input", function AdminRequestsComponent_Template_input_input_14_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 9)(16, "label", 10);
      \u0275\u0275text(17, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function AdminRequestsComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AdminRequestsComponent_Template_select_change_18_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(19, "option", 12);
      \u0275\u0275text(20, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 13);
      \u0275\u0275text(22, "Actives");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 14);
      \u0275\u0275text(24, "En attente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 15);
      \u0275\u0275text(26, "Compl\xE9t\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "option", 16);
      \u0275\u0275text(28, "Annul\xE9es");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 9)(30, "label", 17);
      \u0275\u0275text(31, "Urgence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "select", 18);
      \u0275\u0275twoWayListener("ngModelChange", function AdminRequestsComponent_Template_select_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.urgencyFilter, $event) || (ctx.urgencyFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AdminRequestsComponent_Template_select_change_32_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(33, "option", 12);
      \u0275\u0275text(34, "Toutes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "option", 19);
      \u0275\u0275text(36, "Haute");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "option", 20);
      \u0275\u0275text(38, "Moyenne");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "option", 21);
      \u0275\u0275text(40, "Faible");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 22);
      \u0275\u0275template(42, AdminRequestsComponent_span_42_Template, 2, 1, "span", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(43, AdminRequestsComponent_div_43_Template, 2, 1, "div", 24)(44, AdminRequestsComponent_div_44_Template, 2, 1, "div", 25)(45, AdminRequestsComponent_div_45_Template, 4, 0, "div", 26)(46, AdminRequestsComponent_div_46_Template, 7, 0, "div", 27)(47, AdminRequestsComponent_div_47_Template, 22, 2, "div", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275template(48, AdminRequestsComponent_div_48_Template, 68, 27, "div", 29);
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.urgencyFilter);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.requests.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.requests.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedRequest);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, AdminNavbarComponent, DecimalPipe, DatePipe], styles: ["\n.admin-page[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 40px 24px 80px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 32px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 28px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-500);\n  margin: 0;\n}\n.back-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--blue-600);\n  text-decoration: none;\n  padding: 8px 16px;\n  background: rgba(37, 99, 235, 0.08);\n  border-radius: 8px;\n  transition: background 0.2s;\n  white-space: nowrap;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.14);\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  background: #fff;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 14px;\n  padding: 16px 20px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 15px;\n  pointer-events: none;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px 10px 38px;\n  border-radius: 10px;\n  border: 1px solid var(--gray-200);\n  font-size: 14px;\n  font-family: var(--font-body);\n  transition: border 0.2s, box-shadow 0.2s;\n  background: var(--gray-100);\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--blue-600);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  background: #fff;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--gray-700);\n  white-space: nowrap;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 1px solid var(--gray-200);\n  font-size: 13px;\n  font-family: var(--font-body);\n  background: var(--gray-100);\n  cursor: pointer;\n  transition: border 0.2s;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--blue-600);\n}\n.results-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--gray-500);\n  white-space: nowrap;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  font-weight: 500;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.alert--success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #166534;\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n.alert--error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n  color: #b91c1c;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n  color: var(--gray-500);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--gray-200);\n  border-top-color: var(--blue-600);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 24px;\n  color: var(--gray-500);\n}\n.empty-state__icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  box-shadow: 0 2px 16px rgba(15, 23, 42, 0.06);\n  overflow-x: auto;\n}\n.admin-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.admin-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--gray-500);\n  background: #f8fafc;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  white-space: nowrap;\n}\n.admin-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(15, 23, 42, 0.05);\n  transition: background 0.15s;\n}\n.admin-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.admin-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.admin-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row--processing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.admin-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  vertical-align: middle;\n}\n.request-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.request-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.category-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 999px;\n  background: rgba(37, 99, 235, 0.1);\n  color: #1d4ed8;\n  width: fit-content;\n}\n.assoc-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.assoc-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #22c55e);\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.assoc-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #0f172a;\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.cell-secondary[_ngcontent-%COMP%] {\n  color: var(--gray-500);\n  font-size: 13px;\n}\n.progress-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 100px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: var(--gray-200);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #16a34a);\n  border-radius: 999px;\n  transition: width 0.4s ease;\n}\n.progress-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--gray-500);\n  white-space: nowrap;\n}\n.urgency-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.urgency-badge--high[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #b91c1c;\n}\n.urgency-badge--medium[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #92400e;\n}\n.urgency-badge--low[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #166534;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.status-badge--active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #166534;\n}\n.status-badge--completed[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.1);\n  color: #1d4ed8;\n}\n.status-badge--paused[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #92400e;\n}\n.status-badge--cancelled[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: nowrap;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  padding: 7px 12px;\n  border-radius: 8px;\n  border: none;\n  font-size: 13px;\n  font-weight: 700;\n  font-family: var(--font-body);\n  cursor: pointer;\n  transition:\n    opacity 0.2s,\n    transform 0.2s,\n    background 0.2s,\n    color 0.2s;\n  white-space: nowrap;\n  min-width: 36px;\n}\n.action-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n}\n.action-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.action-btn--detail[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.1);\n  color: var(--blue-600);\n  border: 1px solid rgba(37, 99, 235, 0.15);\n}\n.action-btn--detail[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--blue-600);\n  color: #fff;\n}\n.action-btn--approve[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #166534;\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n.action-btn--approve[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #22c55e;\n  color: #fff;\n}\n.action-btn--reject[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #92400e;\n  border: 1px solid rgba(245, 158, 11, 0.2);\n}\n.action-btn--reject[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f59e0b;\n  color: #fff;\n}\n.action-btn--delete[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n  border: 1px solid rgba(239, 68, 68, 0.15);\n}\n.action-btn--delete[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ef4444;\n  color: #fff;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  display: grid;\n  place-items: center;\n  z-index: 500;\n  padding: 24px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  width: min(640px, 100%);\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: var(--shadow-lg);\n  animation: _ngcontent-%COMP%_slideUp 0.25s ease;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 28px 20px;\n  border-bottom: 1px solid var(--gray-200);\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal__close[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n  background: var(--gray-100);\n  color: var(--gray-500);\n  font-size: 16px;\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  transition: background 0.2s;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  background: var(--gray-200);\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n  display: grid;\n  gap: 16px;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 130px 1fr;\n  gap: 12px;\n  align-items: start;\n}\n.detail-row--full[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--gray-500);\n  padding-top: 3px;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0f172a;\n  font-weight: 500;\n}\n.detail-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-700);\n  line-height: 1.6;\n  margin: 8px 0 0;\n  background: var(--gray-100);\n  padding: 14px;\n  border-radius: 10px;\n}\n.modal__footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 20px 28px 24px;\n  border-top: 1px solid var(--gray-200);\n  flex-wrap: wrap;\n}\n.modal-action[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n}\n.modal-close-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 10px 18px;\n  border-radius: 8px;\n  border: 1px solid var(--gray-200);\n  background: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--gray-700);\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: background 0.2s;\n}\n.modal-close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--gray-100);\n}\n@media (max-width: 768px) {\n  .filters-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .admin-page[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=admin-requests.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminRequestsComponent, [{
    type: Component,
    args: [{ selector: "app-admin-requests", standalone: true, imports: [CommonModule, FormsModule, RouterLink, AdminNavbarComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-admin-navbar></app-admin-navbar>

<div class="admin-page">
  <!-- Page Header -->
  <div class="page-header">
    <div>
      <h1 class="page-title">Gestion des demandes</h1>
      <p class="page-subtitle">
        Mod\xE9rez, approuvez et supprimez les demandes d'aide publi\xE9es sur la plateforme
      </p>
    </div>
    <a routerLink="/admin-dashboard" class="back-link">\u2190 Tableau de bord</a>
  </div>

  <!-- Filters & Search -->
  <div class="filters-bar">
    <div class="search-wrapper">
      <span class="search-icon">\u{1F50D}</span>
      <input
        id="req-search"
        class="search-input"
        type="text"
        placeholder="Rechercher par titre, description, association..."
        [(ngModel)]="searchQuery"
        (input)="onSearch()"
      />
    </div>

    <div class="filter-group">
      <label class="filter-label" for="req-status-filter">Statut</label>
      <select id="req-status-filter" class="filter-select" [(ngModel)]="statusFilter" (change)="onFilterChange()">
        <option value="">Tous</option>
        <option value="active">Actives</option>
        <option value="paused">En attente</option>
        <option value="completed">Compl\xE9t\xE9es</option>
        <option value="cancelled">Annul\xE9es</option>
      </select>
    </div>

    <div class="filter-group">
      <label class="filter-label" for="req-urgency-filter">Urgence</label>
      <select id="req-urgency-filter" class="filter-select" [(ngModel)]="urgencyFilter" (change)="onFilterChange()">
        <option value="">Toutes</option>
        <option value="high">Haute</option>
        <option value="medium">Moyenne</option>
        <option value="low">Faible</option>
      </select>
    </div>

    <div class="results-count">
      <span *ngIf="!loading">{{ requests.length }} r\xE9sultat(s)</span>
    </div>
  </div>

  <!-- Alerts -->
  <div *ngIf="successMessage" class="alert alert--success">{{ successMessage }}</div>
  <div *ngIf="error && !loading" class="alert alert--error">\u26A0\uFE0F {{ error }}</div>

  <!-- Loading -->
  <div *ngIf="loading" class="loading-state">
    <div class="spinner"></div>
    <p>Chargement des demandes...</p>
  </div>

  <!-- Empty State -->
  <div *ngIf="!loading && requests.length === 0" class="empty-state">
    <div class="empty-state__icon">\u{1F4CB}</div>
    <h3>Aucune demande trouv\xE9e</h3>
    <p>Modifiez vos filtres pour afficher d'autres r\xE9sultats.</p>
  </div>

  <!-- Table -->
  <div *ngIf="!loading && requests.length > 0" class="table-wrapper">
    <table class="admin-table">
      <thead>
        <tr>
          <th>Demande</th>
          <th>Association</th>
          <th>Localisation</th>
          <th>Urgence</th>
          <th>Progression</th>
          <th>Date</th>
          <th>Statut</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let req of requests; trackBy: trackById" [class.row--processing]="processingId === req.id">
          <td>
            <div class="request-cell">
              <span class="request-title">{{ req.title }}</span>
              <span *ngIf="req.category_name" class="category-tag">{{ req.category_name }}</span>
            </div>
          </td>
          <td>
            <div class="assoc-cell">
              <div class="assoc-avatar">{{ req.organization_name.charAt(0).toUpperCase() }}</div>
              <span class="assoc-name">{{ req.organization_name }}</span>
            </div>
          </td>
          <td class="cell-secondary">\u{1F4CD} {{ req.location }}</td>
          <td>
            <span class="urgency-badge" [class]="'urgency-badge--' + req.urgency">
              {{ getUrgencyLabel(req.urgency) }}
            </span>
          </td>
          <td>
            <div class="progress-cell">
              <div class="progress-bar">
                <div class="progress-fill" [style.width.%]="getProgress(req)"></div>
              </div>
              <span class="progress-label">{{ getProgress(req) }}%</span>
            </div>
          </td>
          <td class="cell-secondary">{{ req.created_at | date: 'dd/MM/yyyy' }}</td>
          <td>
            <span class="status-badge" [class]="'status-badge--' + req.status">
              {{ getStatusLabel(req.status) }}
            </span>
          </td>
          <td>
            <div class="action-buttons">
              <button
                class="action-btn action-btn--detail"
                (click)="viewDetails(req)"
                title="Voir les d\xE9tails"
              >\u{1F441}</button>

              <button
                *ngIf="req.status !== 'active'"
                class="action-btn action-btn--approve"
                [disabled]="processingId !== null"
                (click)="approve(req)"
                title="Approuver"
              >\u2713</button>

              <button
                *ngIf="req.status === 'active'"
                class="action-btn action-btn--reject"
                [disabled]="processingId !== null"
                (click)="reject(req)"
                title="Rejeter"
              >\u2715</button>

              <button
                class="action-btn action-btn--delete"
                [disabled]="processingId !== null"
                (click)="deleteRequest(req)"
                title="Supprimer"
              >\u{1F5D1}</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!-- Detail Modal -->
<div *ngIf="selectedRequest" class="modal-overlay" (click)="closeModal()">
  <div class="modal" (click)="$event.stopPropagation()">
    <div class="modal__header">
      <h2 class="modal__title">D\xE9tails de la demande</h2>
      <button class="modal__close" (click)="closeModal()">\u2715</button>
    </div>
    <div class="modal__body">
      <div class="detail-row">
        <span class="detail-label">Titre</span>
        <span class="detail-value">{{ selectedRequest.title }}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Association</span>
        <span class="detail-value">{{ selectedRequest.organization_name }}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Localisation</span>
        <span class="detail-value">{{ selectedRequest.location }}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Cat\xE9gorie</span>
        <span class="detail-value">{{ selectedRequest.category_name || '\u2014' }}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Urgence</span>
        <span class="urgency-badge" [class]="'urgency-badge--' + selectedRequest.urgency">
          {{ getUrgencyLabel(selectedRequest.urgency) }}
        </span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Statut</span>
        <span class="status-badge" [class]="'status-badge--' + selectedRequest.status">
          {{ getStatusLabel(selectedRequest.status) }}
        </span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Objectif</span>
        <span class="detail-value">{{ selectedRequest.target_amount | number: '1.0-0' }} TND</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Collect\xE9</span>
        <span class="detail-value">{{ selectedRequest.collected_amount | number: '1.0-0' }} TND ({{ getProgress(selectedRequest) }}%)</span>
      </div>
      <div class="detail-row detail-row--full">
        <span class="detail-label">Description</span>
        <p class="detail-description">{{ selectedRequest.description }}</p>
      </div>
      <div class="detail-row">
        <span class="detail-label">Cr\xE9\xE9e le</span>
        <span class="detail-value">{{ selectedRequest.created_at | date: 'dd/MM/yyyy \xE0 HH:mm' }}</span>
      </div>
    </div>
    <div class="modal__footer">
      <button
        *ngIf="selectedRequest.status !== 'active'"
        class="action-btn action-btn--approve modal-action"
        [disabled]="processingId !== null"
        (click)="approve(selectedRequest); closeModal()"
      >\u2713 Approuver</button>
      <button
        *ngIf="selectedRequest.status === 'active'"
        class="action-btn action-btn--reject modal-action"
        [disabled]="processingId !== null"
        (click)="reject(selectedRequest); closeModal()"
      >\u2715 Rejeter</button>
      <button
        class="action-btn action-btn--delete modal-action"
        [disabled]="processingId !== null"
        (click)="deleteRequest(selectedRequest); closeModal()"
      >\u{1F5D1} Supprimer</button>
      <button class="modal-close-btn" (click)="closeModal()">Fermer</button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/admin/admin-requests/admin-requests.component.css */\n.admin-page {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 40px 24px 80px;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 32px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title {\n  font-family: var(--font-heading);\n  font-size: 28px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.page-subtitle {\n  font-size: 14px;\n  color: var(--gray-500);\n  margin: 0;\n}\n.back-link {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--blue-600);\n  text-decoration: none;\n  padding: 8px 16px;\n  background: rgba(37, 99, 235, 0.08);\n  border-radius: 8px;\n  transition: background 0.2s;\n  white-space: nowrap;\n}\n.back-link:hover {\n  background: rgba(37, 99, 235, 0.14);\n}\n.filters-bar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  background: #fff;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 14px;\n  padding: 16px 20px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);\n}\n.search-wrapper {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 15px;\n  pointer-events: none;\n}\n.search-input {\n  width: 100%;\n  padding: 10px 14px 10px 38px;\n  border-radius: 10px;\n  border: 1px solid var(--gray-200);\n  font-size: 14px;\n  font-family: var(--font-body);\n  transition: border 0.2s, box-shadow 0.2s;\n  background: var(--gray-100);\n}\n.search-input:focus {\n  outline: none;\n  border-color: var(--blue-600);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  background: #fff;\n}\n.filter-group {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.filter-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--gray-700);\n  white-space: nowrap;\n}\n.filter-select {\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 1px solid var(--gray-200);\n  font-size: 13px;\n  font-family: var(--font-body);\n  background: var(--gray-100);\n  cursor: pointer;\n  transition: border 0.2s;\n}\n.filter-select:focus {\n  outline: none;\n  border-color: var(--blue-600);\n}\n.results-count {\n  font-size: 13px;\n  color: var(--gray-500);\n  white-space: nowrap;\n}\n.alert {\n  padding: 14px 18px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  font-weight: 500;\n  animation: fadeIn 0.3s ease;\n}\n.alert--success {\n  background: rgba(34, 197, 94, 0.1);\n  color: #166534;\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n.alert--error {\n  background: rgba(239, 68, 68, 0.08);\n  color: #b91c1c;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n  color: var(--gray-500);\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--gray-200);\n  border-top-color: var(--blue-600);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 80px 24px;\n  color: var(--gray-500);\n}\n.empty-state__icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.empty-state h3 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.table-wrapper {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  box-shadow: 0 2px 16px rgba(15, 23, 42, 0.06);\n  overflow-x: auto;\n}\n.admin-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.admin-table thead th {\n  padding: 14px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--gray-500);\n  background: #f8fafc;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  white-space: nowrap;\n}\n.admin-table tbody tr {\n  border-bottom: 1px solid rgba(15, 23, 42, 0.05);\n  transition: background 0.15s;\n}\n.admin-table tbody tr:last-child {\n  border-bottom: none;\n}\n.admin-table tbody tr:hover {\n  background: #f8fafc;\n}\n.admin-table tbody tr.row--processing {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.admin-table td {\n  padding: 14px 16px;\n  vertical-align: middle;\n}\n.request-cell {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.request-title {\n  font-weight: 600;\n  color: #0f172a;\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.category-tag {\n  display: inline-flex;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 999px;\n  background: rgba(37, 99, 235, 0.1);\n  color: #1d4ed8;\n  width: fit-content;\n}\n.assoc-cell {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.assoc-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #22c55e);\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.assoc-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #0f172a;\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.cell-secondary {\n  color: var(--gray-500);\n  font-size: 13px;\n}\n.progress-cell {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 100px;\n}\n.progress-bar {\n  flex: 1;\n  height: 6px;\n  background: var(--gray-200);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #16a34a);\n  border-radius: 999px;\n  transition: width 0.4s ease;\n}\n.progress-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--gray-500);\n  white-space: nowrap;\n}\n.urgency-badge {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.urgency-badge--high {\n  background: rgba(239, 68, 68, 0.12);\n  color: #b91c1c;\n}\n.urgency-badge--medium {\n  background: rgba(245, 158, 11, 0.15);\n  color: #92400e;\n}\n.urgency-badge--low {\n  background: rgba(34, 197, 94, 0.12);\n  color: #166534;\n}\n.status-badge {\n  display: inline-flex;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.status-badge--active {\n  background: rgba(34, 197, 94, 0.12);\n  color: #166534;\n}\n.status-badge--completed {\n  background: rgba(37, 99, 235, 0.1);\n  color: #1d4ed8;\n}\n.status-badge--paused {\n  background: rgba(245, 158, 11, 0.15);\n  color: #92400e;\n}\n.status-badge--cancelled {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n}\n.action-buttons {\n  display: flex;\n  gap: 6px;\n  flex-wrap: nowrap;\n}\n.action-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  padding: 7px 12px;\n  border-radius: 8px;\n  border: none;\n  font-size: 13px;\n  font-weight: 700;\n  font-family: var(--font-body);\n  cursor: pointer;\n  transition:\n    opacity 0.2s,\n    transform 0.2s,\n    background 0.2s,\n    color 0.2s;\n  white-space: nowrap;\n  min-width: 36px;\n}\n.action-btn:hover:not(:disabled) {\n  transform: translateY(-1px);\n}\n.action-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.action-btn--detail {\n  background: rgba(37, 99, 235, 0.1);\n  color: var(--blue-600);\n  border: 1px solid rgba(37, 99, 235, 0.15);\n}\n.action-btn--detail:hover:not(:disabled) {\n  background: var(--blue-600);\n  color: #fff;\n}\n.action-btn--approve {\n  background: rgba(34, 197, 94, 0.12);\n  color: #166534;\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n.action-btn--approve:hover:not(:disabled) {\n  background: #22c55e;\n  color: #fff;\n}\n.action-btn--reject {\n  background: rgba(245, 158, 11, 0.12);\n  color: #92400e;\n  border: 1px solid rgba(245, 158, 11, 0.2);\n}\n.action-btn--reject:hover:not(:disabled) {\n  background: #f59e0b;\n  color: #fff;\n}\n.action-btn--delete {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n  border: 1px solid rgba(239, 68, 68, 0.15);\n}\n.action-btn--delete:hover:not(:disabled) {\n  background: #ef4444;\n  color: #fff;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  display: grid;\n  place-items: center;\n  z-index: 500;\n  padding: 24px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  animation: fadeIn 0.2s ease;\n}\n.modal {\n  background: #fff;\n  border-radius: 20px;\n  width: min(640px, 100%);\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: var(--shadow-lg);\n  animation: slideUp 0.25s ease;\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 28px 20px;\n  border-bottom: 1px solid var(--gray-200);\n}\n.modal__title {\n  font-family: var(--font-heading);\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal__close {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n  background: var(--gray-100);\n  color: var(--gray-500);\n  font-size: 16px;\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  transition: background 0.2s;\n}\n.modal__close:hover {\n  background: var(--gray-200);\n}\n.modal__body {\n  padding: 24px 28px;\n  display: grid;\n  gap: 16px;\n}\n.detail-row {\n  display: grid;\n  grid-template-columns: 130px 1fr;\n  gap: 12px;\n  align-items: start;\n}\n.detail-row--full {\n  grid-template-columns: 1fr;\n}\n.detail-label {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--gray-500);\n  padding-top: 3px;\n}\n.detail-value {\n  font-size: 14px;\n  color: #0f172a;\n  font-weight: 500;\n}\n.detail-description {\n  font-size: 14px;\n  color: var(--gray-700);\n  line-height: 1.6;\n  margin: 8px 0 0;\n  background: var(--gray-100);\n  padding: 14px;\n  border-radius: 10px;\n}\n.modal__footer {\n  display: flex;\n  gap: 10px;\n  padding: 20px 28px 24px;\n  border-top: 1px solid var(--gray-200);\n  flex-wrap: wrap;\n}\n.modal-action {\n  padding: 10px 18px;\n}\n.modal-close-btn {\n  margin-left: auto;\n  padding: 10px 18px;\n  border-radius: 8px;\n  border: 1px solid var(--gray-200);\n  background: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--gray-700);\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: background 0.2s;\n}\n.modal-close-btn:hover {\n  background: var(--gray-100);\n}\n@media (max-width: 768px) {\n  .filters-bar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .admin-page {\n    padding: 24px 16px;\n  }\n  .page-title {\n    font-size: 22px;\n  }\n  .action-buttons {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=admin-requests.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminRequestsComponent, { className: "AdminRequestsComponent", filePath: "app/admin/admin-requests/admin-requests.component.ts", lineNumber: 16 });
})();
export {
  AdminRequestsComponent
};
//# sourceMappingURL=chunk-QWO4HZ2M.js.map
