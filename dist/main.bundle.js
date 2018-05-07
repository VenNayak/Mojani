webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_application_layout_application_component__ = __webpack_require__("./src/app/layout-application/layout-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__approve_survey_approve_survey_component__ = __webpack_require__("./src/app/approve-survey/approve-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_land_record_view_land_record_component__ = __webpack_require__("./src/app/view-land-record/view-land-record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth-guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'layoutApplication', component: __WEBPACK_IMPORTED_MODULE_0__layout_application_layout_application_component__["a" /* LayoutApplicationComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'approveSurveys', component: __WEBPACK_IMPORTED_MODULE_1__approve_survey_approve_survey_component__["a" /* ApproveSurveyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'viewLandRecord/:id', component: __WEBPACK_IMPORTED_MODULE_5__view_land_record_view_land_record_component__["a" /* ViewlandrecordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', pathMatch: 'full', redirectTo: '/login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = " /*to be done */\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- This would embed the container class of bootstrap-->\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__show_validation_error_show_validation_error_component__ = __webpack_require__("./src/app/show-validation-error/show-validation-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_application_layout_application_component__ = __webpack_require__("./src/app/layout-application/layout-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_survey_data_service__ = __webpack_require__("./src/app/services/survey-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_managelandrecords_service__ = __webpack_require__("./src/app/services/managelandrecords.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__approve_survey_approve_survey_component__ = __webpack_require__("./src/app/approve-survey/approve-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gmaps_gmaps_component__ = __webpack_require__("./src/app/gmaps/gmaps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__view_land_record_view_land_record_component__ = __webpack_require__("./src/app/view-land-record/view-land-record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_login_authentication_service__ = __webpack_require__("./src/app/services/login-authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__show_validation_error_show_validation_error_component__["a" /* ShowValidationErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_7__layout_application_layout_application_component__["a" /* LayoutApplicationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__approve_survey_approve_survey_component__["a" /* ApproveSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_12__gmaps_gmaps_component__["a" /* GmapsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__view_land_record_view_land_record_component__["a" /* ViewlandrecordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCSIFuXPQXel1splGkx5ElXoU1bL60Jn-I' //credentials for Angular google maps
                }),
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_survey_data_service__["a" /* SurveyDataService */], __WEBPACK_IMPORTED_MODULE_9__services_managelandrecords_service__["a" /* ManageLandRecordsService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__services_login_authentication_service__["a" /* LoginAuthenticationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/approve-survey/approve-survey.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/approve-survey/approve-survey.component.html":
/***/ (function(module, exports) {

module.exports = "<div  align=\"center\">\n    <h3>MOJANI- Approve Survey Appplications</h3>\n  </div>\n <div *ngIf=\"approveSuccess; then successMsg else approveForm\" ></div>\n   <ng-template #approveForm>\n  <div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h1 class=\"panel-title\">Search Criteria</h1>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"form-group\">\n      <div class=\"col-md-4\">\n        <label for=\"wardNo\" class=\"control-label required\">Ward #</label>\n        <input type=\"text\" id=\"wardNo\" name=\"wardNo\"  [(ngModel)]=\"wardNo\"  />\n      </div>\n      <div class=\"col-md-4\">\n      <button type=\"submit\" class=\"btn btn-primary\" (click)= \"search()\">Search</button>\n      </div>\n    </div>\n    </div>  \n    </div>\n<!--Search results of the land records for approval -->\n<div *ngIf= \"fetchComplete\" >\n<table class=\"table table-striped\">\n  <thead>\n      <tr>\n          <th>Property ID</th>\n          <th>Ward No</th>\n          <th>Area Code</th>\n          <th>Site No</th>\n          <th>Total Area</th>\n          <th>Approve</th>\n      </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor=\"let land of landRecords\">\n          <td><a [routerLink] = \"['/viewLandRecord', land.pid]\">{{land.pid}}</a></td>\n          <td>{{land.wardNo}}</td>\n          <td>{{land.areaCode}}</td>\n          <td>{{land.siteNo}}</td>\n          <td>{{land.geoData.totalArea}}</td>\n         <td><input type=\"checkbox\" name='approval'  [(ngModel)]='land.isMojaniApproved'  #approval=\"ngModel\" /></td>\n      </tr>\n  </tbody>\n</table> \n<div *ngIf='noSearchResults' style='color:red;' align='center'><strong>No matching results found !</strong></div>\n<div *ngIf='!noSearchResults' align='right'>\n<button type=\"submit\" class=\"btn btn-primary\" (click)= \"onSubmit()\">Approve</button>\n</div>\n</div>\n</ng-template>\n<!--Success message for the approval-->\n<ng-template #successMsg >\n<div class=\"alert alert-success\"> <strong>Success!</strong>\nAll the below approved records have been committed to the HyperLedger. Their unique digital Ids are listed below :\n<ul *ngFor= \"let rec of approvedRecords\">\n  <li>{{rec.pid}}</li>\n</ul>\n</div>\n  <div class=\"alert alert-info\">\n    Please click on <strong>OK</strong> to approve other applications !\n  </div>\n  <div align=\"center\"><button type=\"submit\" class=\"btn btn-primary\" (click)=\"submitNew()\">OK</button></div>\n</ng-template>"

/***/ }),

/***/ "./src/app/approve-survey/approve-survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managelandrecords_service__ = __webpack_require__("./src/app/services/managelandrecords.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_survey_data_service__ = __webpack_require__("./src/app/services/survey-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApproveSurveyComponent = /** @class */ (function () {
    function ApproveSurveyComponent(manageLandRecordsService, surveyData) {
        this.manageLandRecordsService = manageLandRecordsService;
        this.surveyData = surveyData;
        this.approveSuccess = false;
        this.fetchComplete = false;
        this.noSearchResults = false;
    }
    ApproveSurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.surveyData.currentData.subscribe(function (records) { return _this.landRecords = records; });
        if (this.landRecords != null && this.landRecords.length > 0) {
            this.fetchComplete = true;
            this.noSearchResults = false;
        }
    };
    ApproveSurveyComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("ApplicationData" + JSON.stringify(this.landRecords));
        //TBD - To add records to block chain
        this.approvedRecords = this.landRecords.filter(function (rec) { return rec.isMojaniApproved; });
        this.manageLandRecordsService.updateMojaniApprovedRecords(this.approvedRecords)
            .subscribe(function (response) {
            console.log("res received updateLandrecordMojani service" + JSON.stringify(response));
            if (response != null && response.success) {
                //  this.router.navigate(['/success', this.landRecord.pid]);
                _this.approveSuccess = true;
            }
        });
    };
    ApproveSurveyComponent.prototype.submitNew = function () {
        this.landRecords = [];
        this.approveSuccess = false;
        this.wardNo = null;
        this.fetchComplete = false;
    };
    ApproveSurveyComponent.prototype.search = function () {
        var _this = this;
        console.log("ward No :" + this.wardNo);
        this.manageLandRecordsService.getLandRecordsMojaniByWard(this.wardNo)
            .subscribe(function (response) {
            console.log("res received from getLandRecords service" + JSON.stringify(response));
            if (response != null) {
                //  this.router.navigate(['/success', this.landRecord.pid]);
                _this.landRecords = response.landRecords;
                if (_this.landRecords != null && _this.landRecords.length > 0) {
                    _this.noSearchResults = true;
                }
                else {
                    _this.noSearchResults = false;
                }
                _this.fetchComplete = true;
                _this.surveyData.updateData(_this.landRecords);
            }
        });
    };
    ApproveSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-approve-survey',
            template: __webpack_require__("./src/app/approve-survey/approve-survey.component.html"),
            styles: [__webpack_require__("./src/app/approve-survey/approve-survey.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_managelandrecords_service__["a" /* ManageLandRecordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_managelandrecords_service__["a" /* ManageLandRecordsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_survey_data_service__["a" /* SurveyDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_survey_data_service__["a" /* SurveyDataService */]) === "function" && _b || Object])
    ], ApproveSurveyComponent);
    return ApproveSurveyComponent;
    var _a, _b;
}());

//# sourceMappingURL=approve-survey.component.js.map

/***/ }),

/***/ "./src/app/gmaps/gmaps.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nagm-map {\r\n  height: 200px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/gmaps/gmaps.component.html":
/***/ (function(module, exports) {

module.exports = "\n<agm-map \n  [latitude]=\"lat\"\n  [longitude]=\"lng\"\n  [zoom]=\"16\"\n  [disableDefaultUI]=\"true\"\n  [zoomControl]=\"true\">\n\n  <agm-marker \n      [latitude]=\"lat\"\n      [longitude]=\"lng\"\n      [label]=\"\"\n      [markerDraggable]=\"false\">\n  </agm-marker>\n</agm-map>"

/***/ }),

/***/ "./src/app/gmaps/gmaps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GmapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GmapsComponent = /** @class */ (function () {
    function GmapsComponent() {
    }
    GmapsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], GmapsComponent.prototype, "lat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], GmapsComponent.prototype, "lng", void 0);
    GmapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-gmaps',
            template: __webpack_require__("./src/app/gmaps/gmaps.component.html"),
            styles: [__webpack_require__("./src/app/gmaps/gmaps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GmapsComponent);
    return GmapsComponent;
}());

//# sourceMappingURL=gmaps.component.js.map

/***/ }),

