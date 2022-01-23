"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _views_pizzaListView_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/pizzaListView.component */ 6915);
/* harmony import */ var _views_CartView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/CartView */ 2393);



class AppComponent {
    constructor() {
        this.title = 'Shop';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["the-shop"]], decls: 7, vars: 1, consts: [[1, "row"], [1, "col-9"], [1, "col-3"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "pizza-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_views_pizzaListView_component__WEBPACK_IMPORTED_MODULE_0__["default"], _views_CartView__WEBPACK_IMPORTED_MODULE_1__.CartView], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/store.service */ 2000);
/* harmony import */ var _views_pizzaListView_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/pizzaListView.component */ 6915);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _views_CartView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/CartView */ 2393);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _views_customize_pizza_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/customize-pizza.component */ 8519);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_services_store_service__WEBPACK_IMPORTED_MODULE_1__.Store], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__.MatGridListModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _views_pizzaListView_component__WEBPACK_IMPORTED_MODULE_2__["default"],
        _views_CartView__WEBPACK_IMPORTED_MODULE_3__.CartView,
        _views_customize_pizza_component__WEBPACK_IMPORTED_MODULE_4__.CustomizePizzaComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__.MatGridListModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 2000:
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _shared_Order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/Order */ 8040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);




class Store {
    constructor(http) {
        this.http = http;
        //public products = [{ title: "Van Gogh", price: "19.99" },
        //    { title: "Van Gogh Post", price: "19.99" }];
        this.pizzas = [];
        this.order = new _shared_Order__WEBPACK_IMPORTED_MODULE_0__.Order();
    }
    loadPizzas() {
        return this.http.get("/api/pizza")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            this.pizzas = data;
            return;
        }));
    }
    addToOrder(pizza) {
        let item = this.order.items.find(o => o.id === pizza.id);
        if (item) {
            item.quantity++;
        }
        else {
            const newItem = new _shared_Order__WEBPACK_IMPORTED_MODULE_0__.OrderItem();
            newItem.id = pizza.id;
            newItem.title = pizza.title;
            newItem.category = pizza.category;
            newItem.price = pizza.price;
            newItem.quantity = 1;
            this.order.items.push(newItem);
        }
    }
}
Store.ɵfac = function Store_Factory(t) { return new (t || Store)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
Store.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Store, factory: Store.ɵfac });


/***/ }),

/***/ 8040:
/*!*********************************!*\
  !*** ./src/app/shared/Order.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderItem": () => (/* binding */ OrderItem),
/* harmony export */   "Order": () => (/* binding */ Order)
/* harmony export */ });
class OrderItem {
}
class Order {
    constructor() {
        this.items = [];
    }
    get total() {
        const result = this.items.reduce((total, value) => {
            return total + (value.price * value.quantity);
        }, 0);
        return result;
    }
}


/***/ }),

/***/ 699:
/*!*********************************!*\
  !*** ./src/app/shared/Pizza.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pizza": () => (/* binding */ Pizza)
/* harmony export */ });
class Pizza {
    Pizza() {
    }
}


/***/ }),

/***/ 2393:
/*!***********************************!*\
  !*** ./src/app/views/CartView.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartView": () => (/* binding */ CartView)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/store.service */ 2000);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function CartView_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/img/", item_r1.id, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 6, item_r1.price, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 9, item_r1.quantity * item_r1.price, "INR"));
} }
class CartView {
    constructor(store) {
        this.store = store;
    }
}
CartView.ɵfac = function CartView_Factory(t) { return new (t || CartView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_store_service__WEBPACK_IMPORTED_MODULE_0__.Store)); };
CartView.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartView, selectors: [["cart"]], decls: 25, vars: 6, consts: [[1, "table", "table-condensed", "table-striped"], [4, "ngFor", "ngForOf"], ["colspan", "4", 1, "text-right"], [1, "img-fluid", "product-thumb", 3, "src", "alt"]], template: function CartView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Shopping Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Pizza");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CartView_tr_17_Template, 13, 12, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Count: ", ctx.store.order.items.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.store.order.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](24, 3, ctx.store.order.total, "INR"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe], styles: [".product-thumb[_ngcontent-%COMP%] {\n  max-width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnRWaWV3LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoiY2FydFZpZXcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LXRodW1iIHtcclxuICBtYXgtd2lkdGg6IDUwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8519:
/*!****************************************************!*\
  !*** ./src/app/views/customize-pizza.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizePizzaComponent": () => (/* binding */ CustomizePizzaComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_Pizza__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/Pizza */ 699);












