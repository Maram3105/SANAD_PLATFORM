import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-VFFHWYMA.js";
import {
  AssociationDataService,
  AssociationNavbarComponent
} from "./chunk-FJV2TO27.js";
import {
  ActivatedRoute,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  Router,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-BNXH775N.js";

// src/app/association/association-create-campaign/association-create-campaign.component.ts
var _c0 = (a0) => ["/request-detail", a0];
var _forTrack0 = ($index, $item) => $item.id;
function AssociationCreateCampaignComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div")(2, "p", 31);
    \u0275\u0275text(3, "Campagne derivee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 32);
    \u0275\u0275text(9, "Voir la demande");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.parentRequest()) == null ? null : tmp_1_0.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.parentRequest()) == null ? null : tmp_2_0.description);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, ctx_r0.parentRequestId()));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-image", ctx_r0.derivedImageUrl() ? "url(" + ctx_r0.derivedImageUrl() + ")" : "linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(34, 197, 94, 0.2))");
  }
}
function AssociationCreateCampaignComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    \u0275\u0275property("value", category_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r2.name);
  }
}
function AssociationCreateCampaignComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
var AssociationCreateCampaignComponent = class _AssociationCreateCampaignComponent {
  associationService = inject(AssociationDataService);
  fb = inject(FormBuilder);
  router = inject(Router);
  route = inject(ActivatedRoute);
  categories = signal([], ...ngDevMode ? [{ debugName: "categories" }] : (
    /* istanbul ignore next */
    []
  ));
  imageFile = signal(null, ...ngDevMode ? [{ debugName: "imageFile" }] : (
    /* istanbul ignore next */
    []
  ));
  submitting = signal(false, ...ngDevMode ? [{ debugName: "submitting" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  parentRequestId = signal(null, ...ngDevMode ? [{ debugName: "parentRequestId" }] : (
    /* istanbul ignore next */
    []
  ));
  parentRequest = signal(null, ...ngDevMode ? [{ debugName: "parentRequest" }] : (
    /* istanbul ignore next */
    []
  ));
  derivedImageUrl = computed(() => this.associationService.imageUrl(this.parentRequest()?.image_url || null), ...ngDevMode ? [{ debugName: "derivedImageUrl" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.group({
    title: ["", Validators.required],
    description: ["", Validators.required],
    full_description: [""],
    goal_amount: [0, [Validators.required, Validators.min(1)]],
    category_id: [null, Validators.required],
    location: ["", Validators.required],
    urgency: ["medium", Validators.required]
  });
  constructor() {
    this.associationService.getCategories().subscribe({
      next: (response) => {
        if (response.success) {
          this.categories.set(response.data);
        }
      }
    });
    const requestIdParam = this.route.snapshot.queryParamMap.get("parentRequestId");
    const requestId = requestIdParam ? Number(requestIdParam) : null;
    if (requestId && Number.isFinite(requestId)) {
      this.parentRequestId.set(requestId);
      this.prefillFromRequest(requestId);
    }
  }
  prefillFromRequest(requestId) {
    this.associationService.getRequestDetail(requestId).subscribe({
      next: (response) => {
        if (response.status !== "success") {
          return;
        }
        const request = response.data.request;
        this.parentRequest.set(request);
        this.form.patchValue({
          title: request.title,
          description: request.description,
          full_description: request.full_description || request.description,
          location: request.location,
          category_id: request.category_id ?? null,
          urgency: request.urgency
        });
      }
    });
  }
  onFileSelected(event) {
    const input = event.target;
    this.imageFile.set(input.files?.[0] ?? null);
  }
  submit() {
    if (this.form.invalid || this.submitting()) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting.set(true);
    this.error.set("");
    const formData = new FormData();
    formData.append("title", String(this.form.value.title ?? "").trim());
    formData.append("description", String(this.form.value.description ?? "").trim());
    formData.append("full_description", String(this.form.value.full_description ?? "").trim());
    formData.append("goal_amount", String(this.form.value.goal_amount ?? 0));
    formData.append("category_id", String(this.form.value.category_id ?? ""));
    formData.append("location", String(this.form.value.location ?? "").trim());
    formData.append("urgency", String(this.form.value.urgency ?? "medium"));
    const parentId = this.parentRequestId();
    if (parentId) {
      formData.append("parent_request_id", String(parentId));
      const derivedImage = this.parentRequest()?.image_url;
      if (derivedImage) {
        formData.append("image_url", derivedImage);
      }
    }
    const image = this.imageFile();
    if (image) {
      formData.append("image", image);
    }
    this.associationService.createCampaign(formData).subscribe({
      next: (response) => {
        this.submitting.set(false);
        if (!response.success) {
          this.error.set("Impossible de creer la campagne.");
          return;
        }
        this.router.navigateByUrl("/association/campaigns");
      },
      error: () => {
        this.submitting.set(false);
        this.error.set("Impossible de creer la campagne.");
      }
    });
  }
  static \u0275fac = function AssociationCreateCampaignComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssociationCreateCampaignComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssociationCreateCampaignComponent, selectors: [["app-association-create-campaign"]], decls: 62, vars: 5, consts: [[1, "create-shell"], [1, "create-header"], [1, "kicker"], [1, "create-form", 3, "formGroup"], [1, "derived-panel"], [1, "field"], ["for", "title"], ["id", "title", "type", "text", "formControlName", "title", "placeholder", "Aide alimentaire urgente"], ["for", "description"], ["id", "description", "rows", "3", "formControlName", "description", "placeholder", "Resume de la campagne"], ["for", "full_description"], ["id", "full_description", "rows", "5", "formControlName", "full_description", "placeholder", "Expliquez le contexte et les objectifs"], [1, "grid"], ["for", "goal_amount"], ["id", "goal_amount", "type", "number", "min", "1", "formControlName", "goal_amount"], ["for", "category_id"], ["id", "category_id", "formControlName", "category_id"], [3, "value"], ["for", "location"], ["id", "location", "type", "text", "formControlName", "location", "placeholder", "Tunis"], ["for", "urgency"], ["id", "urgency", "formControlName", "urgency"], ["value", "low"], ["value", "medium"], ["value", "high"], ["for", "image"], ["id", "image", "type", "file", 3, "change"], [1, "state", "state--error"], [1, "actions"], ["type", "button", 1, "primary", 3, "click", "disabled"], ["routerLink", "/association/campaigns", 1, "ghost"], [1, "derived-kicker"], [1, "link", 3, "routerLink"], [1, "derived-image"]], template: function AssociationCreateCampaignComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-association-navbar");
      \u0275\u0275elementStart(1, "section", 0)(2, "header", 1)(3, "div")(4, "p", 2);
      \u0275\u0275text(5, "Nouvelle campagne");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "Creer une campagne");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "Partagez clairement l'objectif et l'impact attendu.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "form", 3);
      \u0275\u0275conditionalCreate(11, AssociationCreateCampaignComponent_Conditional_11_Template, 11, 7, "section", 4);
      \u0275\u0275elementStart(12, "div", 5)(13, "label", 6);
      \u0275\u0275text(14, "Titre");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 5)(17, "label", 8);
      \u0275\u0275text(18, "Description courte");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "textarea", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 5)(21, "label", 10);
      \u0275\u0275text(22, "Description detaillee");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "textarea", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 12)(25, "div", 5)(26, "label", 13);
      \u0275\u0275text(27, "Objectif (TND)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 5)(30, "label", 15);
      \u0275\u0275text(31, "Categorie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "select", 16)(33, "option", 17);
      \u0275\u0275text(34, "Selectionner");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(35, AssociationCreateCampaignComponent_For_36_Template, 2, 2, "option", 17, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 12)(38, "div", 5)(39, "label", 18);
      \u0275\u0275text(40, "Localisation");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "input", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 5)(43, "label", 20);
      \u0275\u0275text(44, "Urgence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "select", 21)(46, "option", 22);
      \u0275\u0275text(47, "Basse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "option", 23);
      \u0275\u0275text(49, "Moyenne");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "option", 24);
      \u0275\u0275text(51, "Haute");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(52, "div", 5)(53, "label", 25);
      \u0275\u0275text(54, "Image de la campagne");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "input", 26);
      \u0275\u0275listener("change", function AssociationCreateCampaignComponent_Template_input_change_55_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(56, AssociationCreateCampaignComponent_Conditional_56_Template, 2, 1, "div", 27);
      \u0275\u0275elementStart(57, "div", 28)(58, "button", 29);
      \u0275\u0275listener("click", function AssociationCreateCampaignComponent_Template_button_click_58_listener() {
        return ctx.submit();
      });
      \u0275\u0275text(59, "Publier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "a", 30);
      \u0275\u0275text(61, "Annuler");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.parentRequest() ? 11 : -1);
      \u0275\u0275advance(22);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.categories());
      \u0275\u0275advance(21);
      \u0275\u0275conditional(ctx.error() ? 56 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.submitting());
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RouterLink, AssociationNavbarComponent], styles: ["\n.create-shell[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 32px 24px 80px;\n}\n.create-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-family: var(--font-heading);\n}\n.kicker[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n  color: #64748b;\n}\n.create-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #475569;\n}\n.create-form[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: grid;\n  gap: 18px;\n  background: #fff;\n  padding: 24px;\n  border-radius: 20px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  box-shadow: 0 20px 32px rgba(15, 23, 42, 0.08);\n}\n.derived-panel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 200px;\n  gap: 16px;\n  padding: 16px;\n  border-radius: 16px;\n  background: rgba(226, 232, 240, 0.45);\n}\n.derived-kicker[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n  color: #64748b;\n  margin: 0 0 6px;\n}\n.derived-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 18px;\n}\n.derived-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #475569;\n  font-size: 13px;\n}\n.derived-image[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  background-size: cover;\n  background-position: center;\n  min-height: 140px;\n}\n.field[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.4);\n  padding: 10px 12px;\n  font-family: inherit;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.primary[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  border-radius: 12px;\n  border: none;\n  background: #0ea5e9;\n  color: #fff;\n  font-weight: 600;\n}\n.ghost[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.5);\n  background: #fff;\n  font-weight: 600;\n  color: #0f172a;\n}\n.link[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #0ea5e9;\n}\n.state[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: rgba(239, 68, 68, 0.12);\n  color: #b91c1c;\n}\n@media (max-width: 760px) {\n  .derived-panel[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=association-create-campaign.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssociationCreateCampaignComponent, [{
    type: Component,
    args: [{ selector: "app-association-create-campaign", imports: [CommonModule, ReactiveFormsModule, RouterLink, AssociationNavbarComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-association-navbar></app-association-navbar>\r
\r
<section class="create-shell">\r
  <header class="create-header">\r
    <div>\r
      <p class="kicker">Nouvelle campagne</p>\r
      <h1>Creer une campagne</h1>\r
      <p>Partagez clairement l'objectif et l'impact attendu.</p>\r
    </div>\r
  </header>\r
\r
  <form [formGroup]="form" class="create-form">\r
    @if (parentRequest()) {\r
      <section class="derived-panel">\r
        <div>\r
          <p class="derived-kicker">Campagne derivee</p>\r
          <h2>{{ parentRequest()?.title }}</h2>\r
          <p>{{ parentRequest()?.description }}</p>\r
          <a class="link" [routerLink]="['/request-detail', parentRequestId()]">Voir la demande</a>\r
        </div>\r
        <div class="derived-image" [style.background-image]="derivedImageUrl() ? 'url(' + derivedImageUrl() + ')' : 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(34, 197, 94, 0.2))'"></div>\r
      </section>\r
    }\r
    <div class="field">\r
      <label for="title">Titre</label>\r
      <input id="title" type="text" formControlName="title" placeholder="Aide alimentaire urgente" />\r
    </div>\r
\r
    <div class="field">\r
      <label for="description">Description courte</label>\r
      <textarea id="description" rows="3" formControlName="description" placeholder="Resume de la campagne"></textarea>\r
    </div>\r
\r
    <div class="field">\r
      <label for="full_description">Description detaillee</label>\r
      <textarea id="full_description" rows="5" formControlName="full_description" placeholder="Expliquez le contexte et les objectifs"></textarea>\r
    </div>\r
\r
    <div class="grid">\r
      <div class="field">\r
        <label for="goal_amount">Objectif (TND)</label>\r
        <input id="goal_amount" type="number" min="1" formControlName="goal_amount" />\r
      </div>\r
      <div class="field">\r
        <label for="category_id">Categorie</label>\r
        <select id="category_id" formControlName="category_id">\r
          <option [value]="null">Selectionner</option>\r
          @for (category of categories(); track category.id) {\r
            <option [value]="category.id">{{ category.name }}</option>\r
          }\r
        </select>\r
      </div>\r
    </div>\r
\r
    <div class="grid">\r
      <div class="field">\r
        <label for="location">Localisation</label>\r
        <input id="location" type="text" formControlName="location" placeholder="Tunis" />\r
      </div>\r
      <div class="field">\r
        <label for="urgency">Urgence</label>\r
        <select id="urgency" formControlName="urgency">\r
          <option value="low">Basse</option>\r
          <option value="medium">Moyenne</option>\r
          <option value="high">Haute</option>\r
        </select>\r
      </div>\r
    </div>\r
\r
    <div class="field">\r
      <label for="image">Image de la campagne</label>\r
      <input id="image" type="file" (change)="onFileSelected($event)" />\r
    </div>\r
\r
    @if (error()) {\r
      <div class="state state--error">{{ error() }}</div>\r
    }\r
\r
    <div class="actions">\r
      <button type="button" class="primary" (click)="submit()" [disabled]="submitting()">Publier</button>\r
      <a class="ghost" routerLink="/association/campaigns">Annuler</a>\r
    </div>\r
  </form>\r
</section>\r
`, styles: ["/* src/app/association/association-create-campaign/association-create-campaign.component.css */\n.create-shell {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 32px 24px 80px;\n}\n.create-header h1 {\n  margin: 0 0 8px;\n  font-family: var(--font-heading);\n}\n.kicker {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n  color: #64748b;\n}\n.create-header p {\n  margin: 0;\n  color: #475569;\n}\n.create-form {\n  margin-top: 24px;\n  display: grid;\n  gap: 18px;\n  background: #fff;\n  padding: 24px;\n  border-radius: 20px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  box-shadow: 0 20px 32px rgba(15, 23, 42, 0.08);\n}\n.derived-panel {\n  display: grid;\n  grid-template-columns: 1fr 200px;\n  gap: 16px;\n  padding: 16px;\n  border-radius: 16px;\n  background: rgba(226, 232, 240, 0.45);\n}\n.derived-kicker {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n  color: #64748b;\n  margin: 0 0 6px;\n}\n.derived-panel h2 {\n  margin: 0 0 6px;\n  font-size: 18px;\n}\n.derived-panel p {\n  margin: 0 0 8px;\n  color: #475569;\n  font-size: 13px;\n}\n.derived-image {\n  border-radius: 14px;\n  background-size: cover;\n  background-position: center;\n  min-height: 140px;\n}\n.field {\n  display: grid;\n  gap: 8px;\n}\n.field input,\n.field select,\n.field textarea {\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.4);\n  padding: 10px 12px;\n  font-family: inherit;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.actions {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.primary {\n  padding: 12px 18px;\n  border-radius: 12px;\n  border: none;\n  background: #0ea5e9;\n  color: #fff;\n  font-weight: 600;\n}\n.ghost {\n  padding: 12px 18px;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.5);\n  background: #fff;\n  font-weight: 600;\n  color: #0f172a;\n}\n.link {\n  font-size: 13px;\n  font-weight: 600;\n  color: #0ea5e9;\n}\n.state {\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: rgba(239, 68, 68, 0.12);\n  color: #b91c1c;\n}\n@media (max-width: 760px) {\n  .derived-panel {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=association-create-campaign.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssociationCreateCampaignComponent, { className: "AssociationCreateCampaignComponent", filePath: "app/association/association-create-campaign/association-create-campaign.component.ts", lineNumber: 20 });
})();
export {
  AssociationCreateCampaignComponent
};
//# sourceMappingURL=chunk-6XUDP5VX.js.map