/***/ "./src/app/guards/auth-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());

//# sourceMappingURL=auth-guard.js.map

/***/ }),

/***/ "./src/app/layout-application/layout-application.component.css":
/***/ (function(module, exports) {

module.exports = ".required:after {\r\n  content: \" *\";\r\n  color : red;\r\n}\r\n\r\n\r\nagm-map {\r\n  height: 300px;\r\n}"

/***/ }),

/***/ "./src/app/layout-application/layout-application.component.html":
/***/ (function(module, exports) {

module.exports = "<div  align=\"center\">\r\n  <h3>MOJANI - Application for Land Survey</h3>\r\n</div>\r\n<div *ngIf =\"!submitSuccess;then applicationForm else applicationSuccess\"></div>\r\n\r\n<ng-template #applicationForm>\r\n<div class=\"applicationForm\">\r\n  <form class=\"form-horizontal\" [formGroup]=\"layoutForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"panel-title\">Land Details</h1>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <div class=\"form-group\">\r\n          <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('wardNo')\">\r\n            <label for=\"wardNo\" class=\"control-label required\">Ward #</label>\r\n            <input type=\"text\" id=\"wardNo\" class=\"form-control\" formControlName=\"wardNo\" />\r\n            <app-show-validation-error [displayError]=\"isFieldValid('wardNo')\" errorMsg=\"Ward # is mandatory\"></app-show-validation-error>\r\n          </div>\r\n          <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('areaCode')\">\r\n            <label for=\"areaCode\" class=\"control-label required\">Area Code</label>\r\n            <input type=\"text\" id=\"areaCode\" class=\"form-control\" formControlName=\"areaCode\" />\r\n            <app-show-validation-error [displayError]=\"isFieldValid('areaCode')\" errorMsg=\"Area code is mandatory\"></app-show-validation-error>\r\n          </div>\r\n          <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('siteNo')\">\r\n            <label for=\"siteNo\" class=\"control-label required\">Plot/Site #</label>\r\n            <input type=\"text\" id=\"siteNo\" class=\"form-control\" formControlName=\"siteNo\" />\r\n            <app-show-validation-error [displayError]=\"isFieldValid('siteNo')\" errorMsg=\"Plot/Site # is mandatory\"></app-show-validation-error>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"panel-title\">Geographic Data</h1>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <div formGroupName=\"geoData\">\r\n          <div class=\"form-group\">\r\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('geoData.latitude')\">\r\n              <label for=\"latitude\" class=\"control-label required\">Latitude</label>\r\n              <input type=\"text\" id=\"latitude\" class=\"form-control\" formControlName=\"latitude\" (change)=\"setGeoCordinates()\" />\r\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.latitude')\" errorMsg=\"Latitude is mandatory\"></app-show-validation-error>\r\n            </div>\r\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('geoData.longitude')\">\r\n              <label for=\"Longitude\" class=\"control-label required\">Longitude</label>\r\n              <input type=\"text\" id=\"longitude\" class=\"form-control\" formControlName=\"longitude\" (change)=\"setGeoCordinates()\" />\r\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.longitude')\" errorMsg=\"Longitude is mandatory\"></app-show-validation-error>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('geoData.length')\">\r\n              <label for=\"length\" class=\"control-label required\">Plot Length (ft.)</label>\r\n              <input type=\"text\" id=\"length\" class=\"form-control\" formControlName=\"length\" (change) = \"calculateTotalArea()\" />\r\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.length')\" errorMsg=\"Plot length is mandatory\"></app-show-validation-error>\r\n            </div>\r\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('geoData.width')\">\r\n              <label for=\"width\" class=\"control-label required\">Plot Width (ft.)</label>\r\n              <input type=\"text\" id=\"width\" class=\"form-control\" formControlName=\"width\" (change) = \"calculateTotalArea()\" />\r\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.width')\" errorMsg=\"Plot width is mandatory\"></app-show-validation-error>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <label for=\"width\" class=\"control-label\">Total Plot Area (sq. ft.)</label>\r\n              <input type=\"text\" id=\"width\" class=\"form-control\" formControlName=\"totalArea\" readonly />\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"col-md-12\" [ngClass]=\"displayFieldCss('geoData.address')\">\r\n              <label for=\"address\" class=\"control-label required\">Property Address</label>\r\n              <input type=\"text\" id=\"address\" class=\"form-control\" formControlName=\"address\" />\r\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.address')\" errorMsg=\"Plot address is mandatory\"></app-show-validation-error>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\" *ngIf=\"lat && long\">\r\n          <app-gmaps [lat]=\"lat\"  [lng]=\"long\"></app-gmaps>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"panel-title\">Upload Land Sketch</h1>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <div class=\"form-group\">\r\n          <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('preMutationSketch')\">\r\n            <label for=\"sketch\" class=\"control-label required\">Property Sketch</label>\r\n            <input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\"image/*\" id=\"sketch\" formControlName=\"preMutationSketch\">\r\n            <app-show-validation-error [displayError]=\"isFieldValid('preMutationSketch')\" errorMsg=\"Premutation sketch is mandatory\"></app-show-validation-error>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"panel-title\">Land Allottee Details</h1>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <div formGroupName=\"ownerDetails\">\r\n          <div class=\"form-group\">\r\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.ownerName')\">\r\n              <label for=\"ownerName\" class=\"control-label required\">Allottee Name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"ownerName\" formControlName=\"ownerName\">\r\n              <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.ownerName')\" errorMsg=\"Property allotee Name is mandatory\"></app-show-validation-error>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.aadharNo')\">\r\n              <label for=\"aadharNo\" class=\"control-label required\">Aadhar #</label>\r\n              <input type=\"text\" id=\"aadharNo\" class=\"form-control\" formControlName=\"aadharNo\" />\r\n              <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.aadharNo')\" errorMsg=\"Aadhar # is mandatory\"></app-show-validation-error>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.gender')\">\r\n             <div> <label class=\"control-label required\">Gender</label></div>\r\n              <label class=\"md-check radio-inline\">\r\n                <input type=\"radio\" value=\"M\" name=\"gender\" formControlName=\"gender\">Male\r\n              </label>\r\n              <label class=\"md-check radio-inline\">\r\n                <input type=\"radio\" value=\"F\" name=\"gender\" formControlName=\"gender\">Female\r\n              </label>\r\n              <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.gender')\" errorMsg=\"Gender is mandatory\"></app-show-validation-error>\r\n            </div>\r\n\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.mobileNo')\">\r\n                  <label for=\"mobileNo\" class=\"control-label required\">Mobile</label>\r\n                  <input type=\"text\" id=\"mobileNo\" class=\"form-control\" formControlName=\"mobileNo\" />\r\n                  <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.mobileNo')\" errorMsg=\"Mobile number is mandatory\"></app-show-validation-error>\r\n                </div>\r\n                <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.emailID')\">\r\n                  <label for=\"emailID\" class=\"control-label required\">Email ID</label>\r\n                  <input type=\"text\" id=\"emailID\" class=\"form-control\" formControlName=\"emailID\" />\r\n                  <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.emailID')\" errorMsg=\"Email ID is mandatory\"></app-show-validation-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"col-md-12\" [ngClass]=\"displayFieldCss('ownerDetails.address')\">\r\n                  <label for=\"ownerAddress\" class=\"control-label required\">Allottee Address</label>\r\n                  <input type=\"text\" id=\"ownerAddress\" class=\"form-control\" formControlName=\"address\" />\r\n                  <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.address')\" errorMsg=\"Allotee address is mandatory\"></app-show-validation-error>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n    </div>\r\n\r\n    <div align=\"right\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n</ng-template>\r\n\r\n<ng-template #applicationSuccess>\r\n  <div class=\"alert alert-success\"> <strong>Success!</strong>Application has been submitted successfully ! The digital Idenfication number for this record is <strong>{{landRecord.pid}}</strong></div>\r\n  <div class=\"alert alert-info\">\r\n    Please click on <strong>Submit New</strong> to submit another application !\r\n  </div>\r\n  <div align=\"center\"><button type=\"submit\" class=\"btn btn-primary\" (click)=\"submitNew()\">Submit New</button></div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/layout-application/layout-application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_managelandrecords_service__ = __webpack_require__("./src/app/services/managelandrecords.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_LandRecord__ = __webpack_require__("./src/app/models/LandRecord.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LayoutApplicationComponent = /** @class */ (function () {
    function LayoutApplicationComponent(formBuilder, manageLandRecordsService) {
        this.formBuilder = formBuilder;
        this.manageLandRecordsService = manageLandRecordsService;
        this.landRecord = new __WEBPACK_IMPORTED_MODULE_3__models_LandRecord__["a" /* LandRecord */](); //initialize land record object
        this.submitSuccess = false;
    }
    LayoutApplicationComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    LayoutApplicationComponent.prototype.createForm = function () {
        this.submitSuccess = false;
        this.lat = null;
        this.long = null;
        this.layoutForm = this.formBuilder.group({
            pid: [''],
            wardNo: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            areaCode: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            siteNo: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            geoData: this.formBuilder.group({
                latitude: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                longitude: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                length: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                width: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                totalArea: '',
                address: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
            }),
            preMutationSketch: [null],
            ownerDetails: this.formBuilder.group({
                ownerName: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                gender: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                aadharNo: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                mobileNo: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                emailID: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                address: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
            })
        });
    };
    LayoutApplicationComponent.prototype.isFieldValid = function (field) {
        return !this.layoutForm.get(field).valid && this.layoutForm.get(field).touched;
    };
    LayoutApplicationComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    LayoutApplicationComponent.prototype.setGeoCordinates = function () {
        this.lat = parseFloat(this.layoutForm.get('geoData.latitude').value);
        this.long = parseFloat(this.layoutForm.get('geoData.longitude').value);
    };
    LayoutApplicationComponent.prototype.calculateTotalArea = function () {
        var length = parseFloat(this.layoutForm.get('geoData.length').value);
        var width = parseFloat(this.layoutForm.get('geoData.width').value);
        var totalArea = length * width;
        if (!isNaN(totalArea)) {
            console.log("Total Area: " + totalArea);
            this.layoutForm.patchValue({ 'geoData': { 'totalArea': totalArea } });
        }
    };
    LayoutApplicationComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.layoutForm.valid) {
            console.log('form valid success');
            //sync the form model with the data model
            this.landRecord = this.layoutForm.value;
            this.landRecord.pid = parseInt(this.landRecord.wardNo.toString().substr(0, 3) + this.landRecord.areaCode.toString().substr(0, 3) + this.landRecord.siteNo.toString().substr(0, 3));
            console.log("pid generated: " + this.landRecord.pid);
            this.manageLandRecordsService.addLandRecordMojani(this.landRecord)
                .subscribe(function (response) {
                console.log("res received addLandRecord service" + JSON.stringify(response));
                if (response != null && response.success) {
                    //  this.router.navigate(['/success', this.landRecord.pid]);
                    _this.submitSuccess = true;
                }
            });
        }
        else {
            this.validateAllFormFields(this.layoutForm);
        }
    };
    LayoutApplicationComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            console.log("file :" + file);
        }
    };
    LayoutApplicationComponent.prototype.submitNew = function () {
        this.createForm();
    };
    LayoutApplicationComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            console.log(field);
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    LayoutApplicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-layout-application',
            template: __webpack_require__("./src/app/layout-application/layout-application.component.html"),
            styles: [__webpack_require__("./src/app/layout-application/layout-application.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_managelandrecords_service__["a" /* ManageLandRecordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_managelandrecords_service__["a" /* ManageLandRecordsService */]) === "function" && _b || Object])
    ], LayoutApplicationComponent);
    return LayoutApplicationComponent;
    var _a, _b;
}());

