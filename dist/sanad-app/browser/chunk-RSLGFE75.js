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
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  RouterLink,
  __spreadProps,
  __spreadValues,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BNXH775N.js";

// src/app/association/association-campaigns/association-campaigns.component.ts
var _c0 = (a0) => ["/request-detail", a0];
var _c1 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function AssociationCampaignsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Chargement des campagnes...");
    \u0275\u0275elementEnd();
  }
}
function AssociationCampaignsComponent_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AssociationCampaignsComponent_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Aucune campagne pour le moment.");
    \u0275\u0275elementEnd();
  }
}
function AssociationCampaignsComponent_Conditional_13_Conditional_2_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const campaign_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.imagePreview(campaign_r3.image_url), \u0275\u0275sanitizeUrl)("alt", campaign_r3.title);
  }
}
function AssociationCampaignsComponent_Conditional_13_Conditional_2_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function AssociationCampaignsComponent_Conditional_13_Conditional_2_For_2_Conditional_32_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div")(2, "p", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 35);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const update_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(update_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(update_r5.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 3, update_r5.created_at, "dd MMM yyyy"));
  }
}
function AssociationCampaignsComponent_Conditional_13_Conditional_2_For_2_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "h3");
    \u0275\u0275text(2, "Transparence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 27);
    \u0275\u0275element(4, "input", 28)(5, "textarea", 29);
    \u0275\u0275elementStart(6, "button", 30);
    \u0275\u0275listener("click", function AssociationCampaignsComponent_Conditional_13_Conditional_2_For_2_Conditional_32_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.submitUpdate());
    });
    \u0275\u0275text(7, " Publier la mise a jour ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 31);
    \u0275\u0275repeaterCreate(9, AssociationCampaignsComponent_Conditional_13_Conditional_2_For_2_Conditional_32_For_10_Template, 9, 6, "div", 32, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const campaign_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r0.updateForm);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.updatesByRequest()[campaign_r3.id] || \u0275\u0275pureFunction0(2, _c1));
  }
}
function AssociationCampaignsComponent_Conditional_13_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 8)(1, "div", 9);
    \u0275\u0275conditionalCreate(2, AssociationCampaignsComponent_Conditional_13_Conditional_2_For_2_Conditional_2_Template, 1, 2, "img", 10)(3, AssociationCampaignsComponent_Conditional_13_Conditional_2_For_2_Conditional_3_Template, 1, 0, "div", 11);
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13)(7, "div", 14)(8, "h2");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 16);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 17)(15, "div", 18);
    \u0275\u0275element(16, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 20)(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 21)(24, "button", 22);
    \u0275\u0275listener("click", function AssociationCampaignsComponent_Conditional_13_Conditional_2_For_2_Template_button_click_24_listener() {
      const campaign_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openEdit(campaign_r3));
    });
    \u0275\u0275text(25, "Modifier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 23);
    \u0275\u0275listener("click", function AssociationCampaignsComponent_Conditional_13_Conditional_2_For_2_Template_button_click_26_listener() {
      const campaign_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeCampaign(campaign_r3));
    });
    \u0275\u0275text(27, "Supprimer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 24);
    \u0275\u0275text(29, "Voir details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 25);
    \u0275\u0275listener("click", function AssociationCampaignsComponent_Conditional_13_Conditional_2_For_2_Template_button_click_30_listener() {
      const campaign_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openUpdates(campaign_r3.id));
    });
    \u0275\u0275text(31, "Mises a jour");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(32, AssociationCampaignsComponent_Conditional_13_Conditional_2_For_2_Conditional_32_Template, 11, 3, "div", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const campaign_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.imagePreview(campaign_r3.image_url) ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("status-pill--active", campaign_r3.status === "active")("status-pill--paused", campaign_r3.status === "paused")("status-pill--completed", campaign_r3.status === "completed")("status-pill--cancelled", campaign_r3.status === "cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", campaign_r3.status, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(campaign_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(campaign_r3.category_name || "Categorie");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(campaign_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r0.progressPercent(campaign_r3), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(20, 19, campaign_r3.collected_amount, "1.0-0"), " TND");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.progressPercent(campaign_r3), "%");
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c0, campaign_r3.id));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.updateTargetId() === campaign_r3.id ? 32 : -1);
  }
}
function AssociationCampaignsComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, AssociationCampaignsComponent_Conditional_13_Conditional_2_For_2_Template, 33, 24, "article", 8, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.campaigns());
  }
}
function AssociationCampaignsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AssociationCampaignsComponent_Conditional_13_Conditional_0_Template, 2, 1, "div", 6);
    \u0275\u0275conditionalCreate(1, AssociationCampaignsComponent_Conditional_13_Conditional_1_Template, 2, 0, "div", 4)(2, AssociationCampaignsComponent_Conditional_13_Conditional_2_Template, 3, 0, "div", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.error() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.campaigns().length === 0 ? 1 : 2);
  }
}
function AssociationCampaignsComponent_Conditional_14_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r7 = ctx.$implicit;
    \u0275\u0275property("value", category_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r7.name);
  }
}
function AssociationCampaignsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 36)(2, "div")(3, "h2");
    \u0275\u0275text(4, "Modifier la campagne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Mettre a jour le contenu et le statut.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 22);
    \u0275\u0275listener("click", function AssociationCampaignsComponent_Conditional_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelEdit());
    });
    \u0275\u0275text(8, "Fermer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "form", 37)(10, "div", 38)(11, "label", 39);
    \u0275\u0275text(12, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 38)(15, "label", 41);
    \u0275\u0275text(16, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "textarea", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 38)(19, "label", 43);
    \u0275\u0275text(20, "Details");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "textarea", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 45)(23, "div", 38)(24, "label", 46);
    \u0275\u0275text(25, "Categorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 47)(27, "option", 48);
    \u0275\u0275text(28, "Selectionner");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(29, AssociationCampaignsComponent_Conditional_14_For_30_Template, 2, 2, "option", 48, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 38)(32, "label", 49);
    \u0275\u0275text(33, "Localisation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 45)(36, "div", 38)(37, "label", 51);
    \u0275\u0275text(38, "Urgence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "select", 52)(40, "option", 53);
    \u0275\u0275text(41, "Basse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 54);
    \u0275\u0275text(43, "Moyenne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 55);
    \u0275\u0275text(45, "Haute");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 38)(47, "label", 56);
    \u0275\u0275text(48, "Objectif (TND)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 45)(51, "div", 38)(52, "label", 58);
    \u0275\u0275text(53, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "select", 59)(55, "option", 60);
    \u0275\u0275text(56, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "option", 61);
    \u0275\u0275text(58, "Pause");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "option", 62);
    \u0275\u0275text(60, "Complete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 63);
    \u0275\u0275text(62, "Annule");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div", 38)(64, "label", 64);
    \u0275\u0275text(65, "Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "input", 65);
    \u0275\u0275listener("change", function AssociationCampaignsComponent_Conditional_14_Template_input_change_66_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onImageSelected($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 66)(68, "button", 30);
    \u0275\u0275listener("click", function AssociationCampaignsComponent_Conditional_14_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveEdit());
    });
    \u0275\u0275text(69, "Enregistrer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "button", 22);
    \u0275\u0275listener("click", function AssociationCampaignsComponent_Conditional_14_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelEdit());
    });
    \u0275\u0275text(71, "Annuler");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("formGroup", ctx_r0.editForm);
    \u0275\u0275advance(18);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.categories());
    \u0275\u0275advance(39);
    \u0275\u0275property("disabled", ctx_r0.saving());
  }
}
var AssociationCampaignsComponent = class _AssociationCampaignsComponent {
  associationService = inject(AssociationDataService);
  fb = inject(FormBuilder);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  campaigns = signal([], ...ngDevMode ? [{ debugName: "campaigns" }] : (
    /* istanbul ignore next */
    []
  ));
  categories = signal([], ...ngDevMode ? [{ debugName: "categories" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedCampaign = signal(null, ...ngDevMode ? [{ debugName: "selectedCampaign" }] : (
    /* istanbul ignore next */
    []
  ));
  updatesByRequest = signal({}, ...ngDevMode ? [{ debugName: "updatesByRequest" }] : (
    /* istanbul ignore next */
    []
  ));
  updateTargetId = signal(null, ...ngDevMode ? [{ debugName: "updateTargetId" }] : (
    /* istanbul ignore next */
    []
  ));
  imageFile = signal(null, ...ngDevMode ? [{ debugName: "imageFile" }] : (
    /* istanbul ignore next */
    []
  ));
  editForm = this.fb.group({
    title: ["", Validators.required],
    description: ["", Validators.required],
    full_description: [""],
    category_id: [null, Validators.required],
    location: ["", Validators.required],
    urgency: ["medium", Validators.required],
    goal_amount: [0, [Validators.required, Validators.min(1)]],
    status: ["active", Validators.required]
  });
  updateForm = this.fb.group({
    title: ["", Validators.required],
    description: ["", Validators.required]
  });
  constructor() {
    this.loadAll();
  }
  loadAll() {
    this.loading.set(true);
    this.error.set("");
    this.associationService.getCategories().subscribe({
      next: (response) => {
        if (response.success) {
          this.categories.set(response.data);
        }
      }
    });
    this.associationService.getCampaigns().subscribe({
      next: (response) => {
        this.loading.set(false);
        if (!response.success) {
          this.error.set("Impossible de charger les campagnes.");
          return;
        }
        this.campaigns.set(response.data);
      },
      error: () => {
        this.loading.set(false);
        this.error.set("Impossible de charger les campagnes.");
      }
    });
  }
  progressPercent(campaign) {
    if (!campaign.target_amount) {
      return 0;
    }
    return Math.min(100, Math.round(campaign.collected_amount / campaign.target_amount * 100));
  }
  openEdit(campaign) {
    this.selectedCampaign.set(campaign);
    this.imageFile.set(null);
    this.editForm.patchValue({
      title: campaign.title,
      description: campaign.description,
      full_description: campaign.full_description || "",
      category_id: campaign.category_id ?? null,
      location: campaign.location,
      urgency: campaign.urgency,
      goal_amount: campaign.target_amount,
      status: campaign.status
    });
  }
  cancelEdit() {
    this.selectedCampaign.set(null);
    this.imageFile.set(null);
    this.editForm.reset();
  }
  onImageSelected(event) {
    const input = event.target;
    const file = input.files?.[0] ?? null;
    this.imageFile.set(file);
  }
  saveEdit() {
    const campaign = this.selectedCampaign();
    if (!campaign || this.editForm.invalid || this.saving()) {
      this.editForm.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.error.set("");
    const formData = new FormData();
    formData.append("request_id", String(campaign.id));
    formData.append("title", String(this.editForm.value.title ?? "").trim());
    formData.append("description", String(this.editForm.value.description ?? "").trim());
    formData.append("full_description", String(this.editForm.value.full_description ?? "").trim());
    formData.append("category_id", String(this.editForm.value.category_id ?? ""));
    formData.append("location", String(this.editForm.value.location ?? "").trim());
    formData.append("urgency", String(this.editForm.value.urgency ?? "medium"));
    formData.append("goal_amount", String(this.editForm.value.goal_amount ?? 0));
    formData.append("status", String(this.editForm.value.status ?? "active"));
    const image = this.imageFile();
    if (image) {
      formData.append("image", image);
    }
    this.associationService.updateCampaign(formData).subscribe({
      next: (response) => {
        this.saving.set(false);
        if (!response.success) {
          this.error.set("Impossible de mettre a jour la campagne.");
          return;
        }
        this.cancelEdit();
        this.loadAll();
      },
      error: () => {
        this.saving.set(false);
        this.error.set("Impossible de mettre a jour la campagne.");
      }
    });
  }
  removeCampaign(campaign) {
    if (this.saving()) {
      return;
    }
    this.saving.set(true);
    this.associationService.deleteCampaign(campaign.id).subscribe({
      next: (response) => {
        this.saving.set(false);
        if (!response.success) {
          this.error.set("Impossible de supprimer la campagne.");
          return;
        }
        this.campaigns.set(this.campaigns().filter((item) => item.id !== campaign.id));
      },
      error: () => {
        this.saving.set(false);
        this.error.set("Impossible de supprimer la campagne.");
      }
    });
  }
  openUpdates(requestId) {
    this.updateTargetId.set(requestId);
    if (this.updatesByRequest()[requestId]) {
      return;
    }
    this.associationService.getUpdates(requestId).subscribe({
      next: (response) => {
        if (response.success) {
          this.updatesByRequest.update((current) => __spreadProps(__spreadValues({}, current), {
            [requestId]: response.data
          }));
        }
      }
    });
  }
  submitUpdate() {
    const requestId = this.updateTargetId();
    if (!requestId || this.updateForm.invalid || this.saving()) {
      this.updateForm.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    const payload = {
      request_id: requestId,
      title: String(this.updateForm.value.title ?? "").trim(),
      description: String(this.updateForm.value.description ?? "").trim()
    };
    this.associationService.createUpdate(payload).subscribe({
      next: (response) => {
        this.saving.set(false);
        if (!response.success) {
          this.error.set("Impossible de publier la mise a jour.");
          return;
        }
        this.updateForm.reset();
        this.associationService.getUpdates(requestId).subscribe({
          next: (updatesResponse) => {
            if (updatesResponse.success) {
              this.updatesByRequest.update((current) => __spreadProps(__spreadValues({}, current), {
                [requestId]: updatesResponse.data
              }));
            }
          }
        });
      },
      error: () => {
        this.saving.set(false);
        this.error.set("Impossible de publier la mise a jour.");
      }
    });
  }
  imagePreview(path) {
    return this.associationService.imageUrl(path);
  }
  static \u0275fac = function AssociationCampaignsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssociationCampaignsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssociationCampaignsComponent, selectors: [["app-association-campaigns"]], decls: 15, vars: 2, consts: [[1, "campaigns-shell"], [1, "campaigns-header"], [1, "kicker"], ["routerLink", "/association/campaigns/new", 1, "primary"], [1, "state"], [1, "edit-panel"], [1, "state", "state--error"], [1, "campaign-list"], [1, "campaign-card"], [1, "campaign-media"], [3, "src", "alt"], [1, "media-placeholder"], [1, "status-pill"], [1, "campaign-content"], [1, "campaign-header"], [1, "category"], [1, "campaign-description"], [1, "progress"], [1, "progress-track"], [1, "progress-fill"], [1, "progress-meta"], [1, "campaign-actions"], ["type", "button", 1, "ghost", 3, "click"], ["type", "button", 1, "ghost", "danger", 3, "click"], [1, "link", 3, "routerLink"], ["type", "button", 1, "link", 3, "click"], [1, "updates-panel"], [1, "update-form", 3, "formGroup"], ["type", "text", "formControlName", "title", "placeholder", "Titre de la mise a jour"], ["rows", "3", "formControlName", "description", "placeholder", "Decrivez votre progression"], ["type", "button", 1, "primary", 3, "click", "disabled"], [1, "updates-list"], [1, "update-item"], [1, "update-title"], [1, "update-description"], [1, "meta"], [1, "edit-header"], [1, "edit-form", 3, "formGroup"], [1, "field"], ["for", "title"], ["id", "title", "type", "text", "formControlName", "title"], ["for", "description"], ["id", "description", "rows", "3", "formControlName", "description"], ["for", "full_description"], ["id", "full_description", "rows", "4", "formControlName", "full_description"], [1, "grid"], ["for", "category_id"], ["id", "category_id", "formControlName", "category_id"], [3, "value"], ["for", "location"], ["id", "location", "type", "text", "formControlName", "location"], ["for", "urgency"], ["id", "urgency", "formControlName", "urgency"], ["value", "low"], ["value", "medium"], ["value", "high"], ["for", "goal_amount"], ["id", "goal_amount", "type", "number", "min", "1", "formControlName", "goal_amount"], ["for", "status"], ["id", "status", "formControlName", "status"], ["value", "active"], ["value", "paused"], ["value", "completed"], ["value", "cancelled"], ["for", "image"], ["id", "image", "type", "file", 3, "change"], [1, "edit-actions"]], template: function AssociationCampaignsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-association-navbar");
      \u0275\u0275elementStart(1, "section", 0)(2, "header", 1)(3, "div")(4, "p", 2);
      \u0275\u0275text(5, "Gestion des campagnes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "Mes campagnes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "Gardez une vue claire sur les demandes publiees et leurs performances.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "a", 3);
      \u0275\u0275text(11, "Creer une campagne");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, AssociationCampaignsComponent_Conditional_12_Template, 2, 0, "div", 4)(13, AssociationCampaignsComponent_Conditional_13_Template, 3, 2);
      \u0275\u0275conditionalCreate(14, AssociationCampaignsComponent_Conditional_14_Template, 72, 3, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.loading() ? 12 : 13);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.selectedCampaign() ? 14 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RouterLink, AssociationNavbarComponent, DecimalPipe, DatePipe], styles: ["\n.campaigns-shell[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 32px 24px 80px;\n}\n.campaigns-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.kicker[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: #64748b;\n  margin-bottom: 6px;\n}\n.campaigns-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-family: var(--font-heading);\n}\n.campaigns-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #475569;\n}\n.primary[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  border-radius: 12px;\n  background: #0ea5e9;\n  color: #fff;\n  font-weight: 600;\n}\n.state[_ngcontent-%COMP%] {\n  padding: 18px;\n  border-radius: 16px;\n  background: rgba(226, 232, 240, 0.5);\n  color: #475569;\n}\n.state--error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #b91c1c;\n}\n.campaign-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 22px;\n}\n.campaign-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 20px;\n  padding: 20px;\n  border-radius: 20px;\n  background: #fff;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  box-shadow: 0 18px 32px rgba(15, 23, 42, 0.08);\n}\n.campaign-media[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 18px;\n  overflow: hidden;\n  min-height: 180px;\n}\n.campaign-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.media-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.media-placeholder[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(14, 165, 233, 0.2),\n      rgba(34, 197, 94, 0.25));\n}\n.status-pill[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  left: 14px;\n  padding: 6px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n  background: rgba(15, 23, 42, 0.7);\n  color: #fff;\n}\n.status-pill--active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.85);\n}\n.status-pill--paused[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.85);\n}\n.status-pill--completed[_ngcontent-%COMP%] {\n  background: rgba(14, 116, 144, 0.85);\n}\n.status-pill--cancelled[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.85);\n}\n.campaign-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 12px;\n}\n.campaign-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n}\n.category[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #0ea5e9;\n}\n.campaign-description[_ngcontent-%COMP%] {\n  margin: 12px 0;\n  color: #475569;\n}\n.progress[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.progress-track[_ngcontent-%COMP%] {\n  height: 6px;\n  border-radius: 999px;\n  background: rgba(148, 163, 184, 0.3);\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #0ea5e9,\n      #22c55e);\n}\n.progress-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 6px;\n}\n.campaign-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.ghost[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-radius: 10px;\n  border: 1px solid rgba(148, 163, 184, 0.4);\n  background: #fff;\n  font-weight: 600;\n  font-size: 12px;\n}\n.ghost.danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  border-color: rgba(239, 68, 68, 0.4);\n}\n.link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #0ea5e9;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.updates-panel[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 16px;\n  border-radius: 16px;\n  background: rgba(241, 245, 249, 0.6);\n}\n.updates-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n.update-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.update-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.update-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.4);\n  padding: 10px 12px;\n  font-family: inherit;\n}\n.updates-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n.update-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  background: #fff;\n}\n.update-title[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-weight: 600;\n}\n.update-description[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #475569;\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n.edit-panel[_ngcontent-%COMP%] {\n  margin-top: 28px;\n  padding: 24px;\n  border-radius: 20px;\n  background: #fff;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  box-shadow: 0 20px 32px rgba(15, 23, 42, 0.08);\n}\n.edit-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.edit-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n.field[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.4);\n  padding: 10px 12px;\n  font-family: inherit;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 14px;\n}\n.edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n@media (max-width: 900px) {\n  .campaign-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .campaigns-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=association-campaigns.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssociationCampaignsComponent, [{
    type: Component,
    args: [{ selector: "app-association-campaigns", imports: [CommonModule, ReactiveFormsModule, RouterLink, AssociationNavbarComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-association-navbar></app-association-navbar>\r
\r
<section class="campaigns-shell">\r
  <header class="campaigns-header">\r
    <div>\r
      <p class="kicker">Gestion des campagnes</p>\r
      <h1>Mes campagnes</h1>\r
      <p>Gardez une vue claire sur les demandes publiees et leurs performances.</p>\r
    </div>\r
    <a class="primary" routerLink="/association/campaigns/new">Creer une campagne</a>\r
  </header>\r
\r
  @if (loading()) {\r
    <div class="state">Chargement des campagnes...</div>\r
  } @else {\r
    @if (error()) {\r
      <div class="state state--error">{{ error() }}</div>\r
    }\r
\r
    @if (campaigns().length === 0) {\r
      <div class="state">Aucune campagne pour le moment.</div>\r
    } @else {\r
      <div class="campaign-list">\r
        @for (campaign of campaigns(); track campaign.id) {\r
          <article class="campaign-card">\r
            <div class="campaign-media">\r
              @if (imagePreview(campaign.image_url)) {\r
                <img [src]="imagePreview(campaign.image_url)" [alt]="campaign.title" />\r
              } @else {\r
                <div class="media-placeholder"></div>\r
              }\r
              <span class="status-pill"\r
                [class.status-pill--active]="campaign.status === 'active'"\r
                [class.status-pill--paused]="campaign.status === 'paused'"\r
                [class.status-pill--completed]="campaign.status === 'completed'"\r
                [class.status-pill--cancelled]="campaign.status === 'cancelled'">\r
                {{ campaign.status }}\r
              </span>\r
            </div>\r
            <div class="campaign-content">\r
              <div class="campaign-header">\r
                <h2>{{ campaign.title }}</h2>\r
                <span class="category">{{ campaign.category_name || 'Categorie' }}</span>\r
              </div>\r
              <p class="campaign-description">{{ campaign.description }}</p>\r
              <div class="progress">\r
                <div class="progress-track">\r
                  <span class="progress-fill" [style.width.%]="progressPercent(campaign)"></span>\r
                </div>\r
                <div class="progress-meta">\r
                  <span>{{ campaign.collected_amount | number : '1.0-0' }} TND</span>\r
                  <span>{{ progressPercent(campaign) }}%</span>\r
                </div>\r
              </div>\r
              <div class="campaign-actions">\r
                <button type="button" class="ghost" (click)="openEdit(campaign)">Modifier</button>\r
                <button type="button" class="ghost danger" (click)="removeCampaign(campaign)">Supprimer</button>\r
                <a class="link" [routerLink]="['/request-detail', campaign.id]">Voir details</a>\r
                <button type="button" class="link" (click)="openUpdates(campaign.id)">Mises a jour</button>\r
              </div>\r
\r
              @if (updateTargetId() === campaign.id) {\r
                <div class="updates-panel">\r
                  <h3>Transparence</h3>\r
                  <form [formGroup]="updateForm" class="update-form">\r
                    <input type="text" formControlName="title" placeholder="Titre de la mise a jour" />\r
                    <textarea rows="3" formControlName="description" placeholder="Decrivez votre progression"></textarea>\r
                    <button type="button" class="primary" (click)="submitUpdate()" [disabled]="saving()">\r
                      Publier la mise a jour\r
                    </button>\r
                  </form>\r
\r
                  <div class="updates-list">\r
                    @for (update of updatesByRequest()[campaign.id] || []; track update.id) {\r
                      <div class="update-item">\r
                        <div>\r
                          <p class="update-title">{{ update.title }}</p>\r
                          <p class="update-description">{{ update.description }}</p>\r
                        </div>\r
                        <span class="meta">{{ update.created_at | date : 'dd MMM yyyy' }}</span>\r
                      </div>\r
                    }\r
                  </div>\r
                </div>\r
              }\r
            </div>\r
          </article>\r
        }\r
      </div>\r
    }\r
  }\r
\r
  @if (selectedCampaign()) {\r
    <div class="edit-panel">\r
      <div class="edit-header">\r
        <div>\r
          <h2>Modifier la campagne</h2>\r
          <p>Mettre a jour le contenu et le statut.</p>\r
        </div>\r
        <button type="button" class="ghost" (click)="cancelEdit()">Fermer</button>\r
      </div>\r
\r
      <form [formGroup]="editForm" class="edit-form">\r
        <div class="field">\r
          <label for="title">Titre</label>\r
          <input id="title" type="text" formControlName="title" />\r
        </div>\r
        <div class="field">\r
          <label for="description">Description</label>\r
          <textarea id="description" rows="3" formControlName="description"></textarea>\r
        </div>\r
        <div class="field">\r
          <label for="full_description">Details</label>\r
          <textarea id="full_description" rows="4" formControlName="full_description"></textarea>\r
        </div>\r
        <div class="grid">\r
          <div class="field">\r
            <label for="category_id">Categorie</label>\r
            <select id="category_id" formControlName="category_id">\r
              <option [value]="null">Selectionner</option>\r
              @for (category of categories(); track category.id) {\r
                <option [value]="category.id">{{ category.name }}</option>\r
              }\r
            </select>\r
          </div>\r
          <div class="field">\r
            <label for="location">Localisation</label>\r
            <input id="location" type="text" formControlName="location" />\r
          </div>\r
        </div>\r
        <div class="grid">\r
          <div class="field">\r
            <label for="urgency">Urgence</label>\r
            <select id="urgency" formControlName="urgency">\r
              <option value="low">Basse</option>\r
              <option value="medium">Moyenne</option>\r
              <option value="high">Haute</option>\r
            </select>\r
          </div>\r
          <div class="field">\r
            <label for="goal_amount">Objectif (TND)</label>\r
            <input id="goal_amount" type="number" min="1" formControlName="goal_amount" />\r
          </div>\r
        </div>\r
        <div class="grid">\r
          <div class="field">\r
            <label for="status">Statut</label>\r
            <select id="status" formControlName="status">\r
              <option value="active">Actif</option>\r
              <option value="paused">Pause</option>\r
              <option value="completed">Complete</option>\r
              <option value="cancelled">Annule</option>\r
            </select>\r
          </div>\r
          <div class="field">\r
            <label for="image">Image</label>\r
            <input id="image" type="file" (change)="onImageSelected($event)" />\r
          </div>\r
        </div>\r
        <div class="edit-actions">\r
          <button type="button" class="primary" (click)="saveEdit()" [disabled]="saving()">Enregistrer</button>\r
          <button type="button" class="ghost" (click)="cancelEdit()">Annuler</button>\r
        </div>\r
      </form>\r
    </div>\r
  }\r
</section>\r
`, styles: ["/* src/app/association/association-campaigns/association-campaigns.component.css */\n.campaigns-shell {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 32px 24px 80px;\n}\n.campaigns-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.kicker {\n  font-size: 12px;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: #64748b;\n  margin-bottom: 6px;\n}\n.campaigns-header h1 {\n  margin: 0 0 8px;\n  font-family: var(--font-heading);\n}\n.campaigns-header p {\n  margin: 0;\n  color: #475569;\n}\n.primary {\n  padding: 12px 18px;\n  border-radius: 12px;\n  background: #0ea5e9;\n  color: #fff;\n  font-weight: 600;\n}\n.state {\n  padding: 18px;\n  border-radius: 16px;\n  background: rgba(226, 232, 240, 0.5);\n  color: #475569;\n}\n.state--error {\n  background: rgba(239, 68, 68, 0.12);\n  color: #b91c1c;\n}\n.campaign-list {\n  display: grid;\n  gap: 22px;\n}\n.campaign-card {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 20px;\n  padding: 20px;\n  border-radius: 20px;\n  background: #fff;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  box-shadow: 0 18px 32px rgba(15, 23, 42, 0.08);\n}\n.campaign-media {\n  position: relative;\n  border-radius: 18px;\n  overflow: hidden;\n  min-height: 180px;\n}\n.campaign-media img,\n.media-placeholder {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.media-placeholder {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(14, 165, 233, 0.2),\n      rgba(34, 197, 94, 0.25));\n}\n.status-pill {\n  position: absolute;\n  top: 14px;\n  left: 14px;\n  padding: 6px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n  background: rgba(15, 23, 42, 0.7);\n  color: #fff;\n}\n.status-pill--active {\n  background: rgba(34, 197, 94, 0.85);\n}\n.status-pill--paused {\n  background: rgba(234, 179, 8, 0.85);\n}\n.status-pill--completed {\n  background: rgba(14, 116, 144, 0.85);\n}\n.status-pill--cancelled {\n  background: rgba(239, 68, 68, 0.85);\n}\n.campaign-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 12px;\n}\n.campaign-header h2 {\n  margin: 0;\n  font-size: 20px;\n}\n.category {\n  font-size: 12px;\n  font-weight: 600;\n  color: #0ea5e9;\n}\n.campaign-description {\n  margin: 12px 0;\n  color: #475569;\n}\n.progress {\n  margin-bottom: 12px;\n}\n.progress-track {\n  height: 6px;\n  border-radius: 999px;\n  background: rgba(148, 163, 184, 0.3);\n  overflow: hidden;\n}\n.progress-fill {\n  display: block;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #0ea5e9,\n      #22c55e);\n}\n.progress-meta {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 6px;\n}\n.campaign-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.ghost {\n  padding: 8px 12px;\n  border-radius: 10px;\n  border: 1px solid rgba(148, 163, 184, 0.4);\n  background: #fff;\n  font-weight: 600;\n  font-size: 12px;\n}\n.ghost.danger {\n  color: #b91c1c;\n  border-color: rgba(239, 68, 68, 0.4);\n}\n.link {\n  font-size: 12px;\n  font-weight: 600;\n  color: #0ea5e9;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.updates-panel {\n  margin-top: 16px;\n  padding: 16px;\n  border-radius: 16px;\n  background: rgba(241, 245, 249, 0.6);\n}\n.updates-panel h3 {\n  margin: 0 0 10px;\n}\n.update-form {\n  display: grid;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.update-form input,\n.update-form textarea {\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.4);\n  padding: 10px 12px;\n  font-family: inherit;\n}\n.updates-list {\n  display: grid;\n  gap: 10px;\n}\n.update-item {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  background: #fff;\n}\n.update-title {\n  margin: 0 0 4px;\n  font-weight: 600;\n}\n.update-description {\n  margin: 0;\n  color: #475569;\n}\n.meta {\n  font-size: 12px;\n  color: #64748b;\n}\n.edit-panel {\n  margin-top: 28px;\n  padding: 24px;\n  border-radius: 20px;\n  background: #fff;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  box-shadow: 0 20px 32px rgba(15, 23, 42, 0.08);\n}\n.edit-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.edit-form {\n  display: grid;\n  gap: 16px;\n}\n.field {\n  display: grid;\n  gap: 8px;\n}\n.field input,\n.field textarea,\n.field select {\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.4);\n  padding: 10px 12px;\n  font-family: inherit;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 14px;\n}\n.edit-actions {\n  display: flex;\n  gap: 12px;\n}\n@media (max-width: 900px) {\n  .campaign-card {\n    grid-template-columns: 1fr;\n  }\n  .campaigns-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=association-campaigns.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssociationCampaignsComponent, { className: "AssociationCampaignsComponent", filePath: "app/association/association-campaigns/association-campaigns.component.ts", lineNumber: 21 });
})();
export {
  AssociationCampaignsComponent
};
//# sourceMappingURL=chunk-RSLGFE75.js.map