const _c0 = ["form"];
class CustomizePizzaComponent {
    constructor(data, dialogRef, cdr) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.cdr = cdr;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            cheeseType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
            35: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
            americanCorn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
            blackOlive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('')
        });
    }
    initializeFormGroup() {
    }
    ngOnInit() {
        this.pizzaname = this.data.title;
        this.total = this.data.price;
        let g = this.form.get('35');
        this.form.valueChanges.subscribe(() => {
            this.cdr.detectChanges();
        });
    }
    ngOnChanges() {
        let g = this.form.get('35');
        this.form.valueChanges.subscribe(() => {
            this.cdr.detectChanges();
        });
    }
    onClear() {
    }
    onSubmit() {
        if (this.form.valid) {
        }
    }
    onClose() {
        this.dialogRef.close();
    }
}
CustomizePizzaComponent.ɵfac = function CustomizePizzaComponent_Factory(t) { return new (t || CustomizePizzaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
CustomizePizzaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomizePizzaComponent, selectors: [["customize-pizza"]], viewQuery: function CustomizePizzaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ngForm = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 44, vars: 7, consts: [[1, "fill-remaining-space"], [1, "normal-form", 3, "formGroup", "submit"], ["cols", "1", "rowHeight", "300px"], [1, "controles-container"], ["formControlName", "cheeseType"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], [1, "add-bottom-padding"], ["formControlName", "29"], ["formControlName", "35"], ["formControlName", "55"], [1, "sub-total"], [1, "button-row"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function CustomizePizzaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function CustomizePizzaComponent_Template_form_submit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-grid-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Select Cheese");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-radio-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-radio-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Peri Peri Cheese(Tangy Spicy Taste)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Chipotle Cheese(Smokey Spic Taste)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-radio-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Tandoori Cheese(Tandoori Masala Taste)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-radio-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "El Classico Cheese (Regular Mozzarella)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Select Extra Toppings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Onion \u20B9 29");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "American Corn \u20B9 35");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-checkbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Black Olives \u20B9 55");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizePizzaComponent_Template_button_click_42_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.pizzaname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](38, 4, ctx.total, "INR"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridTile, _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CurrencyPipe], styles: [".btn-dialog-close[_ngcontent-%COMP%] {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWl6ZS1waXp6YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJjdXN0b21pemUtcGl6emEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWRpYWxvZy1jbG9zZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6915:
/*!**************************************************!*\
  !*** ./src/app/views/pizzaListView.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PizzaListView)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _customize_pizza_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customize-pizza.component */ 8519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/store.service */ 2000);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);






function PizzaListView_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PizzaListView_div_1_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const p_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.store.addToOrder(p_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PizzaListView_div_1_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const p_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onCustomise(p_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Customise");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "/img/", p_r1.id, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", p_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 7, p_r1.price, "INR"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Category: ", p_r1.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Size: ", p_r1.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Ingredients: ", p_r1.ingredients, "");
} }
/*import { MatToolBar } from "@angular/material/toolbar";*/
class PizzaListView {
    constructor(store, dialog) {
        this.store = store;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.store.loadPizzas().subscribe(() => { });
    }
    onCustomise(pizza) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "40%";
        dialogConfig.data = pizza;
        this.dialog.open(_customize_pizza_component__WEBPACK_IMPORTED_MODULE_0__.CustomizePizzaComponent, dialogConfig);
    }
}
PizzaListView.ɵfac = function PizzaListView_Factory(t) { return new (t || PizzaListView)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_store_service__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
PizzaListView.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PizzaListView, selectors: [["pizza-list"]], decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "border", "bg-light", "rounded", "p-1"], [1, "img-fluid", "product-image", 3, "src", "alt"], [1, "products-props"], ["id", "buyButton", 1, "btn", "btn-success", 3, "click"], ["id", "customiseButton", 1, "btn", "btn-light", 3, "click"]], template: function PizzaListView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PizzaListView_div_1_Template, 19, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.store.pizzas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe], styles: [".product-image[_ngcontent-%COMP%] {\n  border: 1px #ddd solid;\n  box-shadow: rgba(0, 0, 0, 0.4) 2px 2px;\n  margin: 2px;\n}\n\n.products-props[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpenphTGlzdFZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJwaXp6YUxpc3RWaWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgYm9yZGVyOiAxcHggI2RkZCBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsLjQpIDJweCAycHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLnByb2R1Y3RzLXByb3BzIHtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map