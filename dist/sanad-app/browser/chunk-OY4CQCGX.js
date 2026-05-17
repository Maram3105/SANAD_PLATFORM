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
  AssociationNavbarComponent
} from "./chunk-FJV2TO27.js";
import {
  AuthService,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DecimalPipe,
  Router,
  RouterLink,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BNXH775N.js";

// src/app/association/association-explorer/association-explorer.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AssociationExplorerComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275property("value", cat_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r1);
  }
}
function AssociationExplorerComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r2 = ctx.$implicit;
    \u0275\u0275property("value", loc_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r2);
  }
}
function AssociationExplorerComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const urg_r3 = ctx.$implicit;
    \u0275\u0275property("value", urg_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(urg_r3);
  }
}
function AssociationExplorerComponent_Conditional_61_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275element(2, "img", 32);
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 34)(6, "h3", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 37)(11, "div", 38);
    \u0275\u0275element(12, "i", 39);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 38);
    \u0275\u0275element(16, "i", 40);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 41)(20, "div", 42);
    \u0275\u0275element(21, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 44)(23, "span", 45);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 46);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 47)(30, "div", 48)(31, "button", 49);
    \u0275\u0275listener("click", function AssociationExplorerComponent_Conditional_61_For_2_Template_button_click_31_listener() {
      const request_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.collaborate(request_r5));
    });
    \u0275\u0275text(32, "Collaborer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 50);
    \u0275\u0275listener("click", function AssociationExplorerComponent_Conditional_61_For_2_Template_button_click_33_listener() {
      const request_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.supportRequest(request_r5));
    });
    \u0275\u0275text(34, "Soutenir cette demande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 51);
    \u0275\u0275listener("click", function AssociationExplorerComponent_Conditional_61_For_2_Template_button_click_35_listener() {
      const request_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.takeOwnership(request_r5));
    });
    \u0275\u0275text(36, "Prendre en charge");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 52)(38, "button", 50);
    \u0275\u0275listener("click", function AssociationExplorerComponent_Conditional_61_For_2_Template_button_click_38_listener() {
      const request_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.donateToRequest(request_r5));
    });
    \u0275\u0275text(39, "Faire un don");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 53);
    \u0275\u0275listener("click", function AssociationExplorerComponent_Conditional_61_For_2_Template_button_click_40_listener() {
      const request_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.contactRequester(request_r5));
    });
    \u0275\u0275text(41, "Contacter le demandeur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "button", 54);
    \u0275\u0275listener("click", function AssociationExplorerComponent_Conditional_61_For_2_Template_button_click_42_listener() {
      const request_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.createCampaignFromRequest(request_r5));
    });
    \u0275\u0275text(43, "Cr\xE9er une campagne bas\xE9e sur cette demande");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const request_r5 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", request_r5.image || "/assets/images/placeholders/request-placeholder.svg", \u0275\u0275sanitizeUrl)("alt", request_r5.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("urgency-high", request_r5.urgency === "high")("urgency-medium", request_r5.urgency === "medium")("urgency-low", request_r5.urgency === "low");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r5.getUrgencyLabel(request_r5.urgency), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(request_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r5.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(request_r5.organization);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(request_r5.location);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r5.getProgressPercent(request_r5.progress, request_r5.target), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(25, 17, request_r5.progress), "\u20AC");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("sur ", \u0275\u0275pipeBind1(28, 19, request_r5.target), "\u20AC");
  }
}
function AssociationExplorerComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275repeaterCreate(1, AssociationExplorerComponent_Conditional_61_For_2_Template, 44, 21, "div", 30, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.filteredRequests());
  }
}
function AssociationExplorerComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "Aucune demande trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Essayez d'ajuster vos filtres ou votre recherche");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 55);
    \u0275\u0275listener("click", function AssociationExplorerComponent_Conditional_62_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.clearFilters());
    });
    \u0275\u0275text(7, "R\xE9initialiser les filtres");
    \u0275\u0275elementEnd()();
  }
}
var AssociationExplorerComponent = class _AssociationExplorerComponent {
  router = inject(Router);
  auth = inject(AuthService);
  isAssociation = signal(false, ...ngDevMode ? [{ debugName: "isAssociation" }] : (
    /* istanbul ignore next */
    []
  ));
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedCategory = signal("", ...ngDevMode ? [{ debugName: "selectedCategory" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedLocation = signal("", ...ngDevMode ? [{ debugName: "selectedLocation" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedUrgency = signal("", ...ngDevMode ? [{ debugName: "selectedUrgency" }] : (
    /* istanbul ignore next */
    []
  ));
  sortBy = signal("recent", ...ngDevMode ? [{ debugName: "sortBy" }] : (
    /* istanbul ignore next */
    []
  ));
  categories = ["Alimentation", "Sant\xE9", "\xC9ducation", "Logement", "Emploi", "Bien-\xEAtre"];
  locations = ["Tunis", "Sfax", "Sousse", "Ariana", "Ben Arous", "Manouba"];
  urgencies = ["Basse", "Moyenne", "Haute"];
  allRequests = signal([
    {
      id: 1,
      title: "Aide alimentaire d'urgence",
      description: "Soutien pour les familles en situation de crise alimentaire.",
      organization: "Solidarit\xE9 Plus",
      location: "Tunis",
      category: "Alimentation",
      urgency: "high",
      progress: 850,
      target: 1200,
      image: "/assets/images/placeholders/request-placeholder.svg"
    },
    {
      id: 2,
      title: "Scolarit\xE9 pour enfants d\xE9favoris\xE9s",
      description: "Fournitures scolaires et tutorat pour enfants en besoin.",
      organization: "\xC9ducation pour Tous",
      location: "Sfax",
      category: "\xC9ducation",
      urgency: "medium",
      progress: 2340,
      target: 3e3,
      image: "/assets/images/placeholders/request-placeholder.svg"
    },
    {
      id: 3,
      title: "Aide m\xE9dicale urgente",
      description: "Couverture de soins pour personnes sans ressources.",
      organization: "Sant\xE9 Solidaire",
      location: "Sousse",
      category: "Sant\xE9",
      urgency: "high",
      progress: 1500,
      target: 2500,
      image: "/assets/images/placeholders/request-placeholder.svg"
    }
  ], ...ngDevMode ? [{ debugName: "allRequests" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredRequests = computed(() => {
    const searchQuery = this.searchQuery().toLowerCase();
    const selectedCategory = this.selectedCategory();
    const selectedLocation = this.selectedLocation();
    const selectedUrgency = this.selectedUrgency();
    const filtered = this.allRequests().filter((request) => {
      const matchesSearch = request.title.toLowerCase().includes(searchQuery) || request.organization.toLowerCase().includes(searchQuery);
      const matchesCategory = !selectedCategory || request.category === selectedCategory;
      const matchesLocation = !selectedLocation || request.location === selectedLocation;
      const matchesUrgency = !selectedUrgency || this.getUrgencyLabel(request.urgency) === selectedUrgency;
      return matchesSearch && matchesCategory && matchesLocation && matchesUrgency;
    });
    switch (this.sortBy()) {
      case "most-funded":
        return [...filtered].sort((a, b) => {
          const progressA = a.progress / a.target * 100;
          const progressB = b.progress / b.target * 100;
          return progressB - progressA;
        });
      case "most-urgent":
        return [...filtered].sort((a, b) => {
          const urgencyOrder = { high: 0, medium: 1, low: 2 };
          return urgencyOrder[a.urgency] - urgencyOrder[b.urgency];
        });
      default:
        return filtered;
    }
  }, ...ngDevMode ? [{ debugName: "filteredRequests" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.isAssociation.set(this.auth.getRole() === "association");
    if (!this.isAssociation()) {
      this.router.navigateByUrl("/explorer");
    }
  }
  getUrgencyLabel(urgency) {
    switch (urgency) {
      case "high":
        return "Haute";
      case "medium":
        return "Moyenne";
      default:
        return "Basse";
    }
  }
  getProgressPercent(progress, target) {
    return progress / target * 100;
  }
  clearFilters() {
    this.searchQuery.set("");
    this.selectedCategory.set("");
    this.selectedLocation.set("");
    this.selectedUrgency.set("");
    this.sortBy.set("recent");
  }
  openRequest(requestId) {
    this.router.navigate(["/request-detail", requestId]);
  }
  collaborate(request) {
    this.router.navigate(["/request-detail", request.id]);
  }
  supportRequest(request) {
    this.router.navigate(["/request-detail", request.id]);
  }
  takeOwnership(request) {
    this.router.navigate(["/request-detail", request.id]);
  }
  donateToRequest(request) {
    this.router.navigate(["/request-detail", request.id]);
  }
  contactRequester(request) {
    const subject = encodeURIComponent(`Demande ${request.title}`);
    window.location.href = `mailto:support@sanad.tn?subject=${subject}`;
  }
  createCampaignFromRequest(request) {
    this.router.navigate(["/association/campaigns/new"], {
      queryParams: { parentRequestId: request.id }
    });
  }
  static \u0275fac = function AssociationExplorerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssociationExplorerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssociationExplorerComponent, selectors: [["app-association-explorer"]], decls: 63, vars: 7, consts: [[1, "explorer-header"], [1, "container"], [1, "header-content"], ["routerLink", "/association/campaigns/new", 1, "header-cta"], [1, "search-section"], [1, "search-bar"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Rechercher une demande ou une association...", 3, "ngModelChange", "ngModel"], [1, "filters-section"], [1, "filters-bar"], [1, "filter-group"], ["for", "category"], ["id", "category", 1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["for", "location"], ["id", "location", 1, "filter-select", 3, "ngModelChange", "ngModel"], ["for", "urgency"], ["id", "urgency", 1, "filter-select", 3, "ngModelChange", "ngModel"], ["for", "sort"], ["id", "sort", 1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", "recent"], ["value", "most-funded"], ["value", "most-urgent"], [1, "btn-clear", 3, "click"], [1, "fas", "fa-times"], [1, "results-info"], [1, "requests-section"], [1, "requests-grid"], [1, "no-results"], [1, "request-card"], [1, "request-image"], ["loading", "lazy", 3, "src", "alt"], [1, "urgency-badge"], [1, "request-content"], [1, "request-title"], [1, "request-description"], [1, "request-meta"], [1, "meta-item"], [1, "fas", "fa-building"], [1, "fas", "fa-map-marker-alt"], [1, "progress-section"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "amount"], [1, "target"], [1, "association-actions"], [1, "primary-actions"], ["type", "button", 1, "btn-primary", 3, "click"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "button", 1, "btn-outline", 3, "click"], [1, "secondary-actions"], ["type", "button", 1, "btn-link", 3, "click"], ["type", "button", 1, "btn-ghost", 3, "click"], [1, "btn-secondary", 3, "click"]], template: function AssociationExplorerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-association-navbar");
      \u0275\u0275elementStart(1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "div")(5, "h1");
      \u0275\u0275text(6, "Explorer les demandes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "Parcourez les demandes et choisissez comment votre association peut collaborer ou construire une nouvelle campagne.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "a", 3);
      \u0275\u0275text(10, "Cr\xE9er une campagne");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "section", 4)(12, "div", 1)(13, "div", 5);
      \u0275\u0275element(14, "i", 6);
      \u0275\u0275elementStart(15, "input", 7);
      \u0275\u0275listener("ngModelChange", function AssociationExplorerComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.searchQuery.set($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(16, "section", 8)(17, "div", 1)(18, "div", 9)(19, "div", 10)(20, "label", 11);
      \u0275\u0275text(21, "Cat\xE9gorie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "select", 12);
      \u0275\u0275listener("ngModelChange", function AssociationExplorerComponent_Template_select_ngModelChange_22_listener($event) {
        return ctx.selectedCategory.set($event);
      });
      \u0275\u0275elementStart(23, "option", 13);
      \u0275\u0275text(24, "Toutes les cat\xE9gories");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(25, AssociationExplorerComponent_For_26_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 10)(28, "label", 15);
      \u0275\u0275text(29, "Localisation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "select", 16);
      \u0275\u0275listener("ngModelChange", function AssociationExplorerComponent_Template_select_ngModelChange_30_listener($event) {
        return ctx.selectedLocation.set($event);
      });
      \u0275\u0275elementStart(31, "option", 13);
      \u0275\u0275text(32, "Toutes les villes");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(33, AssociationExplorerComponent_For_34_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 10)(36, "label", 17);
      \u0275\u0275text(37, "Urgence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "select", 18);
      \u0275\u0275listener("ngModelChange", function AssociationExplorerComponent_Template_select_ngModelChange_38_listener($event) {
        return ctx.selectedUrgency.set($event);
      });
      \u0275\u0275elementStart(39, "option", 13);
      \u0275\u0275text(40, "Toutes les urgences");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(41, AssociationExplorerComponent_For_42_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 10)(44, "label", 19);
      \u0275\u0275text(45, "Tri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "select", 20);
      \u0275\u0275listener("ngModelChange", function AssociationExplorerComponent_Template_select_ngModelChange_46_listener($event) {
        return ctx.sortBy.set($event);
      });
      \u0275\u0275elementStart(47, "option", 21);
      \u0275\u0275text(48, "Plus r\xE9cent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "option", 22);
      \u0275\u0275text(50, "Bien financ\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "option", 23);
      \u0275\u0275text(52, "Plus urgent");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "button", 24);
      \u0275\u0275listener("click", function AssociationExplorerComponent_Template_button_click_53_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275element(54, "i", 25);
      \u0275\u0275text(55, " R\xE9initialiser ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 26)(57, "span");
      \u0275\u0275text(58);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(59, "section", 27)(60, "div", 1);
      \u0275\u0275conditionalCreate(61, AssociationExplorerComponent_Conditional_61_Template, 3, 0, "div", 28)(62, AssociationExplorerComponent_Conditional_62_Template, 8, 0, "div", 29);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275property("ngModel", ctx.searchQuery());
      \u0275\u0275advance(7);
      \u0275\u0275property("ngModel", ctx.selectedCategory());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.selectedLocation());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.locations);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.selectedUrgency());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.urgencies);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.sortBy());
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1("", ctx.filteredRequests().length, " demande(s) trouv\xE9e(s)");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.filteredRequests().length > 0 ? 61 : 62);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, AssociationNavbarComponent, DecimalPipe], styles: ["\n.container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.explorer-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1d4ed8 50%,\n      #22c55e 100%);\n  color: white;\n  padding: 60px 20px;\n  text-align: center;\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n}\n.explorer-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 800;\n  margin-bottom: 12px;\n  letter-spacing: -0.5px;\n}\n.explorer-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0.95;\n  max-width: 600px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n.header-cta[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  color: #fff;\n  padding: 12px 20px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 700;\n  white-space: nowrap;\n}\n@media (max-width: 900px) {\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n.search-section[_ngcontent-%COMP%] {\n  padding: 32px 20px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: white;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px 20px;\n  transition: all 0.2s ease;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.search-bar[_ngcontent-%COMP%]:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.search-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 16px;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 15px;\n  background: transparent;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.filters-section[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 60px;\n  background: white;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 16px 20px;\n  z-index: 50;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 150px;\n}\n.filter-select[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.btn-clear[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background: #f3f4f6;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  color: #6b7280;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-clear[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n  color: #374151;\n}\n.results-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  padding: 0 0 8px 0;\n}\n.requests-section[_ngcontent-%COMP%] {\n  padding: 48px 20px;\n  background: #f9fafb;\n  min-height: 60vh;\n}\n.requests-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 24px;\n}\n.request-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n}\n.request-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);\n  border-color: #2563eb;\n}\n.request-image[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 180px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.05),\n      rgba(34, 197, 94, 0.05));\n}\n.favorite-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: rgba(255, 255, 255, 0.9);\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  cursor: pointer;\n  color: #94a3b8;\n  transition: all 0.2s ease;\n}\n.favorite-btn.active[_ngcontent-%COMP%] {\n  color: #ef4444;\n  transform: scale(1.05);\n}\n.request-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.request-card[_ngcontent-%COMP%]:hover   .request-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.urgency-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 6px 12px;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.urgency-high[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.95);\n  color: white;\n}\n.urgency-medium[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.95);\n  color: white;\n}\n.urgency-low[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.95);\n  color: white;\n}\n.request-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.request-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n  line-height: 1.4;\n}\n.request-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 12px;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.request-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 12px;\n  font-size: 13px;\n  color: #6b7280;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-size: 12px;\n}\n.progress-section[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #22c55e);\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n.progress-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n}\n.progress-text[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #2563eb;\n}\n.progress-text[_ngcontent-%COMP%]   .target[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.request-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: auto;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 14px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  text-decoration: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8);\n  color: white;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #2563eb;\n  border: 2px solid #2563eb;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n}\n.association-actions[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  margin-top: auto;\n}\n.primary-actions[_ngcontent-%COMP%], \n.secondary-actions[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 8px;\n  border: 1px solid rgba(148, 163, 184, 0.8);\n  background: #fff;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 8px;\n  border: 1px dashed rgba(148, 163, 184, 0.7);\n  background: rgba(226, 232, 240, 0.4);\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  text-align: left;\n}\n.btn-link[_ngcontent-%COMP%] {\n  padding: 0;\n  border: none;\n  background: none;\n  color: #2563eb;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  text-align: left;\n}\n.no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #6b7280;\n}\n.no-results[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #d1d5db;\n  margin-bottom: 16px;\n  display: block;\n}\n.no-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n}\n.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .explorer-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .explorer-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .filters-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-group[_ngcontent-%COMP%], \n   .filter-select[_ngcontent-%COMP%], \n   .btn-clear[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .requests-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .request-actions[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n}\n@media (max-width: 480px) {\n  .explorer-header[_ngcontent-%COMP%] {\n    padding: 40px 16px;\n  }\n  .explorer-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .search-section[_ngcontent-%COMP%], \n   .filters-section[_ngcontent-%COMP%] {\n    padding: 16px 16px;\n  }\n}\n/*# sourceMappingURL=association-explorer.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssociationExplorerComponent, [{
    type: Component,
    args: [{ selector: "app-association-explorer", standalone: true, imports: [CommonModule, FormsModule, RouterLink, AssociationNavbarComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-association-navbar></app-association-navbar>\r
\r
<section class="explorer-header">\r
  <div class="container">\r
    <div class="header-content">\r
      <div>\r
        <h1>Explorer les demandes</h1>\r
        <p>Parcourez les demandes et choisissez comment votre association peut collaborer ou construire une nouvelle campagne.</p>\r
      </div>\r
      <a class="header-cta" routerLink="/association/campaigns/new">Cr\xE9er une campagne</a>\r
    </div>\r
  </div>\r
</section>\r
\r
<section class="search-section">\r
  <div class="container">\r
    <div class="search-bar">\r
      <i class="fas fa-search"></i>\r
      <input\r
        type="text"\r
        placeholder="Rechercher une demande ou une association..."\r
        [ngModel]="searchQuery()"\r
        (ngModelChange)="searchQuery.set($event)"\r
      />\r
    </div>\r
  </div>\r
</section>\r
\r
<section class="filters-section">\r
  <div class="container">\r
    <div class="filters-bar">\r
      <div class="filter-group">\r
        <label for="category">Cat\xE9gorie</label>\r
        <select\r
          id="category"\r
          [ngModel]="selectedCategory()"\r
          (ngModelChange)="selectedCategory.set($event)"\r
          class="filter-select"\r
        >\r
          <option value="">Toutes les cat\xE9gories</option>\r
          @for (cat of categories; track cat) {\r
            <option [value]="cat">{{ cat }}</option>\r
          }\r
        </select>\r
      </div>\r
\r
      <div class="filter-group">\r
        <label for="location">Localisation</label>\r
        <select\r
          id="location"\r
          [ngModel]="selectedLocation()"\r
          (ngModelChange)="selectedLocation.set($event)"\r
          class="filter-select"\r
        >\r
          <option value="">Toutes les villes</option>\r
          @for (loc of locations; track loc) {\r
            <option [value]="loc">{{ loc }}</option>\r
          }\r
        </select>\r
      </div>\r
\r
      <div class="filter-group">\r
        <label for="urgency">Urgence</label>\r
        <select\r
          id="urgency"\r
          [ngModel]="selectedUrgency()"\r
          (ngModelChange)="selectedUrgency.set($event)"\r
          class="filter-select"\r
        >\r
          <option value="">Toutes les urgences</option>\r
          @for (urg of urgencies; track urg) {\r
            <option [value]="urg">{{ urg }}</option>\r
          }\r
        </select>\r
      </div>\r
\r
      <div class="filter-group">\r
        <label for="sort">Tri</label>\r
        <select\r
          id="sort"\r
          [ngModel]="sortBy()"\r
          (ngModelChange)="sortBy.set($event)"\r
          class="filter-select"\r
        >\r
          <option value="recent">Plus r\xE9cent</option>\r
          <option value="most-funded">Bien financ\xE9</option>\r
          <option value="most-urgent">Plus urgent</option>\r
        </select>\r
      </div>\r
\r
      <button class="btn-clear" (click)="clearFilters()">\r
        <i class="fas fa-times"></i> R\xE9initialiser\r
      </button>\r
    </div>\r
\r
    <div class="results-info">\r
      <span>{{ filteredRequests().length }} demande(s) trouv\xE9e(s)</span>\r
    </div>\r
  </div>\r
</section>\r
\r
<section class="requests-section">\r
  <div class="container">\r
    @if (filteredRequests().length > 0) {\r
      <div class="requests-grid">\r
        @for (request of filteredRequests(); track request.id) {\r
          <div class="request-card">\r
            <div class="request-image">\r
              <img\r
                [src]="request.image || '/assets/images/placeholders/request-placeholder.svg'"\r
                [alt]="request.title"\r
                loading="lazy"\r
              />\r
              <span\r
                class="urgency-badge"\r
                [class.urgency-high]="request.urgency === 'high'"\r
                [class.urgency-medium]="request.urgency === 'medium'"\r
                [class.urgency-low]="request.urgency === 'low'"\r
              >\r
                {{ getUrgencyLabel(request.urgency) }}\r
              </span>\r
            </div>\r
\r
            <div class="request-content">\r
              <h3 class="request-title">{{ request.title }}</h3>\r
              <p class="request-description">{{ request.description }}</p>\r
\r
              <div class="request-meta">\r
                <div class="meta-item">\r
                  <i class="fas fa-building"></i>\r
                  <span>{{ request.organization }}</span>\r
                </div>\r
                <div class="meta-item">\r
                  <i class="fas fa-map-marker-alt"></i>\r
                  <span>{{ request.location }}</span>\r
                </div>\r
              </div>\r
\r
              <div class="progress-section">\r
                <div class="progress-bar">\r
                  <div\r
                    class="progress-fill"\r
                    [style.width.%]="getProgressPercent(request.progress, request.target)"\r
                  ></div>\r
                </div>\r
                <div class="progress-text">\r
                  <span class="amount">{{ request.progress | number }}\u20AC</span>\r
                  <span class="target">sur {{ request.target | number }}\u20AC</span>\r
                </div>\r
              </div>\r
\r
              <div class="association-actions">\r
                <div class="primary-actions">\r
                  <button class="btn-primary" type="button" (click)="collaborate(request)">Collaborer</button>\r
                  <button class="btn-secondary" type="button" (click)="supportRequest(request)">Soutenir cette demande</button>\r
                  <button class="btn-outline" type="button" (click)="takeOwnership(request)">Prendre en charge</button>\r
                </div>\r
                <div class="secondary-actions">\r
                  <button class="btn-secondary" type="button" (click)="donateToRequest(request)">Faire un don</button>\r
                  <button class="btn-link" type="button" (click)="contactRequester(request)">Contacter le demandeur</button>\r
                </div>\r
                <button class="btn-ghost" type="button" (click)="createCampaignFromRequest(request)">Cr\xE9er une campagne bas\xE9e sur cette demande</button>\r
              </div>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    } @else {\r
      <div class="no-results">\r
        <i class="fas fa-search"></i>\r
        <h3>Aucune demande trouv\xE9e</h3>\r
        <p>Essayez d'ajuster vos filtres ou votre recherche</p>\r
        <button class="btn-secondary" (click)="clearFilters()">R\xE9initialiser les filtres</button>\r
      </div>\r
    }\r
  </div>\r
</section>\r
`, styles: ["/* src/app/association/association-explorer/association-explorer.component.css */\n.container {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.explorer-header {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1d4ed8 50%,\n      #22c55e 100%);\n  color: white;\n  padding: 60px 20px;\n  text-align: center;\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n}\n.explorer-header h1 {\n  font-size: 40px;\n  font-weight: 800;\n  margin-bottom: 12px;\n  letter-spacing: -0.5px;\n}\n.explorer-header p {\n  font-size: 18px;\n  opacity: 0.95;\n  max-width: 600px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n.header-cta {\n  background: rgba(255, 255, 255, 0.18);\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  color: #fff;\n  padding: 12px 20px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 700;\n  white-space: nowrap;\n}\n@media (max-width: 900px) {\n  .header-content {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n.search-section {\n  padding: 32px 20px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.search-bar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: white;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px 20px;\n  transition: all 0.2s ease;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.search-bar:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.search-bar i {\n  color: #9ca3af;\n  font-size: 16px;\n}\n.search-bar input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 15px;\n  background: transparent;\n}\n.search-bar input::placeholder {\n  color: #9ca3af;\n}\n.filters-section {\n  position: sticky;\n  top: 60px;\n  background: white;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 16px 20px;\n  z-index: 50;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);\n}\n.filters-bar {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.filter-group label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.filter-select {\n  padding: 10px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 150px;\n}\n.filter-select:hover {\n  border-color: #2563eb;\n}\n.filter-select:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.btn-clear {\n  padding: 10px 16px;\n  background: #f3f4f6;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  color: #6b7280;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-clear:hover {\n  background: #e5e7eb;\n  color: #374151;\n}\n.results-info {\n  font-size: 14px;\n  color: #6b7280;\n  padding: 0 0 8px 0;\n}\n.requests-section {\n  padding: 48px 20px;\n  background: #f9fafb;\n  min-height: 60vh;\n}\n.requests-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 24px;\n}\n.request-card {\n  background: white;\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n}\n.request-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);\n  border-color: #2563eb;\n}\n.request-image {\n  position: relative;\n  width: 100%;\n  height: 180px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.05),\n      rgba(34, 197, 94, 0.05));\n}\n.favorite-btn {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: rgba(255, 255, 255, 0.9);\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  cursor: pointer;\n  color: #94a3b8;\n  transition: all 0.2s ease;\n}\n.favorite-btn.active {\n  color: #ef4444;\n  transform: scale(1.05);\n}\n.request-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.request-card:hover .request-image img {\n  transform: scale(1.05);\n}\n.urgency-badge {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 6px 12px;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.urgency-high {\n  background: rgba(239, 68, 68, 0.95);\n  color: white;\n}\n.urgency-medium {\n  background: rgba(245, 158, 11, 0.95);\n  color: white;\n}\n.urgency-low {\n  background: rgba(34, 197, 94, 0.95);\n  color: white;\n}\n.request-content {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.request-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n  line-height: 1.4;\n}\n.request-description {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 12px;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.request-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 12px;\n  font-size: 13px;\n  color: #6b7280;\n}\n.meta-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.meta-item i {\n  color: #2563eb;\n  font-size: 12px;\n}\n.progress-section {\n  margin-bottom: 16px;\n}\n.progress-bar {\n  width: 100%;\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #22c55e);\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n.progress-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n}\n.progress-text .amount {\n  font-weight: 700;\n  color: #2563eb;\n}\n.progress-text .target {\n  color: #9ca3af;\n}\n.request-actions {\n  display: flex;\n  gap: 12px;\n  margin-top: auto;\n}\n.btn-primary,\n.btn-secondary {\n  flex: 1;\n  padding: 10px 14px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  text-decoration: none;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8);\n  color: white;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);\n}\n.btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);\n}\n.btn-secondary {\n  background: white;\n  color: #2563eb;\n  border: 2px solid #2563eb;\n}\n.btn-secondary:hover {\n  background: #f0f4ff;\n}\n.association-actions {\n  display: grid;\n  gap: 10px;\n  margin-top: auto;\n}\n.primary-actions,\n.secondary-actions {\n  display: grid;\n  gap: 8px;\n}\n.btn-outline {\n  padding: 10px 14px;\n  border-radius: 8px;\n  border: 1px solid rgba(148, 163, 184, 0.8);\n  background: #fff;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-ghost {\n  padding: 10px 14px;\n  border-radius: 8px;\n  border: 1px dashed rgba(148, 163, 184, 0.7);\n  background: rgba(226, 232, 240, 0.4);\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  text-align: left;\n}\n.btn-link {\n  padding: 0;\n  border: none;\n  background: none;\n  color: #2563eb;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  text-align: left;\n}\n.no-results {\n  text-align: center;\n  padding: 60px 20px;\n  color: #6b7280;\n}\n.no-results i {\n  font-size: 48px;\n  color: #d1d5db;\n  margin-bottom: 16px;\n  display: block;\n}\n.no-results h3 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n}\n.no-results p {\n  margin-bottom: 24px;\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .explorer-header h1 {\n    font-size: 28px;\n  }\n  .explorer-header p {\n    font-size: 15px;\n  }\n  .filters-bar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-group,\n  .filter-select,\n  .btn-clear {\n    width: 100%;\n  }\n  .requests-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .request-actions {\n    gap: 8px;\n  }\n}\n@media (max-width: 480px) {\n  .explorer-header {\n    padding: 40px 16px;\n  }\n  .explorer-header h1 {\n    font-size: 24px;\n  }\n  .search-section,\n  .filters-section {\n    padding: 16px 16px;\n  }\n}\n/*# sourceMappingURL=association-explorer.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssociationExplorerComponent, { className: "AssociationExplorerComponent", filePath: "app/association/association-explorer/association-explorer.component.ts", lineNumber: 30 });
})();
export {
  AssociationExplorerComponent
};
//# sourceMappingURL=chunk-OY4CQCGX.js.map