//# sourceMappingURL=layout-application.component.js.map

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login.alert{\r\n  color:red;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div align=\"center\">\n    <h3>MOJANI - Login</h3>\n</div>\n<div class=\"col-md-6 col-md-offset-3\">\n    <form #userlogin = \"ngForm\" (ngSubmit) = \"onSubmit(userlogin)\" novalidate>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': userlogin.submitted && !username.valid }\">\n        <label for=\"username\">Username</label>\n        <input type = \"text\" class=\"form-control\" name = \"username\" [(ngModel)]=\"login.username\" #username=\"ngModel\" required>\n        <div class=\"login alert\" *ngIf=\"userlogin.submitted && !username.valid\">Username is required</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': userlogin.submitted && !password.valid }\">\n        <label for=\"password\">Password</label>\n        <input type = \"password\" class=\"form-control\" name = \"password\" [(ngModel)]=\"login.password\" #password=\"ngModel\" required>\n        <div class=\"login alert\"  *ngIf=\"userlogin.submitted && !password.valid\">Password is required</div>\n      </div>\n      <div class=\"form-group\" align='center'>\n          <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n      </div>\n      <div *ngIf=\"authMessage && authMessage!=''\" class=\"alert alert-danger\" >{{authMessage}}</div>\n    </form>\n  </div>\n\n "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_authentication_service__ = __webpack_require__("./src/app/services/login-authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginAuthService, router, route) {
        this.loginAuthService = loginAuthService;
        this.router = router;
        this.route = route;
        this.login = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (userlogin) {
        var _this = this;
        if (userlogin.valid) {
            this.loading = true; // validation in progress
            console.log(this.login);
            var user = { "userId": this.login.username, "password": this.login.password };
            this.loginAuthService.authenticateUserLogin(user)
                .subscribe(function (response) {
                _this.loading = false;
                console.log("res received authentication service" + JSON.stringify(response));
                if (response != null && response.authSuccess) {
                    _this.authMessage = null;
                    //if auth success route according to the role
                    if (response.role == "Mojani_Surveyor") {
                        console.log("inside mojani survey'");
                        _this.router.navigateByUrl('/layoutApplication');
                    }
                    else if (response.role == "Mojani_Approver") {
                        console.log("Inside mojani approver");
                        _this.router.navigateByUrl('/approveSurveys');
                    }
                }
                else {
                    _this.authMessage = response.message;
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_authentication_service__["a" /* LoginAuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_authentication_service__["a" /* LoginAuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/models/LandRecord.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandRecord; });
/* unused harmony export GeoData */
/* unused harmony export Owner */
var LandRecord = /** @class */ (function () {
    function LandRecord() {
    }
    return LandRecord;
}());

var GeoData = /** @class */ (function () {
    function GeoData() {
    }
    return GeoData;
}());

var Owner = /** @class */ (function () {
    function Owner() {
    }
    return Owner;
}());

//# sourceMappingURL=LandRecord.js.map

/***/ }),

/***/ "./src/app/services/login-authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginAuthenticationService = /** @class */ (function () {
    function LoginAuthenticationService(http) {
        this.http = http;
    }
    // API: POST /landRecords/landRecord
    LoginAuthenticationService.prototype.authenticateUserLogin = function (userInfo) {
        console.log("Inside authenticateUserLogin function in authentication service");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/login/api/authentication', JSON.stringify(userInfo), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginAuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], LoginAuthenticationService);
    return LoginAuthenticationService;
    var _a;
}());

//# sourceMappingURL=login-authentication.service.js.map

/***/ }),

/***/ "./src/app/services/managelandrecords.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageLandRecordsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageLandRecordsService = /** @class */ (function () {
    function ManageLandRecordsService(http) {
        this.http = http;
    }
    // API: GET /landRecords/:wardNo
    ManageLandRecordsService.prototype.getLandRecordsMojaniByWard = function (wardNo) {
        console.log("Inside getLandRecordsMojaniByWard method in manageLandRecord service");
        return this.http.get('/manageLandRecords/api/getLandRecordsMojaniByWard/' + wardNo)
            .map(function (res) { return res.json(); });
    };
    // API: GET /landRecords/:pId
    ManageLandRecordsService.prototype.getLandRecordsMojaniByPid = function (pId) {
        console.log("Inside getLandRecordsMojaniByPid method in manageLandRecord service");
        return this.http.get('/manageLandRecords/api/getLandRecordsMojaniByPid/' + pId)
            .map(function (res) { return res.json(); });
    };
    // API: POST /landRecords/landRecord
    ManageLandRecordsService.prototype.addLandRecordMojani = function (landRecord) {
        console.log("Inside addLandRecordMojani method in manageLandRecord service");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/manageLandRecords/api/addLandRecordMojani', JSON.stringify(landRecord), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // API: POST /landRecords/landRecord[]
    ManageLandRecordsService.prototype.updateMojaniApprovedRecords = function (landRecords) {
        console.log("Inside updateMojaniApprovedRecords method in manageLandRecord service");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/manageLandRecords/api/updateMojaniApprovedStatus', JSON.stringify(landRecords), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ManageLandRecordsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ManageLandRecordsService);
    return ManageLandRecordsService;
    var _a;
}());

//# sourceMappingURL=managelandrecords.service.js.map

/***/ }),

/***/ "./src/app/services/survey-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SurveyDataService = /** @class */ (function () {
    function SurveyDataService() {
        this.sharedData = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.currentData = this.sharedData.asObservable();
    }
    SurveyDataService.prototype.updateData = function (records) {
        this.sharedData.next(records);
    };
    SurveyDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SurveyDataService);
    return SurveyDataService;
}());

