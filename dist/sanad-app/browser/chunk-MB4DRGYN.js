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
  RouterLink,
  computed,
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

// src/app/association/association-dashboard/association-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AssociationDashboardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, "Chargement du tableau de bord...");
    \u0275\u0275elementEnd();
  }
}
function AssociationDashboardComponent_Conditional_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AssociationDashboardComponent_Conditional_16_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "Aucun don recu pour le moment.");
    \u0275\u0275elementEnd();
  }
}
function AssociationDashboardComponent_Conditional_16_Conditional_43_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 22)(1, "div")(2, "p", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 25)(7, "span", 26);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 24);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const donation_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.donationLabel(donation_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(donation_r2.request_title || "Don direct");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind2(9, 4, donation_r2.amount, "1.2-2"), " TND");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 7, donation_r2.created_at, "dd MMM yyyy"));
  }
}
function AssociationDashboardComponent_Conditional_16_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 19);
    \u0275\u0275repeaterCreate(1, AssociationDashboardComponent_Conditional_16_Conditional_43_For_2_Template, 13, 10, "li", 22, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.recentDonations());
  }
}
function AssociationDashboardComponent_Conditional_16_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "Aucune mise a jour publiee.");
    \u0275\u0275elementEnd();
  }
}
function AssociationDashboardComponent_Conditional_16_Conditional_55_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 27)(1, "div")(2, "p", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 24);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const update_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(update_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(update_r3.request_title || "Campagne");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 3, update_r3.created_at, "dd MMM yyyy"));
  }
}
function AssociationDashboardComponent_Conditional_16_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 21);
    \u0275\u0275repeaterCreate(1, AssociationDashboardComponent_Conditional_16_Conditional_55_For_2_Template, 9, 6, "li", 27, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.recentUpdates());
  }
}
function AssociationDashboardComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AssociationDashboardComponent_Conditional_16_Conditional_0_Template, 2, 1, "div", 8);
    \u0275\u0275elementStart(1, "div", 9)(2, "article", 10)(3, "p", 11);
    \u0275\u0275text(4, "Total des dons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 12);
    \u0275\u0275text(9, "Historique complet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "article", 10)(11, "p", 11);
    \u0275\u0275text(12, "Campagnes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h2");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 12);
    \u0275\u0275text(16, "Toutes vos demandes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "article", 10)(18, "p", 11);
    \u0275\u0275text(19, "Donateurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "h2");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 12);
    \u0275\u0275text(23, "Communautes mobilisees");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "article", 10)(25, "p", 11);
    \u0275\u0275text(26, "Campagnes actives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "h2");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 12);
    \u0275\u0275text(30, "En cours de collecte");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 13)(32, "section", 14)(33, "header", 15)(34, "div")(35, "h3");
    \u0275\u0275text(36, "Derniers dons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p");
    \u0275\u0275text(38, "Suivi rapide des contributions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "a", 16);
    \u0275\u0275text(40, "Voir les dons");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 17);
    \u0275\u0275conditionalCreate(42, AssociationDashboardComponent_Conditional_16_Conditional_42_Template, 2, 0, "p", 18)(43, AssociationDashboardComponent_Conditional_16_Conditional_43_Template, 3, 0, "ul", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "section", 14)(45, "header", 15)(46, "div")(47, "h3");
    \u0275\u0275text(48, "Dernieres mises a jour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p");
    \u0275\u0275text(50, "Transparence et informations publiees");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "a", 20);
    \u0275\u0275text(52, "Publier une mise a jour");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 17);
    \u0275\u0275conditionalCreate(54, AssociationDashboardComponent_Conditional_16_Conditional_54_Template, 2, 0, "p", 18)(55, AssociationDashboardComponent_Conditional_16_Conditional_55_Template, 3, 0, "ul", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.error() ? 0 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 7, ctx_r0.formattedTotal(), "1.2-2"), " TND");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(((tmp_3_0 = ctx_r0.stats()) == null ? null : tmp_3_0.campaign_count) ?? 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(((tmp_4_0 = ctx_r0.stats()) == null ? null : tmp_4_0.donors_count) ?? 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(((tmp_5_0 = ctx_r0.stats()) == null ? null : tmp_5_0.active_campaigns) ?? 0);
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r0.recentDonations().length === 0 ? 42 : 43);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r0.recentUpdates().length === 0 ? 54 : 55);
  }
}
var AssociationDashboardComponent = class _AssociationDashboardComponent {
  associationService = inject(AssociationDataService);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  stats = signal(null, ...ngDevMode ? [{ debugName: "stats" }] : (
    /* istanbul ignore next */
    []
  ));
  recentDonations = signal([], ...ngDevMode ? [{ debugName: "recentDonations" }] : (
    /* istanbul ignore next */
    []
  ));
  recentUpdates = signal([], ...ngDevMode ? [{ debugName: "recentUpdates" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  formattedTotal = computed(() => {
    const value = this.stats()?.total_donations ?? 0;
    return value;
  }, ...ngDevMode ? [{ debugName: "formattedTotal" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.loadDashboard();
  }
  loadDashboard() {
    this.loading.set(true);
    this.error.set("");
    this.associationService.getDashboard().subscribe({
      next: (response) => {
        this.loading.set(false);
        if (!response.success) {
          this.error.set("Impossible de charger le tableau de bord.");
          return;
        }
        this.stats.set(response.data.stats);
        this.recentDonations.set(response.data.recent_donations || []);
        this.recentUpdates.set(response.data.recent_updates || []);
      },
      error: () => {
        this.loading.set(false);
        this.error.set("Impossible de charger le tableau de bord.");
      }
    });
  }
  donationLabel(donation) {
    if (donation.anonymous) {
      return "Anonyme";
    }
    return donation.donor_name || donation.donor_email || "Anonyme";
  }
  static \u0275fac = function AssociationDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssociationDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssociationDashboardComponent, selectors: [["app-association-dashboard"]], decls: 17, vars: 1, consts: [[1, "dashboard-shell"], [1, "dashboard-hero"], [1, "hero-kicker"], [1, "hero-subtitle"], [1, "hero-actions"], ["routerLink", "/association/campaigns/new", 1, "primary"], ["routerLink", "/association/campaigns", 1, "ghost"], [1, "state-card"], [1, "state-card", "state-card--error"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-label"], [1, "stat-note"], [1, "dashboard-grid"], [1, "panel"], [1, "panel-header"], ["routerLink", "/association/donations", 1, "panel-link"], [1, "panel-body"], [1, "empty"], [1, "donation-list"], ["routerLink", "/association/campaigns", 1, "panel-link"], [1, "update-list"], [1, "donation-item"], [1, "donor"], [1, "meta"], [1, "donation-meta"], [1, "amount"], [1, "update-item"], [1, "update-title"]], template: function AssociationDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-association-navbar");
      \u0275\u0275elementStart(1, "section", 0)(2, "div", 1)(3, "div")(4, "p", 2);
      \u0275\u0275text(5, "Centre de pilotage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "Tableau de bord association");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 3);
      \u0275\u0275text(9, " Suivez vos campagnes, vos dons et votre impact en temps reel. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4)(11, "a", 5);
      \u0275\u0275text(12, "Creer une campagne");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 6);
      \u0275\u0275text(14, "Voir mes campagnes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(15, AssociationDashboardComponent_Conditional_15_Template, 2, 0, "div", 7)(16, AssociationDashboardComponent_Conditional_16_Template, 56, 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.loading() ? 15 : 16);
    }
  }, dependencies: [CommonModule, RouterLink, AssociationNavbarComponent, DecimalPipe, DatePipe], styles: ["\n.dashboard-shell[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 36px 24px 80px;\n}\n.dashboard-hero[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  padding: 32px;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(14, 165, 233, 0.12),\n      rgba(34, 197, 94, 0.18));\n  box-shadow: var(--shadow-md);\n}\n.hero-kicker[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 0.18em;\n  color: #0f172a;\n  font-weight: 600;\n}\n.dashboard-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 8px 0 6px;\n  font-family: var(--font-heading);\n  font-size: 32px;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 420px;\n  color: #475569;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.hero-actions[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%], \n.hero-actions[_ngcontent-%COMP%]   .ghost[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  border-radius: 12px;\n  font-weight: 600;\n}\n.hero-actions[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background: #0ea5e9;\n  color: #fff;\n  box-shadow: 0 14px 24px rgba(14, 165, 233, 0.25);\n}\n.hero-actions[_ngcontent-%COMP%]   .ghost[_ngcontent-%COMP%] {\n  border: 1px solid rgba(148, 163, 184, 0.4);\n  color: #0f172a;\n  background: #fff;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n  gap: 18px;\n  margin: 28px 0 32px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  padding: 20px 22px;\n  border-radius: 18px;\n  background: #fff;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.08);\n}\n.stat-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 8px 0 6px;\n  font-size: 24px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #64748b;\n}\n.stat-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 22px;\n}\n.panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  box-shadow: 0 20px 32px rgba(15, 23, 42, 0.08);\n  padding: 22px;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n}\n.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 13px;\n}\n.panel-link[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #0ea5e9;\n}\n.donation-list[_ngcontent-%COMP%], \n.update-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  gap: 12px;\n}\n.donation-item[_ngcontent-%COMP%], \n.update-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 14px;\n  background: rgba(226, 232, 240, 0.4);\n}\n.donor[_ngcontent-%COMP%], \n.update-title[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-weight: 600;\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n.amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n}\n.donation-meta[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.empty[_ngcontent-%COMP%], \n.state-card[_ngcontent-%COMP%] {\n  padding: 18px;\n  border-radius: 16px;\n  background: rgba(226, 232, 240, 0.4);\n  color: #475569;\n}\n.state-card--error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n  color: #b91c1c;\n}\n@media (max-width: 900px) {\n  .dashboard-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .hero-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=association-dashboard.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssociationDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-association-dashboard", imports: [CommonModule, RouterLink, AssociationNavbarComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-association-navbar></app-association-navbar>\r
\r
<section class="dashboard-shell">\r
  <div class="dashboard-hero">\r
    <div>\r
      <p class="hero-kicker">Centre de pilotage</p>\r
      <h1>Tableau de bord association</h1>\r
      <p class="hero-subtitle">\r
        Suivez vos campagnes, vos dons et votre impact en temps reel.\r
      </p>\r
    </div>\r
    <div class="hero-actions">\r
      <a class="primary" routerLink="/association/campaigns/new">Creer une campagne</a>\r
      <a class="ghost" routerLink="/association/campaigns">Voir mes campagnes</a>\r
    </div>\r
  </div>\r
\r
  @if (loading()) {\r
    <div class="state-card">Chargement du tableau de bord...</div>\r
  } @else {\r
    @if (error()) {\r
      <div class="state-card state-card--error">{{ error() }}</div>\r
    }\r
\r
    <div class="stats-grid">\r
      <article class="stat-card">\r
        <p class="stat-label">Total des dons</p>\r
        <h2>{{ formattedTotal() | number : '1.2-2' }} TND</h2>\r
        <span class="stat-note">Historique complet</span>\r
      </article>\r
      <article class="stat-card">\r
        <p class="stat-label">Campagnes</p>\r
        <h2>{{ stats()?.campaign_count ?? 0 }}</h2>\r
        <span class="stat-note">Toutes vos demandes</span>\r
      </article>\r
      <article class="stat-card">\r
        <p class="stat-label">Donateurs</p>\r
        <h2>{{ stats()?.donors_count ?? 0 }}</h2>\r
        <span class="stat-note">Communautes mobilisees</span>\r
      </article>\r
      <article class="stat-card">\r
        <p class="stat-label">Campagnes actives</p>\r
        <h2>{{ stats()?.active_campaigns ?? 0 }}</h2>\r
        <span class="stat-note">En cours de collecte</span>\r
      </article>\r
    </div>\r
\r
    <div class="dashboard-grid">\r
      <section class="panel">\r
        <header class="panel-header">\r
          <div>\r
            <h3>Derniers dons</h3>\r
            <p>Suivi rapide des contributions</p>\r
          </div>\r
          <a class="panel-link" routerLink="/association/donations">Voir les dons</a>\r
        </header>\r
\r
        <div class="panel-body">\r
          @if (recentDonations().length === 0) {\r
            <p class="empty">Aucun don recu pour le moment.</p>\r
          } @else {\r
            <ul class="donation-list">\r
              @for (donation of recentDonations(); track donation.id) {\r
                <li class="donation-item">\r
                  <div>\r
                    <p class="donor">{{ donationLabel(donation) }}</p>\r
                    <span class="meta">{{ donation.request_title || 'Don direct' }}</span>\r
                  </div>\r
                  <div class="donation-meta">\r
                    <span class="amount">+{{ donation.amount | number : '1.2-2' }} TND</span>\r
                    <span class="meta">{{ donation.created_at | date : 'dd MMM yyyy' }}</span>\r
                  </div>\r
                </li>\r
              }\r
            </ul>\r
          }\r
        </div>\r
      </section>\r
\r
      <section class="panel">\r
        <header class="panel-header">\r
          <div>\r
            <h3>Dernieres mises a jour</h3>\r
            <p>Transparence et informations publiees</p>\r
          </div>\r
          <a class="panel-link" routerLink="/association/campaigns">Publier une mise a jour</a>\r
        </header>\r
\r
        <div class="panel-body">\r
          @if (recentUpdates().length === 0) {\r
            <p class="empty">Aucune mise a jour publiee.</p>\r
          } @else {\r
            <ul class="update-list">\r
              @for (update of recentUpdates(); track update.id) {\r
                <li class="update-item">\r
                  <div>\r
                    <p class="update-title">{{ update.title }}</p>\r
                    <span class="meta">{{ update.request_title || 'Campagne' }}</span>\r
                  </div>\r
                  <span class="meta">{{ update.created_at | date : 'dd MMM yyyy' }}</span>\r
                </li>\r
              }\r
            </ul>\r
          }\r
        </div>\r
      </section>\r
    </div>\r
  }\r
</section>\r
`, styles: ["/* src/app/association/association-dashboard/association-dashboard.component.css */\n.dashboard-shell {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 36px 24px 80px;\n}\n.dashboard-hero {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  padding: 32px;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(14, 165, 233, 0.12),\n      rgba(34, 197, 94, 0.18));\n  box-shadow: var(--shadow-md);\n}\n.hero-kicker {\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 0.18em;\n  color: #0f172a;\n  font-weight: 600;\n}\n.dashboard-hero h1 {\n  margin: 8px 0 6px;\n  font-family: var(--font-heading);\n  font-size: 32px;\n}\n.hero-subtitle {\n  margin: 0;\n  max-width: 420px;\n  color: #475569;\n}\n.hero-actions {\n  display: flex;\n  gap: 12px;\n}\n.hero-actions .primary,\n.hero-actions .ghost {\n  padding: 12px 18px;\n  border-radius: 12px;\n  font-weight: 600;\n}\n.hero-actions .primary {\n  background: #0ea5e9;\n  color: #fff;\n  box-shadow: 0 14px 24px rgba(14, 165, 233, 0.25);\n}\n.hero-actions .ghost {\n  border: 1px solid rgba(148, 163, 184, 0.4);\n  color: #0f172a;\n  background: #fff;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n  gap: 18px;\n  margin: 28px 0 32px;\n}\n.stat-card {\n  padding: 20px 22px;\n  border-radius: 18px;\n  background: #fff;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.08);\n}\n.stat-card h2 {\n  margin: 8px 0 6px;\n  font-size: 24px;\n}\n.stat-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #64748b;\n}\n.stat-note {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.dashboard-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 22px;\n}\n.panel {\n  background: #fff;\n  border-radius: 20px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  box-shadow: 0 20px 32px rgba(15, 23, 42, 0.08);\n  padding: 22px;\n}\n.panel-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.panel-header h3 {\n  margin: 0 0 4px;\n}\n.panel-header p {\n  margin: 0;\n  color: #64748b;\n  font-size: 13px;\n}\n.panel-link {\n  font-size: 13px;\n  font-weight: 600;\n  color: #0ea5e9;\n}\n.donation-list,\n.update-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  gap: 12px;\n}\n.donation-item,\n.update-item {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 14px;\n  background: rgba(226, 232, 240, 0.4);\n}\n.donor,\n.update-title {\n  margin: 0 0 4px;\n  font-weight: 600;\n}\n.meta {\n  font-size: 12px;\n  color: #64748b;\n}\n.amount {\n  font-weight: 700;\n  color: #0f172a;\n}\n.donation-meta {\n  text-align: right;\n}\n.empty,\n.state-card {\n  padding: 18px;\n  border-radius: 16px;\n  background: rgba(226, 232, 240, 0.4);\n  color: #475569;\n}\n.state-card--error {\n  background: rgba(239, 68, 68, 0.08);\n  color: #b91c1c;\n}\n@media (max-width: 900px) {\n  .dashboard-hero {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .hero-actions {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=association-dashboard.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssociationDashboardComponent, { className: "AssociationDashboardComponent", filePath: "app/association/association-dashboard/association-dashboard.component.ts", lineNumber: 20 });
})();
export {
  AssociationDashboardComponent
};
//# sourceMappingURL=chunk-MB4DRGYN.js.map
