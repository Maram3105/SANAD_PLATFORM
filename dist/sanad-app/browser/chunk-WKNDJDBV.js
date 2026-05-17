import {
  AssociationDataService,
  AssociationNavbarComponent
} from "./chunk-FJV2TO27.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BNXH775N.js";

// src/app/association/association-donations/association-donations.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AssociationDonationsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Chargement des dons...");
    \u0275\u0275elementEnd();
  }
}
function AssociationDonationsComponent_Conditional_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AssociationDonationsComponent_Conditional_23_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const donation_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.donorLabel(donation_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(donation_r2.request_title || "Don direct");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 4, donation_r2.amount, "1.2-2"), " TND");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 7, donation_r2.created_at, "dd MMM yyyy"));
  }
}
function AssociationDonationsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AssociationDonationsComponent_Conditional_23_Conditional_0_Template, 2, 1, "div", 5);
    \u0275\u0275elementStart(1, "div", 6)(2, "div", 7)(3, "span");
    \u0275\u0275text(4, "Donateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Campagne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Montant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Date");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(11, AssociationDonationsComponent_Conditional_23_For_12_Template, 11, 10, "div", 8, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.error() ? 0 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r0.donations());
  }
}
var AssociationDonationsComponent = class _AssociationDonationsComponent {
  associationService = inject(AssociationDataService);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  donations = signal([], ...ngDevMode ? [{ debugName: "donations" }] : (
    /* istanbul ignore next */
    []
  ));
  totalAmount = signal(0, ...ngDevMode ? [{ debugName: "totalAmount" }] : (
    /* istanbul ignore next */
    []
  ));
  totalDonations = signal(0, ...ngDevMode ? [{ debugName: "totalDonations" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.loadDonations();
  }
  loadDonations() {
    this.loading.set(true);
    this.error.set("");
    this.associationService.getDonations().subscribe({
      next: (response) => {
        this.loading.set(false);
        if (!response.success) {
          this.error.set("Impossible de charger les dons.");
          return;
        }
        this.donations.set(response.data);
        this.totalAmount.set(response.summary.total_amount);
        this.totalDonations.set(response.summary.total_donations);
      },
      error: () => {
        this.loading.set(false);
        this.error.set("Impossible de charger les dons.");
      }
    });
  }
  donorLabel(donation) {
    if (donation.anonymous) {
      return "Anonyme";
    }
    return donation.donor_name || donation.donor_email || "Anonyme";
  }
  static \u0275fac = function AssociationDonationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssociationDonationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssociationDonationsComponent, selectors: [["app-association-donations"]], decls: 24, vars: 6, consts: [[1, "donations-shell"], [1, "donations-header"], [1, "kicker"], [1, "summary"], [1, "state"], [1, "state", "state--error"], [1, "table"], [1, "table-head"], [1, "table-row"], [1, "amount"]], template: function AssociationDonationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-association-navbar");
      \u0275\u0275elementStart(1, "section", 0)(2, "header", 1)(3, "div")(4, "p", 2);
      \u0275\u0275text(5, "Dons recus");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "Historique des dons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "Vision globale des contributions recues.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 3)(11, "div")(12, "span");
      \u0275\u0275text(13, "Total recu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "strong");
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div")(18, "span");
      \u0275\u0275text(19, "Nombre de dons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "strong");
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(22, AssociationDonationsComponent_Conditional_22_Template, 2, 0, "div", 4)(23, AssociationDonationsComponent_Conditional_23_Template, 13, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 3, ctx.totalAmount(), "1.2-2"), " TND");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.totalDonations());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 22 : 23);
    }
  }, dependencies: [CommonModule, AssociationNavbarComponent, DecimalPipe, DatePipe], styles: ["\n.donations-shell[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 32px 24px 80px;\n}\n.donations-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.kicker[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n  color: #64748b;\n}\n.donations-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-family: var(--font-heading);\n}\n.donations-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #475569;\n}\n.summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  background: #fff;\n  padding: 14px 18px;\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  box-shadow: 0 16px 28px rgba(15, 23, 42, 0.08);\n}\n.summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #64748b;\n}\n.summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.state[_ngcontent-%COMP%] {\n  padding: 18px;\n  border-radius: 16px;\n  background: rgba(226, 232, 240, 0.5);\n  color: #475569;\n}\n.state--error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #b91c1c;\n}\n.table[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  box-shadow: 0 18px 32px rgba(15, 23, 42, 0.08);\n  overflow: hidden;\n}\n.table-head[_ngcontent-%COMP%], \n.table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 1.4fr 0.8fr 0.8fr;\n  gap: 12px;\n  padding: 14px 18px;\n  font-size: 13px;\n}\n.table-head[_ngcontent-%COMP%] {\n  font-weight: 700;\n  background: rgba(148, 163, 184, 0.12);\n}\n.table-row[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(148, 163, 184, 0.16);\n}\n.amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n}\n@media (max-width: 900px) {\n  .donations-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .table-head[_ngcontent-%COMP%], \n   .table-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=association-donations.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssociationDonationsComponent, [{
    type: Component,
    args: [{ selector: "app-association-donations", imports: [CommonModule, AssociationNavbarComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-association-navbar></app-association-navbar>\r
\r
<section class="donations-shell">\r
  <header class="donations-header">\r
    <div>\r
      <p class="kicker">Dons recus</p>\r
      <h1>Historique des dons</h1>\r
      <p>Vision globale des contributions recues.</p>\r
    </div>\r
    <div class="summary">\r
      <div>\r
        <span>Total recu</span>\r
        <strong>{{ totalAmount() | number : '1.2-2' }} TND</strong>\r
      </div>\r
      <div>\r
        <span>Nombre de dons</span>\r
        <strong>{{ totalDonations() }}</strong>\r
      </div>\r
    </div>\r
  </header>\r
\r
  @if (loading()) {\r
    <div class="state">Chargement des dons...</div>\r
  } @else {\r
    @if (error()) {\r
      <div class="state state--error">{{ error() }}</div>\r
    }\r
\r
    <div class="table">\r
      <div class="table-head">\r
        <span>Donateur</span>\r
        <span>Campagne</span>\r
        <span>Montant</span>\r
        <span>Date</span>\r
      </div>\r
      @for (donation of donations(); track donation.id) {\r
        <div class="table-row">\r
          <span>{{ donorLabel(donation) }}</span>\r
          <span>{{ donation.request_title || 'Don direct' }}</span>\r
          <span class="amount">{{ donation.amount | number : '1.2-2' }} TND</span>\r
          <span>{{ donation.created_at | date : 'dd MMM yyyy' }}</span>\r
        </div>\r
      }\r
    </div>\r
  }\r
</section>\r
`, styles: ["/* src/app/association/association-donations/association-donations.component.css */\n.donations-shell {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 32px 24px 80px;\n}\n.donations-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.kicker {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n  color: #64748b;\n}\n.donations-header h1 {\n  margin: 0 0 6px;\n  font-family: var(--font-heading);\n}\n.donations-header p {\n  margin: 0;\n  color: #475569;\n}\n.summary {\n  display: flex;\n  gap: 16px;\n  background: #fff;\n  padding: 14px 18px;\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  box-shadow: 0 16px 28px rgba(15, 23, 42, 0.08);\n}\n.summary span {\n  display: block;\n  font-size: 12px;\n  color: #64748b;\n}\n.summary strong {\n  font-size: 18px;\n}\n.state {\n  padding: 18px;\n  border-radius: 16px;\n  background: rgba(226, 232, 240, 0.5);\n  color: #475569;\n}\n.state--error {\n  background: rgba(239, 68, 68, 0.12);\n  color: #b91c1c;\n}\n.table {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  box-shadow: 0 18px 32px rgba(15, 23, 42, 0.08);\n  overflow: hidden;\n}\n.table-head,\n.table-row {\n  display: grid;\n  grid-template-columns: 1.2fr 1.4fr 0.8fr 0.8fr;\n  gap: 12px;\n  padding: 14px 18px;\n  font-size: 13px;\n}\n.table-head {\n  font-weight: 700;\n  background: rgba(148, 163, 184, 0.12);\n}\n.table-row {\n  border-top: 1px solid rgba(148, 163, 184, 0.16);\n}\n.amount {\n  font-weight: 600;\n  color: #0f172a;\n}\n@media (max-width: 900px) {\n  .donations-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .table-head,\n  .table-row {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=association-donations.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssociationDonationsComponent, { className: "AssociationDonationsComponent", filePath: "app/association/association-donations/association-donations.component.ts", lineNumber: 14 });
})();
export {
  AssociationDonationsComponent
};
//# sourceMappingURL=chunk-WKNDJDBV.js.map
