import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
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
  DatePipe,
  DecimalPipe,
  EventEmitter,
  HttpClient,
  HttpHeaders,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  Output,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  __spreadProps,
  __spreadValues,
  bootstrapApplication,
  computed,
  forkJoin,
  inject,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BNXH775N.js";

// src/app/shared/navbar.component.ts
var _c0 = () => ({ exact: true });
var NavbarComponent = class _NavbarComponent {
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], decls: 20, vars: 6, consts: [[1, "navbar"], [1, "navbar-container"], [1, "navbar-left"], ["routerLink", "/", 1, "logo"], [1, "logo-icon"], [1, "logo-text"], [1, "navbar-menu"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/explorer", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/associations", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "navbar-auth"], ["routerLink", "/auth/register", 1, "btn-cta"], ["routerLink", "/auth/login", 1, "btn-link"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "span", 4);
      \u0275\u0275text(5, "S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7, "Sanad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "a", 7);
      \u0275\u0275text(10, " Accueil ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 8);
      \u0275\u0275text(12, " Explorer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 9);
      \u0275\u0275text(14, " Associations ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 10)(16, "a", 11);
      \u0275\u0275text(17, "S'inscrire");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 12);
      \u0275\u0275text(19, "Se connecter");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(3, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c0));
    }
  }, dependencies: [CommonModule, RouterLink, RouterLinkActive], styles: ['\n.navbar[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid rgba(37, 99, 235, 0.08);\n  padding: 12px 0;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);\n}\n.navbar-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 40px;\n}\n.navbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 48px;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  font-weight: 700;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #22c55e);\n  color: white;\n  font-size: 18px;\n  font-weight: 800;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #1e293b;\n  letter-spacing: -0.5px;\n}\n.logo[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.navbar-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 32px;\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: #475569;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  position: relative;\n  padding-bottom: 4px;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n}\n.nav-link[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -4px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #22c55e);\n  transition: width 0.3s ease;\n}\n.nav-link[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-weight: 600;\n}\n.nav-link.active[_ngcontent-%COMP%]::after {\n  width: 100%;\n}\n.navbar-auth[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.btn-link[_ngcontent-%COMP%] {\n  color: #475569;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 16px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #2563eb;\n}\n.btn-cta[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8);\n  color: white;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);\n}\n.btn-cta[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);\n}\n@media (max-width: 1024px) {\n  .navbar-left[_ngcontent-%COMP%] {\n    gap: 32px;\n  }\n  .navbar-menu[_ngcontent-%COMP%] {\n    gap: 24px;\n  }\n}\n@media (max-width: 768px) {\n  .navbar-container[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .navbar-left[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n  .navbar-menu[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .nav-link[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .btn-cta[_ngcontent-%COMP%], \n   .btn-link[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], template: `
    <nav class="navbar">
      <div class="navbar-container">
        <!-- Left Section: Logo + Navigation -->
        <div class="navbar-left">
          <!-- Logo -->
          <a routerLink="/" class="logo">
            <span class="logo-icon">S</span>
            <span class="logo-text">Sanad</span>
          </a>

          <!-- Navigation Links -->
          <div class="navbar-menu">
            <a 
              routerLink="/" 
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="nav-link"
            >
              Accueil
            </a>
            <a 
              routerLink="/explorer" 
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="nav-link"
            >
              Explorer
            </a>
            <a 
              routerLink="/associations" 
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="nav-link"
            >
              Associations
            </a>
          </div>
        </div>

        <!-- Right Section: Auth Buttons -->
        <div class="navbar-auth">
          <a routerLink="/auth/register" class="btn-cta">S'inscrire</a>
          <a routerLink="/auth/login" class="btn-link">Se connecter</a>
        </div>
      </div>
    </nav>
  `, styles: ['/* src/app/shared/navbar.component.css */\n.navbar {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid rgba(37, 99, 235, 0.08);\n  padding: 12px 0;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);\n}\n.navbar-container {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 40px;\n}\n.navbar-left {\n  display: flex;\n  align-items: center;\n  gap: 48px;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  font-weight: 700;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.logo-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #22c55e);\n  color: white;\n  font-size: 18px;\n  font-weight: 800;\n}\n.logo-text {\n  font-size: 18px;\n  color: #1e293b;\n  letter-spacing: -0.5px;\n}\n.logo:hover {\n  transform: translateY(-2px);\n}\n.navbar-menu {\n  display: flex;\n  align-items: center;\n  gap: 32px;\n}\n.nav-link {\n  color: #475569;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  position: relative;\n  padding-bottom: 4px;\n}\n.nav-link:hover {\n  color: #2563eb;\n}\n.nav-link::after {\n  content: "";\n  position: absolute;\n  bottom: -4px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #22c55e);\n  transition: width 0.3s ease;\n}\n.nav-link:hover::after {\n  width: 100%;\n}\n.nav-link.active {\n  color: #2563eb;\n  font-weight: 600;\n}\n.nav-link.active::after {\n  width: 100%;\n}\n.navbar-auth {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.btn-link {\n  color: #475569;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 16px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.btn-link:hover {\n  background: #f1f5f9;\n  color: #2563eb;\n}\n.btn-cta {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8);\n  color: white;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);\n}\n.btn-cta:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);\n}\n@media (max-width: 1024px) {\n  .navbar-left {\n    gap: 32px;\n  }\n  .navbar-menu {\n    gap: 24px;\n  }\n}\n@media (max-width: 768px) {\n  .navbar-container {\n    padding: 0 16px;\n  }\n  .navbar-left {\n    gap: 20px;\n  }\n  .navbar-menu {\n    gap: 16px;\n  }\n  .nav-link {\n    font-size: 14px;\n  }\n  .btn-cta,\n  .btn-link {\n    padding: 8px 12px;\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "app/shared/navbar.component.ts", lineNumber: 59 });
})();

// src/app/home/home.component.ts
function HomeComponent_div_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69);
    \u0275\u0275element(2, "img", 70);
    \u0275\u0275elementStart(3, "span", 71);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 72)(6, "h3", 73);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 74);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 75);
    \u0275\u0275element(11, "i", 76);
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 77)(15, "div", 78);
    \u0275\u0275element(16, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 80)(18, "span", 81);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 82);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "a", 83);
    \u0275\u0275text(25, " Voir plus ");
    \u0275\u0275element(26, "i", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const request_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", request_r1.image || "/assets/images/placeholders/request-placeholder.svg", \u0275\u0275sanitizeUrl)("alt", request_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r1.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(request_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r1.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(request_r1.organization);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.getProgressPercent(request_r1.progress, request_r1.target), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(20, 11, request_r1.progress), "\u20AC sur ", \u0275\u0275pipeBind1(21, 13, request_r1.target), "\u20AC");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.getProgressPercent(request_r1.progress, request_r1.target), "%");
  }
}
var HomeComponent = class _HomeComponent {
  featuredRequests = [
    {
      id: 1,
      title: "Aide alimentaire d'urgence",
      description: "Soutien pour les familles en situation de crise",
      organization: "Solidarit\xE9 Plus",
      progress: 850,
      target: 1200,
      category: "Alimentation",
      image: "/assets/images/placeholders/request-placeholder.svg"
    },
    {
      id: 2,
      title: "Scolarit\xE9 pour enfants en difficult\xE9",
      description: "Fournitures scolaires et tutorat pour enfants d\xE9favoris\xE9s",
      organization: "\xC9ducation pour Tous",
      progress: 2340,
      target: 3e3,
      category: "\xC9ducation",
      image: "/assets/images/placeholders/request-placeholder.svg"
    },
    {
      id: 3,
      title: "Aide m\xE9dicale urgente",
      description: "Couverture de soins pour personnes sans ressources",
      organization: "Sant\xE9 Solidaire",
      progress: 1500,
      target: 2500,
      category: "Sant\xE9",
      image: "/assets/images/placeholders/request-placeholder.svg"
    },
    {
      id: 4,
      title: "H\xE9bergement d'urgence",
      description: "Refuge temporaire et r\xE9insertion pour sans-abri",
      organization: "Chez Nous",
      progress: 3200,
      target: 5e3,
      category: "Logement",
      image: "/assets/images/placeholders/request-placeholder.svg"
    },
    {
      id: 5,
      title: "Formation professionnelle",
      description: "Cours et certifications pour r\xE9insertion professionnelle",
      organization: "Avenir Pro",
      progress: 1800,
      target: 2400,
      category: "Emploi",
      image: "/assets/images/placeholders/request-placeholder.svg"
    },
    {
      id: 6,
      title: "Soutien psychosocial",
      description: "Accompagnement et ressources en sant\xE9 mentale",
      organization: "Bien-\xCAtre",
      progress: 900,
      target: 1500,
      category: "Bien-\xEAtre",
      image: "/assets/images/placeholders/request-placeholder.svg"
    }
  ];
  getProgressPercent(progress, target) {
    return Math.round(progress / target * 100);
  }
  ngOnInit() {
    document.documentElement.style.scrollBehavior = "smooth";
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 224, vars: 1, consts: [[1, "hero"], [1, "hero-content"], [1, "hero-text"], [1, "hero-title"], [1, "hero-description"], [1, "hero-ctas"], ["href", "#featured", 1, "cta-primary"], [1, "fas", "fa-search"], ["routerLink", "/auth/register", 1, "cta-secondary"], [1, "fas", "fa-user-plus"], [1, "hero-visual"], [1, "hero-decoration"], [1, "circle", "circle-1"], [1, "circle", "circle-2"], [1, "circle", "circle-3"], [1, "benefits"], [1, "container"], [1, "section-title"], [1, "section-subtitle"], [1, "benefits-grid"], [1, "benefit-card"], [1, "benefit-icon"], [1, "fas", "fa-hand-holding-heart"], [1, "fas", "fa-chart-pie"], [1, "fas", "fa-users"], [1, "fas", "fa-shield-alt"], [1, "impact"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-number"], [1, "stat-label"], [1, "how-it-works"], [1, "steps-container"], [1, "step"], [1, "step-number"], [1, "step-icon"], [1, "fas", "fa-compass"], [1, "step-arrow"], [1, "fas", "fa-arrow-right"], [1, "fas", "fa-heart"], [1, "fas", "fa-chart-line"], ["id", "featured", 1, "featured"], [1, "requests-grid"], ["class", "request-card", 4, "ngFor", "ngForOf"], [1, "featured-cta"], ["href", "#featured", 1, "btn-cta-secondary"], [1, "trust"], [1, "trust-grid"], [1, "trust-item"], [1, "trust-icon"], [1, "fas", "fa-lock"], [1, "fas", "fa-check-circle"], [1, "fas", "fa-eye"], [1, "final-cta"], [1, "cta-content"], [1, "final-buttons"], ["routerLink", "/auth/register", 1, "btn-primary-large"], ["href", "#featured", 1, "btn-secondary-large"], [1, "footer"], [1, "footer-content"], [1, "footer-section"], ["href", "#"], [1, "social-links"], [1, "fab", "fa-facebook"], [1, "fab", "fa-twitter"], [1, "fab", "fa-linkedin"], [1, "fab", "fa-instagram"], [1, "footer-bottom"], [1, "request-card"], [1, "request-image"], ["loading", "lazy", 3, "src", "alt"], [1, "category-badge"], [1, "request-content"], [1, "request-title"], [1, "request-description"], [1, "request-org"], [1, "fas", "fa-building"], [1, "progress-section"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "progress-amount"], [1, "progress-percent"], ["href", "javascript:;", 1, "btn-view"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar");
      \u0275\u0275elementStart(1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "h1", 3);
      \u0275\u0275text(5, "Ensemble, nous pouvons faire la diff\xE9rence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, " Sanad connecte ceux qui ont besoin d'aide avec une communaut\xE9 engag\xE9e. D\xE9couvrez des demandes, soutenez des causes qui vous touchent, et suivez l'impact en temps r\xE9el. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "a", 6);
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275text(11, " Explorer les demandes ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 8);
      \u0275\u0275element(13, "i", 9);
      \u0275\u0275text(14, " S'inscrire maintenant ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 10)(16, "div", 11);
      \u0275\u0275element(17, "div", 12)(18, "div", 13)(19, "div", 14);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(20, "section", 15)(21, "div", 16)(22, "h2", 17);
      \u0275\u0275text(23, "Pourquoi Sanad ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p", 18);
      \u0275\u0275text(25, "Une plateforme con\xE7ue pour la transparence et l'impact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 19)(27, "div", 20)(28, "div", 21);
      \u0275\u0275element(29, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "h3");
      \u0275\u0275text(31, "Publiez ou soutenez");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p");
      \u0275\u0275text(33, "Cr\xE9ez une demande d'aide ou soutenez celles qui vous touchent avec quelques clics.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 20)(35, "div", 21);
      \u0275\u0275element(36, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "h3");
      \u0275\u0275text(38, "Transparence totale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p");
      \u0275\u0275text(40, "Suivez chaque don et son impact en temps r\xE9el. Aucune surprise.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 20)(42, "div", 21);
      \u0275\u0275element(43, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "h3");
      \u0275\u0275text(45, "Communaut\xE9 engag\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p");
      \u0275\u0275text(47, "Rejoignez des milliers de personnes d\xE9termin\xE9es \xE0 faire la diff\xE9rence.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 20)(49, "div", 21);
      \u0275\u0275element(50, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "h3");
      \u0275\u0275text(52, "Associations v\xE9rifi\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p");
      \u0275\u0275text(54, "Tous nos partenaires sont valid\xE9s pour garantir confiance et s\xE9curit\xE9.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(55, "section", 26)(56, "div", 16)(57, "h2", 17);
      \u0275\u0275text(58, "Notre impact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 27)(60, "div", 28)(61, "div", 29);
      \u0275\u0275text(62, "1200+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 30);
      \u0275\u0275text(64, "Dons r\xE9alis\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 28)(66, "div", 29);
      \u0275\u0275text(67, "300+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 30);
      \u0275\u0275text(69, "Personnes aid\xE9es");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 28)(71, "div", 29);
      \u0275\u0275text(72, "50+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 30);
      \u0275\u0275text(74, "Associations actives");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 28)(76, "div", 29);
      \u0275\u0275text(77, "100%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 30);
      \u0275\u0275text(79, "Transparent");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(80, "section", 31)(81, "div", 16)(82, "h2", 17);
      \u0275\u0275text(83, "Comment \xE7a marche");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "p", 18);
      \u0275\u0275text(85, "Trois \xE9tapes simples pour faire la diff\xE9rence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 32)(87, "div", 33)(88, "div", 34);
      \u0275\u0275text(89, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 35);
      \u0275\u0275element(91, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "h3");
      \u0275\u0275text(93, "Explorez");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "p");
      \u0275\u0275text(95, "Parcourez les demandes d'aide en fonction de vos int\xE9r\xEAts et causes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "div", 37);
      \u0275\u0275element(97, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div", 33)(99, "div", 34);
      \u0275\u0275text(100, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 35);
      \u0275\u0275element(102, "i", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "h3");
      \u0275\u0275text(104, "Aidez");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "p");
      \u0275\u0275text(106, "Contribuez en tant que donateur ou publiez votre propre demande.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 37);
      \u0275\u0275element(108, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 33)(110, "div", 34);
      \u0275\u0275text(111, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "div", 35);
      \u0275\u0275element(113, "i", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "h3");
      \u0275\u0275text(115, "Suivez l'impact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "p");
      \u0275\u0275text(117, "Observez l'impact de votre contribution en temps r\xE9el.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(118, "section", 41)(119, "div", 16)(120, "h2", 17);
      \u0275\u0275text(121, "Demandes en vedette");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "p", 18);
      \u0275\u0275text(123, "Des initiatives qui ont besoin de vous maintenant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div", 42);
      \u0275\u0275template(125, HomeComponent_div_125_Template, 27, 15, "div", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div", 44)(127, "a", 45);
      \u0275\u0275element(128, "i", 7);
      \u0275\u0275text(129, " Voir toutes les demandes ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(130, "section", 46)(131, "div", 16)(132, "h2", 17);
      \u0275\u0275text(133, "S\xE9curit\xE9 et confiance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "div", 47)(135, "div", 48)(136, "div", 49);
      \u0275\u0275element(137, "i", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "h3");
      \u0275\u0275text(139, "Donn\xE9es s\xE9curis\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "p");
      \u0275\u0275text(141, "Vos informations personnelles sont prot\xE9g\xE9es par des normes de s\xE9curit\xE9 strictes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "div", 48)(143, "div", 49);
      \u0275\u0275element(144, "i", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "h3");
      \u0275\u0275text(146, "Associations v\xE9rifi\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "p");
      \u0275\u0275text(148, "Chaque partenaire est valid\xE9 avant d'acc\xE9der \xE0 la plateforme.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "div", 48)(150, "div", 49);
      \u0275\u0275element(151, "i", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "h3");
      \u0275\u0275text(153, "Transparence totale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "p");
      \u0275\u0275text(155, "Consultez chaque \xE9tape et l'utilisation de chaque contribution.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(156, "section", 53)(157, "div", 54)(158, "h2");
      \u0275\u0275text(159, "Rejoignez la communaut\xE9 Sanad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "p");
      \u0275\u0275text(161, "Commencez \xE0 faire la diff\xE9rence aujourd'hui. C'est gratuit et sans engagement.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "div", 55)(163, "a", 56);
      \u0275\u0275text(164, " Cr\xE9er un compte ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "a", 57);
      \u0275\u0275text(166, " D\xE9couvrir les demandes ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(167, "footer", 58)(168, "div", 16)(169, "div", 59)(170, "div", 60)(171, "h4");
      \u0275\u0275text(172, "\xC0 propos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "ul")(174, "li")(175, "a", 61);
      \u0275\u0275text(176, "Qui sommes-nous");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "li")(178, "a", 61);
      \u0275\u0275text(179, "Notre mission");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "li")(181, "a", 61);
      \u0275\u0275text(182, "Nos valeurs");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(183, "div", 60)(184, "h4");
      \u0275\u0275text(185, "Plateforme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "ul")(187, "li")(188, "a", 61);
      \u0275\u0275text(189, "Explorer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "li")(191, "a", 61);
      \u0275\u0275text(192, "Associations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "li")(194, "a", 61);
      \u0275\u0275text(195, "Blog");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(196, "div", 60)(197, "h4");
      \u0275\u0275text(198, "L\xE9gal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "ul")(200, "li")(201, "a", 61);
      \u0275\u0275text(202, "Conditions d'utilisation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "li")(204, "a", 61);
      \u0275\u0275text(205, "Politique de confidentialit\xE9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "li")(207, "a", 61);
      \u0275\u0275text(208, "Contact");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(209, "div", 60)(210, "h4");
      \u0275\u0275text(211, "Suivez-nous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "div", 62)(213, "a", 61);
      \u0275\u0275element(214, "i", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "a", 61);
      \u0275\u0275element(216, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "a", 61);
      \u0275\u0275element(218, "i", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "a", 61);
      \u0275\u0275element(220, "i", 66);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(221, "div", 67)(222, "p");
      \u0275\u0275text(223, "\xA9 2024 Sanad. Tous les droits r\xE9serv\xE9s.");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(125);
      \u0275\u0275property("ngForOf", ctx.featuredRequests);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink, NavbarComponent, DecimalPipe], styles: [`
.hero[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #2563eb 0%,
      #1d4ed8 50%,
      #22c55e 100%);
  padding: 60px 20px;
  min-height: 500px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.hero[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      circle at 20% 50%,
      rgba(255, 255, 255, 0.15) 0%,
      transparent 50%),
    radial-gradient(
      circle at 80% 80%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%);
  z-index: 0;
}
.hero-content[_ngcontent-%COMP%] {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
  width: 100%;
  position: relative;
  z-index: 1;
}
.hero-text[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  min-width: 0;
}
.hero-title[_ngcontent-%COMP%] {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.2;
  color: white;
  letter-spacing: -0.5px;
}
.hero-description[_ngcontent-%COMP%] {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  max-width: 500px;
}
.hero-ctas[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.cta-primary[_ngcontent-%COMP%], 
.cta-secondary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 16px;
}
.cta-primary[_ngcontent-%COMP%] {
  background: white;
  color: #2563eb;
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
}
.cta-primary[_ngcontent-%COMP%]:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}
.cta-secondary[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
.cta-secondary[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: white;
}
.hero-visual[_ngcontent-%COMP%] {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.hero-decoration[_ngcontent-%COMP%] {
  position: relative;
  width: 100%;
  height: 100%;
}
.circle[_ngcontent-%COMP%] {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
}
.circle-1[_ngcontent-%COMP%] {
  width: 300px;
  height: 300px;
  background: white;
  top: -50px;
  right: -100px;
  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;
}
.circle-2[_ngcontent-%COMP%] {
  width: 200px;
  height: 200px;
  background: white;
  bottom: -30px;
  left: 50px;
  animation: _ngcontent-%COMP%_float 8s ease-in-out infinite 1s;
}
.circle-3[_ngcontent-%COMP%] {
  width: 250px;
  height: 250px;
  background: white;
  top: 50%;
  right: 20%;
  animation: _ngcontent-%COMP%_float 7s ease-in-out infinite 2s;
}
@keyframes _ngcontent-%COMP%_float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
}
.container[_ngcontent-%COMP%] {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}
.section-title[_ngcontent-%COMP%] {
  font-size: 40px;
  font-weight: 800;
  color: #1e293b;
  text-align: center;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
}
.section-subtitle[_ngcontent-%COMP%] {
  font-size: 18px;
  color: #64748b;
  text-align: center;
  margin-bottom: 48px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.benefits[_ngcontent-%COMP%] {
  padding: 80px 20px;
  background: #ffffff;
}
.benefits-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px;
}
.benefit-card[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.04),
      rgba(34, 197, 94, 0.04));
  border: 1px solid rgba(37, 99, 235, 0.08);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
}
.benefit-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-8px);
  border-color: rgba(37, 99, 235, 0.2);
  box-shadow: 0 12px 32px rgba(37, 99, 235, 0.1);
}
.benefit-icon[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background:
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.1),
      rgba(34, 197, 94, 0.1));
  border-radius: 12px;
  margin: 0 auto 16px;
  font-size: 28px;
  color: #2563eb;
}
.benefit-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
}
.benefit-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 15px;
  color: #64748b;
  line-height: 1.6;
}
.impact[_ngcontent-%COMP%] {
  padding: 80px 20px;
  background:
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.06) 0%,
      rgba(34, 197, 94, 0.06) 100%);
}
.stats-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-top: 48px;
}
.stat-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
  transition: all 0.3s ease;
}
.stat-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
}
.stat-number[_ngcontent-%COMP%] {
  font-size: 36px;
  font-weight: 800;
  background:
    linear-gradient(
      135deg,
      #2563eb,
      #22c55e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}
.stat-label[_ngcontent-%COMP%] {
  font-size: 16px;
  font-weight: 600;
  color: #64748b;
}
.how-it-works[_ngcontent-%COMP%] {
  padding: 80px 20px;
  background: white;
}
.steps-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  margin-top: 48px;
}
.step[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 200px;
  max-width: 280px;
  text-align: center;
  position: relative;
}
.step-number[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background:
    linear-gradient(
      135deg,
      #2563eb,
      #1d4ed8);
  color: white;
  font-weight: 800;
  font-size: 20px;
  border-radius: 50%;
  margin-bottom: 16px;
}
.step-icon[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background:
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.1),
      rgba(34, 197, 94, 0.1));
  border-radius: 12px;
  margin: 0 auto 16px;
  font-size: 32px;
  color: #2563eb;
}
.step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
}
.step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 15px;
  color: #64748b;
  line-height: 1.6;
}
.step-arrow[_ngcontent-%COMP%] {
  color: #cbd5e1;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.featured[_ngcontent-%COMP%] {
  padding: 80px 20px;
  background:
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.03) 0%,
      rgba(34, 197, 94, 0.03) 100%);
}
.requests-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 28px;
  margin: 48px 0;
}
.request-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(37, 99, 235, 0.04);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.request-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);
  border-color: rgba(37, 99, 235, 0.1);
}
.request-image[_ngcontent-%COMP%] {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background:
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.05),
      rgba(34, 197, 94, 0.05));
}
.request-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.request-card[_ngcontent-%COMP%]:hover   .request-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  transform: scale(1.05);
}
.request-image[_ngcontent-%COMP%]   .category-badge[_ngcontent-%COMP%] {
  position: absolute;
  top: 12px;
  right: 12px;
  display: inline-block;
  background:
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.95),
      rgba(34, 197, 94, 0.95));
  color: white;
  font-size: 11px;
  font-weight: 700;
  padding: 6px 10px;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}
.request-content[_ngcontent-%COMP%] {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.request-title[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
  line-height: 1.4;
}
.request-description[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #64748b;
  margin-bottom: 12px;
  line-height: 1.5;
  flex-grow: 1;
}
.request-org[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #64748b;
  margin-bottom: 16px;
}
.request-org[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #2563eb;
  font-size: 14px;
}
.progress-section[_ngcontent-%COMP%] {
  margin-bottom: 16px;
}
.progress-bar[_ngcontent-%COMP%] {
  width: 100%;
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 8px;
}
.progress-fill[_ngcontent-%COMP%] {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #2563eb,
      #22c55e);
  border-radius: 3px;
  transition: width 0.3s ease;
}
.progress-text[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}
.progress-amount[_ngcontent-%COMP%] {
  color: #64748b;
  font-weight: 500;
}
.progress-percent[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #2563eb,
      #22c55e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}
.btn-view[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
}
.btn-view[_ngcontent-%COMP%]:hover {
  gap: 12px;
  color: #1d4ed8;
}
.featured-cta[_ngcontent-%COMP%] {
  text-align: center;
  margin-top: 48px;
}
.btn-cta-secondary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: white;
  color: #2563eb;
  border: 2px solid #2563eb;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}
.btn-cta-secondary[_ngcontent-%COMP%]:hover {
  background: #f0f4ff;
  transform: translateY(-2px);
}
.trust[_ngcontent-%COMP%] {
  padding: 80px 20px;
  background: white;
}
.trust-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 48px;
}
.trust-item[_ngcontent-%COMP%] {
  text-align: center;
}
.trust-icon[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background:
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.1),
      rgba(34, 197, 94, 0.1));
  border-radius: 16px;
  margin: 0 auto 16px;
  font-size: 32px;
  color: #2563eb;
}
.trust-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
}
.trust-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 15px;
  color: #64748b;
  line-height: 1.6;
}
.final-cta[_ngcontent-%COMP%] {
  padding: 80px 20px;
  background:
    linear-gradient(
      135deg,
      #2563eb 0%,
      #1d4ed8 50%,
      #22c55e 100%);
  position: relative;
  overflow: hidden;
}
.final-cta[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.1;
  z-index: 0;
}
.cta-content[_ngcontent-%COMP%] {
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
  color: white;
}
.final-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 44px;
  font-weight: 800;
  margin-bottom: 16px;
  letter-spacing: -0.5px;
}
.final-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 18px;
  opacity: 0.95;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.final-buttons[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-primary-large[_ngcontent-%COMP%], 
.btn-secondary-large[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.btn-primary-large[_ngcontent-%COMP%] {
  background: white;
  color: #2563eb;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}
.btn-primary-large[_ngcontent-%COMP%]:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}
.btn-secondary-large[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
.btn-secondary-large[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: white;
}
.footer[_ngcontent-%COMP%] {
  background: #1e293b;
  color: #cbd5e1;
  padding: 60px 20px 20px;
}
.footer-content[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}
.footer-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
}
.footer-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
}
.footer-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: white;
}
.social-links[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
}
.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 18px;
  transition: all 0.2s ease;
}
.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  background: #2563eb;
  color: white;
}
.footer-bottom[_ngcontent-%COMP%] {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #94a3b8;
}
@media (max-width: 768px) {
  .hero[_ngcontent-%COMP%] {
    padding: 60px 20px;
    min-height: auto;
  }
  .hero-content[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 40px;
  }
  .hero-title[_ngcontent-%COMP%] {
    font-size: 32px;
  }
  .hero-description[_ngcontent-%COMP%] {
    font-size: 16px;
  }
  .hero-visual[_ngcontent-%COMP%] {
    height: 300px;
  }
  .section-title[_ngcontent-%COMP%] {
    font-size: 28px;
  }
  .benefits[_ngcontent-%COMP%], 
   .impact[_ngcontent-%COMP%], 
   .how-it-works[_ngcontent-%COMP%], 
   .featured[_ngcontent-%COMP%], 
   .trust[_ngcontent-%COMP%], 
   .final-cta[_ngcontent-%COMP%] {
    padding: 60px 20px;
  }
  .steps-container[_ngcontent-%COMP%] {
    gap: 16px;
  }
  .step-arrow[_ngcontent-%COMP%] {
    display: none;
  }
  .step[_ngcontent-%COMP%] {
    min-width: 100%;
    max-width: 100%;
  }
  .requests-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .final-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: 28px;
  }
  .final-buttons[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .btn-primary-large[_ngcontent-%COMP%], 
   .btn-secondary-large[_ngcontent-%COMP%] {
    width: 100%;
    justify-content: center;
  }
}
@media (max-width: 480px) {
  .hero-title[_ngcontent-%COMP%] {
    font-size: 24px;
  }
  .hero-description[_ngcontent-%COMP%] {
    font-size: 15px;
  }
  .section-title[_ngcontent-%COMP%] {
    font-size: 24px;
  }
  .cta-primary[_ngcontent-%COMP%], 
   .cta-secondary[_ngcontent-%COMP%] {
    width: 100%;
    justify-content: center;
  }
  .navbar-menu[_ngcontent-%COMP%] {
    display: none;
  }
  .circle[_ngcontent-%COMP%] {
    opacity: 0.05;
  }
}
/*# sourceMappingURL=home.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [CommonModule, RouterLink, NavbarComponent], template: `<app-navbar></app-navbar>\r
\r
<!-- ==================== HERO SECTION ==================== -->\r
<section class="hero">\r
  <div class="hero-content">\r
    <div class="hero-text">\r
      <h1 class="hero-title">Ensemble, nous pouvons faire la diff\xE9rence</h1>\r
      <p class="hero-description">\r
        Sanad connecte ceux qui ont besoin d'aide avec une communaut\xE9 engag\xE9e. \r
        D\xE9couvrez des demandes, soutenez des causes qui vous touchent, et suivez l'impact en temps r\xE9el.\r
      </p>\r
      <div class="hero-ctas">\r
        <a href="#featured" class="cta-primary">\r
          <i class="fas fa-search"></i>\r
          Explorer les demandes\r
        </a>\r
        <a routerLink="/auth/register" class="cta-secondary">\r
          <i class="fas fa-user-plus"></i>\r
          S'inscrire maintenant\r
        </a>\r
      </div>\r
    </div>\r
    <div class="hero-visual">\r
      <div class="hero-decoration">\r
        <div class="circle circle-1"></div>\r
        <div class="circle circle-2"></div>\r
        <div class="circle circle-3"></div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ==================== KEY BENEFITS SECTION ==================== -->\r
<section class="benefits">\r
  <div class="container">\r
    <h2 class="section-title">Pourquoi Sanad ?</h2>\r
    <p class="section-subtitle">Une plateforme con\xE7ue pour la transparence et l'impact</p>\r
    \r
    <div class="benefits-grid">\r
      <!-- Benefit 1 -->\r
      <div class="benefit-card">\r
        <div class="benefit-icon">\r
          <i class="fas fa-hand-holding-heart"></i>\r
        </div>\r
        <h3>Publiez ou soutenez</h3>\r
        <p>Cr\xE9ez une demande d'aide ou soutenez celles qui vous touchent avec quelques clics.</p>\r
      </div>\r
\r
      <!-- Benefit 2 -->\r
      <div class="benefit-card">\r
        <div class="benefit-icon">\r
          <i class="fas fa-chart-pie"></i>\r
        </div>\r
        <h3>Transparence totale</h3>\r
        <p>Suivez chaque don et son impact en temps r\xE9el. Aucune surprise.</p>\r
      </div>\r
\r
      <!-- Benefit 3 -->\r
      <div class="benefit-card">\r
        <div class="benefit-icon">\r
          <i class="fas fa-users"></i>\r
        </div>\r
        <h3>Communaut\xE9 engag\xE9e</h3>\r
        <p>Rejoignez des milliers de personnes d\xE9termin\xE9es \xE0 faire la diff\xE9rence.</p>\r
      </div>\r
\r
      <!-- Benefit 4 -->\r
      <div class="benefit-card">\r
        <div class="benefit-icon">\r
          <i class="fas fa-shield-alt"></i>\r
        </div>\r
        <h3>Associations v\xE9rifi\xE9es</h3>\r
        <p>Tous nos partenaires sont valid\xE9s pour garantir confiance et s\xE9curit\xE9.</p>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ==================== IMPACT / STATISTICS ==================== -->\r
<section class="impact">\r
  <div class="container">\r
    <h2 class="section-title">Notre impact</h2>\r
    \r
    <div class="stats-grid">\r
      <div class="stat-card">\r
        <div class="stat-number">1200+</div>\r
        <div class="stat-label">Dons r\xE9alis\xE9s</div>\r
      </div>\r
      <div class="stat-card">\r
        <div class="stat-number">300+</div>\r
        <div class="stat-label">Personnes aid\xE9es</div>\r
      </div>\r
      <div class="stat-card">\r
        <div class="stat-number">50+</div>\r
        <div class="stat-label">Associations actives</div>\r
      </div>\r
      <div class="stat-card">\r
        <div class="stat-number">100%</div>\r
        <div class="stat-label">Transparent</div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ==================== HOW IT WORKS ==================== -->\r
<section class="how-it-works">\r
  <div class="container">\r
    <h2 class="section-title">Comment \xE7a marche</h2>\r
    <p class="section-subtitle">Trois \xE9tapes simples pour faire la diff\xE9rence</p>\r
    \r
    <div class="steps-container">\r
      <!-- Step 1 -->\r
      <div class="step">\r
        <div class="step-number">1</div>\r
        <div class="step-icon">\r
          <i class="fas fa-compass"></i>\r
        </div>\r
        <h3>Explorez</h3>\r
        <p>Parcourez les demandes d'aide en fonction de vos int\xE9r\xEAts et causes.</p>\r
      </div>\r
\r
      <!-- Arrow -->\r
      <div class="step-arrow">\r
        <i class="fas fa-arrow-right"></i>\r
      </div>\r
\r
      <!-- Step 2 -->\r
      <div class="step">\r
        <div class="step-number">2</div>\r
        <div class="step-icon">\r
          <i class="fas fa-heart"></i>\r
        </div>\r
        <h3>Aidez</h3>\r
        <p>Contribuez en tant que donateur ou publiez votre propre demande.</p>\r
      </div>\r
\r
      <!-- Arrow -->\r
      <div class="step-arrow">\r
        <i class="fas fa-arrow-right"></i>\r
      </div>\r
\r
      <!-- Step 3 -->\r
      <div class="step">\r
        <div class="step-number">3</div>\r
        <div class="step-icon">\r
          <i class="fas fa-chart-line"></i>\r
        </div>\r
        <h3>Suivez l'impact</h3>\r
        <p>Observez l'impact de votre contribution en temps r\xE9el.</p>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ==================== FEATURED REQUESTS ==================== -->\r
<section class="featured" id="featured">\r
  <div class="container">\r
    <h2 class="section-title">Demandes en vedette</h2>\r
    <p class="section-subtitle">Des initiatives qui ont besoin de vous maintenant</p>\r
    \r
    <div class="requests-grid">\r
      <div class="request-card" *ngFor="let request of featuredRequests">\r
        <!-- Image Section -->\r
        <div class="request-image">\r
          <img \r
            [src]="request.image || '/assets/images/placeholders/request-placeholder.svg'"\r
            [alt]="request.title"\r
            loading="lazy"\r
          />\r
          <span class="category-badge">{{ request.category }}</span>\r
        </div>\r
        \r
        <!-- Content Section -->\r
        <div class="request-content">\r
          <h3 class="request-title">{{ request.title }}</h3>\r
          <p class="request-description">{{ request.description }}</p>\r
          \r
          <div class="request-org">\r
            <i class="fas fa-building"></i>\r
            <span>{{ request.organization }}</span>\r
          </div>\r
\r
          <div class="progress-section">\r
            <div class="progress-bar">\r
              <div class="progress-fill" [style.width.%]="getProgressPercent(request.progress, request.target)"></div>\r
            </div>\r
            <div class="progress-text">\r
              <span class="progress-amount">{{ request.progress | number }}\u20AC sur {{ request.target | number }}\u20AC</span>\r
              <span class="progress-percent">{{ getProgressPercent(request.progress, request.target) }}%</span>\r
            </div>\r
          </div>\r
\r
          <a href="javascript:;" class="btn-view">\r
            Voir plus <i class="fas fa-arrow-right"></i>\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="featured-cta">\r
      <a href="#featured" class="btn-cta-secondary">\r
        <i class="fas fa-search"></i>\r
        Voir toutes les demandes\r
      </a>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ==================== TRUST & SECURITY ==================== -->\r
<section class="trust">\r
  <div class="container">\r
    <h2 class="section-title">S\xE9curit\xE9 et confiance</h2>\r
    \r
    <div class="trust-grid">\r
      <div class="trust-item">\r
        <div class="trust-icon">\r
          <i class="fas fa-lock"></i>\r
        </div>\r
        <h3>Donn\xE9es s\xE9curis\xE9es</h3>\r
        <p>Vos informations personnelles sont prot\xE9g\xE9es par des normes de s\xE9curit\xE9 strictes.</p>\r
      </div>\r
\r
      <div class="trust-item">\r
        <div class="trust-icon">\r
          <i class="fas fa-check-circle"></i>\r
        </div>\r
        <h3>Associations v\xE9rifi\xE9es</h3>\r
        <p>Chaque partenaire est valid\xE9 avant d'acc\xE9der \xE0 la plateforme.</p>\r
      </div>\r
\r
      <div class="trust-item">\r
        <div class="trust-icon">\r
          <i class="fas fa-eye"></i>\r
        </div>\r
        <h3>Transparence totale</h3>\r
        <p>Consultez chaque \xE9tape et l'utilisation de chaque contribution.</p>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ==================== FINAL CTA ==================== -->\r
<section class="final-cta">\r
  <div class="cta-content">\r
    <h2>Rejoignez la communaut\xE9 Sanad</h2>\r
    <p>Commencez \xE0 faire la diff\xE9rence aujourd'hui. C'est gratuit et sans engagement.</p>\r
    <div class="final-buttons">\r
      <a routerLink="/auth/register" class="btn-primary-large">\r
        Cr\xE9er un compte\r
      </a>\r
      <a href="#featured" class="btn-secondary-large">\r
        D\xE9couvrir les demandes\r
      </a>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ==================== FOOTER ==================== -->\r
<footer class="footer">\r
  <div class="container">\r
    <div class="footer-content">\r
      <div class="footer-section">\r
        <h4>\xC0 propos</h4>\r
        <ul>\r
          <li><a href="#">Qui sommes-nous</a></li>\r
          <li><a href="#">Notre mission</a></li>\r
          <li><a href="#">Nos valeurs</a></li>\r
        </ul>\r
      </div>\r
\r
      <div class="footer-section">\r
        <h4>Plateforme</h4>\r
        <ul>\r
          <li><a href="#">Explorer</a></li>\r
          <li><a href="#">Associations</a></li>\r
          <li><a href="#">Blog</a></li>\r
        </ul>\r
      </div>\r
\r
      <div class="footer-section">\r
        <h4>L\xE9gal</h4>\r
        <ul>\r
          <li><a href="#">Conditions d'utilisation</a></li>\r
          <li><a href="#">Politique de confidentialit\xE9</a></li>\r
          <li><a href="#">Contact</a></li>\r
        </ul>\r
      </div>\r
\r
      <div class="footer-section">\r
        <h4>Suivez-nous</h4>\r
        <div class="social-links">\r
          <a href="#"><i class="fab fa-facebook"></i></a>\r
          <a href="#"><i class="fab fa-twitter"></i></a>\r
          <a href="#"><i class="fab fa-linkedin"></i></a>\r
          <a href="#"><i class="fab fa-instagram"></i></a>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="footer-bottom">\r
      <p>&copy; 2024 Sanad. Tous les droits r\xE9serv\xE9s.</p>\r
    </div>\r
  </div>\r
</footer>\r
`, styles: [`/* src/app/home/home.component.css */
.hero {
  background:
    linear-gradient(
      135deg,
      #2563eb 0%,
      #1d4ed8 50%,
      #22c55e 100%);
  padding: 60px 20px;
  min-height: 500px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      circle at 20% 50%,
      rgba(255, 255, 255, 0.15) 0%,
      transparent 50%),
    radial-gradient(
      circle at 80% 80%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%);
  z-index: 0;
}
.hero-content {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
  width: 100%;
  position: relative;
  z-index: 1;
}
.hero-text {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  min-width: 0;
}
.hero-title {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.2;
  color: white;
  letter-spacing: -0.5px;
}
.hero-description {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  max-width: 500px;
}
.hero-ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.cta-primary,
.cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 16px;
}
.cta-primary {
  background: white;
  color: #2563eb;
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
}
.cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}
.cta-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
.cta-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: white;
}
.hero-visual {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.hero-decoration {
  position: relative;
  width: 100%;
  height: 100%;
}
.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
}
.circle-1 {
  width: 300px;
  height: 300px;
  background: white;
  top: -50px;
  right: -100px;
  animation: float 6s ease-in-out infinite;
}
.circle-2 {
  width: 200px;
  height: 200px;
  background: white;
  bottom: -30px;
  left: 50px;
  animation: float 8s ease-in-out infinite 1s;
}
.circle-3 {
  width: 250px;
  height: 250px;
  background: white;
  top: 50%;
  right: 20%;
  animation: float 7s ease-in-out infinite 2s;
}
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}
.section-title {
  font-size: 40px;
  font-weight: 800;
  color: #1e293b;
  text-align: center;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
}
.section-subtitle {
  font-size: 18px;
  color: #64748b;
  text-align: center;
  margin-bottom: 48px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.benefits {
  padding: 80px 20px;
  background: #ffffff;
}
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px;
}
.benefit-card {
  background:
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.04),
      rgba(34, 197, 94, 0.04));
  border: 1px solid rgba(37, 99, 235, 0.08);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
}
.benefit-card:hover {
  transform: translateY(-8px);
  border-color: rgba(37, 99, 235, 0.2);
  box-shadow: 0 12px 32px rgba(37, 99, 235, 0.1);
}
.benefit-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background:
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.1),
      rgba(34, 197, 94, 0.1));
  border-radius: 12px;
  margin: 0 auto 16px;
  font-size: 28px;
  color: #2563eb;
}
.benefit-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
}
.benefit-card p {
  font-size: 15px;
  color: #64748b;
  line-height: 1.6;
}
.impact {
  padding: 80px 20px;
  background:
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.06) 0%,
      rgba(34, 197, 94, 0.06) 100%);
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-top: 48px;
}
.stat-card {
  background: white;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
  transition: all 0.3s ease;
}
.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
}
.stat-number {
  font-size: 36px;
  font-weight: 800;
  background:
    linear-gradient(
      135deg,
      #2563eb,
      #22c55e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}
.stat-label {
  font-size: 16px;
  font-weight: 600;
  color: #64748b;
}
.how-it-works {
  padding: 80px 20px;
  background: white;
}
.steps-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  margin-top: 48px;
}
.step {
  flex: 1;
  min-width: 200px;
  max-width: 280px;
  text-align: center;
  position: relative;
}
.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background:
    linear-gradient(
      135deg,
      #2563eb,
      #1d4ed8);
  color: white;
  font-weight: 800;
  font-size: 20px;
  border-radius: 50%;
  margin-bottom: 16px;
}
.step-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background:
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.1),
      rgba(34, 197, 94, 0.1));
  border-radius: 12px;
  margin: 0 auto 16px;
  font-size: 32px;
  color: #2563eb;
}
.step h3 {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
}
.step p {
  font-size: 15px;
  color: #64748b;
  line-height: 1.6;
}
.step-arrow {
  color: #cbd5e1;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.featured {
  padding: 80px 20px;
  background:
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.03) 0%,
      rgba(34, 197, 94, 0.03) 100%);
}
.requests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 28px;
  margin: 48px 0;
}
.request-card {
  background: white;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(37, 99, 235, 0.04);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.request-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);
  border-color: rgba(37, 99, 235, 0.1);
}
.request-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background:
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.05),
      rgba(34, 197, 94, 0.05));
}
.request-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.request-card:hover .request-image img {
  transform: scale(1.05);
}
.request-image .category-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  display: inline-block;
  background:
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.95),
      rgba(34, 197, 94, 0.95));
  color: white;
  font-size: 11px;
  font-weight: 700;
  padding: 6px 10px;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}
.request-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.request-title {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
  line-height: 1.4;
}
.request-description {
  font-size: 14px;
  color: #64748b;
  margin-bottom: 12px;
  line-height: 1.5;
  flex-grow: 1;
}
.request-org {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #64748b;
  margin-bottom: 16px;
}
.request-org i {
  color: #2563eb;
  font-size: 14px;
}
.progress-section {
  margin-bottom: 16px;
}
.progress-bar {
  width: 100%;
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 8px;
}
.progress-fill {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #2563eb,
      #22c55e);
  border-radius: 3px;
  transition: width 0.3s ease;
}
.progress-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}
.progress-amount {
  color: #64748b;
  font-weight: 500;
}
.progress-percent {
  background:
    linear-gradient(
      135deg,
      #2563eb,
      #22c55e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}
.btn-view {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
}
.btn-view:hover {
  gap: 12px;
  color: #1d4ed8;
}
.featured-cta {
  text-align: center;
  margin-top: 48px;
}
.btn-cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: white;
  color: #2563eb;
  border: 2px solid #2563eb;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}
.btn-cta-secondary:hover {
  background: #f0f4ff;
  transform: translateY(-2px);
}
.trust {
  padding: 80px 20px;
  background: white;
}
.trust-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 48px;
}
.trust-item {
  text-align: center;
}
.trust-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background:
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.1),
      rgba(34, 197, 94, 0.1));
  border-radius: 16px;
  margin: 0 auto 16px;
  font-size: 32px;
  color: #2563eb;
}
.trust-item h3 {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
}
.trust-item p {
  font-size: 15px;
  color: #64748b;
  line-height: 1.6;
}
.final-cta {
  padding: 80px 20px;
  background:
    linear-gradient(
      135deg,
      #2563eb 0%,
      #1d4ed8 50%,
      #22c55e 100%);
  position: relative;
  overflow: hidden;
}
.final-cta::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.1;
  z-index: 0;
}
.cta-content {
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
  color: white;
}
.final-cta h2 {
  font-size: 44px;
  font-weight: 800;
  margin-bottom: 16px;
  letter-spacing: -0.5px;
}
.final-cta p {
  font-size: 18px;
  opacity: 0.95;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.final-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-primary-large,
.btn-secondary-large {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.btn-primary-large {
  background: white;
  color: #2563eb;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}
.btn-primary-large:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}
.btn-secondary-large {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
.btn-secondary-large:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: white;
}
.footer {
  background: #1e293b;
  color: #cbd5e1;
  padding: 60px 20px 20px;
}
.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}
.footer-section h4 {
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
}
.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-section a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
}
.footer-section a:hover {
  color: white;
}
.social-links {
  display: flex;
  gap: 16px;
}
.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 18px;
  transition: all 0.2s ease;
}
.social-links a:hover {
  background: #2563eb;
  color: white;
}
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #94a3b8;
}
@media (max-width: 768px) {
  .hero {
    padding: 60px 20px;
    min-height: auto;
  }
  .hero-content {
    flex-direction: column;
    gap: 40px;
  }
  .hero-title {
    font-size: 32px;
  }
  .hero-description {
    font-size: 16px;
  }
  .hero-visual {
    height: 300px;
  }
  .section-title {
    font-size: 28px;
  }
  .benefits,
  .impact,
  .how-it-works,
  .featured,
  .trust,
  .final-cta {
    padding: 60px 20px;
  }
  .steps-container {
    gap: 16px;
  }
  .step-arrow {
    display: none;
  }
  .step {
    min-width: 100%;
    max-width: 100%;
  }
  .requests-grid {
    grid-template-columns: 1fr;
  }
  .final-cta h2 {
    font-size: 28px;
  }
  .final-buttons {
    flex-direction: column;
  }
  .btn-primary-large,
  .btn-secondary-large {
    width: 100%;
    justify-content: center;
  }
}
@media (max-width: 480px) {
  .hero-title {
    font-size: 24px;
  }
  .hero-description {
    font-size: 15px;
  }
  .section-title {
    font-size: 24px;
  }
  .cta-primary,
  .cta-secondary {
    width: 100%;
    justify-content: center;
  }
  .navbar-menu {
    display: none;
  }
  .circle {
    opacity: 0.05;
  }
}
/*# sourceMappingURL=home.component.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "app/home/home.component.ts", lineNumber: 24 });
})();

// src/app/auth/login/login.component.ts
function LoginComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " L'adresse e-mail est requise. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " Saisissez une adresse e-mail valide. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " Le mot de passe est requis. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.forgotMessage);
  }
}
function LoginComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("shake", ctx_r0.loginError);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loginError, " ");
  }
}
function LoginComponent_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 31);
  }
}
var LoginComponent = class _LoginComponent {
  auth;
  router;
  fb = inject(FormBuilder);
  isSubmitting = false;
  showPassword = false;
  loginError = "";
  forgotMessage = "";
  form = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
    remember: [false]
  });
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  get emailControl() {
    return this.form.controls.email;
  }
  get passwordControl() {
    return this.form.controls.password;
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  onForgot(event) {
    event.preventDefault();
    this.forgotMessage = "Veuillez contacter le support pour reinitialiser votre mot de passe.";
  }
  submit() {
    if (this.form.invalid || this.isSubmitting) {
      this.form.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    this.loginError = "";
    const payload = {
      email: String(this.emailControl.value ?? "").trim(),
      password: String(this.passwordControl.value ?? ""),
      remember: Boolean(this.form.controls.remember.value)
    };
    this.auth.login(payload).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        if (!response.success || !response.role) {
          this.loginError = "E-mail ou mot de passe incorrect";
          return;
        }
        if (response.token) {
          this.auth.setToken(response.token);
        }
        this.auth.setRole(response.role);
        if (response.role === "admin") {
          this.router.navigateByUrl("/admin-dashboard");
          return;
        }
        if (response.role === "association") {
          const status = response.associationStatus ?? "approved";
          if (status === "pending") {
            this.router.navigateByUrl("/auth/pending");
            return;
          }
          if (status === "rejected") {
            this.router.navigateByUrl("/auth/rejected");
            return;
          }
          this.router.navigateByUrl("/association/dashboard");
          return;
        }
        this.router.navigateByUrl("/dashboard");
      },
      error: () => {
        this.isSubmitting = false;
        this.loginError = "E-mail ou mot de passe incorrect";
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 59, vars: 15, consts: [[1, "auth-page"], [1, "auth-visual"], [1, "brand"], ["aria-label", "Logo Sanad", 1, "logo-placeholder"], [1, "brand-name"], [1, "microcopy"], [1, "auth-body"], [1, "auth-card"], [1, "auth-card-header"], ["aria-hidden", "true", 1, "logo-placeholder", "small"], ["novalidate", "", 1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "you@example.com", 1, "input"], ["class", "error-text", 4, "ngIf"], ["for", "password"], [1, "input-group"], ["id", "password", "formControlName", "password", "autocomplete", "current-password", "placeholder", "Saisissez votre mot de passe", 1, "input", 3, "type"], ["type", "button", 1, "toggle-button", 3, "click"], [1, "actions"], [1, "remember"], ["type", "checkbox", "formControlName", "remember"], ["href", "", 1, "link", 3, "click"], ["class", "helper", 4, "ngIf"], ["class", "error-text", 3, "shake", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner", "aria-hidden", "true", 4, "ngIf"], [1, "divider"], ["routerLink", "/auth/register", 1, "link"], [1, "error-text"], [1, "helper"], ["aria-hidden", "true", 1, "spinner"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar");
      \u0275\u0275elementStart(1, "div", 0)(2, "section", 1)(3, "div", 2)(4, "div", 3);
      \u0275\u0275text(5, "S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7, "Sanad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "h1");
      \u0275\u0275text(9, "Accedez a votre espace securise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11, "Gerez vos actions facilement et en toute confiance.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 5)(13, "span");
      \u0275\u0275text(14, "Gerez vos actions facilement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span");
      \u0275\u0275text(16, "Suivez vos contributions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "section", 6)(18, "div", 7)(19, "div", 8)(20, "div", 9);
      \u0275\u0275text(21, "S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div")(23, "h2");
      \u0275\u0275text(24, "Bon retour");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p");
      \u0275\u0275text(26, "Connectez-vous pour continuer a soutenir votre communaute.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "form", 10);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_27_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(28, "div", 11)(29, "label", 12);
      \u0275\u0275text(30, "E-mail");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 13);
      \u0275\u0275template(32, LoginComponent_div_32_Template, 2, 0, "div", 14)(33, LoginComponent_div_33_Template, 2, 0, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 11)(35, "label", 15);
      \u0275\u0275text(36, "Mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 16);
      \u0275\u0275element(38, "input", 17);
      \u0275\u0275elementStart(39, "button", 18);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_39_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275text(40);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(41, LoginComponent_div_41_Template, 2, 0, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 19)(43, "label", 20);
      \u0275\u0275element(44, "input", 21);
      \u0275\u0275text(45, " Se souvenir de moi ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "a", 22);
      \u0275\u0275listener("click", function LoginComponent_Template_a_click_46_listener($event) {
        return ctx.onForgot($event);
      });
      \u0275\u0275text(47, "Mot de passe oublie ?");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(48, LoginComponent_div_48_Template, 2, 1, "div", 23)(49, LoginComponent_div_49_Template, 2, 3, "div", 24);
      \u0275\u0275elementStart(50, "button", 25);
      \u0275\u0275template(51, LoginComponent_span_51_Template, 1, 0, "span", 26);
      \u0275\u0275elementStart(52, "span");
      \u0275\u0275text(53);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(54, "div", 27);
      \u0275\u0275elementStart(55, "p");
      \u0275\u0275text(56, " Nouveau ici ? ");
      \u0275\u0275elementStart(57, "a", 28);
      \u0275\u0275text(58, "Creer un compte");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(27);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", ctx.emailControl.touched && ctx.emailControl.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.emailControl.touched && (ctx.emailControl.errors == null ? null : ctx.emailControl.errors["required"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.emailControl.touched && (ctx.emailControl.errors == null ? null : ctx.emailControl.errors["email"]));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("invalid", ctx.passwordControl.touched && ctx.passwordControl.invalid);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.showPassword ? "Masquer" : "Afficher", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.passwordControl.touched && (ctx.passwordControl.errors == null ? null : ctx.passwordControl.errors["required"]));
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.forgotMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loginError);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isSubmitting ? "Connexion en cours" : "Connexion");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, NavbarComponent], styles: ["\n.auth-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n.auth-page[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 32%) minmax(0, 68%);\n}\n.auth-visual[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  background:\n    linear-gradient(\n      140deg,\n      rgba(36, 67, 154, 0.78) 0%,\n      rgba(43, 99, 224, 0.8) 45%,\n      rgba(38, 180, 106, 0.78) 100%);\n}\n.auth-visual[_ngcontent-%COMP%]::before {\n  width: 280px;\n  height: 280px;\n  opacity: 0.18;\n}\n.auth-visual[_ngcontent-%COMP%]::after {\n  width: 340px;\n  height: 340px;\n  opacity: 0.16;\n}\n.auth-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 12px;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: min(520px, 96%);\n  padding: 30px;\n  transform: scale(1.05) translateX(-8px);\n  box-shadow: 0 28px 56px rgba(15, 23, 42, 0.24);\n}\n.auth-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #22c55e);\n  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.25);\n  font-weight: 700;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 30px rgba(37, 99, 235, 0.32);\n}\n@media (max-width: 960px) {\n  .auth-page[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .auth-body[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n}\n.remember[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: var(--gray-700);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.45);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, NavbarComponent], template: `<app-navbar></app-navbar>\r
\r
<div class="auth-page">\r
  <section class="auth-visual">\r
    <div class="brand">\r
      <div class="logo-placeholder" aria-label="Logo Sanad">S</div>\r
      <span class="brand-name">Sanad</span>\r
    </div>\r
    <h1>Accedez a votre espace securise</h1>\r
    <p>Gerez vos actions facilement et en toute confiance.</p>\r
    <div class="microcopy">\r
      <span>Gerez vos actions facilement</span>\r
      <span>Suivez vos contributions</span>\r
    </div>\r
  </section>\r
\r
  <section class="auth-body">\r
    <div class="auth-card">\r
      <div class="auth-card-header">\r
        <div class="logo-placeholder small" aria-hidden="true">S</div>\r
        <div>\r
        <h2>Bon retour</h2>\r
        <p>Connectez-vous pour continuer a soutenir votre communaute.</p>\r
        </div>\r
      </div>\r
\r
      <form class="auth-form" [formGroup]="form" (ngSubmit)="submit()" novalidate>\r
        <div class="field">\r
          <label for="email">E-mail</label>\r
          <input\r
            id="email"\r
            class="input"\r
            [class.invalid]="emailControl.touched && emailControl.invalid"\r
            type="email"\r
            formControlName="email"\r
            autocomplete="email"\r
            placeholder="you@example.com"\r
          />\r
          <div class="error-text" *ngIf="emailControl.touched && emailControl.errors?.['required']">\r
            L'adresse e-mail est requise.\r
          </div>\r
          <div class="error-text" *ngIf="emailControl.touched && emailControl.errors?.['email']">\r
            Saisissez une adresse e-mail valide.\r
          </div>\r
        </div>\r
\r
        <div class="field">\r
          <label for="password">Mot de passe</label>\r
          <div class="input-group">\r
            <input\r
              id="password"\r
              class="input"\r
              [class.invalid]="passwordControl.touched && passwordControl.invalid"\r
              [type]="showPassword ? 'text' : 'password'"\r
              formControlName="password"\r
              autocomplete="current-password"\r
              placeholder="Saisissez votre mot de passe"\r
            />\r
            <button type="button" class="toggle-button" (click)="togglePassword()">\r
              {{ showPassword ? 'Masquer' : 'Afficher' }}\r
            </button>\r
          </div>\r
          <div class="error-text" *ngIf="passwordControl.touched && passwordControl.errors?.['required']">\r
            Le mot de passe est requis.\r
          </div>\r
        </div>\r
\r
        <div class="actions">\r
          <label class="remember">\r
            <input type="checkbox" formControlName="remember" />\r
            Se souvenir de moi\r
          </label>\r
          <a class="link" href="" (click)="onForgot($event)">Mot de passe oublie ?</a>\r
        </div>\r
\r
        <div class="helper" *ngIf="forgotMessage">{{ forgotMessage }}</div>\r
\r
        <div class="error-text" *ngIf="loginError" [class.shake]="loginError">\r
          {{ loginError }}\r
        </div>\r
\r
        <button class="btn btn-primary" type="submit" [disabled]="isSubmitting">\r
          <span *ngIf="isSubmitting" class="spinner" aria-hidden="true"></span>\r
          <span>{{ isSubmitting ? 'Connexion en cours' : 'Connexion' }}</span>\r
        </button>\r
      </form>\r
\r
      <div class="divider"></div>\r
      <p>\r
        Nouveau ici ?\r
        <a class="link" routerLink="/auth/register">Creer un compte</a>\r
      </p>\r
    </div>\r
  </section>\r
</div>\r
`, styles: ["/* src/app/auth/login/login.component.css */\n.auth-form {\n  display: grid;\n  gap: 14px;\n}\n.auth-page {\n  grid-template-columns: minmax(0, 32%) minmax(0, 68%);\n}\n.auth-visual {\n  padding: 28px 32px;\n  background:\n    linear-gradient(\n      140deg,\n      rgba(36, 67, 154, 0.78) 0%,\n      rgba(43, 99, 224, 0.8) 45%,\n      rgba(38, 180, 106, 0.78) 100%);\n}\n.auth-visual::before {\n  width: 280px;\n  height: 280px;\n  opacity: 0.18;\n}\n.auth-visual::after {\n  width: 340px;\n  height: 340px;\n  opacity: 0.16;\n}\n.auth-body {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 12px;\n}\n.auth-card {\n  width: min(520px, 96%);\n  padding: 30px;\n  transform: scale(1.05) translateX(-8px);\n  box-shadow: 0 28px 56px rgba(15, 23, 42, 0.24);\n}\n.auth-card h2 {\n  font-size: 30px;\n  font-weight: 700;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #22c55e);\n  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.25);\n  font-weight: 700;\n}\n.btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 30px rgba(37, 99, 235, 0.32);\n}\n@media (max-width: 960px) {\n  .auth-page {\n    grid-template-columns: 1fr;\n  }\n  .auth-body {\n    padding: 24px 16px;\n  }\n}\n.remember {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: var(--gray-700);\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.45);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app/auth/login/login.component.ts", lineNumber: 16 });
})();

// src/app/auth/auth.validators.ts
var passwordStrengthValidator = (control) => {
  const value = String(control.value ?? "");
  if (!value) {
    return null;
  }
  const errors = {};
  if (value.length < 8) {
    errors["minLength"] = true;
  }
  if (!/[A-Z]/.test(value)) {
    errors["uppercase"] = true;
  }
  if (!/[0-9]/.test(value)) {
    errors["number"] = true;
  }
  return Object.keys(errors).length ? errors : null;
};
var passwordMatchValidator = (passwordKey, confirmKey) => {
  return (group) => {
    const password = group.get(passwordKey)?.value;
    const confirm = group.get(confirmKey)?.value;
    if (!password || !confirm) {
      return null;
    }
    return password === confirm ? null : { passwordMismatch: true };
  };
};

// src/app/auth/register/register.component.ts
function RegisterComponent_ng_container_61_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " Le nom complet est requis. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_61_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " L'adresse e-mail est requise. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_61_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " Saisissez une adresse e-mail valide. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_61_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " Le mot de passe doit comporter au moins 8 caracteres. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_61_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " Ajoutez au moins une majuscule. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_61_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " Ajoutez au moins un chiffre. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_61_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " Les mots de passe ne correspondent pas. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 30)(2, "div", 31)(3, "label", 32);
    \u0275\u0275text(4, "Nom complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 33)(6, "span", 34);
    \u0275\u0275element(7, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, RegisterComponent_ng_container_61_div_9_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 31)(11, "label", 37);
    \u0275\u0275text(12, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 33)(14, "span", 34);
    \u0275\u0275element(15, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, RegisterComponent_ng_container_61_div_17_Template, 2, 0, "div", 36)(18, RegisterComponent_ng_container_61_div_18_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 31)(20, "label", 40);
    \u0275\u0275text(21, "Mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 33)(23, "span", 34);
    \u0275\u0275element(24, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 41);
    \u0275\u0275elementStart(26, "button", 42);
    \u0275\u0275listener("click", function RegisterComponent_ng_container_61_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePassword());
    });
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 43)(29, "div", 44);
    \u0275\u0275element(30, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 45);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 46)(34, "span");
    \u0275\u0275text(35, "Au moins 8 caracteres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, "1 majuscule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39, "1 chiffre");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, RegisterComponent_ng_container_61_div_40_Template, 2, 0, "div", 36)(41, RegisterComponent_ng_container_61_div_41_Template, 2, 0, "div", 36)(42, RegisterComponent_ng_container_61_div_42_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 31)(44, "label", 47);
    \u0275\u0275text(45, "Confirmer le mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 33)(47, "span", 34);
    \u0275\u0275element(48, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 48);
    \u0275\u0275elementStart(50, "button", 42);
    \u0275\u0275listener("click", function RegisterComponent_ng_container_61_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleConfirm());
    });
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(52, RegisterComponent_ng_container_61_div_52_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 31)(54, "label", 49);
    \u0275\u0275text(55, "Numero de telephone (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 33)(57, "span", 34);
    \u0275\u0275element(58, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "input", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classProp("invalid", ctx_r1.userForm.controls.fullName.touched && ctx_r1.userForm.controls.fullName.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.userForm.controls.fullName.touched && (ctx_r1.userForm.controls.fullName.errors == null ? null : ctx_r1.userForm.controls.fullName.errors["required"]));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("invalid", ctx_r1.userForm.controls.email.touched && ctx_r1.userForm.controls.email.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.userForm.controls.email.touched && (ctx_r1.userForm.controls.email.errors == null ? null : ctx_r1.userForm.controls.email.errors["required"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.userForm.controls.email.touched && (ctx_r1.userForm.controls.email.errors == null ? null : ctx_r1.userForm.controls.email.errors["email"]));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("invalid", ctx_r1.userForm.controls.password.touched && ctx_r1.userForm.controls.password.invalid);
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showPassword ? "Masquer" : "Afficher", " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.passwordStrength.tone);
    \u0275\u0275styleProp("width", ctx_r1.passwordStrength.percent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Force: ", ctx_r1.passwordStrength.label);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.userForm.controls.password.touched && (ctx_r1.userForm.controls.password.errors == null ? null : ctx_r1.userForm.controls.password.errors["minLength"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.userForm.controls.password.touched && (ctx_r1.userForm.controls.password.errors == null ? null : ctx_r1.userForm.controls.password.errors["uppercase"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.userForm.controls.password.touched && (ctx_r1.userForm.controls.password.errors == null ? null : ctx_r1.userForm.controls.password.errors["number"]));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("invalid", ctx_r1.userForm.controls.confirmPassword.touched && (ctx_r1.userForm.controls.confirmPassword.invalid || (ctx_r1.userForm.errors == null ? null : ctx_r1.userForm.errors["passwordMismatch"])));
    \u0275\u0275property("type", ctx_r1.showConfirm ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showConfirm ? "Masquer" : "Afficher", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.userForm.touched && (ctx_r1.userForm.errors == null ? null : ctx_r1.userForm.errors["passwordMismatch"]));
  }
}
function RegisterComponent_ng_container_62_div_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " Le nom de l'organisation est requis. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_62_div_9_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " Le nom du responsable est requis. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_62_div_9_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " L'adresse e-mail est requise. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_62_div_9_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " Saisissez une adresse e-mail valide. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_62_div_9_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " Le mot de passe doit comporter au moins 8 caracteres. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_62_div_9_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " Ajoutez au moins une majuscule. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_62_div_9_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " Ajoutez au moins un chiffre. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_62_div_9_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " Les mots de passe ne correspondent pas. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_62_div_9_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " Le numero de telephone est requis. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_62_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 31)(2, "label", 58);
    \u0275\u0275text(3, "Nom de l'organisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33)(5, "span", 34);
    \u0275\u0275element(6, "i", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, RegisterComponent_ng_container_62_div_9_div_8_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 31)(10, "label", 61);
    \u0275\u0275text(11, "Nom du responsable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 33)(13, "span", 34);
    \u0275\u0275element(14, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, RegisterComponent_ng_container_62_div_9_div_16_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 31)(18, "label", 63);
    \u0275\u0275text(19, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 33)(21, "span", 34);
    \u0275\u0275element(22, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, RegisterComponent_ng_container_62_div_9_div_24_Template, 2, 0, "div", 36)(25, RegisterComponent_ng_container_62_div_9_div_25_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 31)(27, "label", 65);
    \u0275\u0275text(28, "Mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 33)(30, "span", 34);
    \u0275\u0275element(31, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 66);
    \u0275\u0275elementStart(33, "button", 42);
    \u0275\u0275listener("click", function RegisterComponent_ng_container_62_div_9_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePassword());
    });
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 43)(36, "div", 44);
    \u0275\u0275element(37, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 45);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 46)(41, "span");
    \u0275\u0275text(42, "Au moins 8 caracteres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44, "1 majuscule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46, "1 chiffre");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, RegisterComponent_ng_container_62_div_9_div_47_Template, 2, 0, "div", 36)(48, RegisterComponent_ng_container_62_div_9_div_48_Template, 2, 0, "div", 36)(49, RegisterComponent_ng_container_62_div_9_div_49_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 31)(51, "label", 67);
    \u0275\u0275text(52, "Confirmer le mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 33)(54, "span", 34);
    \u0275\u0275element(55, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "input", 68);
    \u0275\u0275elementStart(57, "button", 42);
    \u0275\u0275listener("click", function RegisterComponent_ng_container_62_div_9_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleConfirm());
    });
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(59, RegisterComponent_ng_container_62_div_9_div_59_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 31)(61, "label", 69);
    \u0275\u0275text(62, "Numero de telephone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 33)(64, "span", 34);
    \u0275\u0275element(65, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "input", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275template(67, RegisterComponent_ng_container_62_div_9_div_67_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("invalid", ctx_r1.associationForm.controls.organizationName.touched && ctx_r1.associationForm.controls.organizationName.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.associationForm.controls.organizationName.touched && (ctx_r1.associationForm.controls.organizationName.errors == null ? null : ctx_r1.associationForm.controls.organizationName.errors["required"]));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("invalid", ctx_r1.associationForm.controls.responsibleName.touched && ctx_r1.associationForm.controls.responsibleName.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.associationForm.controls.responsibleName.touched && (ctx_r1.associationForm.controls.responsibleName.errors == null ? null : ctx_r1.associationForm.controls.responsibleName.errors["required"]));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("invalid", ctx_r1.associationForm.controls.email.touched && ctx_r1.associationForm.controls.email.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.associationForm.controls.email.touched && (ctx_r1.associationForm.controls.email.errors == null ? null : ctx_r1.associationForm.controls.email.errors["required"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.associationForm.controls.email.touched && (ctx_r1.associationForm.controls.email.errors == null ? null : ctx_r1.associationForm.controls.email.errors["email"]));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("invalid", ctx_r1.associationForm.controls.password.touched && ctx_r1.associationForm.controls.password.invalid);
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showPassword ? "Masquer" : "Afficher", " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.passwordStrength.tone);
    \u0275\u0275styleProp("width", ctx_r1.passwordStrength.percent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Force: ", ctx_r1.passwordStrength.label);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.associationForm.controls.password.touched && (ctx_r1.associationForm.controls.password.errors == null ? null : ctx_r1.associationForm.controls.password.errors["minLength"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.associationForm.controls.password.touched && (ctx_r1.associationForm.controls.password.errors == null ? null : ctx_r1.associationForm.controls.password.errors["uppercase"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.associationForm.controls.password.touched && (ctx_r1.associationForm.controls.password.errors == null ? null : ctx_r1.associationForm.controls.password.errors["number"]));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("invalid", ctx_r1.associationForm.controls.confirmPassword.touched && (ctx_r1.associationForm.controls.confirmPassword.invalid || (ctx_r1.associationForm.errors == null ? null : ctx_r1.associationForm.errors["passwordMismatch"])));
    \u0275\u0275property("type", ctx_r1.showConfirm ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showConfirm ? "Masquer" : "Afficher", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.associationForm.touched && (ctx_r1.associationForm.errors == null ? null : ctx_r1.associationForm.errors["passwordMismatch"]));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.associationForm.controls.phone.touched && (ctx_r1.associationForm.controls.phone.errors == null ? null : ctx_r1.associationForm.controls.phone.errors["required"]));
  }
}
function RegisterComponent_ng_container_62_div_10_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " La description est requise. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_62_div_10_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " Le document de verification est requis. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_62_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 31)(2, "label", 71);
    \u0275\u0275text(3, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33)(5, "span", 34);
    \u0275\u0275element(6, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "textarea", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, RegisterComponent_ng_container_62_div_10_div_8_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 31)(10, "label", 74);
    \u0275\u0275text(11, "Document de verification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 75)(13, "input", 76);
    \u0275\u0275listener("change", function RegisterComponent_ng_container_62_div_10_Template_input_change_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 77);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, RegisterComponent_ng_container_62_div_10_div_16_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 78)(18, "button", 79);
    \u0275\u0275listener("click", function RegisterComponent_ng_container_62_div_10_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToStep(1));
    });
    \u0275\u0275text(19, " Retour ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.associationForm.controls.description.touched && (ctx_r1.associationForm.controls.description.errors == null ? null : ctx_r1.associationForm.controls.description.errors["required"]));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" Televersez une preuve d'enregistrement (PDF ou image). ", ctx_r1.documentName || "Aucun fichier selectionne", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.associationForm.controls.document.touched && (ctx_r1.associationForm.controls.document.errors == null ? null : ctx_r1.associationForm.controls.document.errors["required"]));
  }
}
function RegisterComponent_ng_container_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 30)(2, "div", 53)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 54);
    \u0275\u0275element(6, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 55);
    \u0275\u0275text(8, " Votre compte association sera examine avant activation pour garantir la transparence et la confiance. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, RegisterComponent_ng_container_62_div_9_Template, 68, 28, "div", 56)(10, RegisterComponent_ng_container_62_div_10_Template, 20, 3, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Etape ", ctx_r1.associationStep, " sur 2");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.associationStep === 1 ? 50 : 100, "%");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.associationStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.associationStep === 2);
  }
}
function RegisterComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("shake", ctx_r1.registerError);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.registerError, " ");
  }
}
function RegisterComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.registerSuccess);
  }
}
function RegisterComponent_span_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 80);
  }
}
var RegisterComponent = class _RegisterComponent {
  auth;
  router;
  fb = inject(FormBuilder);
  mode = "user";
  associationStep = 1;
  isSubmitting = false;
  registerError = "";
  registerSuccess = "";
  showPassword = false;
  showConfirm = false;
  documentName = "";
  userForm = this.fb.group({
    fullName: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, passwordStrengthValidator]],
    confirmPassword: ["", [Validators.required]],
    phone: [""]
  }, { validators: passwordMatchValidator("password", "confirmPassword") });
  associationForm = this.fb.group({
    organizationName: ["", [Validators.required]],
    responsibleName: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, passwordStrengthValidator]],
    confirmPassword: ["", [Validators.required]],
    phone: ["", [Validators.required]],
    description: ["", [Validators.required]],
    document: this.fb.control(null, Validators.required)
  }, { validators: passwordMatchValidator("password", "confirmPassword") });
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  setMode(mode) {
    this.mode = mode;
    this.associationStep = 1;
    this.registerError = "";
    this.registerSuccess = "";
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirm() {
    this.showConfirm = !this.showConfirm;
  }
  onFileSelected(event) {
    const input = event.target;
    const file = input.files?.[0] ?? null;
    this.documentName = file ? file.name : "";
    this.associationForm.controls.document.setValue(file);
  }
  get passwordStrength() {
    const value = this.mode === "user" ? String(this.userForm.controls.password.value ?? "") : String(this.associationForm.controls.password.value ?? "");
    const rules = [
      value.length >= 8,
      /[A-Z]/.test(value),
      /[0-9]/.test(value)
    ];
    const score = rules.filter(Boolean).length;
    const percent = Math.round(score / 3 * 100);
    if (score <= 1) {
      return { label: "Faible", percent, tone: "weak" };
    }
    if (score === 2) {
      return { label: "Moyen", percent, tone: "medium" };
    }
    return { label: "Fort", percent, tone: "strong" };
  }
  goToStep(step) {
    this.associationStep = step;
  }
  nextAssociationStep() {
    const controls = this.associationForm.controls;
    controls.organizationName.markAsTouched();
    controls.responsibleName.markAsTouched();
    controls.email.markAsTouched();
    controls.phone.markAsTouched();
    controls.password.markAsTouched();
    controls.confirmPassword.markAsTouched();
    if (controls.organizationName.invalid || controls.responsibleName.invalid || controls.email.invalid || controls.phone.invalid || controls.password.invalid || controls.confirmPassword.invalid || this.associationForm.errors?.["passwordMismatch"]) {
      return;
    }
    this.associationStep = 2;
  }
  submit() {
    if (this.isSubmitting) {
      return;
    }
    if (this.mode === "user") {
      if (this.userForm.invalid) {
        this.userForm.markAllAsTouched();
        return;
      }
    } else if (this.associationStep === 1) {
      this.nextAssociationStep();
      return;
    }
    if (this.mode === "user") {
      this.isSubmitting = true;
      this.registerError = "";
      const payload = {
        fullName: String(this.userForm.value.fullName ?? "").trim(),
        email: String(this.userForm.value.email ?? "").trim(),
        password: String(this.userForm.value.password ?? ""),
        phone: String(this.userForm.value.phone ?? "").trim() || void 0
      };
      this.auth.registerUser(payload).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          if (!response.success) {
            this.registerError = response.message || "Impossible de creer le compte.";
            return;
          }
          this.registerSuccess = "Compte cree. Vous pouvez vous connecter.";
          this.router.navigateByUrl("/auth/login");
        },
        error: () => {
          this.isSubmitting = false;
          this.registerError = "Impossible de creer le compte.";
        }
      });
      return;
    }
    this.registerError = "";
    this.associationForm.controls.description.markAsTouched();
    this.associationForm.controls.document.markAsTouched();
    if (this.associationForm.controls.description.invalid || this.associationForm.controls.document.invalid) {
      return;
    }
    this.isSubmitting = true;
    const formData = new FormData();
    formData.append("organizationName", String(this.associationForm.value.organizationName ?? "").trim());
    formData.append("responsibleName", String(this.associationForm.value.responsibleName ?? "").trim());
    formData.append("email", String(this.associationForm.value.email ?? "").trim());
    formData.append("password", String(this.associationForm.value.password ?? ""));
    formData.append("phone", String(this.associationForm.value.phone ?? "").trim());
    formData.append("description", String(this.associationForm.value.description ?? "").trim());
    const documentFile = this.associationForm.controls.document.value;
    if (documentFile) {
      formData.append("document", documentFile);
    }
    this.auth.registerAssociation(formData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        if (!response.success) {
          this.registerError = response.message || "Impossible de soumettre la demande.";
          return;
        }
        this.router.navigateByUrl("/auth/pending");
      },
      error: () => {
        this.isSubmitting = false;
        this.registerError = "Impossible de soumettre la demande.";
      }
    });
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 74, vars: 14, consts: [[1, "auth-page"], [1, "auth-visual"], [1, "brand"], ["aria-label", "Logo Sanad", 1, "logo-placeholder"], [1, "brand-name"], ["aria-hidden", "true", 1, "illustration"], [1, "illustration-ring"], [1, "illustration-people"], ["aria-hidden", "true", 1, "fa-solid", "fa-handshake"], [1, "illustration-note"], [1, "metrics"], [1, "microcopy"], [1, "auth-body"], [1, "auth-card"], [1, "auth-card-header"], ["aria-hidden", "true", 1, "logo-placeholder", "small"], ["role", "tablist", 1, "role-tabs"], ["type", "button", "role", "tab", 1, "role-tab", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-user"], [1, "trust-row"], ["aria-hidden", "true", 1, "fa-solid", "fa-lock"], ["aria-hidden", "true", 1, "fa-solid", "fa-circle-check"], ["novalidate", "", 1, "auth-form", 3, "ngSubmit", "formGroup"], [4, "ngIf"], ["class", "error-text", 3, "shake", 4, "ngIf"], ["class", "helper", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner", "aria-hidden", "true", 4, "ngIf"], [1, "divider"], ["routerLink", "/auth/login", 1, "link"], [1, "tab-panel"], [1, "field"], ["for", "fullName"], [1, "input-wrap"], [1, "input-icon"], ["id", "fullName", "type", "text", "formControlName", "fullName", "autocomplete", "name", "placeholder", "Amira Rahman", 1, "input", "has-icon"], ["class", "error-text", 4, "ngIf"], ["for", "email"], ["aria-hidden", "true", 1, "fa-solid", "fa-envelope"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "you@example.com", 1, "input", "has-icon"], ["for", "password"], ["id", "password", "formControlName", "password", "autocomplete", "new-password", "placeholder", "Au moins 8 caracteres", 1, "input", "has-icon", 3, "type"], ["type", "button", 1, "toggle-button", 3, "click"], [1, "strength"], [1, "strength-bar"], [1, "strength-label"], [1, "rules"], ["for", "confirmPassword"], ["id", "confirmPassword", "formControlName", "confirmPassword", "autocomplete", "new-password", "placeholder", "Repetez votre mot de passe", 1, "input", "has-icon", 3, "type"], ["for", "phone"], ["aria-hidden", "true", 1, "fa-solid", "fa-phone"], ["id", "phone", "type", "tel", "formControlName", "phone", "autocomplete", "tel", "placeholder", "+216 00 000 000", 1, "input", "has-icon"], [1, "error-text"], [1, "step-header"], [1, "step-bar"], [1, "alert"], ["class", "step-panel", 4, "ngIf"], [1, "step-panel"], ["for", "organizationName"], ["aria-hidden", "true", 1, "fa-solid", "fa-people-group"], ["id", "organizationName", "type", "text", "formControlName", "organizationName", "placeholder", "Hope Builders", 1, "input", "has-icon"], ["for", "responsibleName"], ["id", "responsibleName", "type", "text", "formControlName", "responsibleName", "placeholder", "Salma Ben Youssef", 1, "input", "has-icon"], ["for", "associationEmail"], ["id", "associationEmail", "type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "team@association.org", 1, "input", "has-icon"], ["for", "associationPassword"], ["id", "associationPassword", "formControlName", "password", "autocomplete", "new-password", "placeholder", "Au moins 8 caracteres", 1, "input", "has-icon", 3, "type"], ["for", "associationConfirm"], ["id", "associationConfirm", "formControlName", "confirmPassword", "autocomplete", "new-password", "placeholder", "Repetez votre mot de passe", 1, "input", "has-icon", 3, "type"], ["for", "associationPhone"], ["id", "associationPhone", "type", "tel", "formControlName", "phone", "autocomplete", "tel", "placeholder", "+216 00 000 000", 1, "input", "has-icon"], ["for", "description"], ["aria-hidden", "true", 1, "fa-solid", "fa-pen-to-square"], ["id", "description", "rows", "3", "formControlName", "description", "placeholder", "Parlez-nous de votre mission et de vos programmes.", 1, "input", "has-icon"], ["for", "verificationDocument"], [1, "file-upload"], ["id", "verificationDocument", "type", "file", "accept", ".pdf,image/*", "aria-label", "Televerser le document de verification", 3, "change"], [1, "helper"], [1, "step-actions"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["aria-hidden", "true", 1, "spinner"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar");
      \u0275\u0275elementStart(1, "div", 0)(2, "section", 1)(3, "div", 2)(4, "div", 3);
      \u0275\u0275text(5, "S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7, "Sanad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "h1");
      \u0275\u0275text(9, "Rejoignez un reseau de solidarite transparent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11, " Publiez ou soutenez des demandes d'aide avec une experience claire, humaine et fiable. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 5);
      \u0275\u0275element(13, "div", 6);
      \u0275\u0275elementStart(14, "div", 7);
      \u0275\u0275element(15, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9);
      \u0275\u0275text(17, "Ensemble");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 10)(19, "div")(20, "strong");
      \u0275\u0275text(21, "1200+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "dons verifies");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div")(25, "strong");
      \u0275\u0275text(26, "300+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "personnes aidees");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 11)(30, "span");
      \u0275\u0275text(31, "Suivez les dons en toute transparence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span");
      \u0275\u0275text(33, "Rejoignez une communaute engagee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span");
      \u0275\u0275text(35, "Vos donnees sont securisees et protegees");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "section", 12)(37, "div", 13)(38, "div", 14)(39, "div", 15);
      \u0275\u0275text(40, "S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div")(42, "h2");
      \u0275\u0275text(43, "Creez votre compte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p");
      \u0275\u0275text(45, "Choisissez le profil qui correspond a votre mission.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 16)(47, "button", 17);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_47_listener() {
        return ctx.setMode("user");
      });
      \u0275\u0275element(48, "i", 18);
      \u0275\u0275text(49, " Utilisateur ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "button", 17);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_50_listener() {
        return ctx.setMode("association");
      });
      \u0275\u0275element(51, "i", 8);
      \u0275\u0275text(52, " Association ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 19)(54, "span");
      \u0275\u0275element(55, "i", 20);
      \u0275\u0275text(56, " Vos donnees sont chiffrees et securisees");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275element(58, "i", 21);
      \u0275\u0275text(59, " Associations verifiees uniquement");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "form", 22);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_60_listener() {
        return ctx.submit();
      });
      \u0275\u0275template(61, RegisterComponent_ng_container_61_Template, 60, 24, "ng-container", 23)(62, RegisterComponent_ng_container_62_Template, 11, 5, "ng-container", 23)(63, RegisterComponent_div_63_Template, 2, 3, "div", 24)(64, RegisterComponent_div_64_Template, 2, 1, "div", 25);
      \u0275\u0275elementStart(65, "button", 26);
      \u0275\u0275template(66, RegisterComponent_span_66_Template, 1, 0, "span", 27);
      \u0275\u0275elementStart(67, "span");
      \u0275\u0275text(68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(69, "div", 28);
      \u0275\u0275elementStart(70, "p");
      \u0275\u0275text(71, " Vous avez deja un compte ? ");
      \u0275\u0275elementStart(72, "a", 29);
      \u0275\u0275text(73, "Se connecter");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(47);
      \u0275\u0275classProp("active", ctx.mode === "user");
      \u0275\u0275attribute("aria-selected", ctx.mode === "user");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.mode === "association");
      \u0275\u0275attribute("aria-selected", ctx.mode === "association");
      \u0275\u0275advance(10);
      \u0275\u0275property("formGroup", ctx.mode === "user" ? ctx.userForm : ctx.associationForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "user");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "association");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.registerError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.registerSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? "Envoi en cours" : ctx.mode === "association" && ctx.associationStep === 1 ? "Continuer" : "Rejoindre la plateforme", " ");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, NavbarComponent], styles: ["\n.auth-page[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 32%) minmax(0, 68%);\n  align-items: stretch;\n}\n.auth-visual[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  background:\n    linear-gradient(\n      140deg,\n      rgba(36, 67, 154, 0.78) 0%,\n      rgba(43, 99, 224, 0.8) 45%,\n      rgba(38, 180, 106, 0.78) 100%);\n  display: grid;\n  align-content: center;\n  gap: 12px;\n}\n.auth-visual[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 34px;\n  margin-top: 0;\n}\n.auth-visual[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: min(520px, 96%);\n  border-radius: 16px;\n  padding: 30px;\n  box-shadow: 0 28px 56px rgba(15, 23, 42, 0.24);\n  background: rgba(255, 255, 255, 0.88);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  position: relative;\n  z-index: 1;\n  transform: scale(1.05) translateX(-8px);\n}\n.auth-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 12px;\n  position: relative;\n  background:\n    radial-gradient(\n      circle at top,\n      rgba(37, 99, 235, 0.08),\n      transparent 50%),\n    radial-gradient(\n      circle at bottom,\n      rgba(34, 197, 94, 0.12),\n      transparent 50%);\n  overflow: hidden;\n}\n.auth-card-header[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n.auth-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 27px;\n  font-weight: 700;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.role-tabs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  background: #f8fafc;\n  padding: 6px;\n  border-radius: 999px;\n}\n.role-tab[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-weight: 600;\n  padding: 10px 14px;\n  border-radius: 999px;\n  cursor: pointer;\n  color: var(--gray-700);\n  transition: all 0.2s ease;\n}\n.role-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.role-tab.active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #1d4ed8;\n  box-shadow: 0 10px 18px rgba(15, 23, 42, 0.16);\n  border: 1px solid rgba(37, 99, 235, 0.2);\n}\n.trust-row[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  font-size: 13px;\n  color: var(--gray-500);\n}\n.tab-panel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  animation: fadeIn 0.3s ease;\n}\n.input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 16px;\n  opacity: 0.7;\n}\n.input-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.input.has-icon[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n.strength[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 8px;\n}\n.strength-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  border-radius: 999px;\n  background: #e5e7eb;\n  overflow: hidden;\n}\n.strength-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  transition: width 0.3s ease;\n}\n.strength-bar[_ngcontent-%COMP%]   .weak[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.strength-bar[_ngcontent-%COMP%]   .medium[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.strength-bar[_ngcontent-%COMP%]   .strong[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.strength-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--gray-500);\n  min-width: 80px;\n}\n.rules[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 12px;\n  font-size: 12px;\n  color: var(--gray-500);\n}\n.step-header[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  font-size: 13px;\n  color: var(--gray-500);\n}\n.step-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  border-radius: 999px;\n  background: #e5e7eb;\n  overflow: hidden;\n}\n.step-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #22c55e);\n  transition: width 0.3s ease;\n}\n.alert[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.08);\n  border: 1px solid rgba(37, 99, 235, 0.2);\n  padding: 12px 14px;\n  border-radius: 14px;\n  font-size: 13px;\n  color: #1e40af;\n}\n.step-panel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--gray-700);\n  border: 1px solid var(--gray-200);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #22c55e);\n  color: var(--white);\n  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.25);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 28px rgba(37, 99, 235, 0.3);\n}\n.illustration[_ngcontent-%COMP%] {\n  position: relative;\n  width: 190px;\n  height: 190px;\n  margin: 6px 0 0;\n}\n.illustration-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n}\n.illustration-people[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 35px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.2);\n  display: grid;\n  place-items: center;\n  font-size: 40px;\n}\n.illustration-note[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -4px;\n  right: -6px;\n  background: rgba(255, 255, 255, 0.9);\n  color: #1e3a8a;\n  padding: 6px 12px;\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 12px;\n}\n.metrics[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin: 2px 0 6px;\n  flex-wrap: wrap;\n}\n.metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.16);\n  padding: 8px 12px;\n  border-radius: 12px;\n  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.18);\n}\n.metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.metrics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n}\n.metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n}\n.metrics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.85;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.45);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 960px) {\n  .auth-page[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .auth-visual[_ngcontent-%COMP%] {\n    padding: 32px 22px;\n  }\n  .metrics[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=register.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, NavbarComponent], template: `<app-navbar></app-navbar>\r
\r
<div class="auth-page">\r
  <section class="auth-visual">\r
    <div class="brand">\r
      <div class="logo-placeholder" aria-label="Logo Sanad">S</div>\r
      <span class="brand-name">Sanad</span>\r
    </div>\r
    <h1>Rejoignez un reseau de solidarite transparent</h1>\r
    <p>\r
      Publiez ou soutenez des demandes d'aide avec une experience claire,\r
      humaine et fiable.\r
    </p>\r
    <div class="illustration" aria-hidden="true">\r
      <div class="illustration-ring"></div>\r
      <div class="illustration-people"><i class="fa-solid fa-handshake" aria-hidden="true"></i></div>\r
      <div class="illustration-note">Ensemble</div>\r
    </div>\r
    <div class="metrics">\r
      <div>\r
        <strong>1200+</strong>\r
        <span>dons verifies</span>\r
      </div>\r
      <div>\r
        <strong>300+</strong>\r
        <span>personnes aidees</span>\r
      </div>\r
    </div>\r
    <div class="microcopy">\r
      <span>Suivez les dons en toute transparence</span>\r
      <span>Rejoignez une communaute engagee</span>\r
      <span>Vos donnees sont securisees et protegees</span>\r
    </div>\r
  </section>\r
\r
  <section class="auth-body">\r
    <div class="auth-card">\r
      <div class="auth-card-header">\r
        <div class="logo-placeholder small" aria-hidden="true">S</div>\r
        <div>\r
        <h2>Creez votre compte</h2>\r
        <p>Choisissez le profil qui correspond a votre mission.</p>\r
        </div>\r
      </div>\r
\r
      <div class="role-tabs" role="tablist">\r
        <button\r
          class="role-tab"\r
          [class.active]="mode === 'user'"\r
          type="button"\r
          role="tab"\r
          [attr.aria-selected]="mode === 'user'"\r
          (click)="setMode('user')"\r
        >\r
          <i class="fa-solid fa-user" aria-hidden="true"></i> Utilisateur\r
        </button>\r
        <button\r
          class="role-tab"\r
          [class.active]="mode === 'association'"\r
          type="button"\r
          role="tab"\r
          [attr.aria-selected]="mode === 'association'"\r
          (click)="setMode('association')"\r
        >\r
          <i class="fa-solid fa-handshake" aria-hidden="true"></i> Association\r
        </button>\r
      </div>\r
\r
      <div class="trust-row">\r
        <span><i class="fa-solid fa-lock" aria-hidden="true"></i> Vos donnees sont chiffrees et securisees</span>\r
        <span><i class="fa-solid fa-circle-check" aria-hidden="true"></i> Associations verifiees uniquement</span>\r
      </div>\r
\r
      <form\r
        class="auth-form"\r
        [formGroup]="mode === 'user' ? userForm : associationForm"\r
        (ngSubmit)="submit()"\r
        novalidate\r
      >\r
        <ng-container *ngIf="mode === 'user'">\r
          <div class="tab-panel">\r
            <div class="field">\r
              <label for="fullName">Nom complet</label>\r
              <div class="input-wrap">\r
                <span class="input-icon"><i class="fa-solid fa-user" aria-hidden="true"></i></span>\r
                <input\r
                  id="fullName"\r
                  class="input has-icon"\r
                  [class.invalid]="userForm.controls.fullName.touched && userForm.controls.fullName.invalid"\r
                  type="text"\r
                  formControlName="fullName"\r
                  autocomplete="name"\r
                  placeholder="Amira Rahman"\r
                />\r
              </div>\r
              <div class="error-text" *ngIf="userForm.controls.fullName.touched && userForm.controls.fullName.errors?.['required']">\r
                Le nom complet est requis.\r
              </div>\r
            </div>\r
\r
            <div class="field">\r
              <label for="email">E-mail</label>\r
              <div class="input-wrap">\r
                <span class="input-icon"><i class="fa-solid fa-envelope" aria-hidden="true"></i></span>\r
                <input\r
                  id="email"\r
                  class="input has-icon"\r
                  [class.invalid]="userForm.controls.email.touched && userForm.controls.email.invalid"\r
                  type="email"\r
                  formControlName="email"\r
                  autocomplete="email"\r
                  placeholder="you@example.com"\r
                />\r
              </div>\r
              <div class="error-text" *ngIf="userForm.controls.email.touched && userForm.controls.email.errors?.['required']">\r
                L'adresse e-mail est requise.\r
              </div>\r
              <div class="error-text" *ngIf="userForm.controls.email.touched && userForm.controls.email.errors?.['email']">\r
                Saisissez une adresse e-mail valide.\r
              </div>\r
            </div>\r
\r
            <div class="field">\r
              <label for="password">Mot de passe</label>\r
              <div class="input-wrap">\r
                <span class="input-icon"><i class="fa-solid fa-lock" aria-hidden="true"></i></span>\r
                <input\r
                  id="password"\r
                  class="input has-icon"\r
                  [class.invalid]="userForm.controls.password.touched && userForm.controls.password.invalid"\r
                  [type]="showPassword ? 'text' : 'password'"\r
                  formControlName="password"\r
                  autocomplete="new-password"\r
                  placeholder="Au moins 8 caracteres"\r
                />\r
                <button type="button" class="toggle-button" (click)="togglePassword()">\r
                  {{ showPassword ? 'Masquer' : 'Afficher' }}\r
                </button>\r
              </div>\r
              <div class="strength">\r
                <div class="strength-bar">\r
                  <span\r
                    [class]="passwordStrength.tone"\r
                    [style.width.%]="passwordStrength.percent"\r
                  ></span>\r
                </div>\r
                <div class="strength-label">Force: {{ passwordStrength.label }}</div>\r
              </div>\r
              <div class="rules">\r
                <span>Au moins 8 caracteres</span>\r
                <span>1 majuscule</span>\r
                <span>1 chiffre</span>\r
              </div>\r
              <div class="error-text" *ngIf="userForm.controls.password.touched && userForm.controls.password.errors?.['minLength']">\r
                Le mot de passe doit comporter au moins 8 caracteres.\r
              </div>\r
              <div class="error-text" *ngIf="userForm.controls.password.touched && userForm.controls.password.errors?.['uppercase']">\r
                Ajoutez au moins une majuscule.\r
              </div>\r
              <div class="error-text" *ngIf="userForm.controls.password.touched && userForm.controls.password.errors?.['number']">\r
                Ajoutez au moins un chiffre.\r
              </div>\r
            </div>\r
\r
            <div class="field">\r
              <label for="confirmPassword">Confirmer le mot de passe</label>\r
              <div class="input-wrap">\r
                <span class="input-icon"><i class="fa-solid fa-lock" aria-hidden="true"></i></span>\r
                <input\r
                  id="confirmPassword"\r
                  class="input has-icon"\r
                  [class.invalid]="userForm.controls.confirmPassword.touched && (userForm.controls.confirmPassword.invalid || userForm.errors?.['passwordMismatch'])"\r
                  [type]="showConfirm ? 'text' : 'password'"\r
                  formControlName="confirmPassword"\r
                  autocomplete="new-password"\r
                  placeholder="Repetez votre mot de passe"\r
                />\r
                <button type="button" class="toggle-button" (click)="toggleConfirm()">\r
                  {{ showConfirm ? 'Masquer' : 'Afficher' }}\r
                </button>\r
              </div>\r
              <div class="error-text" *ngIf="userForm.touched && userForm.errors?.['passwordMismatch']">\r
                Les mots de passe ne correspondent pas.\r
              </div>\r
            </div>\r
\r
            <div class="field">\r
              <label for="phone">Numero de telephone (optionnel)</label>\r
              <div class="input-wrap">\r
                <span class="input-icon"><i class="fa-solid fa-phone" aria-hidden="true"></i></span>\r
                <input\r
                  id="phone"\r
                  class="input has-icon"\r
                  type="tel"\r
                  formControlName="phone"\r
                  autocomplete="tel"\r
                  placeholder="+216 00 000 000"\r
                />\r
              </div>\r
            </div>\r
          </div>\r
        </ng-container>\r
\r
        <ng-container *ngIf="mode === 'association'">\r
          <div class="tab-panel">\r
            <div class="step-header">\r
              <span>Etape {{ associationStep }} sur 2</span>\r
              <div class="step-bar">\r
                <span [style.width.%]="associationStep === 1 ? 50 : 100"></span>\r
              </div>\r
            </div>\r
\r
            <div class="alert">\r
              Votre compte association sera examine avant activation pour garantir\r
              la transparence et la confiance.\r
            </div>\r
\r
            <div *ngIf="associationStep === 1" class="step-panel">\r
              <div class="field">\r
                <label for="organizationName">Nom de l'organisation</label>\r
                <div class="input-wrap">\r
                  <span class="input-icon"><i class="fa-solid fa-people-group" aria-hidden="true"></i></span>\r
                  <input\r
                    id="organizationName"\r
                    class="input has-icon"\r
                    [class.invalid]="associationForm.controls.organizationName.touched && associationForm.controls.organizationName.invalid"\r
                    type="text"\r
                    formControlName="organizationName"\r
                    placeholder="Hope Builders"\r
                  />\r
                </div>\r
                <div class="error-text" *ngIf="associationForm.controls.organizationName.touched && associationForm.controls.organizationName.errors?.['required']">\r
                  Le nom de l'organisation est requis.\r
                </div>\r
              </div>\r
\r
              <div class="field">\r
                <label for="responsibleName">Nom du responsable</label>\r
                <div class="input-wrap">\r
                  <span class="input-icon"><i class="fa-solid fa-user" aria-hidden="true"></i></span>\r
                  <input\r
                    id="responsibleName"\r
                    class="input has-icon"\r
                    [class.invalid]="associationForm.controls.responsibleName.touched && associationForm.controls.responsibleName.invalid"\r
                    type="text"\r
                    formControlName="responsibleName"\r
                    placeholder="Salma Ben Youssef"\r
                  />\r
                </div>\r
                <div class="error-text" *ngIf="associationForm.controls.responsibleName.touched && associationForm.controls.responsibleName.errors?.['required']">\r
                  Le nom du responsable est requis.\r
                </div>\r
              </div>\r
\r
              <div class="field">\r
                <label for="associationEmail">E-mail</label>\r
                <div class="input-wrap">\r
                  <span class="input-icon"><i class="fa-solid fa-envelope" aria-hidden="true"></i></span>\r
                  <input\r
                    id="associationEmail"\r
                    class="input has-icon"\r
                    [class.invalid]="associationForm.controls.email.touched && associationForm.controls.email.invalid"\r
                    type="email"\r
                    formControlName="email"\r
                    autocomplete="email"\r
                    placeholder="team@association.org"\r
                  />\r
                </div>\r
                <div class="error-text" *ngIf="associationForm.controls.email.touched && associationForm.controls.email.errors?.['required']">\r
                  L'adresse e-mail est requise.\r
                </div>\r
                <div class="error-text" *ngIf="associationForm.controls.email.touched && associationForm.controls.email.errors?.['email']">\r
                  Saisissez une adresse e-mail valide.\r
                </div>\r
              </div>\r
\r
              <div class="field">\r
                <label for="associationPassword">Mot de passe</label>\r
                <div class="input-wrap">\r
                  <span class="input-icon"><i class="fa-solid fa-lock" aria-hidden="true"></i></span>\r
                  <input\r
                    id="associationPassword"\r
                    class="input has-icon"\r
                    [class.invalid]="associationForm.controls.password.touched && associationForm.controls.password.invalid"\r
                    [type]="showPassword ? 'text' : 'password'"\r
                    formControlName="password"\r
                    autocomplete="new-password"\r
                    placeholder="Au moins 8 caracteres"\r
                  />\r
                  <button type="button" class="toggle-button" (click)="togglePassword()">\r
                    {{ showPassword ? 'Masquer' : 'Afficher' }}\r
                  </button>\r
                </div>\r
                <div class="strength">\r
                  <div class="strength-bar">\r
                    <span\r
                      [class]="passwordStrength.tone"\r
                      [style.width.%]="passwordStrength.percent"\r
                    ></span>\r
                  </div>\r
                  <div class="strength-label">Force: {{ passwordStrength.label }}</div>\r
                </div>\r
                <div class="rules">\r
                  <span>Au moins 8 caracteres</span>\r
                  <span>1 majuscule</span>\r
                  <span>1 chiffre</span>\r
                </div>\r
                <div class="error-text" *ngIf="associationForm.controls.password.touched && associationForm.controls.password.errors?.['minLength']">\r
                  Le mot de passe doit comporter au moins 8 caracteres.\r
                </div>\r
                <div class="error-text" *ngIf="associationForm.controls.password.touched && associationForm.controls.password.errors?.['uppercase']">\r
                  Ajoutez au moins une majuscule.\r
                </div>\r
                <div class="error-text" *ngIf="associationForm.controls.password.touched && associationForm.controls.password.errors?.['number']">\r
                  Ajoutez au moins un chiffre.\r
                </div>\r
              </div>\r
\r
              <div class="field">\r
                <label for="associationConfirm">Confirmer le mot de passe</label>\r
                <div class="input-wrap">\r
                  <span class="input-icon"><i class="fa-solid fa-lock" aria-hidden="true"></i></span>\r
                  <input\r
                    id="associationConfirm"\r
                    class="input has-icon"\r
                    [class.invalid]="associationForm.controls.confirmPassword.touched && (associationForm.controls.confirmPassword.invalid || associationForm.errors?.['passwordMismatch'])"\r
                    [type]="showConfirm ? 'text' : 'password'"\r
                    formControlName="confirmPassword"\r
                    autocomplete="new-password"\r
                    placeholder="Repetez votre mot de passe"\r
                  />\r
                  <button type="button" class="toggle-button" (click)="toggleConfirm()">\r
                    {{ showConfirm ? 'Masquer' : 'Afficher' }}\r
                  </button>\r
                </div>\r
                <div class="error-text" *ngIf="associationForm.touched && associationForm.errors?.['passwordMismatch']">\r
                  Les mots de passe ne correspondent pas.\r
                </div>\r
              </div>\r
\r
              <div class="field">\r
                <label for="associationPhone">Numero de telephone</label>\r
                <div class="input-wrap">\r
                  <span class="input-icon"><i class="fa-solid fa-phone" aria-hidden="true"></i></span>\r
                  <input\r
                    id="associationPhone"\r
                    class="input has-icon"\r
                    type="tel"\r
                    formControlName="phone"\r
                    autocomplete="tel"\r
                    placeholder="+216 00 000 000"\r
                  />\r
                </div>\r
                <div class="error-text" *ngIf="associationForm.controls.phone.touched && associationForm.controls.phone.errors?.['required']">\r
                  Le numero de telephone est requis.\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div *ngIf="associationStep === 2" class="step-panel">\r
              <div class="field">\r
                <label for="description">Description</label>\r
                <div class="input-wrap">\r
                  <span class="input-icon"><i class="fa-solid fa-pen-to-square" aria-hidden="true"></i></span>\r
                  <textarea\r
                    id="description"\r
                    class="input has-icon"\r
                    rows="3"\r
                    formControlName="description"\r
                    placeholder="Parlez-nous de votre mission et de vos programmes."\r
                  ></textarea>\r
                </div>\r
                <div class="error-text" *ngIf="associationForm.controls.description.touched && associationForm.controls.description.errors?.['required']">\r
                  La description est requise.\r
                </div>\r
              </div>\r
\r
              <div class="field">\r
                <label for="verificationDocument">Document de verification</label>\r
                <div class="file-upload">\r
                  <input\r
                    id="verificationDocument"\r
                    type="file"\r
                    accept=".pdf,image/*"\r
                    aria-label="Televerser le document de verification"\r
                    (change)="onFileSelected($event)"\r
                  />\r
                  <div class="helper">\r
                    Televersez une preuve d'enregistrement (PDF ou image). {{ documentName || 'Aucun fichier selectionne' }}\r
                  </div>\r
                </div>\r
                <div class="error-text" *ngIf="associationForm.controls.document.touched && associationForm.controls.document.errors?.['required']">\r
                  Le document de verification est requis.\r
                </div>\r
              </div>\r
\r
              <div class="step-actions">\r
                <button class="btn btn-ghost" type="button" (click)="goToStep(1)">\r
                  Retour\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </ng-container>\r
\r
        <div class="error-text" *ngIf="registerError" [class.shake]="registerError">\r
          {{ registerError }}\r
        </div>\r
        <div class="helper" *ngIf="registerSuccess">{{ registerSuccess }}</div>\r
\r
        <button class="btn btn-primary" type="submit" [disabled]="isSubmitting">\r
          <span *ngIf="isSubmitting" class="spinner" aria-hidden="true"></span>\r
          <span>\r
            {{\r
              isSubmitting\r
                ? 'Envoi en cours'\r
                : mode === 'association' && associationStep === 1\r
                  ? 'Continuer'\r
                  : 'Rejoindre la plateforme'\r
            }}\r
          </span>\r
        </button>\r
      </form>\r
\r
      <div class="divider"></div>\r
      <p>\r
        Vous avez deja un compte ?\r
        <a class="link" routerLink="/auth/login">Se connecter</a>\r
      </p>\r
    </div>\r
  </section>\r
</div>\r
`, styles: ["/* src/app/auth/register/register.component.css */\n.auth-page {\n  grid-template-columns: minmax(0, 32%) minmax(0, 68%);\n  align-items: stretch;\n}\n.auth-visual {\n  padding: 28px 32px;\n  background:\n    linear-gradient(\n      140deg,\n      rgba(36, 67, 154, 0.78) 0%,\n      rgba(43, 99, 224, 0.8) 45%,\n      rgba(38, 180, 106, 0.78) 100%);\n  display: grid;\n  align-content: center;\n  gap: 12px;\n}\n.auth-visual h1 {\n  font-size: 34px;\n  margin-top: 0;\n}\n.auth-visual p {\n  max-width: 420px;\n}\n.auth-card {\n  width: min(520px, 96%);\n  border-radius: 16px;\n  padding: 30px;\n  box-shadow: 0 28px 56px rgba(15, 23, 42, 0.24);\n  background: rgba(255, 255, 255, 0.88);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  position: relative;\n  z-index: 1;\n  transform: scale(1.05) translateX(-8px);\n}\n.auth-body {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 12px;\n  position: relative;\n  background:\n    radial-gradient(\n      circle at top,\n      rgba(37, 99, 235, 0.08),\n      transparent 50%),\n    radial-gradient(\n      circle at bottom,\n      rgba(34, 197, 94, 0.12),\n      transparent 50%);\n  overflow: hidden;\n}\n.auth-card-header {\n  gap: 10px;\n}\n.auth-card h2 {\n  font-size: 27px;\n  font-weight: 700;\n}\n.auth-form {\n  display: grid;\n  gap: 12px;\n}\n.role-tabs {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  background: #f8fafc;\n  padding: 6px;\n  border-radius: 999px;\n}\n.role-tab {\n  border: none;\n  background: transparent;\n  font-weight: 600;\n  padding: 10px 14px;\n  border-radius: 999px;\n  cursor: pointer;\n  color: var(--gray-700);\n  transition: all 0.2s ease;\n}\n.role-tab i {\n  margin-right: 8px;\n}\n.role-tab.active {\n  background: #ffffff;\n  color: #1d4ed8;\n  box-shadow: 0 10px 18px rgba(15, 23, 42, 0.16);\n  border: 1px solid rgba(37, 99, 235, 0.2);\n}\n.trust-row {\n  display: grid;\n  gap: 6px;\n  font-size: 13px;\n  color: var(--gray-500);\n}\n.tab-panel {\n  display: grid;\n  gap: 12px;\n  animation: fadeIn 0.3s ease;\n}\n.input-wrap {\n  position: relative;\n  display: grid;\n}\n.input-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 16px;\n  opacity: 0.7;\n}\n.input-icon i {\n  font-size: 14px;\n}\n.input.has-icon {\n  padding-left: 40px;\n}\n.strength {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 8px;\n}\n.strength-bar {\n  flex: 1;\n  height: 6px;\n  border-radius: 999px;\n  background: #e5e7eb;\n  overflow: hidden;\n}\n.strength-bar span {\n  display: block;\n  height: 100%;\n  transition: width 0.3s ease;\n}\n.strength-bar .weak {\n  background: #ef4444;\n}\n.strength-bar .medium {\n  background: #f59e0b;\n}\n.strength-bar .strong {\n  background: #22c55e;\n}\n.strength-label {\n  font-size: 12px;\n  color: var(--gray-500);\n  min-width: 80px;\n}\n.rules {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 12px;\n  font-size: 12px;\n  color: var(--gray-500);\n}\n.step-header {\n  display: grid;\n  gap: 6px;\n  font-size: 13px;\n  color: var(--gray-500);\n}\n.step-bar {\n  height: 6px;\n  border-radius: 999px;\n  background: #e5e7eb;\n  overflow: hidden;\n}\n.step-bar span {\n  display: block;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #22c55e);\n  transition: width 0.3s ease;\n}\n.alert {\n  background: rgba(37, 99, 235, 0.08);\n  border: 1px solid rgba(37, 99, 235, 0.2);\n  padding: 12px 14px;\n  border-radius: 14px;\n  font-size: 13px;\n  color: #1e40af;\n}\n.step-panel {\n  display: grid;\n  gap: 12px;\n}\n.step-actions {\n  display: flex;\n  justify-content: flex-start;\n}\n.btn-ghost {\n  background: transparent;\n  color: var(--gray-700);\n  border: 1px solid var(--gray-200);\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #22c55e);\n  color: var(--white);\n  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.25);\n}\n.btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 28px rgba(37, 99, 235, 0.3);\n}\n.illustration {\n  position: relative;\n  width: 190px;\n  height: 190px;\n  margin: 6px 0 0;\n}\n.illustration-ring {\n  position: absolute;\n  inset: 0;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n}\n.illustration-people {\n  position: absolute;\n  inset: 35px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.2);\n  display: grid;\n  place-items: center;\n  font-size: 40px;\n}\n.illustration-note {\n  position: absolute;\n  bottom: -4px;\n  right: -6px;\n  background: rgba(255, 255, 255, 0.9);\n  color: #1e3a8a;\n  padding: 6px 12px;\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 12px;\n}\n.metrics {\n  display: flex;\n  gap: 12px;\n  margin: 2px 0 6px;\n  flex-wrap: wrap;\n}\n.metrics div {\n  background: rgba(255, 255, 255, 0.16);\n  padding: 8px 12px;\n  border-radius: 12px;\n  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.18);\n}\n.metrics strong {\n  color: #ffffff;\n}\n.metrics span {\n  color: rgba(255, 255, 255, 0.85);\n}\n.metrics strong {\n  display: block;\n  font-size: 18px;\n}\n.metrics span {\n  font-size: 12px;\n  opacity: 0.85;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.45);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 960px) {\n  .auth-page {\n    grid-template-columns: 1fr;\n  }\n  .auth-visual {\n    padding: 32px 22px;\n  }\n  .metrics {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=register.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "app/auth/register/register.component.ts", lineNumber: 20 });
})();

// src/app/auth/pending/pending.component.ts
var PendingComponent = class _PendingComponent {
  static \u0275fac = function PendingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PendingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PendingComponent, selectors: [["app-pending"]], decls: 19, vars: 0, consts: [[1, "auth-page"], [1, "auth-visual"], [1, "brand"], ["aria-label", "Logo Sanad", 1, "logo-placeholder"], [1, "brand-name"], [1, "auth-body"], [1, "status-card"], ["routerLink", "/auth/login", 1, "link"]], template: function PendingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "Sanad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h1");
      \u0275\u0275text(8, "La transparence cree la confiance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, " Votre profil d'association est en cours de verification pour proteger la communaute. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section", 5)(12, "div", 6)(13, "strong");
      \u0275\u0275text(14, "Votre compte association est en cours de verification.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p");
      \u0275\u0275text(16, "Cette etape garantit la transparence et la confiance.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 7);
      \u0275\u0275text(18, "Retour a la connexion");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [CommonModule, RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=pending.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PendingComponent, [{
    type: Component,
    args: [{ selector: "app-pending", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="auth-page">\r
  <section class="auth-visual">\r
    <div class="brand">\r
      <div class="logo-placeholder" aria-label="Logo Sanad">S</div>\r
      <span class="brand-name">Sanad</span>\r
    </div>\r
    <h1>La transparence cree la confiance</h1>\r
    <p>\r
      Votre profil d'association est en cours de verification pour proteger la\r
      communaute.\r
    </p>\r
  </section>\r
\r
  <section class="auth-body">\r
    <div class="status-card">\r
      <strong>Votre compte association est en cours de verification.</strong>\r
      <p>Cette etape garantit la transparence et la confiance.</p>\r
      <a class="link" routerLink="/auth/login">Retour a la connexion</a>\r
    </div>\r
  </section>\r
</div>\r
`, styles: ["/* src/app/auth/pending/pending.component.css */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=pending.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PendingComponent, { className: "PendingComponent", filePath: "app/auth/pending/pending.component.ts", lineNumber: 12 });
})();

// src/app/auth/rejected/rejected.component.ts
var RejectedComponent = class _RejectedComponent {
  static \u0275fac = function RejectedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RejectedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RejectedComponent, selectors: [["app-rejected"]], decls: 19, vars: 0, consts: [[1, "auth-page"], [1, "auth-visual"], [1, "brand"], ["aria-label", "Logo Sanad", 1, "logo-placeholder"], [1, "brand-name"], [1, "auth-body"], [1, "status-card"], ["routerLink", "/auth/register", 1, "link"]], template: function RejectedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "Sanad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h1");
      \u0275\u0275text(8, "Nous sommes la pour vous accompagner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, " Si des informations changent, vous pouvez soumettre une nouvelle demande. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section", 5)(12, "div", 6)(13, "strong");
      \u0275\u0275text(14, "Votre demande n'a pas ete approuvee.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p");
      \u0275\u0275text(16, "Vous pouvez soumettre une nouvelle demande.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 7);
      \u0275\u0275text(18, "Soumettre une nouvelle demande");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [CommonModule, RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=rejected.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RejectedComponent, [{
    type: Component,
    args: [{ selector: "app-rejected", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="auth-page">\r
  <section class="auth-visual">\r
    <div class="brand">\r
      <div class="logo-placeholder" aria-label="Logo Sanad">S</div>\r
      <span class="brand-name">Sanad</span>\r
    </div>\r
    <h1>Nous sommes la pour vous accompagner</h1>\r
    <p>\r
      Si des informations changent, vous pouvez soumettre une nouvelle demande.\r
    </p>\r
  </section>\r
\r
  <section class="auth-body">\r
    <div class="status-card">\r
      <strong>Votre demande n'a pas ete approuvee.</strong>\r
      <p>Vous pouvez soumettre une nouvelle demande.</p>\r
      <a class="link" routerLink="/auth/register">Soumettre une nouvelle demande</a>\r
    </div>\r
  </section>\r
</div>\r
`, styles: ["/* src/app/auth/rejected/rejected.component.css */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=rejected.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RejectedComponent, { className: "RejectedComponent", filePath: "app/auth/rejected/rejected.component.ts", lineNumber: 12 });
})();

// src/app/user/user-data.service.ts
var UserDataService = class _UserDataService {
  http;
  auth;
  apiBase = "http://localhost/PROJET%20SANAD/backend/api";
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  authHeaders() {
    const token = this.auth.getToken();
    return new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : ""
    });
  }
  getProfile() {
    return this.http.get(`${this.apiBase}/get_me.php`, { headers: this.authHeaders() });
  }
  getMyRequests() {
    return this.http.get(`${this.apiBase}/get_my_requests.php`, { headers: this.authHeaders() });
  }
  getMyDonations() {
    return this.http.get(`${this.apiBase}/get_user_donations.php`, { headers: this.authHeaders() });
  }
  getNotifications() {
    return this.http.get(`${this.apiBase}/get_notifications.php`, { headers: this.authHeaders() });
  }
  markNotificationRead(id) {
    return this.http.post(`${this.apiBase}/mark_notification_read.php`, { id }, { headers: this.authHeaders() });
  }
  markAllNotificationsRead() {
    return this.http.post(`${this.apiBase}/mark_all_notifications_read.php`, {}, { headers: this.authHeaders() });
  }
  getRequests(limit = 3) {
    return this.http.get(`${this.apiBase}/get_requests.php?limit=${limit}`);
  }
  getFavorites() {
    return this.http.get(`${this.apiBase}/get_favorites.php`, { headers: this.authHeaders() });
  }
  addFavorite(requestId) {
    return this.http.post(`${this.apiBase}/add_favorite.php`, { request_id: requestId }, { headers: this.authHeaders() });
  }
  removeFavorite(requestId) {
    return this.http.post(`${this.apiBase}/remove_favorite.php`, { request_id: requestId }, { headers: this.authHeaders() });
  }
  static \u0275fac = function UserDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserDataService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserDataService, factory: _UserDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

// src/app/shared/logged-in-navbar.component.ts
var _c02 = () => ({ exact: true });
function LoggedInNavbarComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.unreadCount > 99 ? "99+" : ctx_r0.unreadCount, " ");
  }
}
var LoggedInNavbarComponent = class _LoggedInNavbarComponent {
  auth;
  router;
  userData;
  unreadCount = 0;
  constructor(auth, router, userData) {
    this.auth = auth;
    this.router = router;
    this.userData = userData;
  }
  ngOnInit() {
    this.userData.getNotifications().subscribe({
      next: (response) => {
        if (response.success) {
          this.unreadCount = response.data.filter((item) => !item.isRead).length;
        }
      }
    });
  }
  logout() {
    this.auth.clearToken();
    this.router.navigateByUrl("/auth/login");
  }
  static \u0275fac = function LoggedInNavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoggedInNavbarComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UserDataService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoggedInNavbarComponent, selectors: [["app-logged-in-navbar"]], decls: 44, vars: 7, consts: [[1, "navbar"], [1, "navbar-container"], [1, "navbar-left"], ["routerLink", "/dashboard", 1, "logo"], [1, "logo-icon"], [1, "logo-text"], [1, "navbar-menu"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/explorer", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/associations", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "navbar-actions"], ["routerLink", "/requests/new", 1, "btn-ghost"], ["routerLink", "/donate", 1, "btn-cta"], [1, "navbar-right"], ["routerLink", "/notifications", "routerLinkActive", "active", "aria-label", "Notifications", 1, "icon-button"], ["class", "notification-badge", 4, "ngIf"], [1, "profile-menu"], ["type", "button", 1, "profile-trigger"], [1, "avatar"], [1, "profile-name"], [1, "chevron"], [1, "dropdown"], ["routerLink", "/profile", 1, "dropdown-item"], ["routerLink", "/my-donations", 1, "dropdown-item"], ["routerLink", "/my-requests", 1, "dropdown-item"], ["routerLink", "/activity", 1, "dropdown-item"], [1, "dropdown-divider"], ["type", "button", 1, "dropdown-item", "danger", 3, "click"], [1, "notification-badge"]], template: function LoggedInNavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "span", 4);
      \u0275\u0275text(5, "S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7, "Sanad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "a", 7);
      \u0275\u0275text(10, " Accueil ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 8);
      \u0275\u0275text(12, " Explorer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 9);
      \u0275\u0275text(14, " Associations ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 10)(16, "a", 11);
      \u0275\u0275text(17, "\u2795 Publier une demande");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 12);
      \u0275\u0275text(19, "\u{1F4B0} Faire un don");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 13)(21, "a", 14);
      \u0275\u0275text(22, " \u{1F514} ");
      \u0275\u0275template(23, LoggedInNavbarComponent_span_23_Template, 2, 1, "span", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 16)(25, "button", 17)(26, "span", 18);
      \u0275\u0275text(27, "AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span", 19);
      \u0275\u0275text(29, "Amira");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 20);
      \u0275\u0275text(31, "\u25BE");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 21)(33, "a", 22);
      \u0275\u0275text(34, "Mon profil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "a", 23);
      \u0275\u0275text(36, "Mes dons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "a", 24);
      \u0275\u0275text(38, "Mes demandes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "a", 25);
      \u0275\u0275text(40, "Historique activite");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "div", 26);
      \u0275\u0275elementStart(42, "button", 27);
      \u0275\u0275listener("click", function LoggedInNavbarComponent_Template_button_click_42_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(43, " Deconnexion ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c02));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c02));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(6, _c02));
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.unreadCount > 0);
    }
  }, dependencies: [CommonModule, NgIf, RouterLink, RouterLinkActive], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.navbar[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  padding: 12px 0;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);\n}\n.navbar-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  align-items: center;\n  gap: 24px;\n}\n.navbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 40px;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  font-weight: 800;\n  letter-spacing: -0.4px;\n  color: #0f172a;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #22c55e);\n  color: #fff;\n  font-size: 18px;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.navbar-menu[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: #475569;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 600;\n  position: relative;\n}\n.nav-link[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: -6px;\n  width: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #0ea5e9,\n      #22c55e);\n  transition: width 0.2s ease;\n}\n.nav-link[_ngcontent-%COMP%]:hover, \n.nav-link.active[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.nav-link[_ngcontent-%COMP%]:hover::after, \n.nav-link.active[_ngcontent-%COMP%]::after {\n  width: 100%;\n}\n.navbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.btn-ghost[_ngcontent-%COMP%], \n.btn-cta[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 16px;\n  border-radius: 10px;\n  transition: all 0.2s ease;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  color: #0f172a;\n  background: #e2e8f0;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #cbd5f5;\n  transform: translateY(-1px);\n}\n.btn-cta[_ngcontent-%COMP%] {\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #2563eb);\n  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.25);\n}\n.btn-cta[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.navbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 16px;\n}\n.icon-button[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: #f1f5f9;\n  color: #0f172a;\n  text-decoration: none;\n}\n.notification-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  background: #ef4444;\n  color: #fff;\n  font-size: 11px;\n  padding: 2px 6px;\n  border-radius: 999px;\n  font-weight: 700;\n}\n.profile-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.profile-trigger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  padding: 6px 10px;\n  border-radius: 999px;\n  cursor: pointer;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: #0ea5e9;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n}\n.profile-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  color: #0f172a;\n}\n.chevron[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 52px;\n  min-width: 200px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 8px;\n  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(8px);\n  transition: all 0.2s ease;\n}\n.profile-menu[_ngcontent-%COMP%]:hover   .dropdown[_ngcontent-%COMP%], \n.profile-menu[_ngcontent-%COMP%]:focus-within   .dropdown[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 12px;\n  border-radius: 10px;\n  text-decoration: none;\n  color: #0f172a;\n  font-size: 14px;\n  font-weight: 600;\n  background: transparent;\n  border: none;\n  text-align: left;\n  width: 100%;\n  cursor: pointer;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.dropdown-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  margin: 6px 0;\n  background: #e2e8f0;\n}\n.dropdown-item.danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n@media (max-width: 1024px) {\n  .navbar-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .navbar-actions[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n  .navbar-right[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 768px) {\n  .navbar-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .profile-name[_ngcontent-%COMP%], \n   .chevron[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=logged-in-navbar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoggedInNavbarComponent, [{
    type: Component,
    args: [{ selector: "app-logged-in-navbar", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], template: `
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-left">
          <a routerLink="/dashboard" class="logo">
            <span class="logo-icon">S</span>
            <span class="logo-text">Sanad</span>
          </a>

          <div class="navbar-menu">
            <a
              routerLink="/dashboard"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="nav-link"
            >
              Accueil
            </a>
            <a
              routerLink="/explorer"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="nav-link"
            >
              Explorer
            </a>
            <a
              routerLink="/associations"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="nav-link"
            >
              Associations
            </a>
          </div>
        </div>

        <div class="navbar-actions">
          <a routerLink="/requests/new" class="btn-ghost">\u2795 Publier une demande</a>
          <a routerLink="/donate" class="btn-cta">\u{1F4B0} Faire un don</a>
        </div>

        <div class="navbar-right">
          <a
            routerLink="/notifications"
            routerLinkActive="active"
            class="icon-button"
            aria-label="Notifications"
          >
            \u{1F514}
            <span class="notification-badge" *ngIf="unreadCount > 0">
              {{ unreadCount > 99 ? '99+' : unreadCount }}
            </span>
          </a>

          <div class="profile-menu">
            <button class="profile-trigger" type="button">
              <span class="avatar">AM</span>
              <span class="profile-name">Amira</span>
              <span class="chevron">\u25BE</span>
            </button>
            <div class="dropdown">
              <a routerLink="/profile" class="dropdown-item">Mon profil</a>
              <a routerLink="/my-donations" class="dropdown-item">Mes dons</a>
              <a routerLink="/my-requests" class="dropdown-item">Mes demandes</a>
              <a routerLink="/activity" class="dropdown-item">Historique activite</a>
              <div class="dropdown-divider"></div>
              <button type="button" class="dropdown-item danger" (click)="logout()">
                Deconnexion
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `, styles: ['/* src/app/shared/logged-in-navbar.component.css */\n:host {\n  display: block;\n}\n.navbar {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  padding: 12px 0;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);\n}\n.navbar-container {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  align-items: center;\n  gap: 24px;\n}\n.navbar-left {\n  display: flex;\n  align-items: center;\n  gap: 40px;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  font-weight: 800;\n  letter-spacing: -0.4px;\n  color: #0f172a;\n}\n.logo-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #22c55e);\n  color: #fff;\n  font-size: 18px;\n}\n.logo-text {\n  font-size: 18px;\n}\n.navbar-menu {\n  display: flex;\n  gap: 24px;\n}\n.nav-link {\n  color: #475569;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 600;\n  position: relative;\n}\n.nav-link::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: -6px;\n  width: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #0ea5e9,\n      #22c55e);\n  transition: width 0.2s ease;\n}\n.nav-link:hover,\n.nav-link.active {\n  color: #0f172a;\n}\n.nav-link:hover::after,\n.nav-link.active::after {\n  width: 100%;\n}\n.navbar-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.btn-ghost,\n.btn-cta {\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 16px;\n  border-radius: 10px;\n  transition: all 0.2s ease;\n}\n.btn-ghost {\n  color: #0f172a;\n  background: #e2e8f0;\n}\n.btn-ghost:hover {\n  background: #cbd5f5;\n  transform: translateY(-1px);\n}\n.btn-cta {\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #2563eb);\n  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.25);\n}\n.btn-cta:hover {\n  transform: translateY(-1px);\n}\n.navbar-right {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 16px;\n}\n.icon-button {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: #f1f5f9;\n  color: #0f172a;\n  text-decoration: none;\n}\n.notification-badge {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  background: #ef4444;\n  color: #fff;\n  font-size: 11px;\n  padding: 2px 6px;\n  border-radius: 999px;\n  font-weight: 700;\n}\n.profile-menu {\n  position: relative;\n}\n.profile-trigger {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  padding: 6px 10px;\n  border-radius: 999px;\n  cursor: pointer;\n}\n.avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: #0ea5e9;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n}\n.profile-name {\n  font-weight: 600;\n  font-size: 14px;\n  color: #0f172a;\n}\n.chevron {\n  font-size: 12px;\n  color: #64748b;\n}\n.dropdown {\n  position: absolute;\n  right: 0;\n  top: 52px;\n  min-width: 200px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 8px;\n  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(8px);\n  transition: all 0.2s ease;\n}\n.profile-menu:hover .dropdown,\n.profile-menu:focus-within .dropdown {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.dropdown-item {\n  display: block;\n  padding: 10px 12px;\n  border-radius: 10px;\n  text-decoration: none;\n  color: #0f172a;\n  font-size: 14px;\n  font-weight: 600;\n  background: transparent;\n  border: none;\n  text-align: left;\n  width: 100%;\n  cursor: pointer;\n}\n.dropdown-item:hover {\n  background: #f1f5f9;\n}\n.dropdown-divider {\n  height: 1px;\n  margin: 6px 0;\n  background: #e2e8f0;\n}\n.dropdown-item.danger {\n  color: #ef4444;\n}\n@media (max-width: 1024px) {\n  .navbar-container {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .navbar-actions {\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n  .navbar-right {\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 768px) {\n  .navbar-menu {\n    display: none;\n  }\n  .profile-name,\n  .chevron {\n    display: none;\n  }\n}\n/*# sourceMappingURL=logged-in-navbar.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: UserDataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoggedInNavbarComponent, { className: "LoggedInNavbarComponent", filePath: "app/shared/logged-in-navbar.component.ts", lineNumber: 89 });
})();

// src/app/auth/dashboard/dashboard.component.ts
var _c03 = (a0) => ["/request-detail", a0];
function DashboardComponent_article_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 22)(1, "p", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.trend);
  }
}
function DashboardComponent_article_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 25)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 26);
    \u0275\u0275text(6, "Demarrer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const action_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(action_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(action_r2.description);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", action_r2.link);
  }
}
function DashboardComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.meta);
  }
}
function DashboardComponent_div_36_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 33)(1, "div", 34)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36)(7, "div", 37);
    \u0275\u0275element(8, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 38)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 39)(15, "button", 40);
    \u0275\u0275text(16, "Suivre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 41);
    \u0275\u0275text(18, "Voir");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const request_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(request_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r4.location);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", request_r4.progress, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", request_r4.progress, "% atteint");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", request_r4.donors, " donateurs");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c03, request_r4.requestId));
  }
}
function DashboardComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, DashboardComponent_div_36_article_1_Template, 19, 9, "article", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.savedRequests);
  }
}
function DashboardComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "p");
    \u0275\u0275text(2, "Aucune demande sauvegardee.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 43);
    \u0275\u0275text(4, "Explorer les demandes");
    \u0275\u0275elementEnd()();
  }
}
var DashboardComponent = class _DashboardComponent {
  userData;
  userName = "Utilisateur";
  stats = [
    { label: "Total dons effectues", value: "0 TND", trend: "0 dons" },
    { label: "Demandes creees", value: "0", trend: "0 actives" },
    { label: "Demandes aidees", value: "0", trend: "Impact stable" }
  ];
  quickActions = [
    {
      title: "Publier une demande",
      description: "Lancez une initiative pour obtenir un soutien rapide.",
      link: "/requests/new"
    },
    {
      title: "Explorer les demandes",
      description: "Decouvrez les urgences et les causes a soutenir.",
      link: "/explorer"
    },
    {
      title: "Faire un don",
      description: "Contribuez en quelques clics et suivez votre impact.",
      link: "/donate"
    }
  ];
  activities = [
    {
      type: "donation",
      title: "Don confirme pour \u201CAide alimentaire\u201D",
      meta: "250 TND \u2022 Aujourd'hui"
    },
    {
      type: "request",
      title: "Nouvelle demande publiee",
      meta: "Campagne medicale \u2022 Hier"
    },
    {
      type: "comment",
      title: "Commentaire laisse sur \u201CKits scolaires\u201D",
      meta: "\u201CMerci pour les details.\u201D \u2022 Il y a 2 jours"
    }
  ];
  savedRequests = [];
  constructor(userData) {
    this.userData = userData;
  }
  ngOnInit() {
    this.userData.getProfile().subscribe({
      next: (response) => {
        if (response.success) {
          this.userName = response.data.fullName;
        }
      }
    });
    this.userData.getMyDonations().subscribe({
      next: (response) => {
        if (response.success && response.stats) {
          this.updateDonationStats(response.stats);
        }
      }
    });
    this.userData.getMyRequests().subscribe({
      next: (response) => {
        if (response.success) {
          this.updateRequestStats(response.data);
        }
      }
    });
    this.userData.getNotifications().subscribe({
      next: (response) => {
        if (response.success && response.data.length > 0) {
          this.activities = response.data.map((item) => ({
            type: "notification",
            title: item.title,
            meta: item.detail
          }));
        }
      }
    });
    this.userData.getFavorites().subscribe({
      next: (response) => {
        if (response.success) {
          this.savedRequests = response.data.map((favorite) => {
            const target = Number(favorite.target_amount) || 1;
            const collected = Number(favorite.collected_amount) || 0;
            const progress = Math.min(100, Math.round(collected / target * 100));
            return {
              requestId: favorite.request_id,
              title: favorite.title,
              location: favorite.location,
              progress,
              donors: Number(favorite.donors_count) || 0
            };
          });
        }
      }
    });
  }
  updateDonationStats(stats) {
    this.stats[0] = {
      label: "Total dons effectues",
      value: `${Math.round(stats.total_amount)} TND`,
      trend: `${stats.total_donations} dons`
    };
    this.stats[2] = {
      label: "Demandes aidees",
      value: String(stats.requests_supported),
      trend: "Impact en hausse"
    };
  }
  updateRequestStats(requests) {
    const activeCount = requests.filter((request) => request.status === "active").length;
    this.stats[1] = {
      label: "Demandes creees",
      value: String(requests.length),
      trend: `${activeCount} actives`
    };
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(UserDataService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 38, vars: 6, consts: [[1, "dashboard"], [1, "welcome"], [1, "eyebrow"], [1, "subtitle"], [1, "impact-card"], [1, "impact-title"], [1, "impact-value"], [1, "impact-meta"], [1, "stats"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "actions"], ["class", "action-card", 4, "ngFor", "ngForOf"], [1, "content-grid"], [1, "activity"], [1, "section-header"], ["routerLink", "/notifications"], [1, "activity-list"], ["class", "activity-item", 4, "ngFor", "ngForOf"], [1, "saved"], ["routerLink", "/saved"], ["class", "saved-grid", 4, "ngIf"], ["class", "saved-empty", 4, "ngIf"], [1, "stat-card"], [1, "stat-label"], [1, "stat-trend"], [1, "action-card"], [1, "action-link", 3, "routerLink"], [1, "activity-item"], [1, "activity-tag"], [1, "activity-title"], [1, "activity-meta"], [1, "saved-grid"], ["class", "saved-card", 4, "ngFor", "ngForOf"], [1, "saved-card"], [1, "saved-header"], [1, "saved-location"], [1, "progress"], [1, "progress-bar"], [1, "progress-meta"], [1, "saved-actions"], ["type", "button", 1, "btn-outline"], [1, "btn-link", 3, "routerLink"], [1, "saved-empty"], ["routerLink", "/explorer", 1, "btn-link"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-logged-in-navbar");
      \u0275\u0275elementStart(1, "main", 0)(2, "section", 1)(3, "div")(4, "p", 2);
      \u0275\u0275text(5, "Tableau de bord personnel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 3);
      \u0275\u0275text(9, " Merci pour votre engagement. Chaque action renforce la confiance et l'entraide. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4)(11, "p", 5);
      \u0275\u0275text(12, "Votre impact cette semaine");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 6);
      \u0275\u0275text(14, "+340 TND redistribues");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 7);
      \u0275\u0275text(16, "3 causes soutenues \u2022 2 familles aidees");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "section", 8);
      \u0275\u0275template(18, DashboardComponent_article_18_Template, 7, 3, "article", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "section", 10);
      \u0275\u0275template(20, DashboardComponent_article_20_Template, 7, 3, "article", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "section", 12)(22, "div", 13)(23, "header", 14)(24, "h2");
      \u0275\u0275text(25, "Activite recente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "a", 15);
      \u0275\u0275text(27, "Voir tout");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 16);
      \u0275\u0275template(29, DashboardComponent_div_29_Template, 8, 3, "div", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 18)(31, "header", 14)(32, "h2");
      \u0275\u0275text(33, "Demandes sauvegardees");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "a", 19);
      \u0275\u0275text(35, "Voir tout");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(36, DashboardComponent_div_36_Template, 2, 1, "div", 20)(37, DashboardComponent_div_37_Template, 5, 0, "div", 21);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("Bonjour, ", ctx.userName);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.stats);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.quickActions);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.activities);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.savedRequests.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.savedRequests.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, LoggedInNavbarComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  background: #f8fafc;\n  color: #0f172a;\n}\n.dashboard[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 32px 20px 60px;\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n}\n.welcome[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  gap: 24px;\n  align-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #ecfdf5);\n  border-radius: 20px;\n  padding: 28px;\n  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);\n}\n.eyebrow[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #0ea5e9;\n  margin-bottom: 6px;\n}\n.welcome[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin: 0 0 10px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #475569;\n  max-width: 520px;\n}\n.impact-card[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  display: grid;\n  gap: 8px;\n}\n.impact-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #cbd5f5;\n}\n.impact-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n}\n.impact-meta[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #e2e8f0;\n}\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 18px;\n  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.06);\n  display: grid;\n  gap: 6px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 13px;\n}\n.stat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0;\n}\n.stat-trend[_ngcontent-%COMP%] {\n  color: #22c55e;\n  font-size: 12px;\n  font-weight: 600;\n}\n.actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 16px;\n}\n.action-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid #e2e8f0;\n  display: grid;\n  gap: 10px;\n}\n.action-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n.action-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n}\n.action-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #0ea5e9;\n  text-decoration: none;\n  font-weight: 700;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.activity[_ngcontent-%COMP%], \n.saved[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  padding: 20px;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n}\n.section-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 13px;\n  color: #0ea5e9;\n}\n.activity-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.activity-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 12px;\n  background: #f8fafc;\n}\n.activity-tag[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  border-radius: 999px;\n  padding: 6px 10px;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #334155;\n}\n.activity-title[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-weight: 600;\n}\n.activity-meta[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 13px;\n}\n.saved-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n.saved-empty[_ngcontent-%COMP%] {\n  border: 1px dashed #cbd5f5;\n  border-radius: 14px;\n  padding: 16px;\n  text-align: center;\n  color: #64748b;\n}\n.saved-card[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 14px;\n  display: grid;\n  gap: 12px;\n}\n.saved-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.saved-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n.saved-location[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #e2e8f0;\n  border-radius: 999px;\n  overflow: hidden;\n}\n.progress-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #0ea5e9);\n}\n.progress-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #64748b;\n}\n.saved-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  border: 1px solid #0ea5e9;\n  background: transparent;\n  color: #0ea5e9;\n  padding: 6px 12px;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-link[_ngcontent-%COMP%] {\n  color: #0f172a;\n  text-decoration: none;\n  font-weight: 600;\n}\n@media (max-width: 1024px) {\n  .welcome[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .dashboard[_ngcontent-%COMP%] {\n    padding: 24px 16px 48px;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, RouterLink, LoggedInNavbarComponent], template: `<app-logged-in-navbar></app-logged-in-navbar>\r
\r
<main class="dashboard">\r
  <section class="welcome">\r
    <div>\r
      <p class="eyebrow">Tableau de bord personnel</p>\r
      <h1>Bonjour, {{ userName }}</h1>\r
      <p class="subtitle">\r
        Merci pour votre engagement. Chaque action renforce la confiance et\r
        l'entraide.\r
      </p>\r
    </div>\r
    <div class="impact-card">\r
      <p class="impact-title">Votre impact cette semaine</p>\r
      <p class="impact-value">+340 TND redistribues</p>\r
      <p class="impact-meta">3 causes soutenues \u2022 2 familles aidees</p>\r
    </div>\r
  </section>\r
\r
  <section class="stats">\r
    <article class="stat-card" *ngFor="let stat of stats">\r
      <p class="stat-label">{{ stat.label }}</p>\r
      <h3>{{ stat.value }}</h3>\r
      <span class="stat-trend">{{ stat.trend }}</span>\r
    </article>\r
  </section>\r
\r
  <section class="actions">\r
    <article class="action-card" *ngFor="let action of quickActions">\r
      <h3>{{ action.title }}</h3>\r
      <p>{{ action.description }}</p>\r
      <a class="action-link" [routerLink]="action.link">Demarrer</a>\r
    </article>\r
  </section>\r
\r
  <section class="content-grid">\r
    <div class="activity">\r
      <header class="section-header">\r
        <h2>Activite recente</h2>\r
        <a routerLink="/notifications">Voir tout</a>\r
      </header>\r
      <div class="activity-list">\r
        <div class="activity-item" *ngFor="let item of activities">\r
          <span class="activity-tag">{{ item.type }}</span>\r
          <div>\r
            <p class="activity-title">{{ item.title }}</p>\r
            <p class="activity-meta">{{ item.meta }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="saved">\r
      <header class="section-header">\r
        <h2>Demandes sauvegardees</h2>\r
        <a routerLink="/saved">Voir tout</a>\r
      </header>\r
      <div class="saved-grid" *ngIf="savedRequests.length > 0">\r
        <article class="saved-card" *ngFor="let request of savedRequests">\r
          <div class="saved-header">\r
            <h3>{{ request.title }}</h3>\r
            <span class="saved-location">{{ request.location }}</span>\r
          </div>\r
          <div class="progress">\r
            <div class="progress-bar">\r
              <span [style.width.%]="request.progress"></span>\r
            </div>\r
            <div class="progress-meta">\r
              <span>{{ request.progress }}% atteint</span>\r
              <span>{{ request.donors }} donateurs</span>\r
            </div>\r
          </div>\r
          <div class="saved-actions">\r
            <button type="button" class="btn-outline">Suivre</button>\r
            <a class="btn-link" [routerLink]="['/request-detail', request.requestId]">Voir</a>\r
          </div>\r
        </article>\r
      </div>\r
      <div class="saved-empty" *ngIf="savedRequests.length === 0">\r
        <p>Aucune demande sauvegardee.</p>\r
        <a class="btn-link" routerLink="/explorer">Explorer les demandes</a>\r
      </div>\r
    </div>\r
  </section>\r
</main>\r
`, styles: ["/* src/app/auth/dashboard/dashboard.component.css */\n:host {\n  display: block;\n  background: #f8fafc;\n  color: #0f172a;\n}\n.dashboard {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 32px 20px 60px;\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n}\n.welcome {\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  gap: 24px;\n  align-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #ecfdf5);\n  border-radius: 20px;\n  padding: 28px;\n  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);\n}\n.eyebrow {\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #0ea5e9;\n  margin-bottom: 6px;\n}\n.welcome h1 {\n  font-size: 32px;\n  margin: 0 0 10px;\n}\n.subtitle {\n  color: #475569;\n  max-width: 520px;\n}\n.impact-card {\n  background: #0f172a;\n  color: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  display: grid;\n  gap: 8px;\n}\n.impact-title {\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #cbd5f5;\n}\n.impact-value {\n  font-size: 22px;\n  font-weight: 700;\n}\n.impact-meta {\n  font-size: 14px;\n  color: #e2e8f0;\n}\n.stats {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.stat-card {\n  background: #fff;\n  border-radius: 16px;\n  padding: 18px;\n  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.06);\n  display: grid;\n  gap: 6px;\n}\n.stat-label {\n  color: #64748b;\n  font-size: 13px;\n}\n.stat-card h3 {\n  font-size: 24px;\n  margin: 0;\n}\n.stat-trend {\n  color: #22c55e;\n  font-size: 12px;\n  font-weight: 600;\n}\n.actions {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 16px;\n}\n.action-card {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid #e2e8f0;\n  display: grid;\n  gap: 10px;\n}\n.action-card h3 {\n  margin: 0;\n  font-size: 18px;\n}\n.action-card p {\n  color: #64748b;\n  margin: 0;\n}\n.action-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #0ea5e9;\n  text-decoration: none;\n  font-weight: 700;\n}\n.content-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.activity,\n.saved {\n  background: #fff;\n  border-radius: 18px;\n  padding: 20px;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.section-header h2 {\n  font-size: 18px;\n  margin: 0;\n}\n.section-header a {\n  text-decoration: none;\n  font-size: 13px;\n  color: #0ea5e9;\n}\n.activity-list {\n  display: grid;\n  gap: 12px;\n}\n.activity-item {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 12px;\n  background: #f8fafc;\n}\n.activity-tag {\n  background: #e2e8f0;\n  border-radius: 999px;\n  padding: 6px 10px;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #334155;\n}\n.activity-title {\n  margin: 0 0 4px;\n  font-weight: 600;\n}\n.activity-meta {\n  margin: 0;\n  color: #64748b;\n  font-size: 13px;\n}\n.saved-grid {\n  display: grid;\n  gap: 14px;\n}\n.saved-empty {\n  border: 1px dashed #cbd5f5;\n  border-radius: 14px;\n  padding: 16px;\n  text-align: center;\n  color: #64748b;\n}\n.saved-card {\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 14px;\n  display: grid;\n  gap: 12px;\n}\n.saved-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.saved-header h3 {\n  margin: 0;\n  font-size: 16px;\n}\n.saved-location {\n  font-size: 12px;\n  color: #64748b;\n}\n.progress-bar {\n  height: 8px;\n  background: #e2e8f0;\n  border-radius: 999px;\n  overflow: hidden;\n}\n.progress-bar span {\n  display: block;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #0ea5e9);\n}\n.progress-meta {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #64748b;\n}\n.saved-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-outline {\n  border: 1px solid #0ea5e9;\n  background: transparent;\n  color: #0ea5e9;\n  padding: 6px 12px;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-link {\n  color: #0f172a;\n  text-decoration: none;\n  font-weight: 600;\n}\n@media (max-width: 1024px) {\n  .welcome {\n    grid-template-columns: 1fr;\n  }\n  .content-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .dashboard {\n    padding: 24px 16px 48px;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], () => [{ type: UserDataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "app/auth/dashboard/dashboard.component.ts", lineNumber: 14 });
})();

// src/app/explorer/explorer.component.ts
var _c04 = (a0) => ["/request-detail", a0];
var _forTrack0 = ($index, $item) => $item.id;
function ExplorerComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-association-navbar");
  }
}
function ExplorerComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-logged-in-navbar");
  }
}
function ExplorerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ExplorerComponent_Conditional_0_Conditional_0_Template, 1, 0, "app-association-navbar")(1, ExplorerComponent_Conditional_0_Conditional_1_Template, 1, 0, "app-logged-in-navbar");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.isAssociation() ? 0 : 1);
  }
}
function ExplorerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
  }
}
function ExplorerComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    \u0275\u0275property("value", cat_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r2);
  }
}
function ExplorerComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r3 = ctx.$implicit;
    \u0275\u0275property("value", loc_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r3);
  }
}
function ExplorerComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const urg_r4 = ctx.$implicit;
    \u0275\u0275property("value", urg_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(urg_r4);
  }
}
function ExplorerComponent_Conditional_62_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function ExplorerComponent_Conditional_62_For_2_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const request_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleFavorite(request_r7.id));
    });
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.favoriteIds().has(request_r7.id));
  }
}
function ExplorerComponent_Conditional_62_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275element(2, "img", 32);
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ExplorerComponent_Conditional_62_For_2_Conditional_5_Template, 2, 2, "button", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 35)(7, "h3", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 38)(12, "div", 39);
    \u0275\u0275element(13, "i", 40);
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 39);
    \u0275\u0275element(17, "i", 41);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 42)(21, "div", 43);
    \u0275\u0275element(22, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 45)(24, "span", 46);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 47);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 48)(31, "a", 49);
    \u0275\u0275element(32, "i", 50);
    \u0275\u0275text(33, " Voir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 51);
    \u0275\u0275listener("click", function ExplorerComponent_Conditional_62_For_2_Template_button_click_34_listener() {
      const request_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openRequest(request_r7.id));
    });
    \u0275\u0275element(35, "i", 52);
    \u0275\u0275text(36, " Aider ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const request_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", request_r7.image || "/assets/images/placeholders/request-placeholder.svg", \u0275\u0275sanitizeUrl)("alt", request_r7.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("urgency-high", request_r7.urgency === "high")("urgency-medium", request_r7.urgency === "medium")("urgency-low", request_r7.urgency === "low");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getUrgencyLabel(request_r7.urgency), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isAssociation() ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(request_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r7.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(request_r7.organization);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(request_r7.location);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r0.getProgressPercent(request_r7.progress, request_r7.target), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(26, 19, request_r7.progress), "\u20AC");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("sur ", \u0275\u0275pipeBind1(29, 21, request_r7.target), "\u20AC");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(23, _c04, request_r7.id));
  }
}
function ExplorerComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275repeaterCreate(1, ExplorerComponent_Conditional_62_For_2_Template, 37, 25, "div", 30, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filteredRequests());
  }
}
function ExplorerComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "Aucune demande trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Essayez d'ajuster vos filtres ou votre recherche");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 54);
    \u0275\u0275listener("click", function ExplorerComponent_Conditional_63_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearFilters());
    });
    \u0275\u0275text(7, "R\xE9initialiser les filtres");
    \u0275\u0275elementEnd()();
  }
}
var ExplorerComponent = class _ExplorerComponent {
  userData = inject(UserDataService);
  auth = inject(AuthService);
  router = inject(Router);
  role = signal(null, ...ngDevMode ? [{ debugName: "role" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoggedIn = signal(false, ...ngDevMode ? [{ debugName: "isLoggedIn" }] : (
    /* istanbul ignore next */
    []
  ));
  isAssociation = computed(() => this.role() === "association", ...ngDevMode ? [{ debugName: "isAssociation" }] : (
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
      description: "Soutien pour les familles en situation de crise alimentaire",
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
      title: "Scolarit\xE9 pour enfants",
      description: "Fournitures scolaires et tutorat pour enfants d\xE9favoris\xE9s",
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
      description: "Couverture de soins pour personnes sans ressources",
      organization: "Sant\xE9 Solidaire",
      location: "Sousse",
      category: "Sant\xE9",
      urgency: "high",
      progress: 1500,
      target: 2500,
      image: "/assets/images/placeholders/request-placeholder.svg"
    },
    {
      id: 4,
      title: "H\xE9bergement d'urgence",
      description: "Refuge temporaire et r\xE9insertion pour sans-abri",
      organization: "Chez Nous",
      location: "Ariana",
      category: "Logement",
      urgency: "high",
      progress: 3200,
      target: 5e3,
      image: "/assets/images/placeholders/request-placeholder.svg"
    },
    {
      id: 5,
      title: "Formation professionnelle",
      description: "Cours et certifications pour r\xE9insertion professionnelle",
      organization: "Avenir Pro",
      location: "Ben Arous",
      category: "Emploi",
      urgency: "medium",
      progress: 1800,
      target: 2400,
      image: "/assets/images/placeholders/request-placeholder.svg"
    },
    {
      id: 6,
      title: "Soutien psychosocial",
      description: "Accompagnement et ressources en sant\xE9 mentale",
      organization: "Bien-\xCAtre",
      location: "Manouba",
      category: "Bien-\xEAtre",
      urgency: "low",
      progress: 900,
      target: 1500,
      image: "/assets/images/placeholders/request-placeholder.svg"
    },
    {
      id: 7,
      title: "Aide aux personnes \xE2g\xE9es",
      description: "Soins \xE0 domicile et assistance quotidienne",
      organization: "Solidarit\xE9 Plus",
      location: "Tunis",
      category: "Sant\xE9",
      urgency: "medium",
      progress: 600,
      target: 1e3,
      image: "/assets/images/placeholders/request-placeholder.svg"
    },
    {
      id: 8,
      title: "Kits scolaires d'urgence",
      description: "Cahiers, stylos et mat\xE9riel pour enfants en besoin",
      organization: "\xC9ducation pour Tous",
      location: "Sfax",
      category: "\xC9ducation",
      urgency: "low",
      progress: 1200,
      target: 1800,
      image: "/assets/images/placeholders/request-placeholder.svg"
    },
    {
      id: 9,
      title: "Aide alimentaire mensuelle",
      description: "Panier alimentaire pour familles monoparentales",
      organization: "Solidarit\xE9 Plus",
      location: "Sousse",
      category: "Alimentation",
      urgency: "medium",
      progress: 2100,
      target: 3500,
      image: "/assets/images/placeholders/request-placeholder.svg"
    }
  ], ...ngDevMode ? [{ debugName: "allRequests" }] : (
    /* istanbul ignore next */
    []
  ));
  favoriteIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "favoriteIds" }] : (
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
    this.isLoggedIn.set(Boolean(this.auth.getToken()));
    this.role.set(this.auth.getRole());
    if (this.isLoggedIn() && this.isAssociation()) {
      this.router.navigateByUrl("/association/explorer");
      return;
    }
    if (this.isLoggedIn() && !this.isAssociation()) {
      this.loadFavorites();
    }
  }
  loadFavorites() {
    if (!this.auth.getToken()) {
      return;
    }
    this.userData.getFavorites().subscribe({
      next: (response) => {
        if (response.success) {
          this.favoriteIds.set(new Set(response.data.map((item) => item.request_id)));
        }
      }
    });
  }
  toggleFavorite(requestId) {
    if (!this.auth.getToken()) {
      return;
    }
    if (this.favoriteIds().has(requestId)) {
      this.userData.removeFavorite(requestId).subscribe({
        next: (response) => {
          if (response.success) {
            const next = new Set(this.favoriteIds());
            next.delete(requestId);
            this.favoriteIds.set(next);
          }
        }
      });
      return;
    }
    this.userData.addFavorite(requestId).subscribe({
      next: (response) => {
        if (response.success) {
          const next = new Set(this.favoriteIds());
          next.add(requestId);
          this.favoriteIds.set(next);
        }
      }
    });
  }
  getProgressPercent(progress, target) {
    return Math.round(progress / target * 100);
  }
  getUrgencyLabel(urgency) {
    const labels = { low: "Basse", medium: "Moyenne", high: "Haute" };
    return labels[urgency];
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
    this.router.navigate(["/request-detail", request.id], {
      queryParams: { action: "collaborer" }
    });
  }
  supportRequest(request) {
    this.router.navigate(["/request-detail", request.id], {
      queryParams: { action: "soutenir" }
    });
  }
  takeOwnership(request) {
    this.router.navigate(["/request-detail", request.id], {
      queryParams: { action: "prendre-en-charge" }
    });
  }
  createCampaignFromRequest(request) {
    this.router.navigate(["/association/campaigns/new"], {
      queryParams: { parentRequestId: request.id }
    });
  }
  contactRequester(request) {
    const subject = encodeURIComponent(`Demande ${request.title}`);
    window.location.href = `mailto:support@sanad.tn?subject=${subject}`;
  }
  static \u0275fac = function ExplorerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExplorerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExplorerComponent, selectors: [["app-explorer"]], decls: 64, vars: 8, consts: [[1, "explorer-header"], [1, "container"], [1, "header-content"], ["routerLink", "/requests/new", 1, "header-cta"], [1, "search-section"], [1, "search-bar"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Rechercher une demande ou une association...", 3, "ngModelChange", "ngModel"], [1, "filters-section"], [1, "filters-bar"], [1, "filter-group"], ["for", "category"], ["id", "category", 1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["for", "location"], ["id", "location", 1, "filter-select", 3, "ngModelChange", "ngModel"], ["for", "urgency"], ["id", "urgency", 1, "filter-select", 3, "ngModelChange", "ngModel"], ["for", "sort"], ["id", "sort", 1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", "recent"], ["value", "most-funded"], ["value", "most-urgent"], [1, "btn-clear", 3, "click"], [1, "fas", "fa-times"], [1, "results-info"], [1, "requests-section"], [1, "requests-grid"], [1, "no-results"], [1, "request-card"], [1, "request-image"], ["loading", "lazy", 3, "src", "alt"], [1, "urgency-badge"], ["type", "button", "title", "Ajouter aux favoris", "aria-label", "Ajouter aux favoris", 1, "favorite-btn", 3, "active"], [1, "request-content"], [1, "request-title"], [1, "request-description"], [1, "request-meta"], [1, "meta-item"], [1, "fas", "fa-building"], [1, "fas", "fa-map-marker-alt"], [1, "progress-section"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "amount"], [1, "target"], [1, "request-actions"], [1, "btn-secondary", 3, "routerLink"], [1, "fas", "fa-eye"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "fas", "fa-heart"], ["type", "button", "title", "Ajouter aux favoris", "aria-label", "Ajouter aux favoris", 1, "favorite-btn", 3, "click"], [1, "btn-secondary", 3, "click"]], template: function ExplorerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ExplorerComponent_Conditional_0_Template, 2, 1)(1, ExplorerComponent_Conditional_1_Template, 1, 0, "app-navbar");
      \u0275\u0275elementStart(2, "section", 0)(3, "div", 1)(4, "div", 2)(5, "div")(6, "h1");
      \u0275\u0275text(7, "Explorer les demandes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "D\xE9couvrez des initiatives qui ont besoin de votre soutien et faites une diff\xE9rence r\xE9elle.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "a", 3);
      \u0275\u0275text(11, "Demander aide");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "section", 4)(13, "div", 1)(14, "div", 5);
      \u0275\u0275element(15, "i", 6);
      \u0275\u0275elementStart(16, "input", 7);
      \u0275\u0275listener("ngModelChange", function ExplorerComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.searchQuery.set($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "section", 8)(18, "div", 1)(19, "div", 9)(20, "div", 10)(21, "label", 11);
      \u0275\u0275text(22, "Cat\xE9gorie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "select", 12);
      \u0275\u0275listener("ngModelChange", function ExplorerComponent_Template_select_ngModelChange_23_listener($event) {
        return ctx.selectedCategory.set($event);
      });
      \u0275\u0275elementStart(24, "option", 13);
      \u0275\u0275text(25, "Toutes les cat\xE9gories");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(26, ExplorerComponent_For_27_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 10)(29, "label", 15);
      \u0275\u0275text(30, "Localisation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "select", 16);
      \u0275\u0275listener("ngModelChange", function ExplorerComponent_Template_select_ngModelChange_31_listener($event) {
        return ctx.selectedLocation.set($event);
      });
      \u0275\u0275elementStart(32, "option", 13);
      \u0275\u0275text(33, "Toutes les villes");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(34, ExplorerComponent_For_35_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 10)(37, "label", 17);
      \u0275\u0275text(38, "Urgence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "select", 18);
      \u0275\u0275listener("ngModelChange", function ExplorerComponent_Template_select_ngModelChange_39_listener($event) {
        return ctx.selectedUrgency.set($event);
      });
      \u0275\u0275elementStart(40, "option", 13);
      \u0275\u0275text(41, "Toutes les urgences");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(42, ExplorerComponent_For_43_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 10)(45, "label", 19);
      \u0275\u0275text(46, "Tri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "select", 20);
      \u0275\u0275listener("ngModelChange", function ExplorerComponent_Template_select_ngModelChange_47_listener($event) {
        return ctx.sortBy.set($event);
      });
      \u0275\u0275elementStart(48, "option", 21);
      \u0275\u0275text(49, "Plus r\xE9cent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "option", 22);
      \u0275\u0275text(51, "Bien financ\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "option", 23);
      \u0275\u0275text(53, "Plus urgent");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "button", 24);
      \u0275\u0275listener("click", function ExplorerComponent_Template_button_click_54_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275element(55, "i", 25);
      \u0275\u0275text(56, " R\xE9initialiser ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 26)(58, "span");
      \u0275\u0275text(59);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(60, "section", 27)(61, "div", 1);
      \u0275\u0275conditionalCreate(62, ExplorerComponent_Conditional_62_Template, 3, 0, "div", 28)(63, ExplorerComponent_Conditional_63_Template, 8, 0, "div", 29);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isLoggedIn() ? 0 : 1);
      \u0275\u0275advance(16);
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
      \u0275\u0275conditional(ctx.filteredRequests().length > 0 ? 62 : 63);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgModel,
    RouterLink,
    NavbarComponent,
    LoggedInNavbarComponent,
    AssociationNavbarComponent,
    DecimalPipe
  ], styles: ["\n.container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.explorer-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1d4ed8 50%,\n      #22c55e 100%);\n  color: white;\n  padding: 60px 20px;\n  text-align: center;\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n}\n.explorer-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 800;\n  margin-bottom: 12px;\n  letter-spacing: -0.5px;\n}\n.explorer-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0.95;\n  max-width: 600px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n.header-cta[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  color: #fff;\n  padding: 12px 20px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 700;\n  white-space: nowrap;\n}\n@media (max-width: 900px) {\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n.search-section[_ngcontent-%COMP%] {\n  padding: 32px 20px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: white;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px 20px;\n  transition: all 0.2s ease;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.search-bar[_ngcontent-%COMP%]:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.search-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 16px;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 15px;\n  background: transparent;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.filters-section[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 60px;\n  background: white;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 16px 20px;\n  z-index: 50;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 150px;\n}\n.filter-select[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.btn-clear[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background: #f3f4f6;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  color: #6b7280;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-clear[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n  color: #374151;\n}\n.results-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  padding: 0 0 8px 0;\n}\n.requests-section[_ngcontent-%COMP%] {\n  padding: 48px 20px;\n  background: #f9fafb;\n  min-height: 60vh;\n}\n.requests-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 24px;\n}\n.request-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n}\n.request-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);\n  border-color: #2563eb;\n}\n.request-image[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 180px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.05),\n      rgba(34, 197, 94, 0.05));\n}\n.favorite-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: rgba(255, 255, 255, 0.9);\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  cursor: pointer;\n  color: #94a3b8;\n  transition: all 0.2s ease;\n}\n.favorite-btn.active[_ngcontent-%COMP%] {\n  color: #ef4444;\n  transform: scale(1.05);\n}\n.request-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.request-card[_ngcontent-%COMP%]:hover   .request-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.urgency-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 6px 12px;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.urgency-high[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.95);\n  color: white;\n}\n.urgency-medium[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.95);\n  color: white;\n}\n.urgency-low[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.95);\n  color: white;\n}\n.request-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.request-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n  line-height: 1.4;\n}\n.request-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 12px;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.request-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 12px;\n  font-size: 13px;\n  color: #6b7280;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-size: 12px;\n}\n.progress-section[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #22c55e);\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n.progress-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n}\n.progress-text[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #2563eb;\n}\n.progress-text[_ngcontent-%COMP%]   .target[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.request-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: auto;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 14px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  text-decoration: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8);\n  color: white;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #2563eb;\n  border: 2px solid #2563eb;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n}\n.association-actions[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  margin-top: auto;\n}\n.primary-actions[_ngcontent-%COMP%], \n.secondary-actions[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 8px;\n  border: 1px solid rgba(148, 163, 184, 0.8);\n  background: #fff;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 8px;\n  border: 1px dashed rgba(148, 163, 184, 0.7);\n  background: rgba(226, 232, 240, 0.4);\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  text-align: left;\n}\n.btn-link[_ngcontent-%COMP%] {\n  padding: 0;\n  border: none;\n  background: none;\n  color: #2563eb;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  text-align: left;\n}\n.no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #6b7280;\n}\n.no-results[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #d1d5db;\n  margin-bottom: 16px;\n  display: block;\n}\n.no-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n}\n.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .explorer-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .explorer-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .filters-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-group[_ngcontent-%COMP%], \n   .filter-select[_ngcontent-%COMP%], \n   .btn-clear[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .requests-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .request-actions[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n}\n@media (max-width: 480px) {\n  .explorer-header[_ngcontent-%COMP%] {\n    padding: 40px 16px;\n  }\n  .explorer-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .search-section[_ngcontent-%COMP%], \n   .filters-section[_ngcontent-%COMP%] {\n    padding: 16px 16px;\n  }\n  .search-bar[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n  }\n  .request-image[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n  .request-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .request-title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .request-description[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=explorer.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExplorerComponent, [{
    type: Component,
    args: [{ selector: "app-explorer", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterLink,
      NavbarComponent,
      LoggedInNavbarComponent,
      AssociationNavbarComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (isLoggedIn()) {\r
  @if (isAssociation()) {\r
    <app-association-navbar></app-association-navbar>\r
  } @else {\r
    <app-logged-in-navbar></app-logged-in-navbar>\r
  }\r
} @else {\r
  <app-navbar></app-navbar>\r
}\r
\r
<section class="explorer-header">\r
  <div class="container">\r
    <div class="header-content">\r
      <div>\r
        <h1>Explorer les demandes</h1>\r
        <p>D\xE9couvrez des initiatives qui ont besoin de votre soutien et faites une diff\xE9rence r\xE9elle.</p>\r
      </div>\r
      <a class="header-cta" routerLink="/requests/new">Demander aide</a>\r
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
              @if (!isAssociation()) {\r
                <button\r
                  class="favorite-btn"\r
                  type="button"\r
                  title="Ajouter aux favoris"\r
                  aria-label="Ajouter aux favoris"\r
                  (click)="toggleFavorite(request.id)"\r
                  [class.active]="favoriteIds().has(request.id)"\r
                >\r
                  <i class="fas fa-heart"></i>\r
                </button>\r
              }\r
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
              <div class="request-actions">\r
                <a [routerLink]="['/request-detail', request.id]" class="btn-secondary">\r
                  <i class="fas fa-eye"></i> Voir\r
                </a>\r
                <button class="btn-primary" type="button" (click)="openRequest(request.id)">\r
                  <i class="fas fa-heart"></i> Aider\r
                </button>\r
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
`, styles: ["/* src/app/explorer/explorer.component.css */\n.container {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.explorer-header {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1d4ed8 50%,\n      #22c55e 100%);\n  color: white;\n  padding: 60px 20px;\n  text-align: center;\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n}\n.explorer-header h1 {\n  font-size: 40px;\n  font-weight: 800;\n  margin-bottom: 12px;\n  letter-spacing: -0.5px;\n}\n.explorer-header p {\n  font-size: 18px;\n  opacity: 0.95;\n  max-width: 600px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n.header-cta {\n  background: rgba(255, 255, 255, 0.18);\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  color: #fff;\n  padding: 12px 20px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 700;\n  white-space: nowrap;\n}\n@media (max-width: 900px) {\n  .header-content {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n.search-section {\n  padding: 32px 20px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.search-bar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: white;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px 20px;\n  transition: all 0.2s ease;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.search-bar:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.search-bar i {\n  color: #9ca3af;\n  font-size: 16px;\n}\n.search-bar input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 15px;\n  background: transparent;\n}\n.search-bar input::placeholder {\n  color: #9ca3af;\n}\n.filters-section {\n  position: sticky;\n  top: 60px;\n  background: white;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 16px 20px;\n  z-index: 50;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);\n}\n.filters-bar {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.filter-group label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.filter-select {\n  padding: 10px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 150px;\n}\n.filter-select:hover {\n  border-color: #2563eb;\n}\n.filter-select:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.btn-clear {\n  padding: 10px 16px;\n  background: #f3f4f6;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  color: #6b7280;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-clear:hover {\n  background: #e5e7eb;\n  color: #374151;\n}\n.results-info {\n  font-size: 14px;\n  color: #6b7280;\n  padding: 0 0 8px 0;\n}\n.requests-section {\n  padding: 48px 20px;\n  background: #f9fafb;\n  min-height: 60vh;\n}\n.requests-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 24px;\n}\n.request-card {\n  background: white;\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n}\n.request-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);\n  border-color: #2563eb;\n}\n.request-image {\n  position: relative;\n  width: 100%;\n  height: 180px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.05),\n      rgba(34, 197, 94, 0.05));\n}\n.favorite-btn {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: rgba(255, 255, 255, 0.9);\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  cursor: pointer;\n  color: #94a3b8;\n  transition: all 0.2s ease;\n}\n.favorite-btn.active {\n  color: #ef4444;\n  transform: scale(1.05);\n}\n.request-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.request-card:hover .request-image img {\n  transform: scale(1.05);\n}\n.urgency-badge {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 6px 12px;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.urgency-high {\n  background: rgba(239, 68, 68, 0.95);\n  color: white;\n}\n.urgency-medium {\n  background: rgba(245, 158, 11, 0.95);\n  color: white;\n}\n.urgency-low {\n  background: rgba(34, 197, 94, 0.95);\n  color: white;\n}\n.request-content {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.request-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n  line-height: 1.4;\n}\n.request-description {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 12px;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.request-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 12px;\n  font-size: 13px;\n  color: #6b7280;\n}\n.meta-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.meta-item i {\n  color: #2563eb;\n  font-size: 12px;\n}\n.progress-section {\n  margin-bottom: 16px;\n}\n.progress-bar {\n  width: 100%;\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #22c55e);\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n.progress-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n}\n.progress-text .amount {\n  font-weight: 700;\n  color: #2563eb;\n}\n.progress-text .target {\n  color: #9ca3af;\n}\n.request-actions {\n  display: flex;\n  gap: 12px;\n  margin-top: auto;\n}\n.btn-primary,\n.btn-secondary {\n  flex: 1;\n  padding: 10px 14px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  text-decoration: none;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8);\n  color: white;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);\n}\n.btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);\n}\n.btn-secondary {\n  background: white;\n  color: #2563eb;\n  border: 2px solid #2563eb;\n}\n.btn-secondary:hover {\n  background: #f0f4ff;\n}\n.association-actions {\n  display: grid;\n  gap: 10px;\n  margin-top: auto;\n}\n.primary-actions,\n.secondary-actions {\n  display: grid;\n  gap: 8px;\n}\n.btn-outline {\n  padding: 10px 14px;\n  border-radius: 8px;\n  border: 1px solid rgba(148, 163, 184, 0.8);\n  background: #fff;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-ghost {\n  padding: 10px 14px;\n  border-radius: 8px;\n  border: 1px dashed rgba(148, 163, 184, 0.7);\n  background: rgba(226, 232, 240, 0.4);\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  text-align: left;\n}\n.btn-link {\n  padding: 0;\n  border: none;\n  background: none;\n  color: #2563eb;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  text-align: left;\n}\n.no-results {\n  text-align: center;\n  padding: 60px 20px;\n  color: #6b7280;\n}\n.no-results i {\n  font-size: 48px;\n  color: #d1d5db;\n  margin-bottom: 16px;\n  display: block;\n}\n.no-results h3 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n}\n.no-results p {\n  margin-bottom: 24px;\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .explorer-header h1 {\n    font-size: 28px;\n  }\n  .explorer-header p {\n    font-size: 15px;\n  }\n  .filters-bar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-group,\n  .filter-select,\n  .btn-clear {\n    width: 100%;\n  }\n  .requests-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .request-actions {\n    gap: 8px;\n  }\n}\n@media (max-width: 480px) {\n  .explorer-header {\n    padding: 40px 16px;\n  }\n  .explorer-header h1 {\n    font-size: 24px;\n  }\n  .search-section,\n  .filters-section {\n    padding: 16px 16px;\n  }\n  .search-bar {\n    padding: 10px 14px;\n  }\n  .request-image {\n    height: 150px;\n  }\n  .request-content {\n    padding: 16px;\n  }\n  .request-title {\n    font-size: 14px;\n  }\n  .request-description {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=explorer.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExplorerComponent, { className: "ExplorerComponent", filePath: "app/explorer/explorer.component.ts", lineNumber: 41 });
})();

// src/app/associations/associations.component.ts
function AssociationsComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    \u0275\u0275property("value", cat_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r2);
  }
}
function AssociationsComponent_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r3 = ctx.$implicit;
    \u0275\u0275property("value", loc_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r3);
  }
}
function AssociationsComponent_div_46_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2, " V\xE9rifi\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function AssociationsComponent_div_46_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275element(2, "div", 31);
    \u0275\u0275elementStart(3, "div", 32)(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AssociationsComponent_div_46_div_1_div_6_Template, 3, 0, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35)(8, "h3", 36);
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
    \u0275\u0275elementStart(19, "p", 41);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 42)(22, "div", 43)(23, "span", 44);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 45);
    \u0275\u0275text(26, "campagne(s)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 43)(28, "span", 44);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 45);
    \u0275\u0275text(32, "collect\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "a", 46);
    \u0275\u0275text(34, " Voir le profil ");
    \u0275\u0275element(35, "i", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const assoc_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.getLogoInitials(assoc_r4.logo, assoc_r4.name));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", assoc_r4.verified);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(assoc_r4.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(assoc_r4.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(assoc_r4.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(assoc_r4.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(assoc_r4.campaigns);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(30, 9, assoc_r4.totalDonations / 1e3, "1.0-0"), "K\u20AC");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", "/association-detail");
  }
}
function AssociationsComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, AssociationsComponent_div_46_div_1_Template, 36, 12, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.filteredAssociations);
  }
}
function AssociationsComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "Aucune association trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Essayez d'ajuster vos filtres ou votre recherche");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 51);
    \u0275\u0275listener("click", function AssociationsComponent_ng_template_47_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.clearFilters());
    });
    \u0275\u0275text(7, " R\xE9initialiser les filtres ");
    \u0275\u0275elementEnd()();
  }
}
var AssociationsComponent = class _AssociationsComponent {
  searchQuery = "";
  selectedCategory = "";
  selectedLocation = "";
  sortBy = "name";
  categories = ["Alimentation", "Sant\xE9", "\xC9ducation", "Logement", "Emploi", "Bien-\xEAtre"];
  locations = ["Tunis", "Sfax", "Sousse", "Ariana", "Ben Arous", "Manouba"];
  allAssociations = [
    {
      id: 1,
      name: "Solidarit\xE9 Plus",
      logo: "S",
      location: "Tunis",
      category: "Alimentation",
      description: "Association d'aide alimentaire pour les familles en difficult\xE9",
      verified: true,
      campaigns: 12,
      totalDonations: 45e3
    },
    {
      id: 2,
      name: "\xC9ducation pour Tous",
      logo: "E",
      location: "Sfax",
      category: "\xC9ducation",
      description: "Acc\xE8s \xE0 l'\xE9ducation de qualit\xE9 pour tous les enfants",
      verified: true,
      campaigns: 15,
      totalDonations: 67500
    },
    {
      id: 3,
      name: "Sant\xE9 Solidaire",
      logo: "S",
      location: "Sousse",
      category: "Sant\xE9",
      description: "Couverture m\xE9dicale pour les personnes sans ressources",
      verified: true,
      campaigns: 8,
      totalDonations: 28e3
    },
    {
      id: 4,
      name: "Chez Nous",
      logo: "C",
      location: "Ariana",
      category: "Logement",
      description: "Refuge et r\xE9insertion pour les personnes sans-abri",
      verified: true,
      campaigns: 6,
      totalDonations: 35600
    },
    {
      id: 5,
      name: "Avenir Pro",
      logo: "A",
      location: "Ben Arous",
      category: "Emploi",
      description: "Formation et insertion professionnelle",
      verified: true,
      campaigns: 10,
      totalDonations: 42300
    },
    {
      id: 6,
      name: "Bien-\xCAtre",
      logo: "B",
      location: "Manouba",
      category: "Bien-\xEAtre",
      description: "Soutien psychosocial et sant\xE9 mentale",
      verified: true,
      campaigns: 7,
      totalDonations: 19800
    },
    {
      id: 7,
      name: "Main Tendue",
      logo: "M",
      location: "Tunis",
      category: "Alimentation",
      description: "Distribution alimentaire et aide d'urgence",
      verified: true,
      campaigns: 9,
      totalDonations: 31200
    },
    {
      id: 8,
      name: "Lumi\xE8re de l'Espoir",
      logo: "L",
      location: "Sfax",
      category: "\xC9ducation",
      description: "Scolarisation des enfants d\xE9favoris\xE9s",
      verified: true,
      campaigns: 11,
      totalDonations: 48900
    },
    {
      id: 9,
      name: "C\u0153ur Actif",
      logo: "C",
      location: "Sousse",
      category: "Sant\xE9",
      description: "Campagnes de sensibilisation sanitaire",
      verified: false,
      campaigns: 3,
      totalDonations: 8500
    }
  ];
  filteredAssociations = [];
  ngOnInit() {
    this.applyFilters();
  }
  applyFilters() {
    this.filteredAssociations = this.allAssociations.filter((assoc) => {
      const matchesSearch = assoc.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = !this.selectedCategory || assoc.category === this.selectedCategory;
      const matchesLocation = !this.selectedLocation || assoc.location === this.selectedLocation;
      return matchesSearch && matchesCategory && matchesLocation;
    });
    this.sortAssociations();
  }
  sortAssociations() {
    switch (this.sortBy) {
      case "name":
        this.filteredAssociations.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "most-active":
        this.filteredAssociations.sort((a, b) => b.campaigns - a.campaigns);
        break;
      case "most-funded":
        this.filteredAssociations.sort((a, b) => b.totalDonations - a.totalDonations);
        break;
    }
  }
  getLogoInitials(logo, name) {
    return logo || name.charAt(0);
  }
  clearFilters() {
    this.searchQuery = "";
    this.selectedCategory = "";
    this.selectedLocation = "";
    this.sortBy = "name";
    this.applyFilters();
  }
  static \u0275fac = function AssociationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssociationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssociationsComponent, selectors: [["app-associations"]], decls: 49, vars: 9, consts: [["noResults", ""], [1, "associations-header"], [1, "container"], [1, "filters-section"], [1, "search-bar-wrapper"], [1, "search-bar"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Rechercher une association...", 3, "ngModelChange", "input", "ngModel"], [1, "filters-bar"], [1, "filter-group"], ["for", "category"], ["id", "category", 1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "location"], ["id", "location", 1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["for", "sort"], ["id", "sort", 1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", "name"], ["value", "most-active"], ["value", "most-funded"], [1, "btn-clear", 3, "click"], [1, "fas", "fa-times"], [1, "results-info"], [1, "associations-section"], ["class", "associations-grid", 4, "ngIf", "ngIfElse"], [3, "value"], [1, "associations-grid"], ["class", "association-card", 4, "ngFor", "ngForOf"], [1, "association-card"], [1, "association-cover"], [1, "cover-placeholder"], [1, "logo-badge"], [1, "logo-text"], ["class", "verified-badge", 4, "ngIf"], [1, "association-content"], [1, "association-name"], [1, "association-meta"], [1, "meta-item"], [1, "fas", "fa-map-marker-alt"], [1, "fas", "fa-tag"], [1, "association-description"], [1, "association-stats"], [1, "stat"], [1, "stat-value"], [1, "stat-label"], [1, "btn-view-profile", 3, "routerLink"], [1, "fas", "fa-arrow-right"], [1, "verified-badge"], [1, "fas", "fa-check-circle"], [1, "no-results"], [1, "btn-secondary", 3, "click"]], template: function AssociationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "app-navbar");
      \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Associations v\xE9rifi\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "D\xE9couvrez les organisations de confiance qui font une diff\xE9rence dans notre communaut\xE9");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "section", 3)(8, "div", 2)(9, "div", 4)(10, "div", 5);
      \u0275\u0275element(11, "i", 6);
      \u0275\u0275elementStart(12, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function AssociationsComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function AssociationsComponent_Template_input_input_12_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "label", 10);
      \u0275\u0275text(16, "Cat\xE9gorie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function AssociationsComponent_Template_select_ngModelChange_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function AssociationsComponent_Template_select_change_17_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(18, "option", 12);
      \u0275\u0275text(19, "Toutes les cat\xE9gories");
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, AssociationsComponent_option_20_Template, 2, 2, "option", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 9)(22, "label", 14);
      \u0275\u0275text(23, "Localisation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "select", 15);
      \u0275\u0275twoWayListener("ngModelChange", function AssociationsComponent_Template_select_ngModelChange_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedLocation, $event) || (ctx.selectedLocation = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function AssociationsComponent_Template_select_change_24_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(25, "option", 12);
      \u0275\u0275text(26, "Toutes les villes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(27, AssociationsComponent_option_27_Template, 2, 2, "option", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 9)(29, "label", 16);
      \u0275\u0275text(30, "Tri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "select", 17);
      \u0275\u0275twoWayListener("ngModelChange", function AssociationsComponent_Template_select_ngModelChange_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function AssociationsComponent_Template_select_change_31_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(32, "option", 18);
      \u0275\u0275text(33, "Par nom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 19);
      \u0275\u0275text(35, "Plus actif");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "option", 20);
      \u0275\u0275text(37, "Plus financ\xE9");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "button", 21);
      \u0275\u0275listener("click", function AssociationsComponent_Template_button_click_38_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275element(39, "i", 22);
      \u0275\u0275text(40, " R\xE9initialiser ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 23)(42, "span");
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "section", 24)(45, "div", 2);
      \u0275\u0275template(46, AssociationsComponent_div_46_Template, 2, 1, "div", 25)(47, AssociationsComponent_ng_template_47_Template, 8, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const noResults_r7 = \u0275\u0275reference(48);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategory);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedLocation);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.locations);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.sortBy);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1("", ctx.filteredAssociations.length, " association(s) trouv\xE9e(s)");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.filteredAssociations.length > 0)("ngIfElse", noResults_r7);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, NavbarComponent, DecimalPipe], styles: ["\n.container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.associations-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e 0%,\n      #16a34a 50%,\n      #2563eb 100%);\n  color: white;\n  padding: 60px 20px;\n  text-align: center;\n}\n.associations-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 800;\n  margin-bottom: 12px;\n  letter-spacing: -0.5px;\n}\n.associations-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0.95;\n  max-width: 600px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n.filters-section[_ngcontent-%COMP%] {\n  padding: 32px 20px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.search-bar-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: white;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px 20px;\n  transition: all 0.2s ease;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.search-bar[_ngcontent-%COMP%]:focus-within {\n  border-color: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);\n}\n.search-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 16px;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 15px;\n  background: transparent;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 150px;\n}\n.filter-select[_ngcontent-%COMP%]:hover {\n  border-color: #22c55e;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);\n}\n.btn-clear[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background: #f3f4f6;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  color: #6b7280;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-clear[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n  color: #374151;\n}\n.results-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  padding: 0 0 8px 0;\n}\n.associations-section[_ngcontent-%COMP%] {\n  padding: 48px 20px;\n  background: #f9fafb;\n  min-height: 60vh;\n}\n.associations-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 28px;\n}\n.association-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n}\n.association-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);\n  border-color: #22c55e;\n}\n.association-cover[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 160px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #cffafe 100%);\n}\n.cover-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(34, 197, 94, 0.1) 0%,\n      rgba(34, 197, 94, 0.05) 100%);\n}\n.logo-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -20px;\n  left: 20px;\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  border: 4px solid white;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 6px 16px rgba(34, 197, 94, 0.3);\n}\n.logo-text[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 800;\n  font-size: 28px;\n}\n.verified-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: rgba(34, 197, 94, 0.95);\n  color: white;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);\n}\n.verified-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.association-content[_ngcontent-%COMP%] {\n  padding: 32px 24px 24px;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.association-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 12px;\n  line-height: 1.4;\n}\n.association-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 12px;\n  font-size: 13px;\n  color: #6b7280;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #22c55e;\n  font-size: 12px;\n}\n.association-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n  margin-bottom: 16px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.association-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  padding: 16px 0;\n  border-top: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 16px;\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.btn-view-profile[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: white;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 14px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);\n}\n.btn-view-profile[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(34, 197, 94, 0.4);\n}\n.no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #6b7280;\n}\n.no-results[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #d1d5db;\n  margin-bottom: 16px;\n  display: block;\n}\n.no-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n}\n.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  font-size: 14px;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: white;\n  color: #22c55e;\n  border: 2px solid #22c55e;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 14px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n}\n@media (max-width: 768px) {\n  .associations-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .associations-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .filters-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-group[_ngcontent-%COMP%], \n   .filter-select[_ngcontent-%COMP%], \n   .btn-clear[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .associations-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .association-cover[_ngcontent-%COMP%] {\n    height: 140px;\n  }\n  .logo-badge[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n    left: 16px;\n    bottom: -15px;\n  }\n  .logo-text[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .association-content[_ngcontent-%COMP%] {\n    padding: 28px 20px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .associations-header[_ngcontent-%COMP%] {\n    padding: 40px 16px;\n  }\n  .associations-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .filters-section[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .search-bar[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n  }\n  .association-cover[_ngcontent-%COMP%] {\n    height: 120px;\n  }\n  .logo-badge[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    bottom: -12px;\n  }\n  .logo-text[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .association-content[_ngcontent-%COMP%] {\n    padding: 24px 16px 16px;\n  }\n  .association-name[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .association-stats[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n}\n/*# sourceMappingURL=associations.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssociationsComponent, [{
    type: Component,
    args: [{ selector: "app-associations", standalone: true, imports: [CommonModule, FormsModule, RouterLink, NavbarComponent], template: `<app-navbar></app-navbar>\r
\r
<!-- ==================== HEADER ==================== -->\r
<section class="associations-header">\r
  <div class="container">\r
    <h1>Associations v\xE9rifi\xE9es</h1>\r
    <p>D\xE9couvrez les organisations de confiance qui font une diff\xE9rence dans notre communaut\xE9</p>\r
  </div>\r
</section>\r
\r
<!-- ==================== SEARCH + FILTERS ==================== -->\r
<section class="filters-section">\r
  <div class="container">\r
    <!-- Search -->\r
    <div class="search-bar-wrapper">\r
      <div class="search-bar">\r
        <i class="fas fa-search"></i>\r
        <input \r
          type="text" \r
          placeholder="Rechercher une association..."\r
          [(ngModel)]="searchQuery"\r
          (input)="applyFilters()"\r
        />\r
      </div>\r
    </div>\r
\r
    <!-- Filters -->\r
    <div class="filters-bar">\r
      <!-- Cat\xE9gorie -->\r
      <div class="filter-group">\r
        <label for="category">Cat\xE9gorie</label>\r
        <select \r
          id="category"\r
          [(ngModel)]="selectedCategory"\r
          (change)="applyFilters()"\r
          class="filter-select"\r
        >\r
          <option value="">Toutes les cat\xE9gories</option>\r
          <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>\r
        </select>\r
      </div>\r
\r
      <!-- Localisation -->\r
      <div class="filter-group">\r
        <label for="location">Localisation</label>\r
        <select \r
          id="location"\r
          [(ngModel)]="selectedLocation"\r
          (change)="applyFilters()"\r
          class="filter-select"\r
        >\r
          <option value="">Toutes les villes</option>\r
          <option *ngFor="let loc of locations" [value]="loc">{{ loc }}</option>\r
        </select>\r
      </div>\r
\r
      <!-- Tri -->\r
      <div class="filter-group">\r
        <label for="sort">Tri</label>\r
        <select \r
          id="sort"\r
          [(ngModel)]="sortBy"\r
          (change)="applyFilters()"\r
          class="filter-select"\r
        >\r
          <option value="name">Par nom</option>\r
          <option value="most-active">Plus actif</option>\r
          <option value="most-funded">Plus financ\xE9</option>\r
        </select>\r
      </div>\r
\r
      <!-- R\xE9initialiser -->\r
      <button class="btn-clear" (click)="clearFilters()">\r
        <i class="fas fa-times"></i> R\xE9initialiser\r
      </button>\r
    </div>\r
\r
    <!-- Results count -->\r
    <div class="results-info">\r
      <span>{{ filteredAssociations.length }} association(s) trouv\xE9e(s)</span>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ==================== ASSOCIATIONS GRID ==================== -->\r
<section class="associations-section">\r
  <div class="container">\r
    <div class="associations-grid" *ngIf="filteredAssociations.length > 0; else noResults">\r
      <div class="association-card" *ngFor="let assoc of filteredAssociations">\r
        <!-- Cover Image -->\r
        <div class="association-cover">\r
          <div class="cover-placeholder"></div>\r
          <!-- Logo -->\r
          <div class="logo-badge">\r
            <span class="logo-text">{{ getLogoInitials(assoc.logo, assoc.name) }}</span>\r
          </div>\r
          <!-- Verified Badge -->\r
          <div class="verified-badge" *ngIf="assoc.verified">\r
            <i class="fas fa-check-circle"></i>\r
            V\xE9rifi\xE9e\r
          </div>\r
        </div>\r
\r
        <!-- Content -->\r
        <div class="association-content">\r
          <h3 class="association-name">{{ assoc.name }}</h3>\r
\r
          <!-- Meta -->\r
          <div class="association-meta">\r
            <div class="meta-item">\r
              <i class="fas fa-map-marker-alt"></i>\r
              <span>{{ assoc.location }}</span>\r
            </div>\r
            <div class="meta-item">\r
              <i class="fas fa-tag"></i>\r
              <span>{{ assoc.category }}</span>\r
            </div>\r
          </div>\r
\r
          <!-- Description -->\r
          <p class="association-description">{{ assoc.description }}</p>\r
\r
          <!-- Stats -->\r
          <div class="association-stats">\r
            <div class="stat">\r
              <span class="stat-value">{{ assoc.campaigns }}</span>\r
              <span class="stat-label">campagne(s)</span>\r
            </div>\r
            <div class="stat">\r
              <span class="stat-value">{{ (assoc.totalDonations / 1000) | number:'1.0-0' }}K\u20AC</span>\r
              <span class="stat-label">collect\xE9</span>\r
            </div>\r
          </div>\r
\r
          <!-- Action -->\r
          <a [routerLink]="'/association-detail'" class="btn-view-profile">\r
            Voir le profil <i class="fas fa-arrow-right"></i>\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- No results -->\r
    <ng-template #noResults>\r
      <div class="no-results">\r
        <i class="fas fa-search"></i>\r
        <h3>Aucune association trouv\xE9e</h3>\r
        <p>Essayez d'ajuster vos filtres ou votre recherche</p>\r
        <button class="btn-secondary" (click)="clearFilters()">\r
          R\xE9initialiser les filtres\r
        </button>\r
      </div>\r
    </ng-template>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/associations/associations.component.css */\n.container {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.associations-header {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e 0%,\n      #16a34a 50%,\n      #2563eb 100%);\n  color: white;\n  padding: 60px 20px;\n  text-align: center;\n}\n.associations-header h1 {\n  font-size: 40px;\n  font-weight: 800;\n  margin-bottom: 12px;\n  letter-spacing: -0.5px;\n}\n.associations-header p {\n  font-size: 18px;\n  opacity: 0.95;\n  max-width: 600px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n.filters-section {\n  padding: 32px 20px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.search-bar-wrapper {\n  margin-bottom: 24px;\n}\n.search-bar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: white;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px 20px;\n  transition: all 0.2s ease;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.search-bar:focus-within {\n  border-color: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);\n}\n.search-bar i {\n  color: #9ca3af;\n  font-size: 16px;\n}\n.search-bar input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 15px;\n  background: transparent;\n}\n.search-bar input::placeholder {\n  color: #9ca3af;\n}\n.filters-bar {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.filter-group label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.filter-select {\n  padding: 10px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 150px;\n}\n.filter-select:hover {\n  border-color: #22c55e;\n}\n.filter-select:focus {\n  outline: none;\n  border-color: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);\n}\n.btn-clear {\n  padding: 10px 16px;\n  background: #f3f4f6;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  color: #6b7280;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-clear:hover {\n  background: #e5e7eb;\n  color: #374151;\n}\n.results-info {\n  font-size: 14px;\n  color: #6b7280;\n  padding: 0 0 8px 0;\n}\n.associations-section {\n  padding: 48px 20px;\n  background: #f9fafb;\n  min-height: 60vh;\n}\n.associations-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 28px;\n}\n.association-card {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n}\n.association-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);\n  border-color: #22c55e;\n}\n.association-cover {\n  position: relative;\n  width: 100%;\n  height: 160px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #cffafe 100%);\n}\n.cover-placeholder {\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(34, 197, 94, 0.1) 0%,\n      rgba(34, 197, 94, 0.05) 100%);\n}\n.logo-badge {\n  position: absolute;\n  bottom: -20px;\n  left: 20px;\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  border: 4px solid white;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 6px 16px rgba(34, 197, 94, 0.3);\n}\n.logo-text {\n  color: white;\n  font-weight: 800;\n  font-size: 28px;\n}\n.verified-badge {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: rgba(34, 197, 94, 0.95);\n  color: white;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);\n}\n.verified-badge i {\n  font-size: 14px;\n}\n.association-content {\n  padding: 32px 24px 24px;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.association-name {\n  font-size: 18px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 12px;\n  line-height: 1.4;\n}\n.association-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 12px;\n  font-size: 13px;\n  color: #6b7280;\n}\n.meta-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.meta-item i {\n  color: #22c55e;\n  font-size: 12px;\n}\n.association-description {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n  margin-bottom: 16px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.association-stats {\n  display: flex;\n  gap: 20px;\n  padding: 16px 0;\n  border-top: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 16px;\n}\n.stat {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-value {\n  font-weight: 700;\n  font-size: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-label {\n  font-size: 12px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.btn-view-profile {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: white;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 14px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);\n}\n.btn-view-profile:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(34, 197, 94, 0.4);\n}\n.no-results {\n  text-align: center;\n  padding: 60px 20px;\n  color: #6b7280;\n}\n.no-results i {\n  font-size: 48px;\n  color: #d1d5db;\n  margin-bottom: 16px;\n  display: block;\n}\n.no-results h3 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n}\n.no-results p {\n  margin-bottom: 24px;\n  font-size: 14px;\n}\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: white;\n  color: #22c55e;\n  border: 2px solid #22c55e;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 14px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-secondary:hover {\n  background: #f0fdf4;\n}\n@media (max-width: 768px) {\n  .associations-header h1 {\n    font-size: 28px;\n  }\n  .associations-header p {\n    font-size: 15px;\n  }\n  .filters-bar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-group,\n  .filter-select,\n  .btn-clear {\n    width: 100%;\n  }\n  .associations-grid {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .association-cover {\n    height: 140px;\n  }\n  .logo-badge {\n    width: 70px;\n    height: 70px;\n    left: 16px;\n    bottom: -15px;\n  }\n  .logo-text {\n    font-size: 24px;\n  }\n  .association-content {\n    padding: 28px 20px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .associations-header {\n    padding: 40px 16px;\n  }\n  .associations-header h1 {\n    font-size: 24px;\n  }\n  .filters-section {\n    padding: 20px 16px;\n  }\n  .search-bar {\n    padding: 10px 14px;\n  }\n  .association-cover {\n    height: 120px;\n  }\n  .logo-badge {\n    width: 60px;\n    height: 60px;\n    bottom: -12px;\n  }\n  .logo-text {\n    font-size: 20px;\n  }\n  .association-content {\n    padding: 24px 16px 16px;\n  }\n  .association-name {\n    font-size: 16px;\n  }\n  .association-stats {\n    gap: 16px;\n  }\n}\n/*# sourceMappingURL=associations.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssociationsComponent, { className: "AssociationsComponent", filePath: "app/associations/associations.component.ts", lineNumber: 27 });
})();

// src/app/shared/donation-modal.component.ts
function DonationModalComponent_div_0_div_7_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function DonationModalComponent_div_0_div_7_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectType("request"));
    });
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "Aider une demande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Soutenir une demande d'aide sp\xE9cifique");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.donationForm.type === "request");
  }
}
function DonationModalComponent_div_0_div_7_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function DonationModalComponent_div_0_div_7_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectType("association"));
    });
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "Soutenir une association");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Aider une organisation dans son \u0153uvre");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.donationForm.type === "association");
  }
}
function DonationModalComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 9);
    \u0275\u0275text(2, "\xC9tape 1: Choisissez le type de don");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275template(4, DonationModalComponent_div_0_div_7_button_4_Template, 6, 2, "button", 11)(5, DonationModalComponent_div_0_div_7_button_5_Template, 6, 2, "button", 11);
    \u0275\u0275elementStart(6, "button", 12);
    \u0275\u0275listener("click", function DonationModalComponent_div_0_div_7_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectType("platform"));
    });
    \u0275\u0275element(7, "i", 13);
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9, "Don libre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Contribution g\xE9n\xE9rale \xE0 la plateforme");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 14)(13, "button", 15);
    \u0275\u0275listener("click", function DonationModalComponent_div_0_div_7_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToStep2());
    });
    \u0275\u0275text(14, " Continuer \u2192 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.allowedTypes.includes("request"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.allowedTypes.includes("association"));
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r1.donationForm.type === "platform");
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", !ctx_r1.donationForm.type);
  }
}
function DonationModalComponent_div_0_div_8_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function DonationModalComponent_div_0_div_8_button_19_Template_button_click_0_listener() {
      const amt_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.donationForm.amount = amt_r8);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const amt_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.donationForm.amount === amt_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", amt_r8, " TND ");
  }
}
function DonationModalComponent_div_0_div_8_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2713 Confirmer le don");
    \u0275\u0275elementEnd();
  }
}
function DonationModalComponent_div_0_div_8_span_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275text(2, " Traitement... ");
    \u0275\u0275elementEnd();
  }
}
function DonationModalComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 9);
    \u0275\u0275text(2, "\xC9tape 2: D\xE9tails du don");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 18);
    \u0275\u0275listener("ngSubmit", function DonationModalComponent_div_0_div_8_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitDonation());
    });
    \u0275\u0275elementStart(4, "div", 19)(5, "p");
    \u0275\u0275element(6, "i", 20);
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 21)(10, "label", 22);
    \u0275\u0275text(11, "Montant (TND) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 23)(13, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function DonationModalComponent_div_0_div_8_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.donationForm.amount, $event) || (ctx_r1.donationForm.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 25);
    \u0275\u0275text(15, "TND");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "small", 26);
    \u0275\u0275text(17, "Minimum: 5 TND");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 27);
    \u0275\u0275template(19, DonationModalComponent_div_0_div_8_button_19_Template, 2, 3, "button", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 21)(21, "label", 29);
    \u0275\u0275text(22, "Message (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "textarea", 30);
    \u0275\u0275twoWayListener("ngModelChange", function DonationModalComponent_div_0_div_8_Template_textarea_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.donationForm.message, $event) || (ctx_r1.donationForm.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "small", 31);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 32)(27, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function DonationModalComponent_div_0_div_8_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.donationForm.isAnonymous, $event) || (ctx_r1.donationForm.isAnonymous = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "label", 34);
    \u0275\u0275text(29, " \u2713 Don anonyme ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "small", 35);
    \u0275\u0275text(31, " Votre nom ne sera pas affich\xE9 publiquement ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 36)(33, "div", 37);
    \u0275\u0275element(34, "i", 38);
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, "Paiement s\xE9curis\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 37);
    \u0275\u0275element(38, "i", 39);
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, "Donn\xE9es prot\xE9g\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 37);
    \u0275\u0275element(42, "i", 40);
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44, "Transparence garantie");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 14)(46, "button", 41);
    \u0275\u0275listener("click", function DonationModalComponent_div_0_div_8_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.currentStep = 1);
    });
    \u0275\u0275text(47, " \u2190 Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 42);
    \u0275\u0275template(49, DonationModalComponent_div_0_div_8_span_49_Template, 2, 0, "span", 43)(50, DonationModalComponent_div_0_div_8_span_50_Template, 3, 0, "span", 43);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r1.getTypeIcon());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTypeLabel());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.donationForm.amount);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.quickAmounts);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.donationForm.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.donationForm.message || "").length, "/500 ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.donationForm.isAnonymous);
    \u0275\u0275advance(21);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting || !ctx_r1.donationForm.amount || ctx_r1.donationForm.amount < 5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmitting);
  }
}
function DonationModalComponent_div_0_div_9_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r10.amount, " TND");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" = ", item_r10.description, " ");
  }
}
function DonationModalComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275element(2, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 49);
    \u0275\u0275text(4, "Merci pour votre aide! \u2764\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 50);
    \u0275\u0275text(6, " Votre don de ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " a \xE9t\xE9 re\xE7u avec succ\xE8s. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 51);
    \u0275\u0275text(11, " Vous recevrez une confirmation par email. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 52)(13, "p", 53);
    \u0275\u0275text(14, "\u{1F4AA} Impact de votre don:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 54);
    \u0275\u0275template(16, DonationModalComponent_div_0_div_9_div_16_Template, 4, 2, "div", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 14)(18, "button", 56);
    \u0275\u0275listener("click", function DonationModalComponent_div_0_div_9_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(19, " Fermer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 57);
    \u0275\u0275listener("click", function DonationModalComponent_div_0_div_9_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.shareDonation());
    });
    \u0275\u0275element(21, "i", 58);
    \u0275\u0275text(22, " Partager ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.donationForm.amount, " TND");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.getImpactItems());
  }
}
function DonationModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function DonationModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function DonationModalComponent_div_0_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h2", 4);
    \u0275\u0275text(4, "\u2764\uFE0F Faire un don");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function DonationModalComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, DonationModalComponent_div_0_div_7_Template, 15, 5, "div", 6)(8, DonationModalComponent_div_0_div_8_Template, 51, 10, "div", 6)(9, DonationModalComponent_div_0_div_9_Template, 23, 2, "div", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 3);
  }
}
var DonationModalComponent = class _DonationModalComponent {
  isOpen = false;
  requestId;
  associationId;
  defaultType = "platform";
  closed = new EventEmitter();
  donated = new EventEmitter();
  http = inject(HttpClient);
  router = inject(Router);
  currentStep = 1;
  isSubmitting = false;
  quickAmounts = [5, 25, 50, 100, 250, 500];
  donationForm = {
    type: "platform",
    amount: 25,
    message: "",
    isAnonymous: false
  };
  get allowedTypes() {
    const types = [];
    if (this.requestId)
      types.push("request");
    if (this.associationId)
      types.push("association");
    types.push("platform");
    return types;
  }
  ngOnInit() {
    if (this.requestId) {
      this.donationForm.type = "request";
      this.donationForm.requestId = this.requestId;
    } else if (this.associationId) {
      this.donationForm.type = "association";
      this.donationForm.associationId = this.associationId;
    }
  }
  selectType(type) {
    this.donationForm.type = type;
    if (type === "request" && this.requestId) {
      this.donationForm.requestId = this.requestId;
    } else if (type === "association" && this.associationId) {
      this.donationForm.associationId = this.associationId;
    }
  }
  getTypeIcon() {
    const icons = {
      request: "fa-hand-holding-heart",
      association: "fa-handshake",
      platform: "fa-heart"
    };
    return icons[this.donationForm.type] || "fa-heart";
  }
  getTypeLabel() {
    const labels = {
      request: "Donation \xE0 une demande",
      association: "Donation \xE0 une association",
      platform: "Don libre"
    };
    return labels[this.donationForm.type] || "";
  }
  goToStep2() {
    if (this.donationForm.type) {
      this.currentStep = 2;
    }
  }
  submitDonation() {
    if (!this.donationForm.amount || this.donationForm.amount < 5) {
      alert("Le montant minimum est 5 TND");
      return;
    }
    this.isSubmitting = true;
    this.http.post("/backend/api/create_donation.php", this.donationForm).subscribe({
      next: (response) => {
        if (response.success) {
          this.currentStep = 3;
          this.donated.emit(this.donationForm);
        } else {
          alert(response.message || "Erreur lors du traitement du don");
        }
      },
      error: (error) => {
        console.error("Donation error:", error);
        if (error.status === 401) {
          this.router.navigate(["/auth/login"]);
          this.closeModal();
        } else {
          alert("Erreur lors du traitement du don. Veuillez r\xE9essayer.");
        }
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
  getImpactItems() {
    const items = [
      { amount: "5", description: "1 pain pour une famille" },
      { amount: "25", description: "1 panier de nourriture" },
      { amount: "50", description: "1 semaine de repas" },
      { amount: "100", description: "Fournitures scolaires compl\xE8tes" },
      { amount: "250", description: "Consultation m\xE9dicale + m\xE9dicaments" }
    ];
    return items;
  }
  shareDonation() {
    const message = `J'ai fait un don de ${this.donationForm.amount} TND sur SANAD pour soutenir l'aide sociale. Rejoignez-moi!`;
    if (navigator.share) {
      navigator.share({
        title: "SANAD - Plateforme d'aide sociale",
        text: message,
        url: window.location.href
      });
    } else {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://twitter.com/intent/tweet?text=${encodedMessage}`, "_blank");
    }
  }
  closeModal() {
    this.isOpen = false;
    this.currentStep = 1;
    this.donationForm = {
      type: this.defaultType,
      amount: 25,
      message: "",
      isAnonymous: false,
      requestId: this.requestId,
      associationId: this.associationId
    };
    this.closed.emit();
  }
  static \u0275fac = function DonationModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DonationModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DonationModalComponent, selectors: [["app-donation-modal"]], inputs: { isOpen: "isOpen", requestId: "requestId", associationId: "associationId", defaultType: "defaultType" }, outputs: { closed: "closed", donated: "donated" }, decls: 1, vars: 1, consts: [["class", "donation-modal-overlay", 3, "click", 4, "ngIf"], [1, "donation-modal-overlay", 3, "click"], [1, "donation-modal", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "close-btn", 3, "click"], ["class", "modal-content", 4, "ngIf"], ["class", "modal-content success", 4, "ngIf"], [1, "modal-content"], [1, "step-label"], [1, "donation-types"], ["class", "type-card", 3, "selected", "click", 4, "ngIf"], [1, "type-card", 3, "click"], [1, "fas", "fa-heart"], [1, "modal-actions"], [1, "btn-next", 3, "click", "disabled"], [1, "fas", "fa-hand-holding-heart"], [1, "fas", "fa-handshake"], [3, "ngSubmit"], [1, "donation-summary"], [1, "fas", 3, "ngClass"], [1, "form-group"], ["for", "amount"], [1, "amount-input-wrapper"], ["id", "amount", "type", "number", "name", "amount", "placeholder", "25", "min", "5", "max", "100000", "step", "1", "required", "", 1, "amount-input", 3, "ngModelChange", "ngModel"], [1, "currency"], [1, "amount-info"], [1, "quick-amounts"], ["type", "button", "class", "quick-btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["for", "message"], ["id", "message", "name", "message", "placeholder", "Partagez un message de soutien...", "rows", "3", "maxlength", "500", 1, "message-textarea", 3, "ngModelChange", "ngModel"], [1, "char-count"], [1, "form-group", "checkbox"], ["id", "anonymous", "type", "checkbox", "name", "anonymous", 1, "checkbox-input", 3, "ngModelChange", "ngModel"], ["for", "anonymous", 1, "checkbox-label"], [1, "checkbox-help"], [1, "trust-indicators"], [1, "trust-badge"], [1, "fas", "fa-shield-alt"], [1, "fas", "fa-lock"], [1, "fas", "fa-check-circle"], ["type", "button", 1, "btn-back", 3, "click"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [4, "ngIf"], ["type", "button", 1, "quick-btn", 3, "click"], [1, "fas", "fa-spinner", "fa-spin"], [1, "modal-content", "success"], [1, "success-animation"], [1, "fas", "fa-heart-pulse"], [1, "success-title"], [1, "success-message"], [1, "success-detail"], [1, "success-impact"], [1, "impact-label"], [1, "impact-items"], ["class", "impact-item", 4, "ngFor", "ngForOf"], [1, "btn-close", 3, "click"], [1, "btn-share", 3, "click"], [1, "fas", "fa-share-alt"], [1, "impact-item"]], template: function DonationModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, DonationModalComponent_div_0_Template, 10, 3, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MaxLengthValidator, MinValidator, MaxValidator, NgModel, NgForm], styles: ["\n.donation-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.donation-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n  max-width: 450px;\n  width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid #f0f0f0;\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 10;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  color: #111827;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #6b7280;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.modal-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.step-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  font-weight: 500;\n  margin: 0 0 16px 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.donation-types[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n  margin: 20px 0;\n}\n.type-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  background: #f9fafb;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-align: center;\n  color: #111827;\n  font-size: 14px;\n}\n.type-card[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.type-card.selected[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #eff6ff;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.type-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #2563eb;\n  display: block;\n  margin-bottom: 8px;\n}\n.type-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 8px 0 4px 0;\n  font-size: 14px;\n  font-weight: 600;\n}\n.type-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #6b7280;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 8px;\n  color: #111827;\n}\n.amount-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.amount-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 40px 12px 12px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.amount-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.currency[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #6b7280;\n}\n.amount-info[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n}\n.quick-amounts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin: 16px 0 20px 0;\n}\n.quick-btn[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: white;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6b7280;\n}\n.quick-btn[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n  color: #2563eb;\n}\n.quick-btn.selected[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: white;\n  border-color: #2563eb;\n}\n.message-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-family: inherit;\n  font-size: 14px;\n  resize: none;\n  transition: all 0.3s ease;\n}\n.message-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.char-count[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n  text-align: right;\n}\n.checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.checkbox-input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  margin-right: 8px;\n  accent-color: #2563eb;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-weight: 500;\n  color: #111827;\n  cursor: pointer;\n}\n.checkbox-help[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #6b7280;\n  margin-left: 28px;\n  margin-top: 4px;\n}\n.trust-indicators[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 8px;\n  margin: 20px 0;\n  padding: 16px;\n  background: #f0fdf4;\n  border-radius: 8px;\n}\n.trust-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #15803d;\n  font-weight: 500;\n}\n.trust-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.donation-summary[_ngcontent-%COMP%] {\n  padding: 12px;\n  background: #eff6ff;\n  border-left: 4px solid #2563eb;\n  border-radius: 4px;\n  margin-bottom: 20px;\n}\n.donation-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #1e40af;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #f0f0f0;\n}\n.btn-next[_ngcontent-%COMP%], \n.btn-back[_ngcontent-%COMP%], \n.btn-submit[_ngcontent-%COMP%], \n.btn-close[_ngcontent-%COMP%], \n.btn-share[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn-next[_ngcontent-%COMP%], \n.btn-submit[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  background: #2563eb;\n  color: white;\n}\n.btn-next[_ngcontent-%COMP%]:hover:not(:disabled), \n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);\n}\n.btn-next[_ngcontent-%COMP%]:disabled, \n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-back[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #111827;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #111827;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.btn-share[_ngcontent-%COMP%] {\n  background: #22c55e;\n  color: white;\n}\n.btn-share[_ngcontent-%COMP%]:hover {\n  background: #16a34a;\n}\n.modal-content.success[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.success-animation[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin: 20px 0;\n  animation: _ngcontent-%COMP%_heartBeat 0.6s ease;\n}\n.success-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #22c55e;\n  margin: 16px 0 12px 0;\n}\n.success-message[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #111827;\n  margin: 12px 0;\n  font-weight: 500;\n}\n.success-detail[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 8px 0 20px 0;\n}\n.success-impact[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  padding: 16px;\n  border-radius: 8px;\n  margin: 20px 0;\n}\n.impact-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #15803d;\n  margin: 0 0 12px 0;\n}\n.impact-items[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.impact-item[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #166534;\n  padding: 6px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_heartBeat {\n  0%, 100% {\n    transform: scale(1);\n  }\n  25% {\n    transform: scale(1.1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}\n@media (max-width: 768px) {\n  .donation-modal[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: 95%;\n    border-radius: 12px;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .modal-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .quick-amounts[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=donation-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DonationModalComponent, [{
    type: Component,
    args: [{ selector: "app-donation-modal", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="donation-modal-overlay" *ngIf="isOpen" (click)="closeModal()">
      <div class="donation-modal" (click)="$event.stopPropagation()">
        <!-- Header -->
        <div class="modal-header">
          <h2 class="modal-title">\u2764\uFE0F Faire un don</h2>
          <button class="close-btn" (click)="closeModal()">\u2715</button>
        </div>

        <!-- Step 1: Type Selection -->
        <div *ngIf="currentStep === 1" class="modal-content">
          <p class="step-label">\xC9tape 1: Choisissez le type de don</p>

          <div class="donation-types">
            <button
              *ngIf="allowedTypes.includes('request')"
              class="type-card"
              [class.selected]="donationForm.type === 'request'"
              (click)="selectType('request')"
            >
              <i class="fas fa-hand-holding-heart"></i>
              <h3>Aider une demande</h3>
              <p>Soutenir une demande d'aide sp\xE9cifique</p>
            </button>

            <button
              *ngIf="allowedTypes.includes('association')"
              class="type-card"
              [class.selected]="donationForm.type === 'association'"
              (click)="selectType('association')"
            >
              <i class="fas fa-handshake"></i>
              <h3>Soutenir une association</h3>
              <p>Aider une organisation dans son \u0153uvre</p>
            </button>

            <button
              class="type-card"
              [class.selected]="donationForm.type === 'platform'"
              (click)="selectType('platform')"
            >
              <i class="fas fa-heart"></i>
              <h3>Don libre</h3>
              <p>Contribution g\xE9n\xE9rale \xE0 la plateforme</p>
            </button>
          </div>

          <div class="modal-actions">
            <button class="btn-next" (click)="goToStep2()" [disabled]="!donationForm.type">
              Continuer \u2192
            </button>
          </div>
        </div>

        <!-- Step 2: Form -->
        <div *ngIf="currentStep === 2" class="modal-content">
          <p class="step-label">\xC9tape 2: D\xE9tails du don</p>

          <form (ngSubmit)="submitDonation()">
            <!-- Type Summary -->
            <div class="donation-summary">
              <p>
                <i class="fas" [ngClass]="getTypeIcon()"></i>
                <strong>{{ getTypeLabel() }}</strong>
              </p>
            </div>

            <!-- Amount Input -->
            <div class="form-group">
              <label for="amount">Montant (TND) *</label>
              <div class="amount-input-wrapper">
                <input
                  id="amount"
                  type="number"
                  [(ngModel)]="donationForm.amount"
                  name="amount"
                  placeholder="25"
                  min="5"
                  max="100000"
                  step="1"
                  required
                  class="amount-input"
                />
                <span class="currency">TND</span>
              </div>
              <small class="amount-info">Minimum: 5 TND</small>
            </div>

            <!-- Quick Amount Buttons -->
            <div class="quick-amounts">
              <button
                type="button"
                *ngFor="let amt of quickAmounts"
                class="quick-btn"
                [class.selected]="donationForm.amount === amt"
                (click)="donationForm.amount = amt"
              >
                {{ amt }} TND
              </button>
            </div>

            <!-- Message (Optional) -->
            <div class="form-group">
              <label for="message">Message (optionnel)</label>
              <textarea
                id="message"
                [(ngModel)]="donationForm.message"
                name="message"
                placeholder="Partagez un message de soutien..."
                rows="3"
                maxlength="500"
                class="message-textarea"
              ></textarea>
              <small class="char-count">
                {{ (donationForm.message || '').length }}/500
              </small>
            </div>

            <!-- Anonymous Checkbox -->
            <div class="form-group checkbox">
              <input
                id="anonymous"
                type="checkbox"
                [(ngModel)]="donationForm.isAnonymous"
                name="anonymous"
                class="checkbox-input"
              />
              <label for="anonymous" class="checkbox-label">
                \u2713 Don anonyme
              </label>
              <small class="checkbox-help">
                Votre nom ne sera pas affich\xE9 publiquement
              </small>
            </div>

            <!-- Trust Indicators -->
            <div class="trust-indicators">
              <div class="trust-badge">
                <i class="fas fa-shield-alt"></i>
                <span>Paiement s\xE9curis\xE9</span>
              </div>
              <div class="trust-badge">
                <i class="fas fa-lock"></i>
                <span>Donn\xE9es prot\xE9g\xE9es</span>
              </div>
              <div class="trust-badge">
                <i class="fas fa-check-circle"></i>
                <span>Transparence garantie</span>
              </div>
            </div>

            <!-- Actions -->
            <div class="modal-actions">
              <button type="button" class="btn-back" (click)="currentStep = 1">
                \u2190 Retour
              </button>
              <button
                type="submit"
                class="btn-submit"
                [disabled]="isSubmitting || !donationForm.amount || donationForm.amount < 5"
              >
                <span *ngIf="!isSubmitting">\u2713 Confirmer le don</span>
                <span *ngIf="isSubmitting">
                  <i class="fas fa-spinner fa-spin"></i> Traitement...
                </span>
              </button>
            </div>
          </form>
        </div>

        <!-- Step 3: Success -->
        <div *ngIf="currentStep === 3" class="modal-content success">
          <div class="success-animation">
            <i class="fas fa-heart-pulse"></i>
          </div>
          <h3 class="success-title">Merci pour votre aide! \u2764\uFE0F</h3>
          <p class="success-message">
            Votre don de <strong>{{ donationForm.amount }} TND</strong> a \xE9t\xE9 re\xE7u avec succ\xE8s.
          </p>
          <p class="success-detail">
            Vous recevrez une confirmation par email.
          </p>

          <div class="success-impact">
            <p class="impact-label">\u{1F4AA} Impact de votre don:</p>
            <div class="impact-items">
              <div *ngFor="let item of getImpactItems()" class="impact-item">
                <strong>{{ item.amount }} TND</strong> = {{ item.description }}
              </div>
            </div>
          </div>

          <div class="modal-actions">
            <button class="btn-close" (click)="closeModal()">
              Fermer
            </button>
            <button class="btn-share" (click)="shareDonation()">
              <i class="fas fa-share-alt"></i> Partager
            </button>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;dfa4a09eb99d425b5fafaee35f0b0e4c1c548d614858515c88f126f95e92d9af;C:/xampp/htdocs/PROJET SANAD/src/app/shared/donation-modal.component.ts */\n.donation-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  animation: fadeIn 0.3s ease;\n}\n.donation-modal {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n  max-width: 450px;\n  width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: slideUp 0.3s ease;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid #f0f0f0;\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 10;\n}\n.modal-title {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  color: #111827;\n}\n.close-btn {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #6b7280;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.close-btn:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.modal-content {\n  padding: 24px;\n}\n.step-label {\n  font-size: 14px;\n  color: #6b7280;\n  font-weight: 500;\n  margin: 0 0 16px 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.donation-types {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n  margin: 20px 0;\n}\n.type-card {\n  padding: 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  background: #f9fafb;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-align: center;\n  color: #111827;\n  font-size: 14px;\n}\n.type-card:hover {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.type-card.selected {\n  border-color: #2563eb;\n  background: #eff6ff;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.type-card i {\n  font-size: 28px;\n  color: #2563eb;\n  display: block;\n  margin-bottom: 8px;\n}\n.type-card h3 {\n  margin: 8px 0 4px 0;\n  font-size: 14px;\n  font-weight: 600;\n}\n.type-card p {\n  margin: 0;\n  font-size: 12px;\n  color: #6b7280;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 8px;\n  color: #111827;\n}\n.amount-input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.amount-input {\n  width: 100%;\n  padding: 12px 40px 12px 12px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.amount-input:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.currency {\n  position: absolute;\n  right: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #6b7280;\n}\n.amount-info {\n  display: block;\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n}\n.quick-amounts {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin: 16px 0 20px 0;\n}\n.quick-btn {\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: white;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6b7280;\n}\n.quick-btn:hover {\n  border-color: #2563eb;\n  color: #2563eb;\n}\n.quick-btn.selected {\n  background: #2563eb;\n  color: white;\n  border-color: #2563eb;\n}\n.message-textarea {\n  width: 100%;\n  padding: 12px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-family: inherit;\n  font-size: 14px;\n  resize: none;\n  transition: all 0.3s ease;\n}\n.message-textarea:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.char-count {\n  display: block;\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n  text-align: right;\n}\n.checkbox {\n  margin-bottom: 16px;\n}\n.checkbox-input {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  margin-right: 8px;\n  accent-color: #2563eb;\n}\n.checkbox-label {\n  display: inline-flex;\n  align-items: center;\n  font-weight: 500;\n  color: #111827;\n  cursor: pointer;\n}\n.checkbox-help {\n  display: block;\n  font-size: 12px;\n  color: #6b7280;\n  margin-left: 28px;\n  margin-top: 4px;\n}\n.trust-indicators {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 8px;\n  margin: 20px 0;\n  padding: 16px;\n  background: #f0fdf4;\n  border-radius: 8px;\n}\n.trust-badge {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #15803d;\n  font-weight: 500;\n}\n.trust-badge i {\n  color: #22c55e;\n}\n.donation-summary {\n  padding: 12px;\n  background: #eff6ff;\n  border-left: 4px solid #2563eb;\n  border-radius: 4px;\n  margin-bottom: 20px;\n}\n.donation-summary p {\n  margin: 0;\n  font-size: 14px;\n  color: #1e40af;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.modal-actions {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #f0f0f0;\n}\n.btn-next,\n.btn-back,\n.btn-submit,\n.btn-close,\n.btn-share {\n  padding: 12px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn-next,\n.btn-submit {\n  grid-column: span 2;\n  background: #2563eb;\n  color: white;\n}\n.btn-next:hover:not(:disabled),\n.btn-submit:hover:not(:disabled) {\n  background: #1d4ed8;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);\n}\n.btn-next:disabled,\n.btn-submit:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-back {\n  background: #f3f4f6;\n  color: #111827;\n}\n.btn-back:hover {\n  background: #e5e7eb;\n}\n.btn-close {\n  background: #f3f4f6;\n  color: #111827;\n}\n.btn-close:hover {\n  background: #e5e7eb;\n}\n.btn-share {\n  background: #22c55e;\n  color: white;\n}\n.btn-share:hover {\n  background: #16a34a;\n}\n.modal-content.success {\n  text-align: center;\n}\n.success-animation {\n  font-size: 64px;\n  margin: 20px 0;\n  animation: heartBeat 0.6s ease;\n}\n.success-title {\n  font-size: 24px;\n  font-weight: 700;\n  color: #22c55e;\n  margin: 16px 0 12px 0;\n}\n.success-message {\n  font-size: 16px;\n  color: #111827;\n  margin: 12px 0;\n  font-weight: 500;\n}\n.success-detail {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 8px 0 20px 0;\n}\n.success-impact {\n  background: #f0fdf4;\n  padding: 16px;\n  border-radius: 8px;\n  margin: 20px 0;\n}\n.impact-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #15803d;\n  margin: 0 0 12px 0;\n}\n.impact-items {\n  display: grid;\n  gap: 8px;\n}\n.impact-item {\n  font-size: 13px;\n  color: #166534;\n  padding: 6px;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes heartBeat {\n  0%, 100% {\n    transform: scale(1);\n  }\n  25% {\n    transform: scale(1.1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}\n@media (max-width: 768px) {\n  .donation-modal {\n    max-width: 100%;\n    width: 95%;\n    border-radius: 12px;\n  }\n  .modal-header,\n  .modal-content {\n    padding: 16px;\n  }\n  .modal-title {\n    font-size: 18px;\n  }\n  .quick-amounts {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=donation-modal.component.css.map */\n"] }]
  }], null, { isOpen: [{
    type: Input
  }], requestId: [{
    type: Input
  }], associationId: [{
    type: Input
  }], defaultType: [{
    type: Input
  }], closed: [{
    type: Output
  }], donated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DonationModalComponent, { className: "DonationModalComponent", filePath: "app/shared/donation-modal.component.ts", lineNumber: 715 });
})();

// src/app/request-detail/request-detail.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function RequestDetailComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-association-navbar");
  }
}
function RequestDetailComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-logged-in-navbar");
  }
}
function RequestDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RequestDetailComponent_Conditional_0_Conditional_0_Template, 1, 0, "app-association-navbar")(1, RequestDetailComponent_Conditional_0_Conditional_1_Template, 1, 0, "app-logged-in-navbar");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.isAssociation() ? 0 : 1);
  }
}
function RequestDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
  }
}
function RequestDetailComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.collaborate());
    });
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2, " Collaborer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 48);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_21_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.supportRequest());
    });
    \u0275\u0275element(4, "i", 49);
    \u0275\u0275text(5, " Soutenir cette demande ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 50);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_21_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.takeOwnership());
    });
    \u0275\u0275element(7, "i", 51);
    \u0275\u0275text(8, " Prendre en charge ");
    \u0275\u0275elementEnd();
  }
}
function RequestDetailComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.helpNow());
    });
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275text(2, " Aider maintenant ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 48);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_22_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleFavorite());
    });
    \u0275\u0275element(4, "i", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 50);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_22_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.shareRequest());
    });
    \u0275\u0275element(7, "i", 54);
    \u0275\u0275text(8, " Partager ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isFavorite() ? "Sauvegardee" : "Sauvegarder", " ");
  }
}
function RequestDetailComponent_For_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paragraph_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paragraph_r4);
  }
}
function RequestDetailComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2, " Organisation v\xE9rifi\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function RequestDetailComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "h3");
    \u0275\u0275text(2, "Options pour association");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 57);
    \u0275\u0275text(4, " Organisez l'aide, coordonnez les efforts et amplifiez l'impact. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 58)(6, "button", 46);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_79_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.collaborate());
    });
    \u0275\u0275text(7, " Collaborer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 48);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_79_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.supportRequest());
    });
    \u0275\u0275text(9, " Soutenir cette demande ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 50);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_79_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.takeOwnership());
    });
    \u0275\u0275text(11, " Prendre en charge ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 59);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_79_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.createCampaignFromRequest());
    });
    \u0275\u0275text(13, " Creer une campagne liee ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 60);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_79_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.contactRequester());
    });
    \u0275\u0275text(15, " Contacter le demandeur ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-sticky", ctx_r0.sidebarSticky());
  }
}
function RequestDetailComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "div", 63)(3, "div", 64);
    \u0275\u0275element(4, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 66)(6, "div", 67)(7, "span", 68);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 69);
    \u0275\u0275text(11, "collect\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 67)(13, "span", 68);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 69);
    \u0275\u0275text(17, "objectif");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 70)(19, "span", 71);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "button", 59);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_80_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.helpNow());
    });
    \u0275\u0275element(23, "i", 52);
    \u0275\u0275text(24, " Aider maintenant ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 72)(26, "div", 73);
    \u0275\u0275element(27, "i", 74);
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "Paiement s\xE9curis\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 73);
    \u0275\u0275element(31, "i", 75);
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "Transparence garantie");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 73);
    \u0275\u0275element(35, "i", 76);
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, "V\xE9rifi\xE9e");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 77)(39, "h3");
    \u0275\u0275text(40, "Votre impact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 78)(42, "span", 79);
    \u0275\u0275text(43, "5\u20AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p");
    \u0275\u0275text(45, "= 1 repas chaud");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 78)(47, "span", 79);
    \u0275\u0275text(48, "25\u20AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p");
    \u0275\u0275text(50, "= 1 panier alimentaire");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 78)(52, "span", 79);
    \u0275\u0275text(53, "50\u20AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p");
    \u0275\u0275text(55, "= Aide une famille 1 semaine");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-sticky", ctx_r0.sidebarSticky());
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r0.getProgressPercent(ctx_r0.request().progress, ctx_r0.request().target), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 7, ctx_r0.request().progress), "\u20AC");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(15, 9, ctx_r0.request().target), "\u20AC");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 11, ctx_r0.getProgressPercent(ctx_r0.request().progress, ctx_r0.request().target), "1.0-0"), "% ");
  }
}
function RequestDetailComponent_For_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 80);
    \u0275\u0275element(2, "img", 81);
    \u0275\u0275elementStart(3, "span", 82);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 83)(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 84);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 85)(11, "div", 86);
    \u0275\u0275element(12, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 87);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const req_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", req_r7.image || "/assets/images/placeholders/request-placeholder.svg", \u0275\u0275sanitizeUrl)("alt", req_r7.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("urgency-high", req_r7.urgency === "high")("urgency-medium", req_r7.urgency === "medium")("urgency-low", req_r7.urgency === "low");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getUrgencyLabel(req_r7.urgency), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(req_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r7.category);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r0.getProgressPercent(req_r7.progress, req_r7.target), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 14, ctx_r0.getProgressPercent(req_r7.progress, req_r7.target), "1.0-0"), "% ");
  }
}
function RequestDetailComponent_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 45)(1, "div", 6)(2, "div", 88)(3, "h2");
    \u0275\u0275text(4, "Faites une diff\xE9rence d\xE8s maintenant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Chaque contribution, aussi petite soit-elle, aide \xE0 transformer des vies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 89);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_90_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.helpNow());
    });
    \u0275\u0275element(8, "i", 52);
    \u0275\u0275text(9, " Contribuer \xE0 cette demande ");
    \u0275\u0275elementEnd()()()();
  }
}
var RequestDetailComponent = class _RequestDetailComponent {
  router = inject(Router);
  userData = inject(UserDataService);
  auth = inject(AuthService);
  role = signal(null, ...ngDevMode ? [{ debugName: "role" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoggedIn = signal(false, ...ngDevMode ? [{ debugName: "isLoggedIn" }] : (
    /* istanbul ignore next */
    []
  ));
  isAssociation = computed(() => this.role() === "association", ...ngDevMode ? [{ debugName: "isAssociation" }] : (
    /* istanbul ignore next */
    []
  ));
  isFavorite = signal(false, ...ngDevMode ? [{ debugName: "isFavorite" }] : (
    /* istanbul ignore next */
    []
  ));
  sidebarSticky = signal(false, ...ngDevMode ? [{ debugName: "sidebarSticky" }] : (
    /* istanbul ignore next */
    []
  ));
  isDonationModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDonationModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  request = signal({
    id: 1,
    title: "Aide alimentaire pour 50 familles en d\xE9tresse",
    category: "Alimentation",
    urgency: "high",
    image: "/assets/images/placeholders/request-placeholder.svg",
    description: "Un projet d'aide alimentaire urgente pour 50 familles en situation de vuln\xE9rabilit\xE9",
    detailedDescription: `Notre association s'engage \xE0 fournir une aide alimentaire d'urgence \xE0 50 familles 
 en situation de grande vuln\xE9rabilit\xE9. Beaucoup de ces familles n'ont pas acc\xE8s \xE0 des repas r\xE9guliers 
 et leurs enfants souffrent de malnutrition.

 Avec votre aide, nous pourrons distribuer des paniers alimentaires contenant :
 \u2022 Produits de base (riz, p\xE2tes, huile)
 \u2022 Fruits et l\xE9gumes frais
 \u2022 Prot\xE9ines (\u0153ufs, conserves)
 \u2022 Produits laitiers
 \u2022 Articles d'hygi\xE8ne essentiels

 Chaque panier est con\xE7u pour nourrir une famille pendant deux semaines.

 Les fonds collect\xE9s seront utilis\xE9s de mani\xE8re transparente et s\xE9curis\xE9e. 
 Un rapport d\xE9taill\xE9 sera fourni \xE0 tous les donateurs.`,
    location: "Tunis, Ben Arous",
    publishedDate: "2026-04-15",
    progress: 1850,
    target: 3e3,
    contributors: 45,
    daysRemaining: 12,
    organization: {
      name: "Solidarit\xE9 Plus",
      verified: true,
      description: "Association d'aide alimentaire depuis 15 ans"
    }
  }, ...ngDevMode ? [{ debugName: "request" }] : (
    /* istanbul ignore next */
    []
  ));
  relatedRequests = signal([
    {
      id: 2,
      title: "Scolarit\xE9 pour enfants d\xE9favoris\xE9s",
      category: "\xC9ducation",
      image: "/assets/images/placeholders/request-placeholder.svg",
      progress: 2400,
      target: 4e3,
      urgency: "medium"
    },
    {
      id: 3,
      title: "Couverture m\xE9dicale d'urgence",
      category: "Sant\xE9",
      image: "/assets/images/placeholders/request-placeholder.svg",
      progress: 1200,
      target: 2500,
      urgency: "high"
    },
    {
      id: 4,
      title: "R\xE9novation refuge hivernal",
      category: "Logement",
      image: "/assets/images/placeholders/request-placeholder.svg",
      progress: 3100,
      target: 5e3,
      urgency: "low"
    }
  ], ...ngDevMode ? [{ debugName: "relatedRequests" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.isLoggedIn.set(Boolean(this.auth.getToken()));
    this.role.set(this.auth.getRole());
    window.addEventListener("scroll", this.handleScroll.bind(this));
    this.loadFavorite();
  }
  loadFavorite() {
    if (!this.auth.getToken() || this.isAssociation()) {
      return;
    }
    this.userData.getFavorites().subscribe({
      next: (response) => {
        if (response.success) {
          this.isFavorite.set(response.data.some((item) => item.request_id === this.request().id));
        }
      }
    });
  }
  toggleFavorite() {
    if (!this.auth.getToken()) {
      return;
    }
    if (this.isFavorite()) {
      this.userData.removeFavorite(this.request().id).subscribe({
        next: (response) => {
          if (response.success) {
            this.isFavorite.set(false);
          }
        }
      });
      return;
    }
    this.userData.addFavorite(this.request().id).subscribe({
      next: (response) => {
        if (response.success) {
          this.isFavorite.set(true);
        }
      }
    });
  }
  handleScroll() {
    this.sidebarSticky.set(window.scrollY > 300);
  }
  getProgressPercent(progress, target) {
    return progress / target * 100;
  }
  getUrgencyLabel(urgency) {
    switch (urgency) {
      case "high":
        return "Urgent";
      case "medium":
        return "Important";
      case "low":
        return "Standard";
      default:
        return "Standard";
    }
  }
  helpNow() {
    this.isDonationModalOpen.set(true);
  }
  onDonationClosed() {
    this.isDonationModalOpen.set(false);
  }
  onDonationCompleted(donation) {
    this.request.update((current) => __spreadProps(__spreadValues({}, current), {
      progress: current.progress + donation.amount,
      contributors: current.contributors + 1
    }));
  }
  shareRequest() {
    if (navigator.share) {
      navigator.share({
        title: this.request().title,
        text: this.request().description,
        url: window.location.href
      });
    } else {
      alert("Lien copi\xE9 dans le presse-papiers");
      navigator.clipboard.writeText(window.location.href);
    }
  }
  getLogoInitial() {
    return this.request().organization.name.charAt(0);
  }
  collaborate() {
    this.router.navigate(["/association/campaigns"]);
  }
  supportRequest() {
    this.router.navigate(["/association/campaigns"]);
  }
  takeOwnership() {
    this.router.navigate(["/association/campaigns"]);
  }
  createCampaignFromRequest() {
    this.router.navigate(["/association/campaigns/new"], {
      queryParams: { parentRequestId: this.request().id }
    });
  }
  contactRequester() {
    const subject = encodeURIComponent(`Demande ${this.request().title}`);
    window.location.href = `mailto:support@sanad.tn?subject=${subject}`;
  }
  static \u0275fac = function RequestDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RequestDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RequestDetailComponent, selectors: [["app-request-detail"]], decls: 91, vars: 30, consts: [[3, "closed", "donated", "isOpen", "requestId", "defaultType"], [1, "hero-section"], [1, "hero-image-wrapper"], ["loading", "eager", 1, "hero-image", 3, "src", "alt"], [1, "hero-overlay"], [1, "hero-content"], [1, "container"], [1, "hero-badges"], [1, "badge-category"], [1, "fas", "fa-tag"], [1, "badge-urgency"], [1, "fas", "fa-exclamation-circle"], [1, "hero-title"], [1, "hero-summary"], [1, "hero-actions"], [1, "main-content"], [1, "content-layout"], [1, "content-left"], [1, "info-card"], [1, "info-grid"], [1, "info-item"], [1, "info-label"], [1, "fas", "fa-map-marker-alt"], [1, "info-value"], [1, "fas", "fa-calendar"], [1, "fas", "fa-users"], [1, "fas", "fa-hourglass-end"], [1, "description-card"], [1, "description-content"], [1, "organization-section"], [1, "org-card"], [1, "org-header"], [1, "org-logo"], [1, "org-info"], [1, "verified-info"], [1, "org-description"], ["href", "javascript:;", 1, "link-profile"], [1, "fas", "fa-arrow-right"], [1, "content-right"], [1, "association-panel", 3, "is-sticky"], [1, "donation-panel", 3, "is-sticky"], [1, "related-section"], [1, "section-subtitle"], [1, "related-grid"], [1, "related-card"], [1, "cta-section"], ["type", "button", 1, "btn-help", 3, "click"], [1, "fas", "fa-handshake"], ["type", "button", 1, "btn-favorite", 3, "click"], [1, "fas", "fa-hands-helping"], ["type", "button", 1, "btn-share", 3, "click"], [1, "fas", "fa-flag"], [1, "fas", "fa-heart"], [1, "fas", "fa-bookmark"], [1, "fas", "fa-share-alt"], [1, "fas", "fa-check-circle"], [1, "association-panel"], [1, "association-subtitle"], [1, "association-buttons"], ["type", "button", 1, "btn-help-large", 3, "click"], ["type", "button", 1, "btn-secondary", 3, "click"], [1, "donation-panel"], [1, "progress-section"], [1, "progress-container"], [1, "progress-bar-large"], [1, "progress-fill"], [1, "progress-stats"], [1, "stat"], [1, "stat-amount"], [1, "stat-label"], [1, "progress-percentage"], [1, "percentage-value"], [1, "trust-section"], [1, "trust-item"], [1, "fas", "fa-lock"], [1, "fas", "fa-eye"], [1, "fas", "fa-certificate"], [1, "impact-box"], [1, "impact-item"], [1, "impact-amount"], [1, "related-image"], ["loading", "lazy", 3, "src", "alt"], [1, "related-urgency"], [1, "related-content"], [1, "related-category"], [1, "related-progress"], [1, "progress-bar-small"], [1, "progress-text"], [1, "cta-content"], ["type", "button", 1, "btn-cta-final", 3, "click"]], template: function RequestDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, RequestDetailComponent_Conditional_0_Template, 2, 1)(1, RequestDetailComponent_Conditional_1_Template, 1, 0, "app-navbar");
      \u0275\u0275elementStart(2, "app-donation-modal", 0);
      \u0275\u0275listener("closed", function RequestDetailComponent_Template_app_donation_modal_closed_2_listener() {
        return ctx.onDonationClosed();
      })("donated", function RequestDetailComponent_Template_app_donation_modal_donated_2_listener($event) {
        return ctx.onDonationCompleted($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "section", 1)(4, "div", 2);
      \u0275\u0275element(5, "img", 3)(6, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "span", 8);
      \u0275\u0275element(11, "i", 9);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 10);
      \u0275\u0275element(14, "i", 11);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "h1", 12);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 13);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 14);
      \u0275\u0275conditionalCreate(21, RequestDetailComponent_Conditional_21_Template, 9, 0)(22, RequestDetailComponent_Conditional_22_Template, 9, 1);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(23, "section", 15)(24, "div", 6)(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "h2");
      \u0275\u0275text(29, "\xC0 propos de cette demande");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 19)(31, "div", 20)(32, "span", 21);
      \u0275\u0275element(33, "i", 22);
      \u0275\u0275text(34, " Localisation ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 23);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 20)(38, "span", 21);
      \u0275\u0275element(39, "i", 24);
      \u0275\u0275text(40, " Publi\xE9e le ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span", 23);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 20)(45, "span", 21);
      \u0275\u0275element(46, "i", 25);
      \u0275\u0275text(47, " Contributeurs ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span", 23);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 20)(51, "span", 21);
      \u0275\u0275element(52, "i", 26);
      \u0275\u0275text(53, " Temps restant ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "span", 23);
      \u0275\u0275text(55);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(56, "div", 27)(57, "h2");
      \u0275\u0275text(58, "Description d\xE9taill\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 28);
      \u0275\u0275repeaterCreate(60, RequestDetailComponent_For_61_Template, 2, 1, "p", null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 29)(63, "h2");
      \u0275\u0275text(64, "\xC0 propos de l'organisation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 30)(66, "div", 31)(67, "div", 32);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 33)(70, "h3");
      \u0275\u0275text(71);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(72, RequestDetailComponent_Conditional_72_Template, 3, 0, "p", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "p", 35);
      \u0275\u0275text(74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "a", 36);
      \u0275\u0275text(76, " Voir le profil complet ");
      \u0275\u0275element(77, "i", 37);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(78, "div", 38);
      \u0275\u0275conditionalCreate(79, RequestDetailComponent_Conditional_79_Template, 16, 2, "div", 39)(80, RequestDetailComponent_Conditional_80_Template, 56, 14, "div", 40);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(81, "section", 41)(82, "div", 6)(83, "h2");
      \u0275\u0275text(84, "Demandes similaires");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "p", 42);
      \u0275\u0275text(86, "D\xE9couvrez d'autres projets qui ont besoin de votre aide");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 43);
      \u0275\u0275repeaterCreate(88, RequestDetailComponent_For_89_Template, 16, 17, "div", 44, _forTrack02);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(90, RequestDetailComponent_Conditional_90_Template, 10, 0, "section", 45);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isLoggedIn() ? 0 : 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("isOpen", ctx.isDonationModalOpen())("requestId", ctx.request().id)("defaultType", "request");
      \u0275\u0275advance(3);
      \u0275\u0275property("src", ctx.request().image || "/assets/images/placeholders/request-placeholder.svg", \u0275\u0275sanitizeUrl)("alt", ctx.request().title);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.request().category, " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("urgency-high", ctx.request().urgency === "high")("urgency-medium", ctx.request().urgency === "medium")("urgency-low", ctx.request().urgency === "low");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.getUrgencyLabel(ctx.request().urgency), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.request().title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.request().description);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isAssociation() ? 21 : 22);
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate(ctx.request().location);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 27, ctx.request().publishedDate, "dd MMMM yyyy"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", ctx.request().contributors, " personnes");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.request().daysRemaining, " jours");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.request().detailedDescription.split("\n\n"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.getLogoInitial(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.request().organization.name);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.request().organization.verified ? 72 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.request().organization.description);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.isAssociation() ? 79 : 80);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.relatedRequests());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.isAssociation() ? 90 : -1);
    }
  }, dependencies: [
    CommonModule,
    NavbarComponent,
    LoggedInNavbarComponent,
    AssociationNavbarComponent,
    DonationModalComponent,
    DecimalPipe,
    DatePipe
  ], styles: ["\n.container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  height: 500px;\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n  margin-top: -60px;\n  padding-top: 60px;\n}\n.hero-image-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 0;\n}\n.hero-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(15, 23, 42, 0.3) 0%,\n      rgba(15, 23, 42, 0.6) 70%,\n      rgba(15, 23, 42, 0.8) 100%);\n  z-index: 1;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  padding-bottom: 40px;\n  color: white;\n}\n.hero-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.badge-category[_ngcontent-%COMP%], \n.badge-urgency[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.badge-category[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.95);\n}\n.badge-urgency.urgency-high[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.95);\n}\n.badge-urgency.urgency-medium[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.95);\n}\n.badge-urgency.urgency-low[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.95);\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 12px;\n  letter-spacing: -0.5px;\n}\n.hero-summary[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1.5;\n  margin-bottom: 24px;\n  max-width: 600px;\n  opacity: 0.95;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.btn-help[_ngcontent-%COMP%], \n.btn-share[_ngcontent-%COMP%], \n.btn-favorite[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 8px;\n  border: 1px solid rgba(148, 163, 184, 0.6);\n  background: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n}\n.btn-help[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: white;\n  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);\n}\n.btn-help[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.5);\n}\n.btn-share[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.btn-favorite[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.85);\n  color: white;\n}\n.btn-favorite[_ngcontent-%COMP%]:hover {\n  background: rgba(15, 23, 42, 0.95);\n}\n.btn-share[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0.6);\n}\n.main-content[_ngcontent-%COMP%] {\n  padding: 48px 20px;\n  background: #f9fafb;\n}\n.content-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 32px;\n}\n.content-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.content-right[_ngcontent-%COMP%] {\n  position: relative;\n}\n.association-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n  display: grid;\n  gap: 14px;\n}\n.association-panel.is-sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 120px;\n}\n.association-subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6b7280;\n  font-size: 14px;\n}\n.association-buttons[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n.info-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);\n  border: 1px solid #e5e7eb;\n}\n.info-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #111827;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.info-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.info-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-size: 14px;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n}\n.description-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);\n  border: 1px solid #e5e7eb;\n}\n.description-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #111827;\n}\n.description-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.description-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.7;\n  color: #4b5563;\n  margin: 0;\n}\n.organization-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);\n  border: 1px solid #e5e7eb;\n}\n.organization-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #111827;\n}\n.org-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.org-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.org-logo[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 800;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.org-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 4px 0;\n}\n.verified-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #22c55e;\n  margin: 0;\n  font-weight: 600;\n}\n.verified-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.org-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.6;\n  color: #6b7280;\n  margin: 0;\n}\n.link-profile[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 13px;\n  transition: all 0.2s ease;\n}\n.link-profile[_ngcontent-%COMP%]:hover {\n  gap: 10px;\n}\n.donation-panel[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);\n  border: 1px solid #e5e7eb;\n  position: sticky;\n  top: 80px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  transition: all 0.3s ease;\n}\n.donation-panel.is-sticky[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.15);\n}\n.progress-section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e5e7eb;\n  padding-bottom: 20px;\n}\n.progress-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.progress-bar-large[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 12px;\n  background: #e5e7eb;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #16a34a);\n  border-radius: 6px;\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.progress-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n  color: #22c55e;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.progress-percentage[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.percentage-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.btn-help-large[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.3);\n}\n.btn-help-large[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.4);\n}\n.trust-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 16px;\n  background: #f0fdf4;\n  border-radius: 8px;\n  border: 1px solid #dcfce7;\n}\n.trust-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #15803d;\n  font-weight: 600;\n}\n.trust-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #22c55e;\n  font-size: 14px;\n}\n.impact-box[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  border-top: 1px solid #e5e7eb;\n}\n.impact-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 12px;\n}\n.impact-item[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.impact-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.impact-amount[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  font-size: 16px;\n  color: #2563eb;\n  margin-bottom: 2px;\n}\n.impact-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n}\n.related-section[_ngcontent-%COMP%] {\n  padding: 48px 20px;\n  background: white;\n  border-top: 1px solid #e5e7eb;\n}\n.related-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #6b7280;\n  margin-bottom: 28px;\n}\n.related-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}\n.related-card[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);\n  border: 1px solid #e5e7eb;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.related-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.1);\n  border-color: #2563eb;\n}\n.related-image[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 160px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f4ff,\n      #f0fdf4);\n}\n.related-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.related-card[_ngcontent-%COMP%]:hover   .related-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.related-urgency[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 4px 8px;\n  border-radius: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.related-urgency.urgency-high[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.95);\n  color: white;\n}\n.related-urgency.urgency-medium[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.95);\n  color: white;\n}\n.related-urgency.urgency-low[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.95);\n  color: white;\n}\n.related-content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.related-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 6px 0;\n  line-height: 1.4;\n}\n.related-category[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-bottom: 10px;\n}\n.related-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.progress-bar-small[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  background: #e5e7eb;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.progress-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #2563eb;\n  min-width: 32px;\n  text-align: right;\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1d4ed8 50%,\n      #22c55e 100%);\n  color: white;\n  text-align: center;\n}\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  margin-bottom: 12px;\n  letter-spacing: -0.5px;\n}\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.95;\n  margin-bottom: 28px;\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.btn-cta-final[_ngcontent-%COMP%] {\n  padding: 14px 32px;\n  background: white;\n  color: #2563eb;\n  border: none;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 15px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.btn-cta-final[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);\n}\n@media (max-width: 1024px) {\n  .content-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .donation-panel[_ngcontent-%COMP%] {\n    position: relative;\n    top: auto;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .hero-summary[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%] {\n    height: 380px;\n    padding-top: 60px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .hero-summary[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding: 32px 16px;\n  }\n  .content-left[_ngcontent-%COMP%] {\n    gap: 24px;\n  }\n  .info-card[_ngcontent-%COMP%], \n   .description-card[_ngcontent-%COMP%], \n   .organization-section[_ngcontent-%COMP%], \n   .donation-panel[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 16px;\n  }\n  .cta-section[_ngcontent-%COMP%] {\n    padding: 40px 16px;\n  }\n  .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media (max-width: 480px) {\n  .hero-section[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .hero-summary[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .hero-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn-help[_ngcontent-%COMP%], \n   .btn-share[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .info-card[_ngcontent-%COMP%], \n   .description-card[_ngcontent-%COMP%], \n   .organization-section[_ngcontent-%COMP%], \n   .donation-panel[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cta-section[_ngcontent-%COMP%] {\n    padding: 32px 16px;\n  }\n  .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .badge-category[_ngcontent-%COMP%], \n   .badge-urgency[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding: 6px 10px;\n  }\n}\n/*# sourceMappingURL=request-detail.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestDetailComponent, [{
    type: Component,
    args: [{ selector: "app-request-detail", standalone: true, imports: [
      CommonModule,
      NavbarComponent,
      LoggedInNavbarComponent,
      AssociationNavbarComponent,
      DonationModalComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (isLoggedIn()) {\r
  @if (isAssociation()) {\r
    <app-association-navbar></app-association-navbar>\r
  } @else {\r
    <app-logged-in-navbar></app-logged-in-navbar>\r
  }\r
} @else {\r
  <app-navbar></app-navbar>\r
}\r
\r
<app-donation-modal\r
  [isOpen]="isDonationModalOpen()"\r
  [requestId]="request().id"\r
  [defaultType]="'request'"\r
  (closed)="onDonationClosed()"\r
  (donated)="onDonationCompleted($event)"\r
></app-donation-modal>\r
\r
<section class="hero-section">\r
  <div class="hero-image-wrapper">\r
    <img\r
      [src]="request().image || '/assets/images/placeholders/request-placeholder.svg'"\r
      [alt]="request().title"\r
      class="hero-image"\r
      loading="eager"\r
    />\r
    <div class="hero-overlay"></div>\r
  </div>\r
\r
  <div class="hero-content">\r
    <div class="container">\r
      <div class="hero-badges">\r
        <span class="badge-category">\r
          <i class="fas fa-tag"></i> {{ request().category }}\r
        </span>\r
        <span\r
          class="badge-urgency"\r
          [class.urgency-high]="request().urgency === 'high'"\r
          [class.urgency-medium]="request().urgency === 'medium'"\r
          [class.urgency-low]="request().urgency === 'low'"\r
        >\r
          <i class="fas fa-exclamation-circle"></i> {{ getUrgencyLabel(request().urgency) }}\r
        </span>\r
      </div>\r
\r
      <h1 class="hero-title">{{ request().title }}</h1>\r
      <p class="hero-summary">{{ request().description }}</p>\r
\r
      <div class="hero-actions">\r
        @if (isAssociation()) {\r
          <button class="btn-help" type="button" (click)="collaborate()">\r
            <i class="fas fa-handshake"></i> Collaborer\r
          </button>\r
          <button class="btn-favorite" type="button" (click)="supportRequest()">\r
            <i class="fas fa-hands-helping"></i> Soutenir cette demande\r
          </button>\r
          <button class="btn-share" type="button" (click)="takeOwnership()">\r
            <i class="fas fa-flag"></i> Prendre en charge\r
          </button>\r
        } @else {\r
          <button class="btn-help" type="button" (click)="helpNow()">\r
            <i class="fas fa-heart"></i> Aider maintenant\r
          </button>\r
          <button class="btn-favorite" type="button" (click)="toggleFavorite()">\r
            <i class="fas fa-bookmark"></i>\r
            {{ isFavorite() ? 'Sauvegardee' : 'Sauvegarder' }}\r
          </button>\r
          <button class="btn-share" type="button" (click)="shareRequest()">\r
            <i class="fas fa-share-alt"></i> Partager\r
          </button>\r
        }\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<section class="main-content">\r
  <div class="container">\r
    <div class="content-layout">\r
      <div class="content-left">\r
        <div class="info-card">\r
          <h2>\xC0 propos de cette demande</h2>\r
          <div class="info-grid">\r
            <div class="info-item">\r
              <span class="info-label">\r
                <i class="fas fa-map-marker-alt"></i> Localisation\r
              </span>\r
              <span class="info-value">{{ request().location }}</span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">\r
                <i class="fas fa-calendar"></i> Publi\xE9e le\r
              </span>\r
              <span class="info-value">{{ request().publishedDate | date: 'dd MMMM yyyy' }}</span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">\r
                <i class="fas fa-users"></i> Contributeurs\r
              </span>\r
              <span class="info-value">{{ request().contributors }} personnes</span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">\r
                <i class="fas fa-hourglass-end"></i> Temps restant\r
              </span>\r
              <span class="info-value">{{ request().daysRemaining }} jours</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="description-card">\r
          <h2>Description d\xE9taill\xE9e</h2>\r
          <div class="description-content">\r
            @for (paragraph of request().detailedDescription.split('\\n\\n'); track $index) {\r
              <p>{{ paragraph }}</p>\r
            }\r
          </div>\r
        </div>\r
\r
        <div class="organization-section">\r
          <h2>\xC0 propos de l'organisation</h2>\r
          <div class="org-card">\r
            <div class="org-header">\r
              <div class="org-logo">\r
                {{ getLogoInitial() }}\r
              </div>\r
              <div class="org-info">\r
                <h3>{{ request().organization.name }}</h3>\r
                @if (request().organization.verified) {\r
                  <p class="verified-info">\r
                    <i class="fas fa-check-circle"></i> Organisation v\xE9rifi\xE9e\r
                  </p>\r
                }\r
              </div>\r
            </div>\r
            <p class="org-description">{{ request().organization.description }}</p>\r
            <a href="javascript:;" class="link-profile">\r
              Voir le profil complet <i class="fas fa-arrow-right"></i>\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="content-right">\r
        @if (isAssociation()) {\r
          <div class="association-panel" [class.is-sticky]="sidebarSticky()">\r
            <h3>Options pour association</h3>\r
            <p class="association-subtitle">\r
              Organisez l'aide, coordonnez les efforts et amplifiez l'impact.\r
            </p>\r
            <div class="association-buttons">\r
              <button class="btn-help" type="button" (click)="collaborate()">\r
                Collaborer\r
              </button>\r
              <button class="btn-favorite" type="button" (click)="supportRequest()">\r
                Soutenir cette demande\r
              </button>\r
              <button class="btn-share" type="button" (click)="takeOwnership()">\r
                Prendre en charge\r
              </button>\r
              <button class="btn-help-large" type="button" (click)="createCampaignFromRequest()">\r
                Creer une campagne liee\r
              </button>\r
              <button class="btn-secondary" type="button" (click)="contactRequester()">\r
                Contacter le demandeur\r
              </button>\r
            </div>\r
          </div>\r
        } @else {\r
          <div class="donation-panel" [class.is-sticky]="sidebarSticky()">\r
            <div class="progress-section">\r
              <div class="progress-container">\r
                <div class="progress-bar-large">\r
                  <div\r
                    class="progress-fill"\r
                    [style.width.%]="getProgressPercent(request().progress, request().target)"\r
                  ></div>\r
                </div>\r
\r
                <div class="progress-stats">\r
                  <div class="stat">\r
                    <span class="stat-amount">{{ request().progress | number }}\u20AC</span>\r
                    <span class="stat-label">collect\xE9s</span>\r
                  </div>\r
                  <div class="stat">\r
                    <span class="stat-amount">{{ request().target | number }}\u20AC</span>\r
                    <span class="stat-label">objectif</span>\r
                  </div>\r
                </div>\r
\r
                <div class="progress-percentage">\r
                  <span class="percentage-value">\r
                    {{ getProgressPercent(request().progress, request().target) | number:'1.0-0' }}%\r
                  </span>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <button class="btn-help-large" type="button" (click)="helpNow()">\r
              <i class="fas fa-heart"></i> Aider maintenant\r
            </button>\r
\r
            <div class="trust-section">\r
              <div class="trust-item">\r
                <i class="fas fa-lock"></i>\r
                <span>Paiement s\xE9curis\xE9</span>\r
              </div>\r
              <div class="trust-item">\r
                <i class="fas fa-eye"></i>\r
                <span>Transparence garantie</span>\r
              </div>\r
              <div class="trust-item">\r
                <i class="fas fa-certificate"></i>\r
                <span>V\xE9rifi\xE9e</span>\r
              </div>\r
            </div>\r
\r
            <div class="impact-box">\r
              <h3>Votre impact</h3>\r
              <div class="impact-item">\r
                <span class="impact-amount">5\u20AC</span>\r
                <p>= 1 repas chaud</p>\r
              </div>\r
              <div class="impact-item">\r
                <span class="impact-amount">25\u20AC</span>\r
                <p>= 1 panier alimentaire</p>\r
              </div>\r
              <div class="impact-item">\r
                <span class="impact-amount">50\u20AC</span>\r
                <p>= Aide une famille 1 semaine</p>\r
              </div>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<section class="related-section">\r
  <div class="container">\r
    <h2>Demandes similaires</h2>\r
    <p class="section-subtitle">D\xE9couvrez d'autres projets qui ont besoin de votre aide</p>\r
\r
    <div class="related-grid">\r
      @for (req of relatedRequests(); track req.id) {\r
        <div class="related-card">\r
          <div class="related-image">\r
            <img\r
              [src]="req.image || '/assets/images/placeholders/request-placeholder.svg'"\r
              [alt]="req.title"\r
              loading="lazy"\r
            />\r
            <span\r
              class="related-urgency"\r
              [class.urgency-high]="req.urgency === 'high'"\r
              [class.urgency-medium]="req.urgency === 'medium'"\r
              [class.urgency-low]="req.urgency === 'low'"\r
            >\r
              {{ getUrgencyLabel(req.urgency) }}\r
            </span>\r
          </div>\r
          <div class="related-content">\r
            <h4>{{ req.title }}</h4>\r
            <p class="related-category">{{ req.category }}</p>\r
            <div class="related-progress">\r
              <div class="progress-bar-small">\r
                <div\r
                  class="progress-fill"\r
                  [style.width.%]="getProgressPercent(req.progress, req.target)"\r
                ></div>\r
              </div>\r
              <span class="progress-text">\r
                {{ getProgressPercent(req.progress, req.target) | number:'1.0-0' }}%\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
      }\r
    </div>\r
  </div>\r
</section>\r
\r
@if (!isAssociation()) {\r
  <section class="cta-section">\r
    <div class="container">\r
      <div class="cta-content">\r
        <h2>Faites une diff\xE9rence d\xE8s maintenant</h2>\r
        <p>Chaque contribution, aussi petite soit-elle, aide \xE0 transformer des vies</p>\r
        <button class="btn-cta-final" type="button" (click)="helpNow()">\r
          <i class="fas fa-heart"></i> Contribuer \xE0 cette demande\r
        </button>\r
      </div>\r
    </div>\r
  </section>\r
}\r
`, styles: ["/* src/app/request-detail/request-detail.component.css */\n.container {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.hero-section {\n  position: relative;\n  height: 500px;\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n  margin-top: -60px;\n  padding-top: 60px;\n}\n.hero-image-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 0;\n}\n.hero-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.hero-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(15, 23, 42, 0.3) 0%,\n      rgba(15, 23, 42, 0.6) 70%,\n      rgba(15, 23, 42, 0.8) 100%);\n  z-index: 1;\n}\n.hero-content {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  padding-bottom: 40px;\n  color: white;\n}\n.hero-badges {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.badge-category,\n.badge-urgency {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.badge-category {\n  background: rgba(37, 99, 235, 0.95);\n}\n.badge-urgency.urgency-high {\n  background: rgba(239, 68, 68, 0.95);\n}\n.badge-urgency.urgency-medium {\n  background: rgba(245, 158, 11, 0.95);\n}\n.badge-urgency.urgency-low {\n  background: rgba(34, 197, 94, 0.95);\n}\n.hero-title {\n  font-size: 42px;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 12px;\n  letter-spacing: -0.5px;\n}\n.hero-summary {\n  font-size: 18px;\n  line-height: 1.5;\n  margin-bottom: 24px;\n  max-width: 600px;\n  opacity: 0.95;\n}\n.hero-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.btn-help,\n.btn-share,\n.btn-favorite {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-secondary {\n  padding: 12px 24px;\n  border-radius: 8px;\n  border: 1px solid rgba(148, 163, 184, 0.6);\n  background: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n}\n.btn-help {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: white;\n  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);\n}\n.btn-help:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.5);\n}\n.btn-share {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.btn-favorite {\n  background: rgba(15, 23, 42, 0.85);\n  color: white;\n}\n.btn-favorite:hover {\n  background: rgba(15, 23, 42, 0.95);\n}\n.btn-share:hover {\n  background: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0.6);\n}\n.main-content {\n  padding: 48px 20px;\n  background: #f9fafb;\n}\n.content-layout {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 32px;\n}\n.content-left {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.content-right {\n  position: relative;\n}\n.association-panel {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n  display: grid;\n  gap: 14px;\n}\n.association-panel.is-sticky {\n  position: sticky;\n  top: 120px;\n}\n.association-subtitle {\n  margin: 0;\n  color: #6b7280;\n  font-size: 14px;\n}\n.association-buttons {\n  display: grid;\n  gap: 10px;\n}\n.info-card {\n  background: white;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);\n  border: 1px solid #e5e7eb;\n}\n.info-card h2 {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #111827;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.info-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.info-label i {\n  color: #2563eb;\n  font-size: 14px;\n}\n.info-value {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n}\n.description-card {\n  background: white;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);\n  border: 1px solid #e5e7eb;\n}\n.description-card h2 {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #111827;\n}\n.description-content {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.description-content p {\n  font-size: 15px;\n  line-height: 1.7;\n  color: #4b5563;\n  margin: 0;\n}\n.organization-section {\n  background: white;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);\n  border: 1px solid #e5e7eb;\n}\n.organization-section h2 {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #111827;\n}\n.org-card {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.org-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.org-logo {\n  width: 56px;\n  height: 56px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 800;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.org-info h3 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 4px 0;\n}\n.verified-info {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #22c55e;\n  margin: 0;\n  font-weight: 600;\n}\n.verified-info i {\n  font-size: 14px;\n}\n.org-description {\n  font-size: 14px;\n  line-height: 1.6;\n  color: #6b7280;\n  margin: 0;\n}\n.link-profile {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 13px;\n  transition: all 0.2s ease;\n}\n.link-profile:hover {\n  gap: 10px;\n}\n.donation-panel {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);\n  border: 1px solid #e5e7eb;\n  position: sticky;\n  top: 80px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  transition: all 0.3s ease;\n}\n.donation-panel.is-sticky {\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.15);\n}\n.progress-section {\n  border-bottom: 1px solid #e5e7eb;\n  padding-bottom: 20px;\n}\n.progress-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.progress-bar-large {\n  width: 100%;\n  height: 12px;\n  background: #e5e7eb;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #16a34a);\n  border-radius: 6px;\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.progress-stats {\n  display: flex;\n  justify-content: space-between;\n}\n.stat {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-amount {\n  font-weight: 700;\n  font-size: 16px;\n  color: #22c55e;\n}\n.stat-label {\n  font-size: 12px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.progress-percentage {\n  display: flex;\n  justify-content: center;\n}\n.percentage-value {\n  font-size: 20px;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.btn-help-large {\n  padding: 14px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.3);\n}\n.btn-help-large:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.4);\n}\n.trust-section {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 16px;\n  background: #f0fdf4;\n  border-radius: 8px;\n  border: 1px solid #dcfce7;\n}\n.trust-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #15803d;\n  font-weight: 600;\n}\n.trust-item i {\n  color: #22c55e;\n  font-size: 14px;\n}\n.impact-box {\n  padding-top: 16px;\n  border-top: 1px solid #e5e7eb;\n}\n.impact-box h3 {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 12px;\n}\n.impact-item {\n  padding: 10px 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.impact-item:last-child {\n  border-bottom: none;\n}\n.impact-amount {\n  display: block;\n  font-weight: 700;\n  font-size: 16px;\n  color: #2563eb;\n  margin-bottom: 2px;\n}\n.impact-item p {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n}\n.related-section {\n  padding: 48px 20px;\n  background: white;\n  border-top: 1px solid #e5e7eb;\n}\n.related-section h2 {\n  font-size: 28px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n}\n.section-subtitle {\n  font-size: 15px;\n  color: #6b7280;\n  margin-bottom: 28px;\n}\n.related-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}\n.related-card {\n  background: #f9fafb;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);\n  border: 1px solid #e5e7eb;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.related-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.1);\n  border-color: #2563eb;\n}\n.related-image {\n  position: relative;\n  width: 100%;\n  height: 160px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f4ff,\n      #f0fdf4);\n}\n.related-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.related-card:hover .related-image img {\n  transform: scale(1.05);\n}\n.related-urgency {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 4px 8px;\n  border-radius: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.related-urgency.urgency-high {\n  background: rgba(239, 68, 68, 0.95);\n  color: white;\n}\n.related-urgency.urgency-medium {\n  background: rgba(245, 158, 11, 0.95);\n  color: white;\n}\n.related-urgency.urgency-low {\n  background: rgba(34, 197, 94, 0.95);\n  color: white;\n}\n.related-content {\n  padding: 16px;\n}\n.related-content h4 {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 6px 0;\n  line-height: 1.4;\n}\n.related-category {\n  font-size: 12px;\n  color: #6b7280;\n  margin-bottom: 10px;\n}\n.related-progress {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.progress-bar-small {\n  flex: 1;\n  height: 4px;\n  background: #e5e7eb;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.progress-text {\n  font-size: 11px;\n  font-weight: 700;\n  color: #2563eb;\n  min-width: 32px;\n  text-align: right;\n}\n.cta-section {\n  padding: 60px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1d4ed8 50%,\n      #22c55e 100%);\n  color: white;\n  text-align: center;\n}\n.cta-content h2 {\n  font-size: 32px;\n  font-weight: 800;\n  margin-bottom: 12px;\n  letter-spacing: -0.5px;\n}\n.cta-content p {\n  font-size: 16px;\n  opacity: 0.95;\n  margin-bottom: 28px;\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.btn-cta-final {\n  padding: 14px 32px;\n  background: white;\n  color: #2563eb;\n  border: none;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 15px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.btn-cta-final:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);\n}\n@media (max-width: 1024px) {\n  .content-layout {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .donation-panel {\n    position: relative;\n    top: auto;\n  }\n  .hero-title {\n    font-size: 32px;\n  }\n  .hero-summary {\n    font-size: 16px;\n  }\n  .info-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .hero-section {\n    height: 380px;\n    padding-top: 60px;\n  }\n  .hero-title {\n    font-size: 24px;\n  }\n  .hero-summary {\n    font-size: 14px;\n  }\n  .main-content {\n    padding: 32px 16px;\n  }\n  .content-left {\n    gap: 24px;\n  }\n  .info-card,\n  .description-card,\n  .organization-section,\n  .donation-panel {\n    padding: 20px;\n  }\n  .info-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .related-grid {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 16px;\n  }\n  .cta-section {\n    padding: 40px 16px;\n  }\n  .cta-content h2 {\n    font-size: 24px;\n  }\n}\n@media (max-width: 480px) {\n  .hero-section {\n    height: 300px;\n  }\n  .hero-title {\n    font-size: 20px;\n  }\n  .hero-summary {\n    font-size: 13px;\n  }\n  .hero-actions {\n    flex-direction: column;\n  }\n  .btn-help,\n  .btn-share {\n    width: 100%;\n    justify-content: center;\n  }\n  .main-content {\n    padding: 24px 16px;\n  }\n  .info-card,\n  .description-card,\n  .organization-section,\n  .donation-panel {\n    padding: 16px;\n  }\n  .info-grid {\n    grid-template-columns: 1fr;\n  }\n  .related-grid {\n    grid-template-columns: 1fr;\n  }\n  .cta-section {\n    padding: 32px 16px;\n  }\n  .cta-content h2 {\n    font-size: 20px;\n  }\n  .badge-category,\n  .badge-urgency {\n    font-size: 10px;\n    padding: 6px 10px;\n  }\n}\n/*# sourceMappingURL=request-detail.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RequestDetailComponent, { className: "RequestDetailComponent", filePath: "app/request-detail/request-detail.component.ts", lineNumber: 59 });
})();

// src/app/association-detail/association-detail.component.ts
var _c05 = (a0) => ({ "is-sticky": a0 });
function AssociationDetailComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2, " Association v\xE9rifi\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function AssociationDetailComponent_p_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paragraph_r1 = ctx.$implicit;
    \u0275\u0275classProp("paragraph-title", paragraph_r1.includes("\u2022") === false && paragraph_r1.trim().endsWith(":"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", paragraph_r1, " ");
  }
}
function AssociationDetailComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 88);
    \u0275\u0275element(2, "img", 89);
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 91)(6, "h4", 92);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 93);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 94);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 95)(13, "div", 96);
    \u0275\u0275element(14, "div", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 98)(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "a", 99);
    \u0275\u0275text(23, " Voir la campagne ");
    \u0275\u0275element(24, "i", 100);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const campaign_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", campaign_r2.image || "/assets/images/placeholders/request-placeholder.svg", \u0275\u0275sanitizeUrl)("alt", campaign_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getCampaignStatusClass(campaign_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getCampaignStatusLabel(campaign_r2.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(campaign_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(campaign_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(campaign_r2.description);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r2.getProgressPercent(campaign_r2.progress, campaign_r2.target), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(18, 11, campaign_r2.progress), "\u20AC");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(21, 13, ctx_r2.getProgressPercent(campaign_r2.progress, campaign_r2.target), "1.0-0"), "%");
  }
}
var AssociationDetailComponent = class _AssociationDetailComponent {
  router;
  association = {
    id: 1,
    name: "Solidarit\xE9 Plus",
    cover: "/assets/images/placeholders/association-cover-placeholder.svg",
    tagline: "Ensemble, construisons une communaut\xE9 plus solidaire",
    description: "Association d'aide alimentaire et sociale depuis 15 ans",
    fullDescription: `Solidarit\xE9 Plus est une association reconnue et v\xE9rifi\xE9e qui \u0153uvre depuis 15 ans 
pour l'aide alimentaire et le soutien social des familles en difficult\xE9.

Notre mission est de :
\u2022 Fournir une aide alimentaire d'urgence aux familles en situation de pr\xE9carit\xE9
\u2022 Organiser des actions d'aide \xE9ducative et de sensibilisation
\u2022 Cr\xE9er des liens communautaires solides bas\xE9s sur l'entraide
\u2022 Transparence totale dans l'utilisation des fonds collect\xE9s

Nos domaines d'action :
- Distributions alimentaires r\xE9guli\xE8res
- Programmes de sensibilisation nutritionnelle
- Accompagnement social des familles
- \xC9v\xE9nements communautaires d'entraide

Nous croyons fermement que chacun m\xE9rite l'acc\xE8s \xE0 l'alimentation de qualit\xE9 et au soutien social.`,
    verified: true,
    email: "contact@solidariteplus.org",
    location: "Tunis, Tunisie",
    foundedYear: 2011,
    stats: {
      totalDonations: 45e4,
      campaignCount: 28,
      peopleHelped: 12500,
      donorsCount: 3200
    },
    campaigns: [
      {
        id: 1,
        title: "Aide alimentaire d'urgence - 50 familles",
        description: "Distribution de paniers alimentaires aux familles en d\xE9tresse",
        image: "/assets/images/placeholders/request-placeholder.svg",
        progress: 1850,
        target: 3e3,
        category: "Alimentation",
        status: "active"
      },
      {
        id: 2,
        title: "Soutien hivernal pour sans-abri",
        description: "Aide hivernale : v\xEAtements, couvertures, repas chauds",
        image: "/assets/images/placeholders/request-placeholder.svg",
        progress: 2400,
        target: 4e3,
        category: "Urgence",
        status: "active"
      },
      {
        id: 3,
        title: "Repas scolaires pour enfants d\xE9favoris\xE9s",
        description: "Programme de nutrition pour enfants scolaris\xE9s en situation de pr\xE9carit\xE9",
        image: "/assets/images/placeholders/request-placeholder.svg",
        progress: 3100,
        target: 5e3,
        category: "\xC9ducation",
        status: "active"
      },
      {
        id: 4,
        title: "Campagne de sensibilisation nutritionnelle",
        description: "Ateliers et formations sur l'alimentation saine",
        image: "/assets/images/placeholders/request-placeholder.svg",
        progress: 1200,
        target: 2e3,
        category: "Formation",
        status: "active"
      }
    ],
    transparency: {
      operatingCosts: 85e3,
      directAid: 28e4,
      programsEducation: 65e3,
      adminOverhead: 2e4
    }
  };
  yearsActive = 0;
  sidebarSticky = false;
  isDonationModalOpen = false;
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    this.yearsActive = (/* @__PURE__ */ new Date()).getFullYear() - this.association.foundedYear;
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }
  handleScroll() {
    this.sidebarSticky = window.scrollY > 300;
  }
  getProgressPercent(progress, target) {
    return progress / target * 100;
  }
  viewCampaigns() {
    const element = document.querySelector(".campaigns-section");
    const offsetTop = element?.offsetTop || 0;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  }
  supportAssociation() {
    this.isDonationModalOpen = true;
  }
  onDonationClosed() {
    this.isDonationModalOpen = false;
  }
  onDonationCompleted(donation) {
    console.log("Donation completed:", donation);
    this.association.stats.totalDonations += donation.amount;
    this.association.stats.donorsCount += 1;
  }
  shareCampaign() {
    if (navigator.share) {
      navigator.share({
        title: this.association.name,
        text: this.association.tagline,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copi\xE9 dans le presse-papiers");
    }
  }
  getLogoInitial() {
    return this.association.name.charAt(0);
  }
  getCampaignStatusClass(status) {
    return `status-${status}`;
  }
  getCampaignStatusLabel(status) {
    switch (status) {
      case "active":
        return "Actif";
      case "completed":
        return "Compl\xE9t\xE9";
      case "paused":
        return "Paus\xE9";
      default:
        return "Actif";
    }
  }
  static \u0275fac = function AssociationDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssociationDetailComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssociationDetailComponent, selectors: [["app-association-detail"]], decls: 205, vars: 49, consts: [[3, "closed", "donated", "isOpen", "associationId", "defaultType"], [1, "hero-section"], [1, "hero-image-wrapper"], ["loading", "eager", 1, "hero-image", 3, "src", "alt"], [1, "hero-overlay"], [1, "hero-content"], [1, "container"], [1, "hero-header"], [1, "logo-badge-large"], [1, "hero-info"], [1, "hero-title-group"], [1, "hero-title"], ["class", "verified-badge-hero", 4, "ngIf"], [1, "hero-tagline"], [1, "hero-actions"], [1, "btn-primary", 3, "click"], [1, "fas", "fa-list"], [1, "btn-secondary", 3, "click"], [1, "fas", "fa-share-alt"], [1, "stats-bar"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon"], [1, "fas", "fa-euro-sign"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], [1, "fas", "fa-chart-bar"], [1, "fas", "fa-users"], [1, "fas", "fa-calendar"], [1, "main-content"], [1, "content-layout"], [1, "content-left"], [1, "about-card"], [1, "about-content"], [3, "paragraph-title", 4, "ngFor", "ngForOf"], [1, "campaigns-section"], [1, "section-subtitle"], [1, "campaigns-grid"], ["class", "campaign-card", 4, "ngFor", "ngForOf"], [1, "content-right"], [1, "trust-panel", 3, "ngClass"], [1, "verification-card"], [1, "verification-header"], [1, "fas", "fa-shield-alt"], [1, "verification-items"], [1, "verification-item"], [1, "fas", "fa-check-circle"], [1, "fas", "fa-lock"], [1, "fas", "fa-certificate"], [1, "contact-card"], [1, "contact-info"], [1, "info-item"], [1, "fas", "fa-envelope"], [1, "fas", "fa-map-marker-alt"], [1, "cta-buttons"], [1, "btn-primary-large", 3, "click"], [1, "btn-secondary-large", 3, "click"], [1, "fas", "fa-heart"], [1, "social-proof"], [1, "proof-item"], [1, "proof-number"], [1, "proof-label"], [1, "transparency-section"], [1, "transparency-header"], [1, "transparency-grid"], [1, "transparency-chart"], [1, "chart-circle"], ["viewBox", "0 0 120 120", 1, "pie-chart"], ["cx", "60", "cy", "60", "r", "50", "fill", "none", "stroke", "#22c55e", "stroke-width", "30", "stroke-dasharray", "155 250", "stroke-dashoffset", "0", "transform", "rotate(-90 60 60)"], ["cx", "60", "cy", "60", "r", "50", "fill", "none", "stroke", "#2563eb", "stroke-width", "30", "stroke-dasharray", "45 250", "stroke-dashoffset", "-155", "transform", "rotate(-90 60 60)"], ["cx", "60", "cy", "60", "r", "50", "fill", "none", "stroke", "#f59e0b", "stroke-width", "30", "stroke-dasharray", "35 250", "stroke-dashoffset", "-200", "transform", "rotate(-90 60 60)"], ["cx", "60", "cy", "60", "r", "50", "fill", "none", "stroke", "#9ca3af", "stroke-width", "30", "stroke-dasharray", "15 250", "stroke-dashoffset", "-235", "transform", "rotate(-90 60 60)"], [1, "chart-center"], [1, "transparency-breakdown"], [1, "breakdown-item"], [1, "breakdown-color", 2, "background", "#22c55e"], [1, "breakdown-content"], [1, "breakdown-desc"], [1, "breakdown-color", 2, "background", "#2563eb"], [1, "breakdown-color", 2, "background", "#f59e0b"], [1, "breakdown-color", 2, "background", "#9ca3af"], [1, "trust-message"], [1, "fas", "fa-handshake"], [1, "final-cta-section"], [1, "btn-cta-final", 3, "click"], [1, "verified-badge-hero"], [1, "campaign-card"], [1, "campaign-image"], ["loading", "lazy", 3, "src", "alt"], [1, "campaign-status", 3, "ngClass"], [1, "campaign-content"], [1, "campaign-title"], [1, "campaign-category"], [1, "campaign-description"], [1, "campaign-progress"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], ["href", "javascript:;", 1, "link-view-campaign"], [1, "fas", "fa-arrow-right"]], template: function AssociationDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar");
      \u0275\u0275elementStart(1, "app-donation-modal", 0);
      \u0275\u0275listener("closed", function AssociationDetailComponent_Template_app_donation_modal_closed_1_listener() {
        return ctx.onDonationClosed();
      })("donated", function AssociationDetailComponent_Template_app_donation_modal_donated_1_listener($event) {
        return ctx.onDonationCompleted($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "section", 1)(3, "div", 2);
      \u0275\u0275element(4, "img", 3)(5, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "h1", 11);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, AssociationDetailComponent_div_15_Template, 3, 0, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 13);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 14)(19, "button", 15);
      \u0275\u0275listener("click", function AssociationDetailComponent_Template_button_click_19_listener() {
        return ctx.viewCampaigns();
      });
      \u0275\u0275element(20, "i", 16);
      \u0275\u0275text(21, " Voir les campagnes ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 17);
      \u0275\u0275listener("click", function AssociationDetailComponent_Template_button_click_22_listener() {
        return ctx.shareCampaign();
      });
      \u0275\u0275element(23, "i", 18);
      \u0275\u0275text(24, " Partager ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(25, "section", 19)(26, "div", 6)(27, "div", 20)(28, "div", 21)(29, "div", 22);
      \u0275\u0275element(30, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 24)(32, "span", 25);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 26);
      \u0275\u0275text(36, "collect\xE9s");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 21)(38, "div", 22);
      \u0275\u0275element(39, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 24)(41, "span", 25);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 26);
      \u0275\u0275text(44, "campagnes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 21)(46, "div", 22);
      \u0275\u0275element(47, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 24)(49, "span", 25);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span", 26);
      \u0275\u0275text(53, "personnes aid\xE9es");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div", 21)(55, "div", 22);
      \u0275\u0275element(56, "i", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 24)(58, "span", 25);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "span", 26);
      \u0275\u0275text(61, "d'activit\xE9");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(62, "section", 30)(63, "div", 6)(64, "div", 31)(65, "div", 32)(66, "div", 33)(67, "h2");
      \u0275\u0275text(68, "\xC0 propos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 34);
      \u0275\u0275template(70, AssociationDetailComponent_p_70_Template, 2, 3, "p", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 36)(72, "h2");
      \u0275\u0275text(73, "Campagnes actives");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "p", 37);
      \u0275\u0275text(75, "D\xE9couvrez nos projets en cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 38);
      \u0275\u0275template(77, AssociationDetailComponent_div_77_Template, 25, 16, "div", 39);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "div", 40)(79, "div", 41)(80, "div", 42)(81, "div", 43);
      \u0275\u0275element(82, "i", 44);
      \u0275\u0275elementStart(83, "h3");
      \u0275\u0275text(84, "V\xE9rification");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 45)(86, "div", 46);
      \u0275\u0275element(87, "i", 47);
      \u0275\u0275elementStart(88, "span");
      \u0275\u0275text(89, "Association v\xE9rifi\xE9e");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 46);
      \u0275\u0275element(91, "i", 48);
      \u0275\u0275elementStart(92, "span");
      \u0275\u0275text(93, "Transparence garantie");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 46);
      \u0275\u0275element(95, "i", 49);
      \u0275\u0275elementStart(96, "span");
      \u0275\u0275text(97);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(98, "div", 50)(99, "h3");
      \u0275\u0275text(100, "Informations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 51)(102, "div", 52);
      \u0275\u0275element(103, "i", 53);
      \u0275\u0275elementStart(104, "span");
      \u0275\u0275text(105);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div", 52);
      \u0275\u0275element(107, "i", 54);
      \u0275\u0275elementStart(108, "span");
      \u0275\u0275text(109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "div", 52);
      \u0275\u0275element(111, "i", 28);
      \u0275\u0275elementStart(112, "span");
      \u0275\u0275text(113);
      \u0275\u0275pipe(114, "number");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(115, "div", 55)(116, "button", 56);
      \u0275\u0275listener("click", function AssociationDetailComponent_Template_button_click_116_listener() {
        return ctx.viewCampaigns();
      });
      \u0275\u0275element(117, "i", 16);
      \u0275\u0275text(118, " Voir les campagnes ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "button", 57);
      \u0275\u0275listener("click", function AssociationDetailComponent_Template_button_click_119_listener() {
        return ctx.supportAssociation();
      });
      \u0275\u0275element(120, "i", 58);
      \u0275\u0275text(121, " Soutenir ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 59)(123, "div", 60)(124, "span", 61);
      \u0275\u0275text(125);
      \u0275\u0275pipe(126, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "span", 62);
      \u0275\u0275text(128, "Donateurs actifs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "div", 60)(130, "span", 61);
      \u0275\u0275text(131, "4.8/5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "span", 62);
      \u0275\u0275text(133, "\xC9valuation moyenne");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(134, "section", 63)(135, "div", 6)(136, "div", 64)(137, "h2");
      \u0275\u0275text(138, "Transparence dans l'utilisation des fonds");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "p");
      \u0275\u0275text(140, "Nous croyons en la transparence totale. Voici comment vos donations sont utilis\xE9es :");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "div", 65)(142, "div", 66)(143, "div", 67);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(144, "svg", 68);
      \u0275\u0275element(145, "circle", 69)(146, "circle", 70)(147, "circle", 71)(148, "circle", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(149, "div", 73);
      \u0275\u0275text(150, "100%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(151, "div", 74)(152, "div", 75);
      \u0275\u0275element(153, "div", 76);
      \u0275\u0275elementStart(154, "div", 77)(155, "h4");
      \u0275\u0275text(156, "Aide directe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "p");
      \u0275\u0275text(158);
      \u0275\u0275pipe(159, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "span", 78);
      \u0275\u0275text(161, "Distributions alimentaires, aide urgente, soutien direct");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(162, "div", 75);
      \u0275\u0275element(163, "div", 79);
      \u0275\u0275elementStart(164, "div", 77)(165, "h4");
      \u0275\u0275text(166, "Programmes & Formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "p");
      \u0275\u0275text(168);
      \u0275\u0275pipe(169, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "span", 78);
      \u0275\u0275text(171, "Ateliers, formations, sensibilisation nutritionnelle");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(172, "div", 75);
      \u0275\u0275element(173, "div", 80);
      \u0275\u0275elementStart(174, "div", 77)(175, "h4");
      \u0275\u0275text(176, "Co\xFBts op\xE9rationnels");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "p");
      \u0275\u0275text(178);
      \u0275\u0275pipe(179, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "span", 78);
      \u0275\u0275text(181, "Locaux, \xE9quipements, logistique");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(182, "div", 75);
      \u0275\u0275element(183, "div", 81);
      \u0275\u0275elementStart(184, "div", 77)(185, "h4");
      \u0275\u0275text(186, "Administration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "p");
      \u0275\u0275text(188);
      \u0275\u0275pipe(189, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "span", 78);
      \u0275\u0275text(191, "Gestion administrative, reporting");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(192, "div", 82);
      \u0275\u0275element(193, "i", 83);
      \u0275\u0275elementStart(194, "p");
      \u0275\u0275text(195, "Transparence garantie. Chaque euro compte.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(196, "section", 84)(197, "div", 6)(198, "h2");
      \u0275\u0275text(199, "Rejoignez notre communaut\xE9 d'entraide");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "p");
      \u0275\u0275text(201, "Que ce soit par une donation ou un partage, vous nous aidez \xE0 faire une diff\xE9rence r\xE9elle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "button", 85);
      \u0275\u0275listener("click", function AssociationDetailComponent_Template_button_click_202_listener() {
        return ctx.supportAssociation();
      });
      \u0275\u0275element(203, "i", 58);
      \u0275\u0275text(204, " Soutenir maintenant ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.isDonationModalOpen)("associationId", ctx.association.id)("defaultType", "association");
      \u0275\u0275advance(3);
      \u0275\u0275property("src", ctx.association.cover || "/assets/images/placeholders/association-cover-placeholder.svg", \u0275\u0275sanitizeUrl)("alt", ctx.association.name);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.getLogoInitial(), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.association.name);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.association.verified);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.association.tagline);
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(34, 25, ctx.association.stats.totalDonations / 1e3, "1.0-0"), "K\u20AC");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.association.stats.campaignCount);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(51, 28, ctx.association.stats.peopleHelped / 1e3, "1.0-0"), "K+");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", ctx.yearsActive, "+ ans");
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.association.fullDescription.split("\n"));
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.association.campaigns);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(47, _c05, ctx.sidebarSticky));
      \u0275\u0275advance(18);
      \u0275\u0275textInterpolate1("Reconnue depuis ", ctx.association.foundedYear);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.association.email);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.association.location);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(114, 31, ctx.association.stats.donorsCount), " donateurs");
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(126, 33, ctx.association.stats.donorsCount));
      \u0275\u0275advance(33);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(159, 35, ctx.association.transparency.directAid / 1e3, "1.0-0"), "K\u20AC (62%)");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(169, 38, ctx.association.transparency.programsEducation / 1e3, "1.0-0"), "K\u20AC (18%)");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(179, 41, ctx.association.transparency.operatingCosts / 1e3, "1.0-0"), "K\u20AC (14%)");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(189, 44, ctx.association.transparency.adminOverhead / 1e3, "1.0-0"), "K\u20AC (6%)");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NavbarComponent, DonationModalComponent, DecimalPipe], styles: ["\n.container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  height: 480px;\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n  margin-top: -60px;\n  padding-top: 60px;\n  margin-bottom: -60px;\n  padding-bottom: 60px;\n}\n.hero-image-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 0;\n}\n.hero-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(15, 23, 42, 0.2) 0%,\n      rgba(15, 23, 42, 0.4) 50%,\n      rgba(15, 23, 42, 0.7) 100%);\n  z-index: 1;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n}\n.hero-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 24px;\n  color: white;\n}\n.logo-badge-large[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 800;\n  font-size: 40px;\n  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.3);\n  border: 3px solid white;\n  flex-shrink: 0;\n}\n.hero-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.hero-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 44px;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n  line-height: 1.1;\n  margin: 0;\n}\n.verified-badge-hero[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: rgba(34, 197, 94, 0.95);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.verified-badge-hero[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.hero-tagline[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0.95;\n  margin: 0 0 16px 0;\n  line-height: 1.5;\n  max-width: 600px;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: white;\n  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.5);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0.6);\n}\n.stats-bar[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  background: white;\n  border-bottom: 1px solid #e5e7eb;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 24px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  background: #f9fafb;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  transition: all 0.2s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  background: white;\n  border-color: #22c55e;\n  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.1);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  border-radius: 10px;\n  color: white;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.stat-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #111827;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.main-content[_ngcontent-%COMP%] {\n  padding: 48px 20px;\n  background: #f9fafb;\n}\n.content-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 32px;\n}\n.content-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.about-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);\n  border: 1px solid #e5e7eb;\n}\n.about-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #111827;\n}\n.about-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.7;\n  color: #4b5563;\n  margin: 0;\n}\n.about-content[_ngcontent-%COMP%]   p.paragraph-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #111827;\n  margin-top: 8px;\n}\n.campaigns-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);\n  border: 1px solid #e5e7eb;\n}\n.campaigns-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 8px;\n  color: #111827;\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 20px;\n}\n.campaigns-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 20px;\n}\n.campaign-card[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid #e5e7eb;\n  transition: all 0.3s ease;\n}\n.campaign-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.1);\n  border-color: #22c55e;\n}\n.campaign-image[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 140px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4,\n      #f0f4ff);\n}\n.campaign-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.campaign-card[_ngcontent-%COMP%]:hover   .campaign-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.campaign-status[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 6px 10px;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.status-active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.95);\n  color: white;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.95);\n  color: white;\n}\n.status-paused[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.95);\n  color: white;\n}\n.campaign-content[_ngcontent-%COMP%] {\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.campaign-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n  line-height: 1.3;\n}\n.campaign-category[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #2563eb;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin: 0;\n}\n.campaign-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.4;\n}\n.campaign-progress[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  background: #e5e7eb;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #16a34a);\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.progress-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: #6b7280;\n}\n.progress-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-weight: 700;\n  color: #22c55e;\n}\n.link-view-campaign[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  transition: gap 0.2s ease;\n}\n.link-view-campaign[_ngcontent-%COMP%]:hover {\n  gap: 10px;\n}\n.trust-panel[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);\n  border: 1px solid #e5e7eb;\n  position: sticky;\n  top: 80px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  transition: all 0.3s ease;\n}\n.trust-panel.is-sticky[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.15);\n}\n.verification-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4,\n      #ecfdf5);\n  border: 1px solid #dcfce7;\n  border-radius: 10px;\n}\n.verification-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.verification-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #22c55e;\n  font-size: 16px;\n}\n.verification-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.verification-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.verification-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #15803d;\n  font-weight: 600;\n}\n.verification-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #22c55e;\n  font-size: 14px;\n}\n.contact-card[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  border-top: 1px solid #e5e7eb;\n}\n.contact-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.contact-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 12px;\n  color: #4b5563;\n}\n.info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-size: 14px;\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding-top: 12px;\n}\n.btn-primary-large[_ngcontent-%COMP%], \n.btn-secondary-large[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.btn-primary-large[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: white;\n  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);\n}\n.btn-primary-large[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(34, 197, 94, 0.4);\n}\n.btn-secondary-large[_ngcontent-%COMP%] {\n  background: white;\n  color: #22c55e;\n  border: 2px solid #22c55e;\n}\n.btn-secondary-large[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n}\n.social-proof[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding-top: 12px;\n  border-top: 1px solid #e5e7eb;\n}\n.proof-item[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.proof-number[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: 800;\n  color: #22c55e;\n  margin-bottom: 2px;\n}\n.proof-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.transparency-section[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  background: white;\n  border-top: 1px solid #e5e7eb;\n}\n.transparency-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.transparency-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n}\n.transparency-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #6b7280;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.transparency-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 48px;\n  margin-bottom: 40px;\n  align-items: center;\n}\n.transparency-chart[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.chart-circle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 280px;\n  height: 280px;\n}\n.pie-chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  filter: drop-shadow(0 4px 12px rgba(15, 23, 42, 0.1));\n}\n.chart-center[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.chart-center[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  color: #111827;\n}\n.transparency-breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.breakdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 16px;\n  background: #f9fafb;\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n}\n.breakdown-color[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 100%;\n  border-radius: 4px;\n  flex-shrink: 0;\n  min-height: 60px;\n}\n.breakdown-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 4px 0;\n}\n.breakdown-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #2563eb;\n  margin: 0 0 4px 0;\n}\n.breakdown-desc[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #6b7280;\n}\n.trust-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px;\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4,\n      #ecfdf5);\n  border: 2px solid #dcfce7;\n  border-radius: 12px;\n}\n.trust-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 32px;\n  color: #22c55e;\n  margin-bottom: 12px;\n}\n.trust-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #15803d;\n  margin: 0;\n}\n.final-cta-section[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e 0%,\n      #16a34a 50%,\n      #2563eb 100%);\n  color: white;\n  text-align: center;\n}\n.final-cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  margin-bottom: 12px;\n  letter-spacing: -0.5px;\n}\n.final-cta-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.95;\n  margin-bottom: 28px;\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.btn-cta-final[_ngcontent-%COMP%] {\n  padding: 14px 32px;\n  background: white;\n  color: #22c55e;\n  border: none;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 15px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.btn-cta-final[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);\n}\n@media (max-width: 1024px) {\n  .content-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .trust-panel[_ngcontent-%COMP%] {\n    position: relative;\n    top: auto;\n  }\n  .transparency-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n  .hero-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%] {\n    height: 380px;\n    padding-bottom: 40px;\n  }\n  .hero-header[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .logo-badge-large[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    font-size: 32px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .hero-tagline[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 16px;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding: 32px 16px;\n  }\n  .about-card[_ngcontent-%COMP%], \n   .campaigns-section[_ngcontent-%COMP%], \n   .trust-panel[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .campaigns-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .transparency-grid[_ngcontent-%COMP%] {\n    gap: 24px;\n  }\n  .transparency-breakdown[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .breakdown-item[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .final-cta-section[_ngcontent-%COMP%] {\n    padding: 40px 16px;\n  }\n  .final-cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media (max-width: 480px) {\n  .hero-section[_ngcontent-%COMP%] {\n    height: 320px;\n    padding-bottom: 32px;\n  }\n  .hero-header[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .logo-badge-large[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n    font-size: 28px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .hero-tagline[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .hero-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n  }\n  .btn-primary[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .about-card[_ngcontent-%COMP%], \n   .campaigns-section[_ngcontent-%COMP%], \n   .trust-panel[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .transparency-chart[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .transparency-breakdown[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .breakdown-item[_ngcontent-%COMP%] {\n    padding: 12px;\n    gap: 12px;\n  }\n  .final-cta-section[_ngcontent-%COMP%] {\n    padding: 32px 16px;\n  }\n  .final-cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .cta-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn-primary-large[_ngcontent-%COMP%], \n   .btn-secondary-large[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n    font-size: 12px;\n  }\n  .verified-badge-hero[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding: 6px 10px;\n  }\n}\n/*# sourceMappingURL=association-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssociationDetailComponent, [{
    type: Component,
    args: [{ selector: "app-association-detail", standalone: true, imports: [CommonModule, NavbarComponent, DonationModalComponent], template: `<app-navbar></app-navbar>\r
\r
<!-- Donation Modal -->\r
<app-donation-modal\r
  [isOpen]="isDonationModalOpen"\r
  [associationId]="association.id"\r
  [defaultType]="'association'"\r
  (closed)="onDonationClosed()"\r
  (donated)="onDonationCompleted($event)"\r
></app-donation-modal>\r
\r
<!-- ==================== HERO SECTION ==================== -->\r
<section class="hero-section">\r
  <div class="hero-image-wrapper">\r
    <img \r
      [src]="association.cover || '/assets/images/placeholders/association-cover-placeholder.svg'"\r
      [alt]="association.name"\r
      class="hero-image"\r
      loading="eager"\r
    />\r
    <div class="hero-overlay"></div>\r
  </div>\r
\r
  <div class="hero-content">\r
    <div class="container">\r
      <div class="hero-header">\r
        <!-- Logo -->\r
        <div class="logo-badge-large">\r
          {{ getLogoInitial() }}\r
        </div>\r
\r
        <!-- Info -->\r
        <div class="hero-info">\r
          <div class="hero-title-group">\r
            <h1 class="hero-title">{{ association.name }}</h1>\r
            <div *ngIf="association.verified" class="verified-badge-hero">\r
              <i class="fas fa-check-circle"></i> Association v\xE9rifi\xE9e\r
            </div>\r
          </div>\r
          <p class="hero-tagline">{{ association.tagline }}</p>\r
        </div>\r
\r
        <!-- Actions -->\r
        <div class="hero-actions">\r
          <button class="btn-primary" (click)="viewCampaigns()">\r
            <i class="fas fa-list"></i> Voir les campagnes\r
          </button>\r
          <button class="btn-secondary" (click)="shareCampaign()">\r
            <i class="fas fa-share-alt"></i> Partager\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ==================== STATS BAR ==================== -->\r
<section class="stats-bar">\r
  <div class="container">\r
    <div class="stats-grid">\r
      <div class="stat-card">\r
        <div class="stat-icon">\r
          <i class="fas fa-euro-sign"></i>\r
        </div>\r
        <div class="stat-content">\r
          <span class="stat-value">{{ (association.stats.totalDonations / 1000) | number:'1.0-0' }}K\u20AC</span>\r
          <span class="stat-label">collect\xE9s</span>\r
        </div>\r
      </div>\r
\r
      <div class="stat-card">\r
        <div class="stat-icon">\r
          <i class="fas fa-chart-bar"></i>\r
        </div>\r
        <div class="stat-content">\r
          <span class="stat-value">{{ association.stats.campaignCount }}</span>\r
          <span class="stat-label">campagnes</span>\r
        </div>\r
      </div>\r
\r
      <div class="stat-card">\r
        <div class="stat-icon">\r
          <i class="fas fa-users"></i>\r
        </div>\r
        <div class="stat-content">\r
          <span class="stat-value">{{ (association.stats.peopleHelped / 1000) | number:'1.0-0' }}K+</span>\r
          <span class="stat-label">personnes aid\xE9es</span>\r
        </div>\r
      </div>\r
\r
      <div class="stat-card">\r
        <div class="stat-icon">\r
          <i class="fas fa-calendar"></i>\r
        </div>\r
        <div class="stat-content">\r
          <span class="stat-value">{{ yearsActive }}+ ans</span>\r
          <span class="stat-label">d'activit\xE9</span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ==================== MAIN CONTENT ==================== -->\r
<section class="main-content">\r
  <div class="container">\r
    <div class="content-layout">\r
      \r
      <!-- LEFT COLUMN: About & Campaigns -->\r
      <div class="content-left">\r
        \r
        <!-- About Section -->\r
        <div class="about-card">\r
          <h2>\xC0 propos</h2>\r
          <div class="about-content">\r
            <p *ngFor="let paragraph of association.fullDescription.split('\\n')" \r
               [class.paragraph-title]="paragraph.includes('\u2022') === false && paragraph.trim().endsWith(':')">\r
              {{ paragraph }}\r
            </p>\r
          </div>\r
        </div>\r
\r
        <!-- Campaigns Section -->\r
        <div class="campaigns-section">\r
          <h2>Campagnes actives</h2>\r
          <p class="section-subtitle">D\xE9couvrez nos projets en cours</p>\r
\r
          <div class="campaigns-grid">\r
            <div class="campaign-card" *ngFor="let campaign of association.campaigns">\r
              <!-- Image -->\r
              <div class="campaign-image">\r
                <img \r
                  [src]="campaign.image || '/assets/images/placeholders/request-placeholder.svg'"\r
                  [alt]="campaign.title"\r
                  loading="lazy"\r
                />\r
                <span class="campaign-status" [ngClass]="getCampaignStatusClass(campaign.status)">\r
                  {{ getCampaignStatusLabel(campaign.status) }}\r
                </span>\r
              </div>\r
\r
              <!-- Content -->\r
              <div class="campaign-content">\r
                <h4 class="campaign-title">{{ campaign.title }}</h4>\r
                <p class="campaign-category">{{ campaign.category }}</p>\r
                <p class="campaign-description">{{ campaign.description }}</p>\r
\r
                <!-- Progress -->\r
                <div class="campaign-progress">\r
                  <div class="progress-bar">\r
                    <div class="progress-fill" [style.width.%]="getProgressPercent(campaign.progress, campaign.target)"></div>\r
                  </div>\r
                  <div class="progress-text">\r
                    <span>{{ campaign.progress | number }}\u20AC</span>\r
                    <span>{{ getProgressPercent(campaign.progress, campaign.target) | number:'1.0-0' }}%</span>\r
                  </div>\r
                </div>\r
\r
                <!-- CTA -->\r
                <a href="javascript:;" class="link-view-campaign">\r
                  Voir la campagne <i class="fas fa-arrow-right"></i>\r
                </a>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
\r
      <!-- RIGHT COLUMN: Trust Card + CTAs -->\r
      <div class="content-right">\r
        <div class="trust-panel" [ngClass]="{ 'is-sticky': sidebarSticky }">\r
          \r
          <!-- Verification Card -->\r
          <div class="verification-card">\r
            <div class="verification-header">\r
              <i class="fas fa-shield-alt"></i>\r
              <h3>V\xE9rification</h3>\r
            </div>\r
\r
            <div class="verification-items">\r
              <div class="verification-item">\r
                <i class="fas fa-check-circle"></i>\r
                <span>Association v\xE9rifi\xE9e</span>\r
              </div>\r
              <div class="verification-item">\r
                <i class="fas fa-lock"></i>\r
                <span>Transparence garantie</span>\r
              </div>\r
              <div class="verification-item">\r
                <i class="fas fa-certificate"></i>\r
                <span>Reconnue depuis {{ association.foundedYear }}</span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Contact Info -->\r
          <div class="contact-card">\r
            <h3>Informations</h3>\r
            <div class="contact-info">\r
              <div class="info-item">\r
                <i class="fas fa-envelope"></i>\r
                <span>{{ association.email }}</span>\r
              </div>\r
              <div class="info-item">\r
                <i class="fas fa-map-marker-alt"></i>\r
                <span>{{ association.location }}</span>\r
              </div>\r
              <div class="info-item">\r
                <i class="fas fa-users"></i>\r
                <span>{{ association.stats.donorsCount | number }} donateurs</span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- CTA Buttons -->\r
          <div class="cta-buttons">\r
            <button class="btn-primary-large" (click)="viewCampaigns()">\r
              <i class="fas fa-list"></i> Voir les campagnes\r
            </button>\r
            <button class="btn-secondary-large" (click)="supportAssociation()">\r
              <i class="fas fa-heart"></i> Soutenir\r
            </button>\r
          </div>\r
\r
          <!-- Social Proof -->\r
          <div class="social-proof">\r
            <div class="proof-item">\r
              <span class="proof-number">{{ association.stats.donorsCount | number }}</span>\r
              <span class="proof-label">Donateurs actifs</span>\r
            </div>\r
            <div class="proof-item">\r
              <span class="proof-number">4.8/5</span>\r
              <span class="proof-label">\xC9valuation moyenne</span>\r
            </div>\r
          </div>\r
\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ==================== TRANSPARENCY SECTION ==================== -->\r
<section class="transparency-section">\r
  <div class="container">\r
    <div class="transparency-header">\r
      <h2>Transparence dans l'utilisation des fonds</h2>\r
      <p>Nous croyons en la transparence totale. Voici comment vos donations sont utilis\xE9es :</p>\r
    </div>\r
\r
    <div class="transparency-grid">\r
      <!-- Pie Chart Representative -->\r
      <div class="transparency-chart">\r
        <div class="chart-circle">\r
          <svg viewBox="0 0 120 120" class="pie-chart">\r
            <!-- Direct Aid (62%) -->\r
            <circle cx="60" cy="60" r="50" fill="none" stroke="#22c55e" stroke-width="30" \r
              stroke-dasharray="155 250" stroke-dashoffset="0" transform="rotate(-90 60 60)"/>\r
            <!-- Programs Education (18%) -->\r
            <circle cx="60" cy="60" r="50" fill="none" stroke="#2563eb" stroke-width="30" \r
              stroke-dasharray="45 250" stroke-dashoffset="-155" transform="rotate(-90 60 60)"/>\r
            <!-- Operating Costs (14%) -->\r
            <circle cx="60" cy="60" r="50" fill="none" stroke="#f59e0b" stroke-width="30" \r
              stroke-dasharray="35 250" stroke-dashoffset="-200" transform="rotate(-90 60 60)"/>\r
            <!-- Admin Overhead (6%) -->\r
            <circle cx="60" cy="60" r="50" fill="none" stroke="#9ca3af" stroke-width="30" \r
              stroke-dasharray="15 250" stroke-dashoffset="-235" transform="rotate(-90 60 60)"/>\r
          </svg>\r
          <div class="chart-center">100%</div>\r
        </div>\r
      </div>\r
\r
      <!-- Breakdown -->\r
      <div class="transparency-breakdown">\r
        <div class="breakdown-item">\r
          <div class="breakdown-color" style="background: #22c55e;"></div>\r
          <div class="breakdown-content">\r
            <h4>Aide directe</h4>\r
            <p>{{ (association.transparency.directAid / 1000) | number:'1.0-0' }}K\u20AC (62%)</p>\r
            <span class="breakdown-desc">Distributions alimentaires, aide urgente, soutien direct</span>\r
          </div>\r
        </div>\r
\r
        <div class="breakdown-item">\r
          <div class="breakdown-color" style="background: #2563eb;"></div>\r
          <div class="breakdown-content">\r
            <h4>Programmes & Formation</h4>\r
            <p>{{ (association.transparency.programsEducation / 1000) | number:'1.0-0' }}K\u20AC (18%)</p>\r
            <span class="breakdown-desc">Ateliers, formations, sensibilisation nutritionnelle</span>\r
          </div>\r
        </div>\r
\r
        <div class="breakdown-item">\r
          <div class="breakdown-color" style="background: #f59e0b;"></div>\r
          <div class="breakdown-content">\r
            <h4>Co\xFBts op\xE9rationnels</h4>\r
            <p>{{ (association.transparency.operatingCosts / 1000) | number:'1.0-0' }}K\u20AC (14%)</p>\r
            <span class="breakdown-desc">Locaux, \xE9quipements, logistique</span>\r
          </div>\r
        </div>\r
\r
        <div class="breakdown-item">\r
          <div class="breakdown-color" style="background: #9ca3af;"></div>\r
          <div class="breakdown-content">\r
            <h4>Administration</h4>\r
            <p>{{ (association.transparency.adminOverhead / 1000) | number:'1.0-0' }}K\u20AC (6%)</p>\r
            <span class="breakdown-desc">Gestion administrative, reporting</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Trust Message -->\r
    <div class="trust-message">\r
      <i class="fas fa-handshake"></i>\r
      <p>Transparence garantie. Chaque euro compte.</p>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ==================== FINAL CTA SECTION ==================== -->\r
<section class="final-cta-section">\r
  <div class="container">\r
    <h2>Rejoignez notre communaut\xE9 d'entraide</h2>\r
    <p>Que ce soit par une donation ou un partage, vous nous aidez \xE0 faire une diff\xE9rence r\xE9elle</p>\r
    <button class="btn-cta-final" (click)="supportAssociation()">\r
      <i class="fas fa-heart"></i> Soutenir maintenant\r
    </button>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/association-detail/association-detail.component.css */\n.container {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.hero-section {\n  position: relative;\n  height: 480px;\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n  margin-top: -60px;\n  padding-top: 60px;\n  margin-bottom: -60px;\n  padding-bottom: 60px;\n}\n.hero-image-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 0;\n}\n.hero-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.hero-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(15, 23, 42, 0.2) 0%,\n      rgba(15, 23, 42, 0.4) 50%,\n      rgba(15, 23, 42, 0.7) 100%);\n  z-index: 1;\n}\n.hero-content {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n}\n.hero-header {\n  display: flex;\n  align-items: flex-end;\n  gap: 24px;\n  color: white;\n}\n.logo-badge-large {\n  width: 100px;\n  height: 100px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 800;\n  font-size: 40px;\n  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.3);\n  border: 3px solid white;\n  flex-shrink: 0;\n}\n.hero-info {\n  flex: 1;\n}\n.hero-title-group {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.hero-title {\n  font-size: 44px;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n  line-height: 1.1;\n  margin: 0;\n}\n.verified-badge-hero {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: rgba(34, 197, 94, 0.95);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.verified-badge-hero i {\n  font-size: 16px;\n}\n.hero-tagline {\n  font-size: 18px;\n  opacity: 0.95;\n  margin: 0 0 16px 0;\n  line-height: 1.5;\n  max-width: 600px;\n}\n.hero-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.btn-primary,\n.btn-secondary {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: white;\n  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);\n}\n.btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.5);\n}\n.btn-secondary {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.btn-secondary:hover {\n  background: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0.6);\n}\n.stats-bar {\n  padding: 40px 20px;\n  background: white;\n  border-bottom: 1px solid #e5e7eb;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 24px;\n}\n.stat-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  background: #f9fafb;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  transition: all 0.2s ease;\n}\n.stat-card:hover {\n  background: white;\n  border-color: #22c55e;\n  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.1);\n}\n.stat-icon {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  border-radius: 10px;\n  color: white;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.stat-content {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-value {\n  font-size: 20px;\n  font-weight: 800;\n  color: #111827;\n}\n.stat-label {\n  font-size: 12px;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.main-content {\n  padding: 48px 20px;\n  background: #f9fafb;\n}\n.content-layout {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 32px;\n}\n.content-left {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.about-card {\n  background: white;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);\n  border: 1px solid #e5e7eb;\n}\n.about-card h2 {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #111827;\n}\n.about-content {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.about-content p {\n  font-size: 15px;\n  line-height: 1.7;\n  color: #4b5563;\n  margin: 0;\n}\n.about-content p.paragraph-title {\n  font-weight: 700;\n  color: #111827;\n  margin-top: 8px;\n}\n.campaigns-section {\n  background: white;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);\n  border: 1px solid #e5e7eb;\n}\n.campaigns-section h2 {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 8px;\n  color: #111827;\n}\n.section-subtitle {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 20px;\n}\n.campaigns-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 20px;\n}\n.campaign-card {\n  background: #f9fafb;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid #e5e7eb;\n  transition: all 0.3s ease;\n}\n.campaign-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.1);\n  border-color: #22c55e;\n}\n.campaign-image {\n  position: relative;\n  width: 100%;\n  height: 140px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4,\n      #f0f4ff);\n}\n.campaign-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.campaign-card:hover .campaign-image img {\n  transform: scale(1.05);\n}\n.campaign-status {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 6px 10px;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.status-active {\n  background: rgba(34, 197, 94, 0.95);\n  color: white;\n}\n.status-completed {\n  background: rgba(37, 99, 235, 0.95);\n  color: white;\n}\n.status-paused {\n  background: rgba(245, 158, 11, 0.95);\n  color: white;\n}\n.campaign-content {\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.campaign-title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n  line-height: 1.3;\n}\n.campaign-category {\n  font-size: 11px;\n  color: #2563eb;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin: 0;\n}\n.campaign-description {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.4;\n}\n.campaign-progress {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.progress-bar {\n  width: 100%;\n  height: 4px;\n  background: #e5e7eb;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #16a34a);\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.progress-text {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: #6b7280;\n}\n.progress-text span:first-child {\n  font-weight: 700;\n  color: #22c55e;\n}\n.link-view-campaign {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  transition: gap 0.2s ease;\n}\n.link-view-campaign:hover {\n  gap: 10px;\n}\n.trust-panel {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);\n  border: 1px solid #e5e7eb;\n  position: sticky;\n  top: 80px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  transition: all 0.3s ease;\n}\n.trust-panel.is-sticky {\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.15);\n}\n.verification-card {\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4,\n      #ecfdf5);\n  border: 1px solid #dcfce7;\n  border-radius: 10px;\n}\n.verification-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.verification-header i {\n  color: #22c55e;\n  font-size: 16px;\n}\n.verification-header h3 {\n  font-size: 13px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.verification-items {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.verification-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #15803d;\n  font-weight: 600;\n}\n.verification-item i {\n  color: #22c55e;\n  font-size: 14px;\n}\n.contact-card {\n  padding-top: 16px;\n  border-top: 1px solid #e5e7eb;\n}\n.contact-card h3 {\n  font-size: 13px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.contact-info {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.info-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 12px;\n  color: #4b5563;\n}\n.info-item i {\n  color: #2563eb;\n  font-size: 14px;\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.cta-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding-top: 12px;\n}\n.btn-primary-large,\n.btn-secondary-large {\n  padding: 12px 16px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.btn-primary-large {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: white;\n  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);\n}\n.btn-primary-large:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(34, 197, 94, 0.4);\n}\n.btn-secondary-large {\n  background: white;\n  color: #22c55e;\n  border: 2px solid #22c55e;\n}\n.btn-secondary-large:hover {\n  background: #f0fdf4;\n}\n.social-proof {\n  display: flex;\n  gap: 12px;\n  padding-top: 12px;\n  border-top: 1px solid #e5e7eb;\n}\n.proof-item {\n  flex: 1;\n  text-align: center;\n}\n.proof-number {\n  display: block;\n  font-size: 16px;\n  font-weight: 800;\n  color: #22c55e;\n  margin-bottom: 2px;\n}\n.proof-label {\n  display: block;\n  font-size: 11px;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.transparency-section {\n  padding: 60px 20px;\n  background: white;\n  border-top: 1px solid #e5e7eb;\n}\n.transparency-header {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.transparency-header h2 {\n  font-size: 28px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n}\n.transparency-header p {\n  font-size: 15px;\n  color: #6b7280;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.transparency-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 48px;\n  margin-bottom: 40px;\n  align-items: center;\n}\n.transparency-chart {\n  display: flex;\n  justify-content: center;\n}\n.chart-circle {\n  position: relative;\n  width: 280px;\n  height: 280px;\n}\n.pie-chart {\n  width: 100%;\n  height: 100%;\n  filter: drop-shadow(0 4px 12px rgba(15, 23, 42, 0.1));\n}\n.chart-center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.chart-center {\n  font-size: 32px;\n  font-weight: 800;\n  color: #111827;\n}\n.transparency-breakdown {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.breakdown-item {\n  display: flex;\n  gap: 16px;\n  padding: 16px;\n  background: #f9fafb;\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n}\n.breakdown-color {\n  width: 12px;\n  height: 100%;\n  border-radius: 4px;\n  flex-shrink: 0;\n  min-height: 60px;\n}\n.breakdown-content h4 {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 4px 0;\n}\n.breakdown-content p {\n  font-size: 13px;\n  font-weight: 700;\n  color: #2563eb;\n  margin: 0 0 4px 0;\n}\n.breakdown-desc {\n  display: block;\n  font-size: 12px;\n  color: #6b7280;\n}\n.trust-message {\n  text-align: center;\n  padding: 28px;\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4,\n      #ecfdf5);\n  border: 2px solid #dcfce7;\n  border-radius: 12px;\n}\n.trust-message i {\n  display: block;\n  font-size: 32px;\n  color: #22c55e;\n  margin-bottom: 12px;\n}\n.trust-message p {\n  font-size: 16px;\n  font-weight: 700;\n  color: #15803d;\n  margin: 0;\n}\n.final-cta-section {\n  padding: 60px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e 0%,\n      #16a34a 50%,\n      #2563eb 100%);\n  color: white;\n  text-align: center;\n}\n.final-cta-section h2 {\n  font-size: 32px;\n  font-weight: 800;\n  margin-bottom: 12px;\n  letter-spacing: -0.5px;\n}\n.final-cta-section p {\n  font-size: 16px;\n  opacity: 0.95;\n  margin-bottom: 28px;\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.btn-cta-final {\n  padding: 14px 32px;\n  background: white;\n  color: #22c55e;\n  border: none;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 15px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.btn-cta-final:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);\n}\n@media (max-width: 1024px) {\n  .content-layout {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .trust-panel {\n    position: relative;\n    top: auto;\n  }\n  .transparency-grid {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n  .hero-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .hero-title {\n    font-size: 32px;\n  }\n}\n@media (max-width: 768px) {\n  .hero-section {\n    height: 380px;\n    padding-bottom: 40px;\n  }\n  .hero-header {\n    gap: 16px;\n  }\n  .logo-badge-large {\n    width: 80px;\n    height: 80px;\n    font-size: 32px;\n  }\n  .hero-title {\n    font-size: 24px;\n  }\n  .hero-tagline {\n    font-size: 15px;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 16px;\n  }\n  .main-content {\n    padding: 32px 16px;\n  }\n  .about-card,\n  .campaigns-section,\n  .trust-panel {\n    padding: 20px;\n  }\n  .campaigns-grid {\n    grid-template-columns: 1fr;\n  }\n  .transparency-grid {\n    gap: 24px;\n  }\n  .transparency-breakdown {\n    gap: 16px;\n  }\n  .breakdown-item {\n    padding: 12px;\n  }\n  .final-cta-section {\n    padding: 40px 16px;\n  }\n  .final-cta-section h2 {\n    font-size: 24px;\n  }\n}\n@media (max-width: 480px) {\n  .hero-section {\n    height: 320px;\n    padding-bottom: 32px;\n  }\n  .hero-header {\n    gap: 12px;\n  }\n  .logo-badge-large {\n    width: 70px;\n    height: 70px;\n    font-size: 28px;\n  }\n  .hero-title {\n    font-size: 20px;\n  }\n  .hero-tagline {\n    font-size: 13px;\n  }\n  .hero-actions {\n    width: 100%;\n    flex-direction: column;\n  }\n  .btn-primary,\n  .btn-secondary {\n    width: 100%;\n    justify-content: center;\n  }\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  .stat-card {\n    padding: 16px;\n  }\n  .main-content {\n    padding: 24px 16px;\n  }\n  .about-card,\n  .campaigns-section,\n  .trust-panel {\n    padding: 16px;\n  }\n  .transparency-chart {\n    display: none;\n  }\n  .transparency-breakdown {\n    gap: 12px;\n  }\n  .breakdown-item {\n    padding: 12px;\n    gap: 12px;\n  }\n  .final-cta-section {\n    padding: 32px 16px;\n  }\n  .final-cta-section h2 {\n    font-size: 20px;\n  }\n  .cta-buttons {\n    flex-direction: column;\n  }\n  .btn-primary-large,\n  .btn-secondary-large {\n    padding: 10px 14px;\n    font-size: 12px;\n  }\n  .verified-badge-hero {\n    font-size: 10px;\n    padding: 6px 10px;\n  }\n}\n/*# sourceMappingURL=association-detail.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssociationDetailComponent, { className: "AssociationDetailComponent", filePath: "app/association-detail/association-detail.component.ts", lineNumber: 52 });
})();

// src/app/dashboard/donation-history.component.ts
function DonationHistoryComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15);
    \u0275\u0275element(3, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17)(5, "p", 18);
    \u0275\u0275text(6, "Donations totales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 14)(10, "div", 15);
    \u0275\u0275element(11, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 17)(13, "p", 18);
    \u0275\u0275text(14, "Montant total donn\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 19);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 14)(19, "div", 15);
    \u0275\u0275element(20, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "p", 18);
    \u0275\u0275text(23, "Demandes soutenues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 19);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 14)(27, "div", 15);
    \u0275\u0275element(28, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 17)(30, "p", 18);
    \u0275\u0275text(31, "Organisations soutenues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 19);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.stats.total_donations);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 4, ctx_r0.stats.total_amount, "1.2-2"), " TND");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.stats.requests_supported);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.stats.associations_supported);
  }
}
function DonationHistoryComponent_div_18_div_1_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275text(2, " Anonyme ");
    \u0275\u0275elementEnd();
  }
}
function DonationHistoryComponent_div_18_div_1_div_1_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const donation_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", donation_r3.message, " ");
  }
}
function DonationHistoryComponent_div_18_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275element(2, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31)(4, "div", 32)(5, "h3", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 34);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 35)(10, "span", 36);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 37);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, DonationHistoryComponent_div_18_div_1_div_1_span_15_Template, 3, 0, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, DonationHistoryComponent_div_18_div_1_div_1_p_16_Template, 3, 1, "p", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 40)(18, "button", 41);
    \u0275\u0275listener("click", function DonationHistoryComponent_div_18_div_1_div_1_Template_button_click_18_listener() {
      const donation_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.viewTarget(donation_r3));
    });
    \u0275\u0275element(19, "i", 42);
    \u0275\u0275text(20, " Voir ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const donation_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", "type-" + donation_r3.donation_type);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getTypeIcon(donation_r3.donation_type));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", donation_r3.target_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" +", donation_r3.amount, " TND ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getTypeLabel(donation_r3.donation_type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 8, donation_r3.created_at, "dd MMM yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", donation_r3.anonymous);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", donation_r3.message);
  }
}
function DonationHistoryComponent_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, DonationHistoryComponent_div_18_div_1_div_1_Template, 21, 11, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.donations);
  }
}
function DonationHistoryComponent_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucune donation pour le moment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, " Commencez \xE0 soutenir les demandes et associations SANAD pour voir votre historique de donations ici. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 49);
    \u0275\u0275text(8, " D\xE9couvrir les demandes ");
    \u0275\u0275elementEnd()();
  }
}
function DonationHistoryComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, DonationHistoryComponent_div_18_div_1_Template, 2, 1, "div", 24)(2, DonationHistoryComponent_div_18_div_2_Template, 9, 0, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.donations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.donations.length === 0);
  }
}
function DonationHistoryComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement de vos donations...");
    \u0275\u0275elementEnd()();
  }
}
var DonationHistoryComponent = class _DonationHistoryComponent {
  http = inject(HttpClient);
  donations = [];
  stats = null;
  loading = true;
  sortBy = "recent";
  ngOnInit() {
    this.loadDonations();
  }
  loadDonations() {
    this.loading = true;
    this.http.get("/backend/api/get_user_donations.php", {
      params: {
        sort: this.sortBy,
        limit: 20
      }
    }).subscribe({
      next: (response) => {
        if (response.success) {
          this.donations = response.data;
          this.stats = response.stats;
        }
      },
      error: (error) => {
        console.error("Error loading donations:", error);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
  getTypeIcon(type) {
    const icons = {
      request: "fa-hand-holding-heart",
      association: "fa-handshake",
      platform: "fa-heart"
    };
    return icons[type] || "fa-heart";
  }
  getTypeLabel(type) {
    const labels = {
      request: "Demande d'aide",
      association: "Association",
      platform: "Don libre"
    };
    return labels[type] || type;
  }
  viewTarget(donation) {
    if (donation.donation_type === "request" && donation.request_id) {
      window.location.href = `/request-detail/${donation.request_id}`;
    } else if (donation.donation_type === "association" && donation.association_id) {
      window.location.href = `/association-detail/${donation.association_id}`;
    }
  }
  static \u0275fac = function DonationHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DonationHistoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DonationHistoryComponent, selectors: [["app-donation-history"]], decls: 20, vars: 4, consts: [[1, "donation-history-section"], [1, "container"], [1, "history-header"], [1, "subtitle"], ["class", "stats-grid", 4, "ngIf"], [1, "controls"], [1, "sort-group"], ["for", "sort"], ["id", "sort", 3, "ngModelChange", "change", "ngModel"], ["value", "recent"], ["value", "amount"], ["class", "donations-container", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon"], [1, "fas", "fa-heart"], [1, "stat-content"], [1, "stat-label"], [1, "stat-value"], [1, "fas", "fa-euro-sign"], [1, "fas", "fa-hand-holding-heart"], [1, "fas", "fa-handshake"], [1, "donations-container"], ["class", "donations-list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "donations-list"], ["class", "donation-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "donation-item", 3, "ngClass"], [1, "item-type-icon"], [1, "fas", 3, "ngClass"], [1, "item-main"], [1, "item-header"], [1, "item-target"], [1, "item-amount"], [1, "item-meta"], [1, "meta-type"], [1, "meta-date"], ["class", "meta-anonymous", 4, "ngIf"], ["class", "item-message", 4, "ngIf"], [1, "item-actions"], [1, "action-btn", 3, "click"], [1, "fas", "fa-external-link-alt"], [1, "meta-anonymous"], [1, "fas", "fa-user-secret"], [1, "item-message"], [1, "fas", "fa-quote-left"], [1, "empty-state"], [1, "empty-icon"], ["href", "/explorer", 1, "btn-explore"], [1, "loading"], [1, "fas", "fa-spinner", "fa-spin"]], template: function DonationHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar");
      \u0275\u0275elementStart(1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "h1");
      \u0275\u0275text(5, "Mes donations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Suivi de vos contributions \xE0 la plateforme SANAD");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, DonationHistoryComponent_div_8_Template, 34, 7, "div", 4);
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "label", 7);
      \u0275\u0275text(12, "Trier par:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function DonationHistoryComponent_Template_select_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event);
        return $event;
      });
      \u0275\u0275listener("change", function DonationHistoryComponent_Template_select_change_13_listener() {
        return ctx.loadDonations();
      });
      \u0275\u0275elementStart(14, "option", 9);
      \u0275\u0275text(15, "R\xE9cent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 10);
      \u0275\u0275text(17, "Montant \xE9lev\xE9");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(18, DonationHistoryComponent_div_18_Template, 3, 2, "div", 11)(19, DonationHistoryComponent_div_19_Template, 4, 0, "div", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.stats);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.sortBy);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, NavbarComponent, DecimalPipe, DatePipe], styles: ["\n.donation-history-section[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  background: #f9fafb;\n  min-height: 100vh;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.history-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.history-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: #111827;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6b7280;\n  margin: 0;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 40px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: all 0.3s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #22c55e);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.stat-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin: 0;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #111827;\n  margin: 4px 0 0 0;\n}\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 32px;\n  background: white;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.sort-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sort-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.sort-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n  background: white;\n  cursor: pointer;\n}\n.donations-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.donation-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.donation-item[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.item-type-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8);\n  color: white;\n  flex-shrink: 0;\n}\n.donation-item.type-request[_ngcontent-%COMP%]   .item-type-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n}\n.donation-item.type-association[_ngcontent-%COMP%]   .item-type-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n}\n.donation-item.type-platform[_ngcontent-%COMP%]   .item-type-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ec4899,\n      #be185d);\n}\n.item-main[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  margin-bottom: 8px;\n  gap: 16px;\n}\n.item-target[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #111827;\n}\n.item-amount[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #22c55e;\n  white-space: nowrap;\n}\n.item-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 8px;\n  font-size: 12px;\n}\n.meta-type[_ngcontent-%COMP%], \n.meta-date[_ngcontent-%COMP%], \n.meta-anonymous[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 4px;\n  color: #6b7280;\n}\n.meta-type[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}\n.meta-date[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}\n.meta-anonymous[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.item-message[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 8px 12px;\n  background: #f0f9ff;\n  border-left: 3px solid #2563eb;\n  font-size: 13px;\n  color: #1e40af;\n  font-style: italic;\n}\n.item-actions[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f9fafb;\n  border-left: 1px solid #e5e7eb;\n}\n.action-btn[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  background: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n  transform: translateY(-2px);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  border: 2px dashed #d1d5db;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #d1d5db;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 8px 0;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 20px 0;\n}\n.btn-explore[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 20px;\n  background: #2563eb;\n  color: white;\n  text-decoration: none;\n  border-radius: 6px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-explore[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n  transform: translateY(-2px);\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #6b7280;\n}\n.loading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 16px;\n  color: #2563eb;\n}\n@media (max-width: 768px) {\n  .donation-history-section[_ngcontent-%COMP%] {\n    padding: 40px 16px;\n  }\n  .history-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 16px;\n  }\n  .stat-icon[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n    font-size: 20px;\n  }\n  .donation-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .item-actions[_ngcontent-%COMP%] {\n    border-left: none;\n    border-top: 1px solid #e5e7eb;\n    justify-content: flex-end;\n  }\n  .item-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .item-amount[_ngcontent-%COMP%] {\n    order: -1;\n  }\n}\n/*# sourceMappingURL=donation-history.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DonationHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-donation-history", standalone: true, imports: [CommonModule, FormsModule, NavbarComponent], template: `
    <app-navbar></app-navbar>

    <section class="donation-history-section">
      <div class="container">
        <!-- Header -->
        <div class="history-header">
          <h1>Mes donations</h1>
          <p class="subtitle">Suivi de vos contributions \xE0 la plateforme SANAD</p>
        </div>

        <!-- Stats Cards -->
        <div class="stats-grid" *ngIf="stats">
          <div class="stat-card">
            <div class="stat-icon">
              <i class="fas fa-heart"></i>
            </div>
            <div class="stat-content">
              <p class="stat-label">Donations totales</p>
              <p class="stat-value">{{ stats.total_donations }}</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              <i class="fas fa-euro-sign"></i>
            </div>
            <div class="stat-content">
              <p class="stat-label">Montant total donn\xE9</p>
              <p class="stat-value">{{ stats.total_amount | number:'1.2-2' }} TND</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              <i class="fas fa-hand-holding-heart"></i>
            </div>
            <div class="stat-content">
              <p class="stat-label">Demandes soutenues</p>
              <p class="stat-value">{{ stats.requests_supported }}</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              <i class="fas fa-handshake"></i>
            </div>
            <div class="stat-content">
              <p class="stat-label">Organisations soutenues</p>
              <p class="stat-value">{{ stats.associations_supported }}</p>
            </div>
          </div>
        </div>

        <!-- Sort & Filter -->
        <div class="controls">
          <div class="sort-group">
            <label for="sort">Trier par:</label>
            <select id="sort" [(ngModel)]="sortBy" (change)="loadDonations()">
              <option value="recent">R\xE9cent</option>
              <option value="amount">Montant \xE9lev\xE9</option>
            </select>
          </div>
        </div>

        <!-- Donations List -->
        <div class="donations-container" *ngIf="!loading">
          <div *ngIf="donations.length > 0" class="donations-list">
            <div
              class="donation-item"
              *ngFor="let donation of donations"
              [ngClass]="'type-' + donation.donation_type"
            >
              <!-- Type Badge -->
              <div class="item-type-icon">
                <i
                  class="fas"
                  [ngClass]="getTypeIcon(donation.donation_type)"
                ></i>
              </div>

              <!-- Main Info -->
              <div class="item-main">
                <div class="item-header">
                  <h3 class="item-target">
                    {{ donation.target_name }}
                  </h3>
                  <span class="item-amount">
                    +{{ donation.amount }} TND
                  </span>
                </div>

                <div class="item-meta">
                  <span class="meta-type">
                    {{ getTypeLabel(donation.donation_type) }}
                  </span>
                  <span class="meta-date">
                    {{ donation.created_at | date: 'dd MMM yyyy' }}
                  </span>
                  <span
                    class="meta-anonymous"
                    *ngIf="donation.anonymous"
                  >
                    <i class="fas fa-user-secret"></i> Anonyme
                  </span>
                </div>

                <p class="item-message" *ngIf="donation.message">
                  <i class="fas fa-quote-left"></i>
                  {{ donation.message }}
                </p>
              </div>

              <!-- Actions -->
              <div class="item-actions">
                <button class="action-btn" (click)="viewTarget(donation)">
                  <i class="fas fa-external-link-alt"></i>
                  Voir
                </button>
              </div>
            </div>
          </div>

          <div *ngIf="donations.length === 0" class="empty-state">
            <div class="empty-icon">
              <i class="fas fa-heart"></i>
            </div>
            <h3>Aucune donation pour le moment</h3>
            <p>
              Commencez \xE0 soutenir les demandes et associations SANAD pour voir
              votre historique de donations ici.
            </p>
            <a href="/explorer" class="btn-explore">
              D\xE9couvrir les demandes
            </a>
          </div>
        </div>

        <!-- Loading State -->
        <div class="loading" *ngIf="loading">
          <i class="fas fa-spinner fa-spin"></i>
          <p>Chargement de vos donations...</p>
        </div>
      </div>
    </section>
  `, styles: ["/* angular:styles/component:css;cd8190e749c8a690e9dac382d8b4ae343d6d84bba81483747dd9a21bbb63853f;C:/xampp/htdocs/PROJET SANAD/src/app/dashboard/donation-history.component.ts */\n.donation-history-section {\n  padding: 60px 20px;\n  background: #f9fafb;\n  min-height: 100vh;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.history-header {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.history-header h1 {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: #111827;\n}\n.subtitle {\n  font-size: 16px;\n  color: #6b7280;\n  margin: 0;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 40px;\n}\n.stat-card {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: all 0.3s ease;\n}\n.stat-card:hover {\n  border-color: #2563eb;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);\n}\n.stat-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #22c55e);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.stat-content {\n  flex: 1;\n}\n.stat-label {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin: 0;\n}\n.stat-value {\n  font-size: 24px;\n  font-weight: 700;\n  color: #111827;\n  margin: 4px 0 0 0;\n}\n.controls {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 32px;\n  background: white;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.sort-group {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sort-group label {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.sort-group select {\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n  background: white;\n  cursor: pointer;\n}\n.donations-list {\n  display: grid;\n  gap: 12px;\n}\n.donation-item {\n  display: flex;\n  align-items: stretch;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.donation-item:hover {\n  border-color: #2563eb;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.item-type-icon {\n  width: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8);\n  color: white;\n  flex-shrink: 0;\n}\n.donation-item.type-request .item-type-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n}\n.donation-item.type-association .item-type-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n}\n.donation-item.type-platform .item-type-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #ec4899,\n      #be185d);\n}\n.item-main {\n  flex: 1;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.item-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  margin-bottom: 8px;\n  gap: 16px;\n}\n.item-target {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #111827;\n}\n.item-amount {\n  font-size: 16px;\n  font-weight: 700;\n  color: #22c55e;\n  white-space: nowrap;\n}\n.item-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 8px;\n  font-size: 12px;\n}\n.meta-type,\n.meta-date,\n.meta-anonymous {\n  padding: 4px 8px;\n  border-radius: 4px;\n  color: #6b7280;\n}\n.meta-type {\n  background: #f3f4f6;\n}\n.meta-date {\n  background: #f3f4f6;\n}\n.meta-anonymous {\n  background: #fef3c7;\n  color: #92400e;\n}\n.item-message {\n  margin: 0;\n  padding: 8px 12px;\n  background: #f0f9ff;\n  border-left: 3px solid #2563eb;\n  font-size: 13px;\n  color: #1e40af;\n  font-style: italic;\n}\n.item-actions {\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f9fafb;\n  border-left: 1px solid #e5e7eb;\n}\n.action-btn {\n  padding: 8px 12px;\n  background: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.action-btn:hover {\n  background: #1d4ed8;\n  transform: translateY(-2px);\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  border: 2px dashed #d1d5db;\n}\n.empty-icon {\n  font-size: 64px;\n  color: #d1d5db;\n  margin-bottom: 16px;\n}\n.empty-state h3 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 8px 0;\n}\n.empty-state p {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 20px 0;\n}\n.btn-explore {\n  display: inline-block;\n  padding: 10px 20px;\n  background: #2563eb;\n  color: white;\n  text-decoration: none;\n  border-radius: 6px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-explore:hover {\n  background: #1d4ed8;\n  transform: translateY(-2px);\n}\n.loading {\n  text-align: center;\n  padding: 60px 20px;\n  color: #6b7280;\n}\n.loading i {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 16px;\n  color: #2563eb;\n}\n@media (max-width: 768px) {\n  .donation-history-section {\n    padding: 40px 16px;\n  }\n  .history-header h1 {\n    font-size: 24px;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .stat-card {\n    flex-direction: column;\n    text-align: center;\n    padding: 16px;\n  }\n  .stat-icon {\n    width: 48px;\n    height: 48px;\n    font-size: 20px;\n  }\n  .donation-item {\n    flex-direction: column;\n  }\n  .item-actions {\n    border-left: none;\n    border-top: 1px solid #e5e7eb;\n    justify-content: flex-end;\n  }\n  .item-header {\n    flex-direction: column;\n  }\n  .item-amount {\n    order: -1;\n  }\n}\n/*# sourceMappingURL=donation-history.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DonationHistoryComponent, { className: "DonationHistoryComponent", filePath: "app/dashboard/donation-history.component.ts", lineNumber: 540 });
})();

// src/app/user/profile/user-profile.component.ts
var UserProfileComponent = class _UserProfileComponent {
  userData;
  profile = {
    name: "Amira Rahman",
    email: "amira@sanad.tn",
    phone: "+216 22 345 678",
    bio: "Engagee pour les causes familiales et l'education des enfants."
  };
  isEditing = false;
  constructor(userData) {
    this.userData = userData;
  }
  ngOnInit() {
    this.userData.getProfile().subscribe({
      next: (response) => {
        if (response.success) {
          this.profile = {
            name: response.data.fullName,
            email: response.data.email,
            phone: response.data.phone ?? "",
            bio: this.profile.bio
          };
        }
      }
    });
  }
  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
  static \u0275fac = function UserProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserProfileComponent)(\u0275\u0275directiveInject(UserDataService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserProfileComponent, selectors: [["app-user-profile"]], decls: 48, vars: 12, consts: [[1, "profile"], [1, "profile-header"], [1, "avatar"], [1, "badge"], ["type", "button", 1, "edit-btn", 3, "click"], [1, "profile-grid"], [1, "profile-card"], [3, "ngModelChange", "ngModel", "disabled"], ["rows", "4", 3, "ngModelChange", "ngModel", "disabled"], ["type", "button", 1, "primary", 3, "disabled"], ["type", "password", "placeholder", "******"], ["type", "password", "placeholder", "Nouveau mot de passe"], ["type", "password", "placeholder", "Confirmer"], ["type", "button", 1, "secondary"]], template: function UserProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-logged-in-navbar");
      \u0275\u0275elementStart(1, "main", 0)(2, "section", 1)(3, "div", 2);
      \u0275\u0275text(4, "AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div")(6, "h1");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 3);
      \u0275\u0275text(11, "Profil verifie");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 4);
      \u0275\u0275listener("click", function UserProfileComponent_Template_button_click_12_listener() {
        return ctx.toggleEdit();
      });
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "section", 5)(15, "div", 6)(16, "h2");
      \u0275\u0275text(17, "Informations personnelles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "label");
      \u0275\u0275text(19, "Nom complet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.profile.name, $event) || (ctx.profile.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "label");
      \u0275\u0275text(22, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.profile.email, $event) || (ctx.profile.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "label");
      \u0275\u0275text(25, "Telephone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.profile.phone, $event) || (ctx.profile.phone = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "label");
      \u0275\u0275text(28, "Bio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "textarea", 8);
      \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_textarea_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.profile.bio, $event) || (ctx.profile.bio = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 9);
      \u0275\u0275text(31, " Enregistrer les modifications ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 6)(33, "h2");
      \u0275\u0275text(34, "Securite");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p");
      \u0275\u0275text(36, "Modifiez votre mot de passe pour proteger votre compte.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "label");
      \u0275\u0275text(38, "Mot de passe actuel");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "input", 10);
      \u0275\u0275elementStart(40, "label");
      \u0275\u0275text(41, "Nouveau mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 11);
      \u0275\u0275elementStart(43, "label");
      \u0275\u0275text(44, "Confirmer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "input", 12);
      \u0275\u0275elementStart(46, "button", 13);
      \u0275\u0275text(47, " Mettre a jour le mot de passe ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.profile.name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.profile.email);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.isEditing ? "Annuler" : "Modifier le profil", " ");
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.profile.name);
      \u0275\u0275property("disabled", !ctx.isEditing);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.profile.email);
      \u0275\u0275property("disabled", true);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.profile.phone);
      \u0275\u0275property("disabled", !ctx.isEditing);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.profile.bio);
      \u0275\u0275property("disabled", !ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.isEditing);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, LoggedInNavbarComponent], styles: ["\n.profile[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 30px 20px 60px;\n  display: grid;\n  gap: 24px;\n}\n.profile-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 20px;\n  align-items: center;\n  background: #fff;\n  padding: 20px;\n  border-radius: 16px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #2563eb);\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n  font-size: 18px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 4px 10px;\n  background: #e2fbe8;\n  color: #166534;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #fff;\n  border: none;\n  padding: 10px 16px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 600;\n}\n.profile-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 20px;\n}\n.profile-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  display: grid;\n  gap: 12px;\n  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08);\n}\n.profile-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 14px;\n}\ninput[_ngcontent-%COMP%]:disabled, \ntextarea[_ngcontent-%COMP%]:disabled {\n  background: #f1f5f9;\n}\n.primary[_ngcontent-%COMP%], \n.secondary[_ngcontent-%COMP%] {\n  border: none;\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.primary[_ngcontent-%COMP%] {\n  background: #0ea5e9;\n  color: #fff;\n}\n.secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n}\n@media (max-width: 768px) {\n  .profile-header[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=user-profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileComponent, [{
    type: Component,
    args: [{ selector: "app-user-profile", standalone: true, imports: [CommonModule, FormsModule, LoggedInNavbarComponent], template: `<app-logged-in-navbar></app-logged-in-navbar>\r
\r
<main class="profile">\r
  <section class="profile-header">\r
    <div class="avatar">AM</div>\r
    <div>\r
      <h1>{{ profile.name }}</h1>\r
      <p>{{ profile.email }}</p>\r
      <span class="badge">Profil verifie</span>\r
    </div>\r
    <button class="edit-btn" type="button" (click)="toggleEdit()">\r
      {{ isEditing ? 'Annuler' : 'Modifier le profil' }}\r
    </button>\r
  </section>\r
\r
  <section class="profile-grid">\r
    <div class="profile-card">\r
      <h2>Informations personnelles</h2>\r
      <label>Nom complet</label>\r
      <input [(ngModel)]="profile.name" [disabled]="!isEditing" />\r
\r
      <label>Email</label>\r
      <input [(ngModel)]="profile.email" [disabled]="true" />\r
\r
      <label>Telephone</label>\r
      <input [(ngModel)]="profile.phone" [disabled]="!isEditing" />\r
\r
      <label>Bio</label>\r
      <textarea rows="4" [(ngModel)]="profile.bio" [disabled]="!isEditing"></textarea>\r
\r
      <button class="primary" type="button" [disabled]="!isEditing">\r
        Enregistrer les modifications\r
      </button>\r
    </div>\r
\r
    <div class="profile-card">\r
      <h2>Securite</h2>\r
      <p>Modifiez votre mot de passe pour proteger votre compte.</p>\r
\r
      <label>Mot de passe actuel</label>\r
      <input type="password" placeholder="******" />\r
\r
      <label>Nouveau mot de passe</label>\r
      <input type="password" placeholder="Nouveau mot de passe" />\r
\r
      <label>Confirmer</label>\r
      <input type="password" placeholder="Confirmer" />\r
\r
      <button class="secondary" type="button">\r
        Mettre a jour le mot de passe\r
      </button>\r
    </div>\r
  </section>\r
</main>\r
`, styles: ["/* src/app/user/profile/user-profile.component.css */\n.profile {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 30px 20px 60px;\n  display: grid;\n  gap: 24px;\n}\n.profile-header {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 20px;\n  align-items: center;\n  background: #fff;\n  padding: 20px;\n  border-radius: 16px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n}\n.avatar {\n  width: 64px;\n  height: 64px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #2563eb);\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n  font-size: 18px;\n}\n.badge {\n  display: inline-flex;\n  padding: 4px 10px;\n  background: #e2fbe8;\n  color: #166534;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.edit-btn {\n  background: #0f172a;\n  color: #fff;\n  border: none;\n  padding: 10px 16px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 600;\n}\n.profile-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 20px;\n}\n.profile-card {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  display: grid;\n  gap: 12px;\n  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08);\n}\n.profile-card h2 {\n  margin: 0 0 6px;\n}\nlabel {\n  font-size: 12px;\n  color: #64748b;\n}\ninput,\ntextarea {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 14px;\n}\ninput:disabled,\ntextarea:disabled {\n  background: #f1f5f9;\n}\n.primary,\n.secondary {\n  border: none;\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.primary {\n  background: #0ea5e9;\n  color: #fff;\n}\n.secondary {\n  background: #e2e8f0;\n}\n@media (max-width: 768px) {\n  .profile-header {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=user-profile.component.css.map */\n"] }]
  }], () => [{ type: UserDataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserProfileComponent, { className: "UserProfileComponent", filePath: "app/user/profile/user-profile.component.ts", lineNumber: 14 });
})();

// src/app/user/my-requests/my-requests.component.ts
function MyRequestsComponent_div_10_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 8)(1, "div", 9)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 11)(7, "div", 12);
    \u0275\u0275element(8, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 13)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 14)(17, "button", 15);
    \u0275\u0275text(18, "Modifier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 15);
    \u0275\u0275text(20, "Supprimer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 16);
    \u0275\u0275text(22, "Voir");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const request_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(request_r1.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("complete", request_r1.status === "completed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", request_r1.status, " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.getProgress(request_r1), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.getProgress(request_r1), "% atteint");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", request_r1.donors_count, " donateurs");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getAmountLabel(request_r1));
  }
}
function MyRequestsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, MyRequestsComponent_div_10_article_1_Template, 23, 9, "article", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.requests);
  }
}
function MyRequestsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "p");
    \u0275\u0275text(2, "Aucune demande disponible.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 2);
    \u0275\u0275text(4, "Publier une demande");
    \u0275\u0275elementEnd()();
  }
}
function MyRequestsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "p");
    \u0275\u0275text(2, "Chargement des demandes...");
    \u0275\u0275elementEnd()();
  }
}
var MyRequestsComponent = class _MyRequestsComponent {
  userData;
  requests = [];
  loading = true;
  constructor(userData) {
    this.userData = userData;
  }
  ngOnInit() {
    this.userData.getMyRequests().subscribe({
      next: (response) => {
        if (response.success) {
          this.requests = response.data;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  getProgress(request) {
    const target = Number(request.target_amount) || 1;
    const collected = Number(request.collected_amount) || 0;
    return Math.min(100, Math.round(collected / target * 100));
  }
  getAmountLabel(request) {
    const collected = Math.round(Number(request.collected_amount) || 0);
    const target = Math.round(Number(request.target_amount) || 0);
    return `${collected} / ${target} TND`;
  }
  static \u0275fac = function MyRequestsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyRequestsComponent)(\u0275\u0275directiveInject(UserDataService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyRequestsComponent, selectors: [["app-my-requests"]], decls: 13, vars: 3, consts: [[1, "requests"], [1, "header"], ["routerLink", "/requests/new", 1, "primary"], ["class", "request-list", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [1, "request-list"], ["class", "request-card", 4, "ngFor", "ngForOf"], [1, "request-card"], [1, "request-head"], [1, "status"], [1, "progress"], [1, "progress-bar"], [1, "progress-meta"], [1, "actions"], ["type", "button", 1, "ghost"], ["routerLink", "/request-detail", 1, "link"], [1, "empty"], [1, "loading"]], template: function MyRequestsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-logged-in-navbar");
      \u0275\u0275elementStart(1, "main", 0)(2, "header", 1)(3, "div")(4, "h1");
      \u0275\u0275text(5, "Mes demandes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Suivez l\\'etat de vos demandes et gardez le controle.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 2);
      \u0275\u0275text(9, "Publier une demande");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, MyRequestsComponent_div_10_Template, 2, 1, "div", 3)(11, MyRequestsComponent_div_11_Template, 5, 0, "div", 4)(12, MyRequestsComponent_div_12_Template, 3, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.requests.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.requests.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, LoggedInNavbarComponent], styles: ["\n.requests[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 30px 20px 60px;\n  display: grid;\n  gap: 20px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n}\n.primary[_ngcontent-%COMP%] {\n  background: #0ea5e9;\n  color: #fff;\n  padding: 10px 16px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 600;\n}\n.request-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n.request-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 18px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n  display: grid;\n  gap: 16px;\n}\n.request-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.status[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.status.complete[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 999px;\n  background: #e2e8f0;\n  overflow: hidden;\n}\n.progress-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #0ea5e9);\n}\n.progress-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #64748b;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.ghost[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  background: transparent;\n  padding: 6px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.link[_ngcontent-%COMP%] {\n  color: #0ea5e9;\n  text-decoration: none;\n  font-weight: 600;\n}\n.empty[_ngcontent-%COMP%], \n.loading[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  text-align: center;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n}\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .progress-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n  }\n}\n/*# sourceMappingURL=my-requests.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyRequestsComponent, [{
    type: Component,
    args: [{ selector: "app-my-requests", standalone: true, imports: [CommonModule, RouterLink, LoggedInNavbarComponent], template: `<app-logged-in-navbar></app-logged-in-navbar>\r
\r
<main class="requests">\r
  <header class="header">\r
    <div>\r
      <h1>Mes demandes</h1>\r
      <p>Suivez l\\'etat de vos demandes et gardez le controle.</p>\r
    </div>\r
    <a class="primary" routerLink="/requests/new">Publier une demande</a>\r
  </header>\r
\r
  <div class="request-list" *ngIf="!loading && requests.length > 0">\r
    <article class="request-card" *ngFor="let request of requests">\r
      <div class="request-head">\r
        <h2>{{ request.title }}</h2>\r
        <span class="status" [class.complete]="request.status === 'completed'">\r
          {{ request.status }}\r
        </span>\r
      </div>\r
\r
      <div class="progress">\r
        <div class="progress-bar">\r
          <span [style.width.%]="getProgress(request)"></span>\r
        </div>\r
        <div class="progress-meta">\r
          <span>{{ getProgress(request) }}% atteint</span>\r
          <span>{{ request.donors_count }} donateurs</span>\r
          <span>{{ getAmountLabel(request) }}</span>\r
        </div>\r
      </div>\r
\r
      <div class="actions">\r
        <button type="button" class="ghost">Modifier</button>\r
        <button type="button" class="ghost">Supprimer</button>\r
        <a routerLink="/request-detail" class="link">Voir</a>\r
      </div>\r
    </article>\r
  </div>\r
\r
  <div class="empty" *ngIf="!loading && requests.length === 0">\r
    <p>Aucune demande disponible.</p>\r
    <a class="primary" routerLink="/requests/new">Publier une demande</a>\r
  </div>\r
\r
  <div class="loading" *ngIf="loading">\r
    <p>Chargement des demandes...</p>\r
  </div>\r
</main>\r
`, styles: ["/* src/app/user/my-requests/my-requests.component.css */\n.requests {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 30px 20px 60px;\n  display: grid;\n  gap: 20px;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n}\n.primary {\n  background: #0ea5e9;\n  color: #fff;\n  padding: 10px 16px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 600;\n}\n.request-list {\n  display: grid;\n  gap: 16px;\n}\n.request-card {\n  background: #fff;\n  border-radius: 16px;\n  padding: 18px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n  display: grid;\n  gap: 16px;\n}\n.request-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.status {\n  background: #e0f2fe;\n  color: #0369a1;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.status.complete {\n  background: #dcfce7;\n  color: #166534;\n}\n.progress-bar {\n  height: 8px;\n  border-radius: 999px;\n  background: #e2e8f0;\n  overflow: hidden;\n}\n.progress-bar span {\n  display: block;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #0ea5e9);\n}\n.progress-meta {\n  display: flex;\n  gap: 16px;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #64748b;\n}\n.actions {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.ghost {\n  border: 1px solid #e2e8f0;\n  background: transparent;\n  padding: 6px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.link {\n  color: #0ea5e9;\n  text-decoration: none;\n  font-weight: 600;\n}\n.empty,\n.loading {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  text-align: center;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n}\n@media (max-width: 768px) {\n  .header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .progress-meta {\n    flex-direction: column;\n    gap: 4px;\n  }\n}\n/*# sourceMappingURL=my-requests.component.css.map */\n"] }]
  }], () => [{ type: UserDataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyRequestsComponent, { className: "MyRequestsComponent", filePath: "app/user/my-requests/my-requests.component.ts", lineNumber: 14 });
})();

// src/app/user/my-donations/my-donations.component.ts
function MyDonationsComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7)(1, "div", 8)(2, "span");
    \u0275\u0275text(3, "Total dons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8)(7, "span");
    \u0275\u0275text(8, "Montant total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 8)(13, "span");
    \u0275\u0275text(14, "Demandes soutenues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.stats.total_donations);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 3, ctx_r0.stats.total_amount, "1.0-0"), " TND");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.stats.requests_supported);
  }
}
function MyDonationsComponent_div_11_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 11)(1, "div")(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 12);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const donation_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(donation_r2.target_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", donation_r2.donation_type, " \u2022 ", \u0275\u0275pipeBind2(6, 4, donation_r2.created_at, "dd MMM yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", donation_r2.amount, " TND");
  }
}
function MyDonationsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, MyDonationsComponent_div_11_article_1_Template, 9, 7, "article", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.donations);
  }
}
function MyDonationsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "p");
    \u0275\u0275text(2, "Aucun don pour le moment.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 2);
    \u0275\u0275text(4, "Faire un don");
    \u0275\u0275elementEnd()();
  }
}
function MyDonationsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "p");
    \u0275\u0275text(2, "Chargement des dons...");
    \u0275\u0275elementEnd()();
  }
}
var MyDonationsComponent = class _MyDonationsComponent {
  userData;
  donations = [];
  stats = null;
  loading = true;
  constructor(userData) {
    this.userData = userData;
  }
  ngOnInit() {
    this.userData.getMyDonations().subscribe({
      next: (response) => {
        if (response.success) {
          this.donations = response.data;
          this.stats = response.stats;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static \u0275fac = function MyDonationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyDonationsComponent)(\u0275\u0275directiveInject(UserDataService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyDonationsComponent, selectors: [["app-my-donations"]], decls: 14, vars: 4, consts: [[1, "donations"], [1, "header"], ["routerLink", "/donate", 1, "primary"], ["class", "stats", 4, "ngIf"], ["class", "donation-list", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [1, "stats"], [1, "stat-card"], [1, "donation-list"], ["class", "donation-card", 4, "ngFor", "ngForOf"], [1, "donation-card"], [1, "meta"], [1, "amount"], [1, "empty"], [1, "loading"]], template: function MyDonationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-logged-in-navbar");
      \u0275\u0275elementStart(1, "main", 0)(2, "header", 1)(3, "div")(4, "h1");
      \u0275\u0275text(5, "Mes dons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Historique detaille de vos contributions.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 2);
      \u0275\u0275text(9, "Faire un don");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, MyDonationsComponent_section_10_Template, 17, 6, "section", 3)(11, MyDonationsComponent_div_11_Template, 2, 1, "div", 4)(12, MyDonationsComponent_div_12_Template, 5, 0, "div", 5)(13, MyDonationsComponent_div_13_Template, 3, 0, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.stats);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.donations.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.donations.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, LoggedInNavbarComponent, DecimalPipe, DatePipe], styles: ["\n.donations[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 30px 20px 60px;\n  display: grid;\n  gap: 20px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n}\n.primary[_ngcontent-%COMP%] {\n  background: #0ea5e9;\n  color: #fff;\n  padding: 10px 16px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 600;\n}\n.donation-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 12px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 14px;\n  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.06);\n  display: grid;\n  gap: 6px;\n  font-size: 13px;\n  color: #64748b;\n}\n.stat-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #0f172a;\n}\n.donation-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 18px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.meta[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 4px 0 0;\n}\n.amount[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.empty[_ngcontent-%COMP%], \n.loading[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  text-align: center;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n}\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .donation-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=my-donations.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyDonationsComponent, [{
    type: Component,
    args: [{ selector: "app-my-donations", standalone: true, imports: [CommonModule, RouterLink, LoggedInNavbarComponent], template: `<app-logged-in-navbar></app-logged-in-navbar>\r
\r
<main class="donations">\r
  <header class="header">\r
    <div>\r
      <h1>Mes dons</h1>\r
      <p>Historique detaille de vos contributions.</p>\r
    </div>\r
    <a class="primary" routerLink="/donate">Faire un don</a>\r
  </header>\r
\r
  <section class="stats" *ngIf="stats">\r
    <div class="stat-card">\r
      <span>Total dons</span>\r
      <strong>{{ stats.total_donations }}</strong>\r
    </div>\r
    <div class="stat-card">\r
      <span>Montant total</span>\r
      <strong>{{ stats.total_amount | number:'1.0-0' }} TND</strong>\r
    </div>\r
    <div class="stat-card">\r
      <span>Demandes soutenues</span>\r
      <strong>{{ stats.requests_supported }}</strong>\r
    </div>\r
  </section>\r
\r
  <div class="donation-list" *ngIf="!loading && donations.length > 0">\r
    <article class="donation-card" *ngFor="let donation of donations">\r
      <div>\r
        <h2>{{ donation.target_name }}</h2>\r
        <p class="meta">\r
          {{ donation.donation_type }} \u2022 {{ donation.created_at | date: 'dd MMM yyyy' }}\r
        </p>\r
      </div>\r
      <div class="amount">{{ donation.amount }} TND</div>\r
    </article>\r
  </div>\r
\r
  <div class="empty" *ngIf="!loading && donations.length === 0">\r
    <p>Aucun don pour le moment.</p>\r
    <a class="primary" routerLink="/donate">Faire un don</a>\r
  </div>\r
\r
  <div class="loading" *ngIf="loading">\r
    <p>Chargement des dons...</p>\r
  </div>\r
</main>\r
`, styles: ["/* src/app/user/my-donations/my-donations.component.css */\n.donations {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 30px 20px 60px;\n  display: grid;\n  gap: 20px;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n}\n.primary {\n  background: #0ea5e9;\n  color: #fff;\n  padding: 10px 16px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 600;\n}\n.donation-list {\n  display: grid;\n  gap: 16px;\n}\n.stats {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 12px;\n}\n.stat-card {\n  background: #fff;\n  border-radius: 14px;\n  padding: 14px;\n  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.06);\n  display: grid;\n  gap: 6px;\n  font-size: 13px;\n  color: #64748b;\n}\n.stat-card strong {\n  font-size: 20px;\n  color: #0f172a;\n}\n.donation-card {\n  background: #fff;\n  border-radius: 16px;\n  padding: 18px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.meta {\n  color: #64748b;\n  margin: 4px 0 0;\n}\n.amount {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.empty,\n.loading {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  text-align: center;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n}\n@media (max-width: 768px) {\n  .header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .donation-card {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=my-donations.component.css.map */\n"] }]
  }], () => [{ type: UserDataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyDonationsComponent, { className: "MyDonationsComponent", filePath: "app/user/my-donations/my-donations.component.ts", lineNumber: 14 });
})();

// src/app/user/notifications/notifications.component.ts
function NotificationsComponent_div_10_article_1_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function NotificationsComponent_div_10_article_1_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.markRead(item_r2));
    });
    \u0275\u0275text(1, " Marquer comme lu ");
    \u0275\u0275elementEnd();
  }
}
function NotificationsComponent_div_10_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 8)(1, "div")(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 9)(7, "span", 10);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, NotificationsComponent_div_10_article_1_button_10_Template, 2, 0, "button", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275classProp("unread", !item_r2.isRead);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.detail);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 6, item_r2.date, "dd MMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !item_r2.isRead);
  }
}
function NotificationsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, NotificationsComponent_div_10_article_1_Template, 11, 9, "article", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.notifications);
  }
}
function NotificationsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p");
    \u0275\u0275text(2, "Aucune notification recente.");
    \u0275\u0275elementEnd()();
  }
}
function NotificationsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "p");
    \u0275\u0275text(2, "Chargement des notifications...");
    \u0275\u0275elementEnd()();
  }
}
var NotificationsComponent = class _NotificationsComponent {
  userData;
  notifications = [];
  loading = true;
  isUpdating = false;
  constructor(userData) {
    this.userData = userData;
  }
  ngOnInit() {
    this.userData.getNotifications().subscribe({
      next: (response) => {
        if (response.success) {
          this.notifications = response.data;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  markAllRead() {
    if (this.isUpdating) {
      return;
    }
    this.isUpdating = true;
    this.userData.markAllNotificationsRead().subscribe({
      next: (response) => {
        if (response.success) {
          this.notifications = this.notifications.map((item) => __spreadProps(__spreadValues({}, item), {
            isRead: true
          }));
        }
        this.isUpdating = false;
      },
      error: () => {
        this.isUpdating = false;
      }
    });
  }
  markRead(item) {
    if (this.isUpdating || item.isRead) {
      return;
    }
    this.isUpdating = true;
    this.userData.markNotificationRead(item.id).subscribe({
      next: (response) => {
        if (response.success) {
          item.isRead = true;
        }
        this.isUpdating = false;
      },
      error: () => {
        this.isUpdating = false;
      }
    });
  }
  static \u0275fac = function NotificationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsComponent)(\u0275\u0275directiveInject(UserDataService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsComponent, selectors: [["app-notifications"]], decls: 13, vars: 4, consts: [[1, "notifications"], [1, "header"], ["type", "button", 1, "secondary", 3, "click", "disabled"], ["class", "notification-list", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [1, "notification-list"], ["class", "notification-card", 3, "unread", 4, "ngFor", "ngForOf"], [1, "notification-card"], [1, "meta"], [1, "date"], ["class", "mark-read", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "mark-read", 3, "click"], [1, "empty"], [1, "loading"]], template: function NotificationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-logged-in-navbar");
      \u0275\u0275elementStart(1, "main", 0)(2, "header", 1)(3, "div")(4, "h1");
      \u0275\u0275text(5, "Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Restez informe en temps reel.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 2);
      \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_8_listener() {
        return ctx.markAllRead();
      });
      \u0275\u0275text(9, " Tout marquer comme lu ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, NotificationsComponent_div_10_Template, 2, 1, "div", 3)(11, NotificationsComponent_div_11_Template, 3, 0, "div", 4)(12, NotificationsComponent_div_12_Template, 3, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.isUpdating || ctx.notifications.length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.notifications.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.notifications.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, LoggedInNavbarComponent, DatePipe], styles: ["\n.notifications[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 30px 20px 60px;\n  display: grid;\n  gap: 20px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n}\n.secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  border: none;\n  padding: 10px 16px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 600;\n}\n.notification-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n.notification-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 18px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n}\n.notification-card.unread[_ngcontent-%COMP%] {\n  border: 1px solid #bae6fd;\n  background: #f0f9ff;\n}\n.notification-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 16px;\n}\n.notification-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n}\n.date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n.meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  align-items: flex-end;\n}\n.mark-read[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #0ea5e9;\n  color: #0ea5e9;\n  padding: 6px 10px;\n  border-radius: 10px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.mark-read[_ngcontent-%COMP%]:hover {\n  background: #e0f2fe;\n}\n.empty[_ngcontent-%COMP%], \n.loading[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  text-align: center;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n}\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .notification-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=notifications.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsComponent, [{
    type: Component,
    args: [{ selector: "app-notifications", standalone: true, imports: [CommonModule, LoggedInNavbarComponent], template: `<app-logged-in-navbar></app-logged-in-navbar>\r
\r
<main class="notifications">\r
  <header class="header">\r
    <div>\r
      <h1>Notifications</h1>\r
      <p>Restez informe en temps reel.</p>\r
    </div>\r
    <button\r
      class="secondary"\r
      type="button"\r
      (click)="markAllRead()"\r
      [disabled]="isUpdating || notifications.length === 0"\r
    >\r
      Tout marquer comme lu\r
    </button>\r
  </header>\r
\r
  <div class="notification-list" *ngIf="!loading && notifications.length > 0">\r
    <article\r
      class="notification-card"\r
      *ngFor="let item of notifications"\r
      [class.unread]="!item.isRead"\r
    >\r
      <div>\r
        <h2>{{ item.title }}</h2>\r
        <p>{{ item.detail }}</p>\r
      </div>\r
      <div class="meta">\r
        <span class="date">{{ item.date | date: 'dd MMM yyyy' }}</span>\r
        <button\r
          class="mark-read"\r
          type="button"\r
          *ngIf="!item.isRead"\r
          (click)="markRead(item)"\r
        >\r
          Marquer comme lu\r
        </button>\r
      </div>\r
    </article>\r
  </div>\r
\r
  <div class="empty" *ngIf="!loading && notifications.length === 0">\r
    <p>Aucune notification recente.</p>\r
  </div>\r
\r
  <div class="loading" *ngIf="loading">\r
    <p>Chargement des notifications...</p>\r
  </div>\r
</main>\r
`, styles: ["/* src/app/user/notifications/notifications.component.css */\n.notifications {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 30px 20px 60px;\n  display: grid;\n  gap: 20px;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n}\n.secondary {\n  background: #e2e8f0;\n  border: none;\n  padding: 10px 16px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 600;\n}\n.notification-list {\n  display: grid;\n  gap: 14px;\n}\n.notification-card {\n  background: #fff;\n  border-radius: 16px;\n  padding: 18px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n}\n.notification-card.unread {\n  border: 1px solid #bae6fd;\n  background: #f0f9ff;\n}\n.notification-card h2 {\n  margin: 0 0 6px;\n  font-size: 16px;\n}\n.notification-card p {\n  margin: 0;\n  color: #64748b;\n}\n.date {\n  font-size: 12px;\n  color: #64748b;\n}\n.meta {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  align-items: flex-end;\n}\n.mark-read {\n  background: transparent;\n  border: 1px solid #0ea5e9;\n  color: #0ea5e9;\n  padding: 6px 10px;\n  border-radius: 10px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.mark-read:hover {\n  background: #e0f2fe;\n}\n.empty,\n.loading {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  text-align: center;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n}\n@media (max-width: 768px) {\n  .header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .notification-card {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=notifications.component.css.map */\n"] }]
  }], () => [{ type: UserDataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsComponent, { className: "NotificationsComponent", filePath: "app/user/notifications/notifications.component.ts", lineNumber: 13 });
})();

// src/app/user/publish-request/publish-request.component.ts
var PublishRequestComponent = class _PublishRequestComponent {
  model = {
    title: "",
    category: "",
    urgency: "high",
    location: "",
    amount: ""
  };
  static \u0275fac = function PublishRequestComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublishRequestComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublishRequestComponent, selectors: [["app-publish-request"]], decls: 40, vars: 5, consts: [[1, "publish"], [1, "header"], [1, "publish-form"], ["name", "title", "placeholder", "Aide alimentaire", 3, "ngModelChange", "ngModel"], [1, "grid"], ["name", "category", "placeholder", "Sante, Education", 3, "ngModelChange", "ngModel"], ["name", "urgency", 3, "ngModelChange", "ngModel"], ["value", "high"], ["value", "medium"], ["value", "low"], ["name", "location", "placeholder", "Tunis", 3, "ngModelChange", "ngModel"], ["name", "amount", "placeholder", "25000", 3, "ngModelChange", "ngModel"], ["rows", "4", "placeholder", "Expliquez l\\'impact attendu."], ["type", "button", 1, "primary"]], template: function PublishRequestComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-logged-in-navbar");
      \u0275\u0275elementStart(1, "main", 0)(2, "header", 1)(3, "h1");
      \u0275\u0275text(4, "Publier une demande");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Deposez une demande claire et transparente.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "form", 2)(8, "label");
      \u0275\u0275text(9, "Titre de la demande");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function PublishRequestComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.title, $event) || (ctx.model.title = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 4)(12, "div")(13, "label");
      \u0275\u0275text(14, "Categorie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function PublishRequestComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.category, $event) || (ctx.model.category = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div")(17, "label");
      \u0275\u0275text(18, "Urgence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function PublishRequestComponent_Template_select_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.urgency, $event) || (ctx.model.urgency = $event);
        return $event;
      });
      \u0275\u0275elementStart(20, "option", 7);
      \u0275\u0275text(21, "Elevee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 8);
      \u0275\u0275text(23, "Moyenne");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 9);
      \u0275\u0275text(25, "Basse");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "div", 4)(27, "div")(28, "label");
      \u0275\u0275text(29, "Localisation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function PublishRequestComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.location, $event) || (ctx.model.location = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div")(32, "label");
      \u0275\u0275text(33, "Montant souhaite");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function PublishRequestComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.amount, $event) || (ctx.model.amount = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "label");
      \u0275\u0275text(36, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "textarea", 12);
      \u0275\u0275elementStart(38, "button", 13);
      \u0275\u0275text(39, "Publier");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.title);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.category);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.urgency);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.location);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.amount);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, LoggedInNavbarComponent], styles: ["\n.publish[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 30px 20px 60px;\n  display: grid;\n  gap: 20px;\n}\n.header[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n}\n.publish-form[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  display: grid;\n  gap: 12px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 12px;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 14px;\n}\n.primary[_ngcontent-%COMP%] {\n  background: #0ea5e9;\n  color: #fff;\n  border: none;\n  padding: 12px 18px;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n}\n/*# sourceMappingURL=publish-request.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublishRequestComponent, [{
    type: Component,
    args: [{ selector: "app-publish-request", standalone: true, imports: [CommonModule, FormsModule, LoggedInNavbarComponent], template: `<app-logged-in-navbar></app-logged-in-navbar>\r
\r
<main class="publish">\r
  <header class="header">\r
    <h1>Publier une demande</h1>\r
    <p>Deposez une demande claire et transparente.</p>\r
  </header>\r
\r
  <form class="publish-form">\r
    <label>Titre de la demande</label>\r
    <input [(ngModel)]="model.title" name="title" placeholder="Aide alimentaire" />\r
\r
    <div class="grid">\r
      <div>\r
        <label>Categorie</label>\r
        <input [(ngModel)]="model.category" name="category" placeholder="Sante, Education" />\r
      </div>\r
      <div>\r
        <label>Urgence</label>\r
        <select [(ngModel)]="model.urgency" name="urgency">\r
          <option value="high">Elevee</option>\r
          <option value="medium">Moyenne</option>\r
          <option value="low">Basse</option>\r
        </select>\r
      </div>\r
    </div>\r
\r
    <div class="grid">\r
      <div>\r
        <label>Localisation</label>\r
        <input [(ngModel)]="model.location" name="location" placeholder="Tunis" />\r
      </div>\r
      <div>\r
        <label>Montant souhaite</label>\r
        <input [(ngModel)]="model.amount" name="amount" placeholder="25000" />\r
      </div>\r
    </div>\r
\r
    <label>Description</label>\r
    <textarea rows="4" placeholder="Expliquez l\\'impact attendu."></textarea>\r
\r
    <button class="primary" type="button">Publier</button>\r
  </form>\r
</main>\r
`, styles: ["/* src/app/user/publish-request/publish-request.component.css */\n.publish {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 30px 20px 60px;\n  display: grid;\n  gap: 20px;\n}\n.header {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n}\n.publish-form {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  display: grid;\n  gap: 12px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 12px;\n}\nlabel {\n  font-size: 12px;\n  color: #64748b;\n}\ninput,\nselect,\ntextarea {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 14px;\n}\n.primary {\n  background: #0ea5e9;\n  color: #fff;\n  border: none;\n  padding: 12px 18px;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n}\n/*# sourceMappingURL=publish-request.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublishRequestComponent, { className: "PublishRequestComponent", filePath: "app/user/publish-request/publish-request.component.ts", lineNumber: 13 });
})();

// src/app/user/donate/donate.component.ts
var DonateComponent = class _DonateComponent {
  amount = 120;
  static \u0275fac = function DonateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DonateComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DonateComponent, selectors: [["app-donate"]], decls: 43, vars: 1, consts: [[1, "donate"], [1, "hero"], [1, "donate-card"], [1, "donation-types"], [1, "type-card"], [1, "amount-grid"], ["type", "button"], ["type", "number", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "primary"]], template: function DonateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-logged-in-navbar");
      \u0275\u0275elementStart(1, "main", 0)(2, "section", 1)(3, "h1");
      \u0275\u0275text(4, "Faire un don");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Chaque contribution finance des actions concretes et transparentes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "section", 2)(8, "div")(9, "h2");
      \u0275\u0275text(10, "Choisir un montant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p");
      \u0275\u0275text(12, "Votre don sera dirige vers les demandes prioritaires.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 3)(14, "div", 4)(15, "h3");
      \u0275\u0275text(16, "Don pour une demande");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, "Soutenir un projet precis.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 4)(20, "h3");
      \u0275\u0275text(21, "Don pour une association");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p");
      \u0275\u0275text(23, "Accompagner une organisation.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 4)(25, "h3");
      \u0275\u0275text(26, "Don libre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p");
      \u0275\u0275text(28, "Contribution generale a la plateforme.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 5)(30, "button", 6);
      \u0275\u0275text(31, "50 TND");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 6);
      \u0275\u0275text(33, "100 TND");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 6);
      \u0275\u0275text(35, "250 TND");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 6);
      \u0275\u0275text(37, "500 TND");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "label");
      \u0275\u0275text(39, "Montant libre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function DonateComponent_Template_input_ngModelChange_40_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.amount, $event) || (ctx.amount = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 8);
      \u0275\u0275text(42, "Confirmer le don");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(40);
      \u0275\u0275twoWayProperty("ngModel", ctx.amount);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, LoggedInNavbarComponent], styles: ["\n.donate[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 30px 20px 60px;\n  display: grid;\n  gap: 20px;\n}\n.hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #ecfdf5);\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n}\n.donate-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  display: grid;\n  gap: 14px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n}\n.amount-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 10px;\n}\n.donation-types[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n}\n.type-card[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 12px;\n  background: #f8fafc;\n}\n.type-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 16px;\n}\n.type-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 13px;\n}\n.amount-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\ninput[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 14px;\n}\n.primary[_ngcontent-%COMP%] {\n  background: #0ea5e9;\n  color: #fff;\n  border: none;\n  padding: 12px 18px;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n}\n/*# sourceMappingURL=donate.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DonateComponent, [{
    type: Component,
    args: [{ selector: "app-donate", standalone: true, imports: [CommonModule, FormsModule, LoggedInNavbarComponent], template: '<app-logged-in-navbar></app-logged-in-navbar>\r\n\r\n<main class="donate">\r\n  <section class="hero">\r\n    <h1>Faire un don</h1>\r\n    <p>Chaque contribution finance des actions concretes et transparentes.</p>\r\n  </section>\r\n\r\n  <section class="donate-card">\r\n    <div>\r\n      <h2>Choisir un montant</h2>\r\n      <p>Votre don sera dirige vers les demandes prioritaires.</p>\r\n    </div>\r\n    <div class="donation-types">\r\n      <div class="type-card">\r\n        <h3>Don pour une demande</h3>\r\n        <p>Soutenir un projet precis.</p>\r\n      </div>\r\n      <div class="type-card">\r\n        <h3>Don pour une association</h3>\r\n        <p>Accompagner une organisation.</p>\r\n      </div>\r\n      <div class="type-card">\r\n        <h3>Don libre</h3>\r\n        <p>Contribution generale a la plateforme.</p>\r\n      </div>\r\n    </div>\r\n    <div class="amount-grid">\r\n      <button type="button">50 TND</button>\r\n      <button type="button">100 TND</button>\r\n      <button type="button">250 TND</button>\r\n      <button type="button">500 TND</button>\r\n    </div>\r\n    <label>Montant libre</label>\r\n    <input type="number" [(ngModel)]="amount" />\r\n    <button class="primary" type="button">Confirmer le don</button>\r\n  </section>\r\n</main>\r\n', styles: ["/* src/app/user/donate/donate.component.css */\n.donate {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 30px 20px 60px;\n  display: grid;\n  gap: 20px;\n}\n.hero {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #ecfdf5);\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n}\n.donate-card {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  display: grid;\n  gap: 14px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n}\n.amount-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 10px;\n}\n.donation-types {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n}\n.type-card {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 12px;\n  background: #f8fafc;\n}\n.type-card h3 {\n  margin: 0 0 6px;\n  font-size: 16px;\n}\n.type-card p {\n  margin: 0;\n  color: #64748b;\n  font-size: 13px;\n}\n.amount-grid button {\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\ninput {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 14px;\n}\n.primary {\n  background: #0ea5e9;\n  color: #fff;\n  border: none;\n  padding: 12px 18px;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n}\n/*# sourceMappingURL=donate.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DonateComponent, { className: "DonateComponent", filePath: "app/user/donate/donate.component.ts", lineNumber: 13 });
})();

// src/app/user/saved-requests/saved-requests.component.ts
var _c06 = (a0) => ["/request-detail", a0];
function SavedRequestsComponent_div_10_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 8)(1, "div", 9)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 10)(7, "div", 11);
    \u0275\u0275element(8, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 12)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 13)(15, "button", 14);
    \u0275\u0275listener("click", function SavedRequestsComponent_div_10_article_1_Template_button_click_15_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeFavorite(item_r2.request_id));
    });
    \u0275\u0275text(16, "Retirer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 15);
    \u0275\u0275text(18, "Voir");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.location);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r2.getProgress(item_r2), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.getProgress(item_r2), "% atteint");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r2.donors_count, " donateurs");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c06, item_r2.request_id));
  }
}
function SavedRequestsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, SavedRequestsComponent_div_10_article_1_Template, 19, 9, "article", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.favorites);
  }
}
function SavedRequestsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "p");
    \u0275\u0275text(2, "Aucune demande sauvegardee.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 2);
    \u0275\u0275text(4, "Explorer les demandes");
    \u0275\u0275elementEnd()();
  }
}
function SavedRequestsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "p");
    \u0275\u0275text(2, "Chargement des demandes sauvegardees...");
    \u0275\u0275elementEnd()();
  }
}
var SavedRequestsComponent = class _SavedRequestsComponent {
  userData;
  favorites = [];
  loading = true;
  constructor(userData) {
    this.userData = userData;
  }
  ngOnInit() {
    this.loadFavorites();
  }
  loadFavorites() {
    this.userData.getFavorites().subscribe({
      next: (response) => {
        if (response.success) {
          this.favorites = response.data;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  removeFavorite(requestId) {
    this.userData.removeFavorite(requestId).subscribe({
      next: (response) => {
        if (response.success) {
          this.favorites = this.favorites.filter((item) => item.request_id !== requestId);
        }
      }
    });
  }
  getProgress(item) {
    const target = Number(item.target_amount) || 1;
    const collected = Number(item.collected_amount) || 0;
    return Math.min(100, Math.round(collected / target * 100));
  }
  static \u0275fac = function SavedRequestsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SavedRequestsComponent)(\u0275\u0275directiveInject(UserDataService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SavedRequestsComponent, selectors: [["app-saved-requests"]], decls: 13, vars: 3, consts: [[1, "saved"], [1, "header"], ["routerLink", "/explorer", 1, "primary"], ["class", "saved-grid", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [1, "saved-grid"], ["class", "saved-card", 4, "ngFor", "ngForOf"], [1, "saved-card"], [1, "saved-header"], [1, "progress"], [1, "progress-bar"], [1, "progress-meta"], [1, "actions"], ["type", "button", 1, "ghost", 3, "click"], [1, "link", 3, "routerLink"], [1, "empty"], [1, "loading"]], template: function SavedRequestsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-logged-in-navbar");
      \u0275\u0275elementStart(1, "main", 0)(2, "header", 1)(3, "div")(4, "h1");
      \u0275\u0275text(5, "Demandes sauvegardees");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Retrouvez rapidement les demandes que vous suivez.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 2);
      \u0275\u0275text(9, "Explorer");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, SavedRequestsComponent_div_10_Template, 2, 1, "div", 3)(11, SavedRequestsComponent_div_11_Template, 5, 0, "div", 4)(12, SavedRequestsComponent_div_12_Template, 3, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.favorites.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.favorites.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, LoggedInNavbarComponent], styles: ["\n.saved[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 30px 20px 60px;\n  display: grid;\n  gap: 20px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n}\n.primary[_ngcontent-%COMP%] {\n  background: #0ea5e9;\n  color: #fff;\n  padding: 10px 16px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 600;\n}\n.saved-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n.saved-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 18px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n  display: grid;\n  gap: 14px;\n}\n.saved-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 999px;\n  background: #e2e8f0;\n  overflow: hidden;\n}\n.progress-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #0ea5e9);\n}\n.progress-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #64748b;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.ghost[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  background: transparent;\n  padding: 6px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.link[_ngcontent-%COMP%] {\n  color: #0ea5e9;\n  text-decoration: none;\n  font-weight: 600;\n}\n.empty[_ngcontent-%COMP%], \n.loading[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  text-align: center;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n}\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .progress-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 6px;\n  }\n}\n/*# sourceMappingURL=saved-requests.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedRequestsComponent, [{
    type: Component,
    args: [{ selector: "app-saved-requests", standalone: true, imports: [CommonModule, RouterLink, LoggedInNavbarComponent], template: `<app-logged-in-navbar></app-logged-in-navbar>\r
\r
<main class="saved">\r
  <header class="header">\r
    <div>\r
      <h1>Demandes sauvegardees</h1>\r
      <p>Retrouvez rapidement les demandes que vous suivez.</p>\r
    </div>\r
    <a class="primary" routerLink="/explorer">Explorer</a>\r
  </header>\r
\r
  <div class="saved-grid" *ngIf="!loading && favorites.length > 0">\r
    <article class="saved-card" *ngFor="let item of favorites">\r
      <div class="saved-header">\r
        <h2>{{ item.title }}</h2>\r
        <span>{{ item.location }}</span>\r
      </div>\r
      <div class="progress">\r
        <div class="progress-bar">\r
          <span [style.width.%]="getProgress(item)"></span>\r
        </div>\r
        <div class="progress-meta">\r
          <span>{{ getProgress(item) }}% atteint</span>\r
          <span>{{ item.donors_count }} donateurs</span>\r
        </div>\r
      </div>\r
      <div class="actions">\r
        <button type="button" class="ghost" (click)="removeFavorite(item.request_id)">Retirer</button>\r
        <a class="link" [routerLink]="['/request-detail', item.request_id]">Voir</a>\r
      </div>\r
    </article>\r
  </div>\r
\r
  <div class="empty" *ngIf="!loading && favorites.length === 0">\r
    <p>Aucune demande sauvegardee.</p>\r
    <a class="primary" routerLink="/explorer">Explorer les demandes</a>\r
  </div>\r
\r
  <div class="loading" *ngIf="loading">\r
    <p>Chargement des demandes sauvegardees...</p>\r
  </div>\r
</main>\r
`, styles: ["/* src/app/user/saved-requests/saved-requests.component.css */\n.saved {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 30px 20px 60px;\n  display: grid;\n  gap: 20px;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n}\n.primary {\n  background: #0ea5e9;\n  color: #fff;\n  padding: 10px 16px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 600;\n}\n.saved-grid {\n  display: grid;\n  gap: 16px;\n}\n.saved-card {\n  background: #fff;\n  border-radius: 16px;\n  padding: 18px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n  display: grid;\n  gap: 14px;\n}\n.saved-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.progress-bar {\n  height: 8px;\n  border-radius: 999px;\n  background: #e2e8f0;\n  overflow: hidden;\n}\n.progress-bar span {\n  display: block;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #0ea5e9);\n}\n.progress-meta {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #64748b;\n}\n.actions {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.ghost {\n  border: 1px solid #e2e8f0;\n  background: transparent;\n  padding: 6px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.link {\n  color: #0ea5e9;\n  text-decoration: none;\n  font-weight: 600;\n}\n.empty,\n.loading {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  text-align: center;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n}\n@media (max-width: 768px) {\n  .header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .progress-meta {\n    flex-direction: column;\n    gap: 6px;\n  }\n}\n/*# sourceMappingURL=saved-requests.component.css.map */\n"] }]
  }], () => [{ type: UserDataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SavedRequestsComponent, { className: "SavedRequestsComponent", filePath: "app/user/saved-requests/saved-requests.component.ts", lineNumber: 14 });
})();

// src/app/user/activity-history/activity-history.component.ts
function ActivityHistoryComponent_div_8_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 7)(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 9);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r1.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.meta);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 6, item_r1.date, "dd MMM yyyy"));
  }
}
function ActivityHistoryComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, ActivityHistoryComponent_div_8_article_1_Template, 11, 9, "article", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.activities);
  }
}
function ActivityHistoryComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p");
    \u0275\u0275text(2, "Aucune activite pour le moment.");
    \u0275\u0275elementEnd()();
  }
}
function ActivityHistoryComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "p");
    \u0275\u0275text(2, "Chargement de l'historique...");
    \u0275\u0275elementEnd()();
  }
}
var ActivityHistoryComponent = class _ActivityHistoryComponent {
  userData;
  activities = [];
  loading = true;
  constructor(userData) {
    this.userData = userData;
  }
  ngOnInit() {
    forkJoin({
      donations: this.userData.getMyDonations(),
      requests: this.userData.getMyRequests(),
      notifications: this.userData.getNotifications()
    }).subscribe({
      next: ({ donations, requests, notifications }) => {
        const activityList = [];
        if (donations?.success) {
          donations.data.forEach((item) => {
            activityList.push({
              type: "donation",
              title: `Don de ${item.amount} TND`,
              meta: item.target_name,
              date: item.created_at
            });
          });
        }
        if (requests?.success) {
          requests.data.forEach((item) => {
            activityList.push({
              type: "request",
              title: "Demande publiee",
              meta: item.title,
              date: item.created_at
            });
          });
        }
        if (notifications?.success) {
          notifications.data.forEach((item) => {
            activityList.push({
              type: "notification",
              title: item.title,
              meta: item.detail,
              date: item.date
            });
          });
        }
        this.activities = activityList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static \u0275fac = function ActivityHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActivityHistoryComponent)(\u0275\u0275directiveInject(UserDataService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActivityHistoryComponent, selectors: [["app-activity-history"]], decls: 11, vars: 3, consts: [[1, "activity"], [1, "header"], ["class", "activity-list", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [1, "activity-list"], ["class", "activity-card", 4, "ngFor", "ngForOf"], [1, "activity-card"], [1, "tag"], [1, "date"], [1, "empty"], [1, "loading"]], template: function ActivityHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-logged-in-navbar");
      \u0275\u0275elementStart(1, "main", 0)(2, "header", 1)(3, "div")(4, "h1");
      \u0275\u0275text(5, "Historique d'activite");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Vos actions recentes sur la plateforme.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(8, ActivityHistoryComponent_div_8_Template, 2, 1, "div", 2)(9, ActivityHistoryComponent_div_9_Template, 3, 0, "div", 3)(10, ActivityHistoryComponent_div_10_Template, 3, 0, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.activities.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.activities.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, LoggedInNavbarComponent, DatePipe], styles: ["\n.activity[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 30px 20px 60px;\n  display: grid;\n  gap: 20px;\n}\n.header[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n}\n.activity-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.activity-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 16px;\n  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.06);\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 16px;\n  align-items: center;\n}\n.tag[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 6px 10px;\n  border-radius: 999px;\n  background: #e2e8f0;\n  color: #334155;\n}\n.tag.donation[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.tag.request[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.tag.notification[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n.empty[_ngcontent-%COMP%], \n.loading[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  text-align: center;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n}\n@media (max-width: 768px) {\n  .activity-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=activity-history.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActivityHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-activity-history", standalone: true, imports: [CommonModule, LoggedInNavbarComponent], template: `<app-logged-in-navbar></app-logged-in-navbar>\r
\r
<main class="activity">\r
  <header class="header">\r
    <div>\r
      <h1>Historique d'activite</h1>\r
      <p>Vos actions recentes sur la plateforme.</p>\r
    </div>\r
  </header>\r
\r
  <div class="activity-list" *ngIf="!loading && activities.length > 0">\r
    <article class="activity-card" *ngFor="let item of activities">\r
      <span class="tag" [class]="item.type">{{ item.type }}</span>\r
      <div>\r
        <h2>{{ item.title }}</h2>\r
        <p>{{ item.meta }}</p>\r
      </div>\r
      <span class="date">{{ item.date | date: 'dd MMM yyyy' }}</span>\r
    </article>\r
  </div>\r
\r
  <div class="empty" *ngIf="!loading && activities.length === 0">\r
    <p>Aucune activite pour le moment.</p>\r
  </div>\r
\r
  <div class="loading" *ngIf="loading">\r
    <p>Chargement de l'historique...</p>\r
  </div>\r
</main>\r
`, styles: ["/* src/app/user/activity-history/activity-history.component.css */\n.activity {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 30px 20px 60px;\n  display: grid;\n  gap: 20px;\n}\n.header {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n}\n.activity-list {\n  display: grid;\n  gap: 12px;\n}\n.activity-card {\n  background: #fff;\n  border-radius: 14px;\n  padding: 16px;\n  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.06);\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 16px;\n  align-items: center;\n}\n.tag {\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 6px 10px;\n  border-radius: 999px;\n  background: #e2e8f0;\n  color: #334155;\n}\n.tag.donation {\n  background: #dcfce7;\n  color: #166534;\n}\n.tag.request {\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.tag.notification {\n  background: #fef3c7;\n  color: #92400e;\n}\n.date {\n  font-size: 12px;\n  color: #64748b;\n}\n.empty,\n.loading {\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  text-align: center;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);\n}\n@media (max-width: 768px) {\n  .activity-card {\n    grid-template-columns: 1fr;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=activity-history.component.css.map */\n"] }]
  }], () => [{ type: UserDataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActivityHistoryComponent, { className: "ActivityHistoryComponent", filePath: "app/user/activity-history/activity-history.component.ts", lineNumber: 21 });
})();

// src/app/admin/admin.guard.ts
var adminGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const role = auth.getRole();
  const token = auth.getToken();
  if (token && role === "admin") {
    return true;
  }
  router.navigateByUrl("/auth/login");
  return false;
};

// src/app/app.routes.ts
var routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "explorer", component: ExplorerComponent },
  { path: "request-detail", component: RequestDetailComponent },
  { path: "request-detail/:id", component: RequestDetailComponent },
  { path: "associations", component: AssociationsComponent },
  { path: "association-detail", component: AssociationDetailComponent },
  { path: "association-detail/:id", component: AssociationDetailComponent },
  { path: "auth/login", component: LoginComponent },
  { path: "auth/register", component: RegisterComponent },
  { path: "auth/pending", component: PendingComponent },
  { path: "auth/rejected", component: RejectedComponent },
  { path: "dashboard", component: DashboardComponent },
  {
    path: "association/dashboard",
    loadComponent: () => import("./chunk-MB4DRGYN.js").then((m) => m.AssociationDashboardComponent)
  },
  {
    path: "association/explorer",
    loadComponent: () => import("./chunk-OY4CQCGX.js").then((m) => m.AssociationExplorerComponent)
  },
  {
    path: "association/campaigns",
    loadComponent: () => import("./chunk-RSLGFE75.js").then((m) => m.AssociationCampaignsComponent)
  },
  {
    path: "association/campaigns/new",
    loadComponent: () => import("./chunk-6XUDP5VX.js").then((m) => m.AssociationCreateCampaignComponent)
  },
  {
    path: "association/donations",
    loadComponent: () => import("./chunk-WKNDJDBV.js").then((m) => m.AssociationDonationsComponent)
  },
  {
    path: "association/profile",
    loadComponent: () => import("./chunk-OSPSTVNO.js").then((m) => m.AssociationProfileComponent)
  },
  { path: "profile", component: UserProfileComponent },
  { path: "my-requests", component: MyRequestsComponent },
  { path: "my-donations", component: MyDonationsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "saved", component: SavedRequestsComponent },
  { path: "activity", component: ActivityHistoryComponent },
  { path: "requests/new", component: PublishRequestComponent },
  { path: "donate", component: DonateComponent },
  { path: "dashboard/donations", component: DonationHistoryComponent },
  {
    path: "admin-dashboard",
    canActivate: [adminGuard],
    loadComponent: () => import("./chunk-YJIVL5DO.js").then((m) => m.AdminDashboardComponent)
  },
  {
    path: "admin/associations",
    canActivate: [adminGuard],
    loadComponent: () => import("./chunk-LQ2RSH4T.js").then((m) => m.AdminAssociationsComponent)
  },
  {
    path: "admin/requests",
    canActivate: [adminGuard],
    loadComponent: () => import("./chunk-QWO4HZ2M.js").then((m) => m.AdminRequestsComponent)
  },
  {
    path: "admin/donations",
    canActivate: [adminGuard],
    loadComponent: () => import("./chunk-AQNOLTED.js").then((m) => m.AdminDonationsComponent)
  },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter(routes)
  ]
};

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet], template: "<router-outlet></router-outlet>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "app/app.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