//# sourceMappingURL=survey-data.service.js.map

/***/ }),

/***/ "./src/app/show-validation-error/show-validation-error.component.css":
/***/ (function(module, exports) {

module.exports = ".error-msg {\n  color: #a94442;\n}\n\n.fix-error-icon {\n  top: 27px;\n}\n\n.required:after {\n  content: \" *\";\n}\n"

/***/ }),

/***/ "./src/app/show-validation-error/show-validation-error.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayError\">\r\n  <span class=\"glyphicon glyphicon-remove form-control-feedback fix-error-icon\"></span>\r\n  <span class=\"sr-only\">(error)</span>\r\n  <div class=\"error-msg\">\r\n    {{ errorMsg }}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/show-validation-error/show-validation-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowValidationErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowValidationErrorComponent = /** @class */ (function () {
    function ShowValidationErrorComponent() {
    }
    ShowValidationErrorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ShowValidationErrorComponent.prototype, "errorMsg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ShowValidationErrorComponent.prototype, "displayError", void 0);
    ShowValidationErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-show-validation-error',
            template: __webpack_require__("./src/app/show-validation-error/show-validation-error.component.html"),
            styles: [__webpack_require__("./src/app/show-validation-error/show-validation-error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowValidationErrorComponent);
    return ShowValidationErrorComponent;
}());

//# sourceMappingURL=show-validation-error.component.js.map

/***/ }),

/***/ "./src/app/view-land-record/view-land-record.component.css":
/***/ (function(module, exports) {

module.exports = "/*add css here */"

/***/ }),

/***/ "./src/app/view-land-record/view-land-record.component.html":
/***/ (function(module, exports) {

module.exports = "<div  align=\"center\">\n  <h3>MOJANI - View Application for Land Survey</h3>\n</div>\n\n<div class=\"applicationForm\">\n  <form class=\"form-horizontal\" [formGroup]=\"layoutForm\" (ngSubmit)=\"onSubmit()\">\n    <fieldset disabled>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">Land Details</h1>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"form-group\">\n          <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('wardNo')\">\n            <label for=\"wardNo\" class=\"control-label required\">Ward #</label>\n            <input type=\"text\" id=\"wardNo\" class=\"form-control\" formControlName=\"wardNo\" />\n            <app-show-validation-error [displayError]=\"isFieldValid('wardNo')\" errorMsg=\"Ward # is mandatory\"></app-show-validation-error>\n          </div>\n          <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('areaCode')\">\n            <label for=\"areaCode\" class=\"control-label required\">Area Code</label>\n            <input type=\"text\" id=\"areaCode\" class=\"form-control\" formControlName=\"areaCode\" />\n            <app-show-validation-error [displayError]=\"isFieldValid('areaCode')\" errorMsg=\"Area code is mandatory\"></app-show-validation-error>\n          </div>\n          <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('siteNo')\">\n            <label for=\"siteNo\" class=\"control-label required\">Plot/Site #</label>\n            <input type=\"text\" id=\"siteNo\" class=\"form-control\" formControlName=\"siteNo\" />\n            <app-show-validation-error [displayError]=\"isFieldValid('siteNo')\" errorMsg=\"Plot/Site # is mandatory\"></app-show-validation-error>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">Geographic Data</h1>\n      </div>\n      <div class=\"panel-body\">\n        <div formGroupName=\"geoData\">\n          <div class=\"form-group\">\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('geoData.latitude')\">\n              <label for=\"latitude\" class=\"control-label required\">Latitude</label>\n              <input type=\"text\" id=\"latitude\" class=\"form-control\" formControlName=\"latitude\" (change)=\"setGeoCordinates()\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.latitude')\" errorMsg=\"Latitude is mandatory\"></app-show-validation-error>\n            </div>\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('geoData.longitude')\">\n              <label for=\"Longitude\" class=\"control-label required\">Longitude</label>\n              <input type=\"text\" id=\"longitude\" class=\"form-control\" formControlName=\"longitude\" (change)=\"setGeoCordinates()\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.longitude')\" errorMsg=\"Longitude is mandatory\"></app-show-validation-error>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('geoData.length')\">\n              <label for=\"length\" class=\"control-label required\">Plot Length (ft.)</label>\n              <input type=\"text\" id=\"length\" class=\"form-control\" formControlName=\"length\" (change) = \"calculateTotalArea()\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.length')\" errorMsg=\"Plot length is mandatory\"></app-show-validation-error>\n            </div>\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('geoData.width')\">\n              <label for=\"width\" class=\"control-label required\">Plot Width (ft.)</label>\n              <input type=\"text\" id=\"width\" class=\"form-control\" formControlName=\"width\" (change) = \"calculateTotalArea()\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.width')\" errorMsg=\"Plot width is mandatory\"></app-show-validation-error>\n            </div>\n            <div class=\"col-md-4\">\n              <label for=\"width\" class=\"control-label\">Total Plot Area (sq. ft.)</label>\n              <input type=\"text\" id=\"width\" class=\"form-control\" formControlName=\"totalArea\" readonly />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-md-12\" [ngClass]=\"displayFieldCss('geoData.address')\">\n              <label for=\"address\" class=\"control-label required\">Property Address</label>\n              <input type=\"text\" id=\"address\" class=\"form-control\" formControlName=\"address\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.address')\" errorMsg=\"Plot address is mandatory\"></app-show-validation-error>\n            </div>\n          </div>\n          <div class=\"col-md-12\" *ngIf=\"lat && long\">\n          <app-gmaps [lat]=\"lat\"  [lng]=\"long\"></app-gmaps>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">Upload Land Sketch</h1>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"form-group\">\n          <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('preMutationSketch')\">\n            <label for=\"sketch\" class=\"control-label required\">Property Sketch</label>\n            <input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\"image/*\" id=\"sketch\" formControlName=\"preMutationSketch\">\n            <app-show-validation-error [displayError]=\"isFieldValid('preMutationSketch')\" errorMsg=\"Premutation sketch is mandatory\"></app-show-validation-error>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">Land Allottee Details</h1>\n      </div>\n      <div class=\"panel-body\">\n        <div formGroupName=\"ownerDetails\">\n          <div class=\"form-group\">\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.ownerName')\">\n              <label for=\"ownerName\" class=\"control-label required\">Allottee Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"ownerName\" formControlName=\"ownerName\">\n              <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.ownerName')\" errorMsg=\"Property allotee Name is mandatory\"></app-show-validation-error>\n            </div>\n\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.aadharNo')\">\n              <label for=\"aadharNo\" class=\"control-label required\">Aadhar #</label>\n              <input type=\"text\" id=\"aadharNo\" class=\"form-control\" formControlName=\"aadharNo\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.aadharNo')\" errorMsg=\"Aadhar # is mandatory\"></app-show-validation-error>\n            </div>\n\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.gender')\">\n             <div> <label class=\"control-label required\">Gender</label></div>\n              <label class=\"md-check radio-inline\">\n                <input type=\"radio\" value=\"M\" name=\"gender\" formControlName=\"gender\">Male\n              </label>\n              <label class=\"md-check radio-inline\">\n                <input type=\"radio\" value=\"F\" name=\"gender\" formControlName=\"gender\">Female\n              </label>\n              <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.gender')\" errorMsg=\"Gender is mandatory\"></app-show-validation-error>\n            </div>\n\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.mobileNo')\">\n                  <label for=\"mobileNo\" class=\"control-label required\">Mobile</label>\n                  <input type=\"text\" id=\"mobileNo\" class=\"form-control\" formControlName=\"mobileNo\" />\n                  <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.mobileNo')\" errorMsg=\"Mobile number is mandatory\"></app-show-validation-error>\n                </div>\n                <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.emailID')\">\n                  <label for=\"emailID\" class=\"control-label required\">Email ID</label>\n                  <input type=\"text\" id=\"emailID\" class=\"form-control\" formControlName=\"emailID\" />\n                  <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.emailID')\" errorMsg=\"Email ID is mandatory\"></app-show-validation-error>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-md-12\" [ngClass]=\"displayFieldCss('ownerDetails.address')\">\n                  <label for=\"ownerAddress\" class=\"control-label required\">Allottee Address</label>\n                  <input type=\"text\" id=\"ownerAddress\" class=\"form-control\" formControlName=\"address\" />\n                  <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.address')\" errorMsg=\"Allotee address is mandatory\"></app-show-validation-error>\n                </div>\n              </div>\n\n            </div>\n          </div>\n    </div>\n  </fieldset>\n  <div align=\"right\">\n      <button type=\"submit\" class=\"btn btn-primary\">Back</button>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/view-land-record/view-land-record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewlandrecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_managelandrecords_service__ = __webpack_require__("./src/app/services/managelandrecords.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_LandRecord__ = __webpack_require__("./src/app/models/LandRecord.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewlandrecordComponent = /** @class */ (function () {
    function ViewlandrecordComponent(formBuilder, location, manageLandRecordsService, router, route) {
        this.formBuilder = formBuilder;
        this.location = location;
        this.manageLandRecordsService = manageLandRecordsService;
        this.router = router;
        this.route = route;
        this.landRecord = new __WEBPACK_IMPORTED_MODULE_5__models_LandRecord__["a" /* LandRecord */](); //initialize land record object
        this.submitSuccess = false;
    }
    ViewlandrecordComponent.prototype.ngOnInit = function () {
        this.loadForm();
    };
    ViewlandrecordComponent.prototype.loadForm = function () {
        var _this = this;
        this.submitSuccess = false;
        this.lat = null;
        this.long = null;
        this.layoutForm = this.formBuilder.group({
            pid: [''],
            wardNo: [null],
            areaCode: [null,],
            siteNo: [null,],
            geoData: this.formBuilder.group({
                latitude: [null],
                longitude: [null],
                length: [null],
                width: [null],
                totalArea: '',
                address: [null]
            }),
            preMutationSketch: [null],
            ownerDetails: this.formBuilder.group({
                ownerName: [null],
                gender: [null],
                aadharNo: [null],
                mobileNo: [null],
                emailID: [null],
                address: [null]
            })
        });
        this.route.params
            .switchMap(function (params) { return _this.manageLandRecordsService.getLandRecordsMojaniByPid(+params['id']); })
            .subscribe(function (response) {
            console.log("res received getLandRecordbyPid service" + JSON.stringify(response));
            if (response != null && response.success) {
                _this.landRecord = response.landRecords;
                console.log("landRecord object received:" + _this.landRecord);
                _this.layoutForm.patchValue(_this.landRecord);
                _this.setGeoCordinates();
            }
        });
    };
    ViewlandrecordComponent.prototype.onSubmit = function () {
        this.location.back();
    };
    ViewlandrecordComponent.prototype.isFieldValid = function (field) {
        return !this.layoutForm.get(field).valid && this.layoutForm.get(field).touched;
    };
    ViewlandrecordComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    ViewlandrecordComponent.prototype.setGeoCordinates = function () {
        this.lat = parseFloat(this.layoutForm.get('geoData.latitude').value);
        this.long = parseFloat(this.layoutForm.get('geoData.longitude').value);
    };
    ViewlandrecordComponent.prototype.calculateTotalArea = function () {
        var length = parseFloat(this.layoutForm.get('geoData.length').value);
        var width = parseFloat(this.layoutForm.get('geoData.width').value);
        var totalArea = length * width;
        if (!isNaN(totalArea)) {
            console.log("Total Area: " + totalArea);
            this.layoutForm.patchValue({ 'geoData': { 'totalArea': totalArea } });
        }
    };
    ViewlandrecordComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            console.log("file :" + file);
        }
    };
    ViewlandrecordComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            console.log(field);
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ViewlandrecordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-viewlandrecord',
            template: __webpack_require__("./src/app/view-land-record/view-land-record.component.html"),
            styles: [__webpack_require__("./src/app/view-land-record/view-land-record.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_managelandrecords_service__["a" /* ManageLandRecordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_managelandrecords_service__["a" /* ManageLandRecordsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
    ], ViewlandrecordComponent);
    return ViewlandrecordComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=view-land-record.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map