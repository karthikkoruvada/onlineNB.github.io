(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mr-0 ml-0 \">\n  <div class=\"col mt-5\" >\n\n<h1 class=\"text-danger\">  <u>About our college:</u></h1>\n<br/>\n<br/>\n<p  style=\"text-indent:80px;font-size:25px;margin-bottom:150px\">\n  <b>\n      JNTU (Jawaharlal Nehru Technological University) was originally ‘The College of Engineering, Vizagpatnam’ at the time of its establishment in 1946. It is now a sprawling campus of 110 acres, green with mango trees in the fast developing Port city of Kakinada, East coast of peninsula India.\n  </b>\n</p>\n\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row  ml-0 mr-0\">\n  <div class=\"col-3\"></div>\n\n  <div class=\"col-6 \">\n    <div clas=\"jumbotron \">\n        <br/>\n        <br/>\n\n        <h1 >Admin registration</h1>\n        <br/>\n        <br/>\n        <br/>\n        \n      <form #ref=\"ngForm\" (ngSubmit)=\"admin(ref.value)\">\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <div class=\"form-group\">\n              <p><label for=\"user\"> <b>EmployeeId: </b></label>\n                <input id=\"user\" type=\"text\" placeholder=\"karthik\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" required  pattern=\"[0-9][0-9][a-z][a-z]\\d\\d\\d\"  maxlength=\"7\" #ref1=\"ngModel\">\n                <label class=\"alert alert-danger validation-message\" *ngIf=\"ref1.touched&&ref1.pristine&&ref1.invalid\"> name is required</label>\n                <label class=\"alert alert-danger validation-message\"*ngIf=\"ref1.dirty&&ref1.invalid\">enter correct id</label>\n                \n                 {{ref1.className}}\n                \n\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"pass\"> <b>Password:</b></label>\n              <input id=\"pass\"   type=\"{{check?'text':'password'}}\" placeholder=\"13a@b3\"class=\"form-control\"name=\"password\" [(ngModel)]=\"password\" required  pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$\"   #ref2=\"ngModel\">\n              <input type=\"checkbox\" [(ngModel)]=\"check\" name=\"check\"><label>show password</label>\n              <label class=\"alert alert-danger validation-message\" *ngIf=\"ref2.touched&&ref2.pristine&&ref2.invalid\">create password</label>\n              <label class=\"alert alert-danger validation-message\" *ngIf=\"ref2.errors?.pattern&&ref2.dirty&&ref2.invalid\">password be like:1 number,1 special symbol and 1 character atleast</label>\n \n              \n\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"cpass\"><b>Confirm Password:</b></label>\n              <input id=\"cpass\" placeholder=\"13a@b3\"  type=\"password\" #cf=\"ngModel\" class=\"form-control\" name=\"cpassword\"  [(ngModel)]=\"cpassword\">\n              \n              <label class=\"alert alert-danger validation-message\" *ngIf=\"ref2.value!=cf.value\">passwords donot match</label>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"p\"><b>Email:</b></label>\n                <input type=\"email\" id=\"p\" placeholder=\"karthik@gmail.com\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\">\n              </div>\n          </div>\n\n          \n        \n    \n\n          <div class=\"col-6\">\n\n              \n\n            <div class=\"form-group\">\n              <p><label for=\"dob\"> <b>Date of Birth: </b></label>\n                <input id=\"dob\" type=\"date\" class=\"form-control\" name=\"dob\" [(ngModel)]=\"dob\">\n            </div>\n\n            <label class=\"mt-3\"> <b>Gender:</b></label>\n            <div class=\"form-check \">\n                <label class=\"form-check-label\">\n    \n                \n                 \n                  <input type=\"radio\" class=\"form-check-input\" name=\"gender\" value=\"Male\" [(ngModel)]=\"male\"><b>Male</b>\n              \n              </label>\n              </div>\n              \n              <div class=\"form-check \">\n                  <label class=\"form-check-label\">\n      \n                \n                   \n                    <input type=\"radio\" class=\"form-check-input\"  name=\"gender\" value=\"Female\" [(ngModel)]=\"Female\"><b>Female</b>\n                  \n                </label>\n                </div>\n\n            <div class=\"form-group mt-2\">\n              <label for=\"no\"><b>Phone number:</b></label>\n              <input id=\"no\" placeholder=\"7878787878\" type=\"text\" class=\"form-control\" name=\"phno\" required pattern=\"\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\" maxlength=\"10\" [(ngModel)]=\"phno\" #re=ngModel>\n              <label class=\"alert alert-danger validation-message\" *ngIf=\"re.touched&&re.pristine&&re.invalid\">phone no required</label>\n              <label class=\"alert alert-danger validation-message\" *ngIf=\"re.errors?.pattern&&re.dirty&&re.invalid\">enter 10 digit number</label>\n            </div>\n\n            <br/>\n            <br/>\n            <button type=\"submit\"  class=\"btn btn-danger mt-4 \" style=\"margin-left: 250px\"  >Register</button>\n\n          \n  \n\n            <!-- [disabled]=\"!ref.valid\" -->\n\n          </div>\n        </div>\n\n      </form>\n\n    </div>\n\n  </div>\n  <div class=\"col-3\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _serve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../serve.service */ "./src/app/serve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(rou, ds) {
        this.rou = rou;
        this.ds = ds;
        this.check = false;
        this.cpassword = null;
        this.dob = null;
        this.email = null;
        this.username = null;
        this.password = null;
        this.phno = null;
        this.Female = null;
        this.Male = null;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.admin = function (data) {
        var _this = this;
        // this.admindata=data;
        this.rou.navigate(['/home/success']);
        console.log(data);
        this.ds.adminRedData(data).subscribe(function (r) {
            alert("successfully logged");
            _this.rou.navigate(['/home']);
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _serve_service__WEBPACK_IMPORTED_MODULE_2__["ServeService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _rou_rou_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rou/rou.module */ "./src/app/rou/rou.module.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _logoutstudent_logoutstudent_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./logoutstudent/logoutstudent.component */ "./src/app/logoutstudent/logoutstudent.component.ts");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./success/success.component */ "./src/app/success/success.component.ts");
/* harmony import */ var _profileadmin_profileadmin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profileadmin/profileadmin.component */ "./src/app/profileadmin/profileadmin.component.ts");
/* harmony import */ var _notificationsadmin_notificationsadmin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notificationsadmin/notificationsadmin.component */ "./src/app/notificationsadmin/notificationsadmin.component.ts");
/* harmony import */ var _resultsadmin_resultsadmin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resultsadmin/resultsadmin.component */ "./src/app/resultsadmin/resultsadmin.component.ts");
/* harmony import */ var _resultsstud_resultsstud_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./resultsstud/resultsstud.component */ "./src/app/resultsstud/resultsstud.component.ts");
/* harmony import */ var _notificationsstud_notificationsstud_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./notificationsstud/notificationsstud.component */ "./src/app/notificationsstud/notificationsstud.component.ts");
/* harmony import */ var _profilestud_profilestud_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profilestud/profilestud.component */ "./src/app/profilestud/profilestud.component.ts");
/* harmony import */ var _branch_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./branch.pipe */ "./src/app/branch.pipe.ts");
/* harmony import */ var _date_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./date.pipe */ "./src/app/date.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_8__["StudentComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"],
                _logoutstudent_logoutstudent_component__WEBPACK_IMPORTED_MODULE_13__["LogoutstudentComponent"],
                _success_success_component__WEBPACK_IMPORTED_MODULE_14__["SuccessComponent"],
                _profileadmin_profileadmin_component__WEBPACK_IMPORTED_MODULE_15__["ProfileadminComponent"],
                _notificationsadmin_notificationsadmin_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsadminComponent"],
                _resultsadmin_resultsadmin_component__WEBPACK_IMPORTED_MODULE_17__["ResultsadminComponent"],
                _resultsstud_resultsstud_component__WEBPACK_IMPORTED_MODULE_18__["ResultsstudComponent"],
                _notificationsstud_notificationsstud_component__WEBPACK_IMPORTED_MODULE_19__["NotificationsstudComponent"],
                _profilestud_profilestud_component__WEBPACK_IMPORTED_MODULE_20__["ProfilestudComponent"],
                _branch_pipe__WEBPACK_IMPORTED_MODULE_21__["BranchPipe"],
                _date_pipe__WEBPACK_IMPORTED_MODULE_22__["DatePipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _rou_rou_module__WEBPACK_IMPORTED_MODULE_10__["RouModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/branch.pipe.ts":
/*!********************************!*\
  !*** ./src/app/branch.pipe.ts ***!
  \********************************/
/*! exports provided: BranchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchPipe", function() { return BranchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BranchPipe = /** @class */ (function () {
    function BranchPipe() {
    }
    BranchPipe.prototype.transform = function (data, searchbranch) {
        if (!data || !searchbranch) {
            return data;
        }
        else {
            return data.filter(function (x) { return x.Branch.toLowerCase().indexOf(searchbranch.toLowerCase()) !== -1; });
        }
    };
    BranchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'branch'
        })
    ], BranchPipe);
    return BranchPipe;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row ml-0 mr-0\" >\n <div class=\"col-4\"></div>\n  <div class=\"col-4 \" >\n      <h1  >contact</h1>\n     <!-- <form #ref=\"ngForm\" (ngSubmit)=\"contact(ref.value)\">\n        <br/>\n          <br/>\n         \n          <br/>\n          <br/>\n\n      <div class=\"form-group\">\n          <p><label for=\"user\"> <b>Email: </b></label>\n            <input id=\"user\" type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\">\n        </div>\n\n        <div class=\"form-group mt-2\">\n            <label for=\"no\"><b>Phone number:</b></label>\n            <input id=\"no\" placeholder=\"7878787878\" type=\"text\" class=\"form-control\" name=\"phno\" required pattern=\"\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\" maxlength=\"10\" [(ngModel)]=\"phno\" #re=ngModel>\n            <label class=\"text-danger\" *ngIf=\"re.touched&&re.pristine&&re.invalid\">phone no required</label>\n            <label class=\"text-danger\" *ngIf=\"re.errors?.pattern&&re.dirty&&re.invalid\">enter 10 digit number</label>\n          </div>\n\n        <div class=\"form-group\">\n          <label for=\"cpass\"><b>Enter your meessage:</b></label>\n          <input id=\"cpass\" type=\"text\" class=\"form-control\" name=\"message\" [(ngModel)]=\"message\">\n        </div>\n        <button type=\"submit\"  class=\"btn btn-danger mt-5\" style=\"margin-left:400px\" >Register</button>\n      </form>\n  </div> -->\n  <div class=\"col-4\"></div>\n  </div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(router) {
        this.router = router;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/date.pipe.ts":
/*!******************************!*\
  !*** ./src/app/date.pipe.ts ***!
  \******************************/
/*! exports provided: DatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePipe", function() { return DatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DatePipe = /** @class */ (function () {
    function DatePipe() {
    }
    DatePipe.prototype.transform = function (data, searchdate) {
        if (!data || !searchdate) {
            return data;
        }
        else {
            return data.filter(function (x) { return x.Date.toLowerCase().indexOf(searchdate.toLowerCase()) !== -1; });
        }
    };
    DatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'date'
        })
    ], DatePipe);
    return DatePipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown:hover .dropdown-menu {\r\n    display: block;\r\n    }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <nav class=\"navbar navbar-expand-sm bg-dark  navbar-dark sticky-top\">\n      <button type=\"button\" class=\"navbar-toggler\"  data-toggle=\"collapse\" data-target=\"#k\">\n        <span class=\"navbar-toggler-icon \"> \n\n        </span>\n      </button>\n<div class=\"collapse navbar-collapse\" id=\"k\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a href=\"\"> <img class=\"nav-link\" src=\"assets/k.png\" width=\"90px\" height=\"90px\"> </a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a routerLink=\"home\" class=\"nav-link text-warning mt-3\" style=\"font-size:25px\"> Home </a>\n        </li>\n\n\n\n\n\n        <li class=\"nav-item dropdown mt-3 \" style=\"font-size:25px;margin-left: 1300px\">\n          <a class=\"nav-link dropdown-toggle text-warning\" data-toggle=\"dropdown\" href=\"#drop\">Register</a>\n          <div class=\"dropdown-menu  bg-dark\" id=\"#drop\">\n            <a class=\"dropdown-item text-warning\" style=\"font-size:20px\" routerLink=\"admin\">Admin</a>\n            <a class=\"dropdown-item text-warning\" style=\"font-size:20px\" routerLink=\"student\">Student</a>\n\n\n          </div>\n\n        </li>\n\n\n        <li class=\"nav-item\">\n          <a routerLink=\"login\" class=\"nav-link text-warning mt-3\" style=\"font-size:25px;margin-left: 20px\"> Login </a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a routerLink=\"contact\" class=\"nav-link text-warning mt-3\" style=\"font-size:25px;margin-left: 20px\">Contact\n          </a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a routerLink=\"about\" class=\"nav-link text-warning mt-3\" style=\"font-size:25px;margin-left: 20px\">About </a>\n        </li>\n\n      </ul>\n\n    </div>\n\n    </nav>\n \n\n\n\n\n\n<div class=\"row no-gutters\">\n\n  <div class=\"col-9\">\n    <img style=\"background-color:orangered\" width=\"100%\" height=\"30px\">\n\n\n    <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n      <ul class=\"carousel-indicators\">\n        <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"3\"></li>\n\n      </ul>\n\n\n\n      <!-- The slideshow -->\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img src=\"assets\\78.jpg\" alt=\"Los Angeles\" style=\"width:100%;height:540px\">\n        </div>\n\n        <div class=\"carousel-item\">\n          <img src=\"assets\\42.jpg\" alt=\"New York\" style=\"width:100%;height:540px\">\n        </div>\n\n        <div class=\"carousel-item\">\n          <img src=\"assets\\i.jpg\" alt=\"New York\" style=\"width:100%;height:540px\">\n        </div>\n\n        <div class=\"carousel-item\">\n            <img src=\"assets\\o.jpg\" alt=\"New York\" style=\"width:100%;height:540px\">\n          </div>\n      </div>\n\n      <!-- Left and right controls -->\n      <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\"></span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\"></span>\n      </a>\n    </div>\n    <marquee direction=\"left\" truespeed=\"30\" class=\"bg-mute mt-0\">\n      <h5 class=\"text-danger \" style=\"font-size:40px\"> <b>welcome to college notice board</b></h5>\n\n    </marquee>\n    <div class=\"mt-0\" style=\"background-image:url(assets/012.jpeg)\">\n      <router-outlet></router-outlet>\n    </div>\n\n \n  </div>\n\n\n\n\n\n\n\n  <div class=\"col-3 \" >\n\n    <div class=\"card\" style=\"width: 100%\">\n      <div class=\"card-header \">\n        <h2 class=\"text-danger\" style=\"text-align: center\">Updates </h2>\n      </div>\n    </div>\n    <div class=\"jumbotron\" style=\"height:100%; background-color:darkslategrey\">\n\n      <marquee direction=\"down\" truespeed=\"30\"  onMouseOver=\"this.stop()\" onMouseOut=\"this.start()\" >\n        \n\n        \n        <a  style=\"color: darkorange\" href=\"\">A scrolling text created with HTML Marquee element</a><br />\n\n        <br />\n        <br />\n\n        <a href=\"\">A scrolling text created with HTML Marquee element</a><br />\n\n        <br />\n        <br />\n\n        <a  style=\"color: darkorange\" href=\"\">A scrolling text created with HTML Marquee element</a><br />\n\n        <br />\n        <br />\n\n        <a href=\"\">A scrolling text created with HTML Marquee element</a><br />\n\n        <br />\n        <br />\n\n        <a  style=\"color: darkorange\" href=\"\">A scrolling text created with HTML Marquee element</a><br />\n\n        <br />\n        <br />\n\n        <a href=\"\">A scrolling text created with HTML Marquee element</a><br />\n\n        <br />\n        <br />\n\n        <a   style=\"color: darkorange\" href=\"\">A scrolling text created with HTML Marquee element</a><br />\n\n        <br />\n        <br />\n\n        <a href=\"\">A scrolling text created with HTML Marquee element</a><br />\n\n        <br />\n        <br />\n\n        <a  style=\"color: darkorange\" href=\"\">A scrolling text created with HTML Marquee element</a><br />\n\n        <br />\n        <br />\n\n        <a href=\"\">A scrolling text created with HTML Marquee element</a><br />\n\n        <br />\n        <br />\n\n        <a   style=\"color: darkorange\"href=\"\">A scrolling text created with HTML Marquee element</a><br />\n\n        <br />\n        <br />\n\n        <a href=\"\">A scrolling text created with HTML Marquee element</a><br />\n\n        <br />\n        <br />\n\n        <a  style=\"color: darkorange\" href=\"\">A scrolling text created with HTML Marquee element</a><br />\n\n        <br />\n        <br />\n\n        \n\n\n\n\n    \n\n\n\n      </marquee>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row ml-0 mr-0\" >\n    <div class=\"col-4\"></div>\n    <div class=\"col-4\">\n      <div clas=\"jumbotron bg-success\">\n          <br/>\n          <br/>\n          <h1  >Login</h1>\n          <br/>\n          <form #ref=\"ngForm\" (ngSubmit)=\"method(ref.value)\">\n\n\n          <div class=\"form-group\">\n            <p><label for=\"user\"> <b>Username: </b></label>\n              <input id=\"user\" type=\"text\" class=\"form-control\" placeholder=\"karthik\" name=\"username\"  required [(ngModel)]=\"username\">\n              <!-- <label class=\"alert alert-danger validation-message\" *ngIf=\"fr.touched&&fr.invalid&&fr.pristine\">username is mandatory </label>\n              <label class=\"alert alert-danger validation-message\" *ngIf=\"fr.invalid&&fr.errors?.minlength&&fr.dirty\">minimum 5 char required </label> -->\n\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"cpass\"><b> Password:</b></label>\n            <input id=\"cpass\" placeholder=\"13a@b3\"  type=\"{{check?'text':'password'}}\" class=\"form-control\" required name=\"password\" [(ngModel)]=\"password\">\n            <input type=\"checkbox\" [(ngModel)]=\"check\" name=\"check\"><label>show password</label>\n          </div>\n\n          <button type=\"submit\"   class=\"btn btn-danger mt-4 \" [disabled]=\"!ref.valid\" >Login</button>\n        </form>\n      </div>\n  \n    \n  </div>\n  <div class=\"col-4\"></div>\n</div>\n  "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _serve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../serve.service */ "./src/app/serve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, ds) {
        this.router = router;
        this.ds = ds;
        // s1:string="karthik";
        // s2:string="karthik";
        // s3:string="nandhu";
        // s4:string="nandhu";
        this.check = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // username:string=null;
    // password:string=null;
    LoginComponent.prototype.method = function (data) {
        //   if(this.s1.match(data.username)&&this.s2.match(data.password))
        //   {
        //     this.router.navigate(['logout']);
        //   }
        // else if(this.s3.match(data.username)&&this.s4.match(data.password))
        //   {
        //     this.router.navigate(['logoutstudent']);
        //   }
        var _this = this;
        this.ds.loginCheck(data).subscribe(function (r) {
            console.log(r[0]);
            _this.r = r[0];
            if (r[0] != null) {
                alert("login successfull");
                if ((r[0].username).length == 7) {
                    _this.router.navigate(['logout']);
                }
                else {
                    _this.router.navigate(['logoutstudent']);
                }
            }
            else {
                alert("login failed");
            }
        });
        this.ds.setDataFromLogin(this.r);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _serve_service__WEBPACK_IMPORTED_MODULE_2__["ServeService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <nav class=\"navbar navbar-expand-sm bg-dark \">\n      <ul class=\"navbar-nav\">\n\n\n\n        <li class=\"nav-item\">\n          <a  class=\"nav-link  mt-3\" style=\"font-size:40px;color: crimson\">Admin </a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a routerLink=\"logout1\" class=\"nav-link text-info mt-3\" style=\"font-size:25px;margin-left: 1750px\"> Logout </a>\n        </li>\n\n\n\n\n\n\n\n      </ul>\n\n    </nav>\n\n    <div class=\"row\">\n      <div class=\"col-3\">\n        <nav class=\"navbar navbar-sm bg-warning\" >\n          <ul class=\"navbar-nav ml-2\">\n            <li class=\"nav-item \">\n              <div class=\"card\">\n                <div class=\"card-header bg-dark\">\n                  <img class=\"nav-link rounded-circle\" src=\"assets/111.jpg\" height=\"200px\" width=\"200px\">\n                </div>\n\n              </div>\n            </li>\n\n\n            <li class=\"nav-item\" style=\"margin-top: 50px\">\n              <a routerLink=\"proadmin\" class=\"nav-link text-info mt-3\" style=\"font-size:25px\"><b> Profile</b> </a>\n            </li>\n\n\n          \n\n            <li class=\"nav-item\">\n              <a routerLink=\"notiadmin\" class=\"nav-link text-info mt-3\" style=\"font-size:25px\"> <b>Notifications</b> </a>\n            </li>\n\n\n            <li class=\"nav-item\" style=\"margin-bottom: 300px\">\n              <a routerLink=\"resultadmin\" class=\"nav-link text-info mt-3\" style=\"font-size:25px\"><b>Results</b></a>\n            </li>\n\n\n\n\n\n\n\n\n\n          </ul>\n\n        </nav>\n        \n      </div>\n      <div class=\"col-9\">\n          <router-outlet></router-outlet>\n      </div>\n    </div>\n\n   \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _serve_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../serve.service */ "./src/app/serve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(ds) {
        this.ds = ds;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_serve_service__WEBPACK_IMPORTED_MODULE_1__["ServeService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/logoutstudent/logoutstudent.component.css":
/*!***********************************************************!*\
  !*** ./src/app/logoutstudent/logoutstudent.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logoutstudent/logoutstudent.component.html":
/*!************************************************************!*\
  !*** ./src/app/logoutstudent/logoutstudent.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n        <nav class=\"navbar navbar-expand-sm bg-dark \">\n            <ul class=\"navbar-nav\">\n      \n      \n              <li class=\"nav-item\">\n                <a  class=\"nav-link  mt-3\" style=\"font-size:40px;color: crimson\">Student </a>\n              </li>\n\n              <li class=\"nav-item\">\n                <a routerLink=\"logouts\" class=\"nav-link text-info mt-3\" style=\"font-size:25px;margin-left:1750px\"> Logout </a>\n              </li>\n\n          \n\n            \n      \n      \n      \n      \n      \n            </ul>\n      \n          </nav>\n\n          <div class=\"row\">\n              <div class=\"col-3\">\n                <nav class=\"navbar navbar-sm bg-warning\" >\n                  <ul class=\"navbar-nav ml-2\">\n                    <li class=\"nav-item \">\n                      <div class=\"card\">\n                        <div class=\"card-header bg-dark\">\n                          <img class=\"nav-link rounded-circle\" src=\"assets/98.jpg\" height=\"200px\" width=\"200px\">\n                        </div>\n        \n                      </div>\n                    </li>\n        \n        \n                    <li class=\"nav-item\" style=\"margin-top: 50px\">\n                      <a routerLink=\"prostu\" class=\"nav-link text-info mt-3\" style=\"font-size:25px\"><b> Profile</b> </a>\n                    </li>\n        \n        \n                   \n        \n        \n                    <li class=\"nav-item\">\n                      <a routerLink=\"notistu\" class=\"nav-link text-info mt-3\" style=\"font-size:25px\"> <b>Notifications</b> </a>\n                    </li>\n        \n        \n                    <li class=\"nav-item\" style=\"margin-bottom: 300px\">\n                      <a routerLink=\"resultstu\" class=\"nav-link text-info mt-3\" style=\"font-size:25px\"><b>Results</b></a>\n                    </li>\n        \n        \n        \n        \n        \n        \n        \n        \n        \n                  </ul>\n        \n                </nav>\n                \n              </div>\n              <div class=\"col-9\">\n                  <router-outlet></router-outlet>\n              </div>\n            </div>\n        \n\n\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/logoutstudent/logoutstudent.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/logoutstudent/logoutstudent.component.ts ***!
  \**********************************************************/
/*! exports provided: LogoutstudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutstudentComponent", function() { return LogoutstudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutstudentComponent = /** @class */ (function () {
    function LogoutstudentComponent() {
    }
    LogoutstudentComponent.prototype.ngOnInit = function () {
    };
    LogoutstudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logoutstudent',
            template: __webpack_require__(/*! ./logoutstudent.component.html */ "./src/app/logoutstudent/logoutstudent.component.html"),
            styles: [__webpack_require__(/*! ./logoutstudent.component.css */ "./src/app/logoutstudent/logoutstudent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoutstudentComponent);
    return LogoutstudentComponent;
}());



/***/ }),

/***/ "./src/app/notificationsadmin/notificationsadmin.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/notificationsadmin/notificationsadmin.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notificationsadmin/notificationsadmin.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/notificationsadmin/notificationsadmin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n</div>\n<div class=\"row\"  style=\"margin-top:60px\">\n  <div class=\"col-2\"></div>\n    <div class=\"col-8\" >\n\n      \n        <div class=\"form-group\" style=\"margin-left:600px\">\n            <label for=\"s\" style=\"font-size:25px\" ><b>Branch:</b> </label>\n         \n            <select class=\"bg-success ml-2\"  [(ngModel)]=\"searchbranch\">\n              <option> </option>\n              <option  value=\"civil\" > civil</option>\n              <option  value=\"mec\"  > mec</option>\n              <option value=\"ece\" >ece </option>\n              <option  value=\"cse\" >cse </option>\n              <option  value=\"eee\" >eee </option>\n              <option  value=\"it\" >eee </option>\n            </select>\n          </div>\n\n      <div class=\"row\">\n      <div class=\"col-6\">\n\n          <label style=\"color:crimson\"><h1>Search  </h1></label>\n          <label style=\"color:black\"><h5>(by date)  </h5></label>\n      \n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchdate\">\n\n          \n\n          \n      </div>\n\n      <div class=\"col-6 \" style=\"margin-top:65px\">\n        \n          <button type=\"button\" class=\"btn btn-danger\" style=\"margin-left:110px\" data-toggle=\"modal\" data-target=\"#k\">add new notification</button>\n          \n\n        </div>\n      </div>\n  \n\n        <br/>\n      <br/>\n      <table border=\"8\" class=\"table-striped table-hover\" style=\"width:100%\">\n        \n        <thead style=\"font-size: 25px;color: darkblue\" >\n          \n\n             <th >Date</th>\n             <th>Branch</th>\n             <th>Notification</th>\n             <th> del</th>\n             <th> edit</th>\n           \n             \n        </thead>\n\n        <tr style=\"font-size: 20px;color:darkred\" *ngFor=\"let i of srarr|branch:searchbranch|date:searchdate\" >\n          \n          <td>{{i.Date}}</td>\n          <td>{{i.Branch}}</td>\n          <td>{{i.Notification}}</td>\n          <td><button type=\"button\" class=\"btn btn-danger ml-2\" (click)=\"delete(i._id)\">Del </button></td>\n          <td><button type=\"button\" class=\"btn btn-success ml-2\" (click)=\"edit(i)\">Edit </button></td>\n\n          \n        </tr>\n      </table>\n\n  \n     </div>\n     <div class=\"col-2\"></div>\n    \n  \n</div>\n\n<div *ngIf=\"b\">\n<div class=\"row mt-5\">\n  <div class=\"col-2\"></div>\n  <div class=\"col-8\">\n\n    <form #po=\"ngForm\" (ngSubmit)=\"update()\">\n      <label class=\"ml-3\"><b>Date:</b></label>\n      <input class=\"ml-3\" type=\"date\" name=\"Date\" [(ngModel)]=\"i.Date\">\n      <label class=\"ml-3\"><b>Branch:</b> </label>\n      <input class=\"ml-3\" type=\"text\" name=\"Branch\" [(ngModel)]=\"i.Branch\">\n      <label class=\"ml-3\"><b>Notification:</b></label>\n      <input class=\"ml-3\" type=\"text\" name=\"Notification\" [(ngModel)]=\"i.Notification\">\n      <button  type=\"submit\" class=\"btn btn-danger\"> update</button>\n    </form>\n\n  </div>\n  <div class=\"col-2\"></div>\n</div>\n</div>\n\n\n<div class=\"row\" >\n\n    <div class=\"modal fade \" id=\"k\" style=\"width:100%\" >\n      <div class=\"modal-dialog modal-lg modal-dialog-centered\">\n        <div class=\"modal-content bg-success\">\n            <form #re=\"ngForm\" (ngSubmit)=\"notiadmin(re.value)\">\n\n              <div  class=\"modal-header\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">X</button>\n              </div>\n\n          <div class=\"modal-body\">\n         \n                <div class=\"form-group\">\n\n                  \n                  <br/>\n                    <label for=\"cpass\"><b>Date:</b></label>\n                    <input id=\"cpass\"  type=\"date\"  class=\"form-control\" name=\"Date\" [(ngModel)]=\"Date\">\n                  </div>\n\n\n                  <div class=\"form-group\">\n                      <label for=\"pass\"><b>Branch:</b></label>\n                      <input id=\"pass\"  type=\"text\" class=\"form-control\" name=\"Branch\" [(ngModel)]=\"Branch\">\n                    </div>\n\n\n                    <div class=\"form-group\">\n                        <label for=\"pass\"><b>Notification:</b></label>\n                        <input id=\"pass\"  type=\"text\" class=\"form-control\" name=\"Notification\" [(ngModel)]=\"Notification\">\n                      </div>\n\n                      <button type=\"submit\" class=\"btn btn-danger\">Add</button>\n                   \n                    </div>  \n            </form>\n         \n\n        \n\n\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/notificationsadmin/notificationsadmin.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/notificationsadmin/notificationsadmin.component.ts ***!
  \********************************************************************/
/*! exports provided: NotificationsadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsadminComponent", function() { return NotificationsadminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _serve_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../serve.service */ "./src/app/serve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsadminComponent = /** @class */ (function () {
    function NotificationsadminComponent(ds) {
        this.ds = ds;
        this.i = {};
    }
    NotificationsadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ds.otherData().subscribe(function (a) { return _this.srarr = a; });
        console.log(this.srarr);
    };
    // delete(x:Number)
    // {
    //   this.srarr.splice(x,1);
    // }
    NotificationsadminComponent.prototype.notiadmin = function (add) {
        console.log(add);
        this.ds.addNoti(add).subscribe(function (r) {
            alert(" added");
        });
    };
    ;
    NotificationsadminComponent.prototype.delete = function (v) {
        var _this = this;
        console.log("string recieved is" + v);
        this.ds.delData(v).subscribe(function (data) { return _this.srarr = data; });
    };
    NotificationsadminComponent.prototype.edit = function (obj) {
        this.i = obj;
        this.b = true;
        console.log(obj);
    };
    NotificationsadminComponent.prototype.update = function () {
        var _this = this;
        this.b = false;
        console.log(this.i);
        this.ds.updateData(this.i).subscribe(function (data) { return _this.srarr = data; });
    };
    NotificationsadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notificationsadmin',
            template: __webpack_require__(/*! ./notificationsadmin.component.html */ "./src/app/notificationsadmin/notificationsadmin.component.html"),
            styles: [__webpack_require__(/*! ./notificationsadmin.component.css */ "./src/app/notificationsadmin/notificationsadmin.component.css")]
        }),
        __metadata("design:paramtypes", [_serve_service__WEBPACK_IMPORTED_MODULE_1__["ServeService"]])
    ], NotificationsadminComponent);
    return NotificationsadminComponent;
}());



/***/ }),

/***/ "./src/app/notificationsstud/notificationsstud.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/notificationsstud/notificationsstud.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notificationsstud/notificationsstud.component.html":
/*!********************************************************************!*\
  !*** ./src/app/notificationsstud/notificationsstud.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n</div>\n<div class=\"row\" style=\"margin-top: 150px\">\n  <div class=\"col-2\"></div>\n    <div class=\"col-8\" >\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <label style=\"color:crimson\"><h1>Search</h1></label>\n            <label style=\"color:black\"><h5>(by date)  </h5></label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchdate\">\n            \n          </div>\n          <div class=\"col-6\">\n\n          </div>\n          \n\n        </div>\n\n      \n      \n        \n        <br/>\n      <br/>\n      <table border=\"8\" class=\"table-striped table-hover\" style=\"width:100%\">\n        \n        <thead style=\"font-size: 25px;color: darkblue\" >\n          \n\n             <th >Date</th>\n             <th>Branch</th>\n             <th>Notification</th>\n            \n           \n             \n        </thead>\n\n        <tr style=\"font-size: 20px;color:darkred\" *ngFor=\"let i of arr|date:searchdate\" >\n          \n          <td>{{i.Date}}</td>\n          <td>{{i.Branch}}</td>\n          <td>{{i.Notification}}</td>\n          \n        </tr>\n      </table>\n\n  \n     </div>\n     <div class=\"col-2\"></div>\n    \n  \n</div>"

/***/ }),

/***/ "./src/app/notificationsstud/notificationsstud.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/notificationsstud/notificationsstud.component.ts ***!
  \******************************************************************/
/*! exports provided: NotificationsstudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsstudComponent", function() { return NotificationsstudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _serve_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../serve.service */ "./src/app/serve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsstudComponent = /** @class */ (function () {
    function NotificationsstudComponent(ds) {
        this.ds = ds;
    }
    NotificationsstudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ds.otherData().subscribe(function (a) { return _this.arr = a; });
        console.log(this.arr);
    };
    NotificationsstudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notificationsstud',
            template: __webpack_require__(/*! ./notificationsstud.component.html */ "./src/app/notificationsstud/notificationsstud.component.html"),
            styles: [__webpack_require__(/*! ./notificationsstud.component.css */ "./src/app/notificationsstud/notificationsstud.component.css")]
        }),
        __metadata("design:paramtypes", [_serve_service__WEBPACK_IMPORTED_MODULE_1__["ServeService"]])
    ], NotificationsstudComponent);
    return NotificationsstudComponent;
}());



/***/ }),

/***/ "./src/app/profileadmin/profileadmin.component.css":
/*!*********************************************************!*\
  !*** ./src/app/profileadmin/profileadmin.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profileadmin/profileadmin.component.html":
/*!**********************************************************!*\
  !*** ./src/app/profileadmin/profileadmin.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row  ml-0 mr-0\">\n    <div class=\"col-3\"></div>\n  \n    <div class=\"col-6 \">\n      <div clas=\"jumbotron \">\n          <br/>\n          <br/>\n  \n          <h1 >Admin registration</h1>\n          <br/>\n          <br/>\n          <br/>\n          \n        <form #ref9=\"ngForm\" (ngSubmit)=\"admin(ref9.value)\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <p><label for=\"user\"> <b>EmployeeId: </b></label>\n                  <input id=\"user\" type=\"text\"  class=\"form-control\" name=\"username\" [value]=r.username  maxlength=\"7\" >\n                  \n                   \n                  \n  \n              </div>\n\n             \n  \n              <div class=\"form-group\">\n                <label for=\"pass\"> <b>new Password:</b></label>\n                <input id=\"pass\" type=\"{{check1?'text':'password'}}\" class=\"form-control\"name=\"password\" [(ngModel)]=\"password\" required  pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$\"   #ref2=\"ngModel\">\n                <input type=\"checkbox\" [(ngModel)]=\"check1\" name=\"check1\"><label>show password</label>\n                <label class=\"alert alert-danger validation-message\" *ngIf=\"ref2.touched&&ref2.pristine&&ref2.invalid\">create password</label>\n                <label class=\"alert alert-danger validation-message\" *ngIf=\"ref2.errors?.pattern&&ref2.dirty&&ref2.invalid\">password be like:number,number,(a-z),(@ or # or $),(a-z)num</label>\n\n   \n                \n  \n              </div>\n\n\n              <div class=\"form-group\">\n                <label for=\"cpass\"><b>Confirm Password:</b></label>\n                <input id=\"cpass\" placeholder=\"13a@b3\"  type=\"password\" #cf=\"ngModel\" class=\"form-control\" name=\"cpassword\"  [(ngModel)]=\"cpassword\">\n                \n                <label class=\"alert alert-danger validation-message\" *ngIf=\"ref2.value!=cf.value\">passwords donot match</label>\n              </div>\n  \n              \n  \n              <div class=\"form-group\">\n                  <label for=\"p\"><b>Email:</b></label>\n                  <input type=\"email\" id=\"p\" class=\"form-control\" name=\"email\" [(ngModel)]=\"r.email\">\n                </div>\n            </div>\n  \n            \n          \n      \n  \n            <div class=\"col-6\">\n  \n                \n  \n              <div class=\"form-group\">\n                <p><label for=\"dob\"> <b>Date of Birth: </b></label>\n                  <input id=\"dob\" type=\"date\" class=\"form-control\" name=\"dob\" [(ngModel)]=\"r.dob\">\n              </div>\n  \n              <label class=\"mt-3\"> <b>Gender:</b></label>\n              <div class=\"form-check \">\n                  <label class=\"form-check-label\">\n      \n                  \n                   \n                    <input type=\"radio\" class=\"form-check-input\" name=\"gender\" value=\"Male\" [(ngModel)]=\"r.male\"><b>Male</b>\n                \n                </label>\n                </div>\n                \n                <div class=\"form-check \">\n                    <label class=\"form-check-label\">\n        \n                  \n                     \n                      <input type=\"radio\" class=\"form-check-input\"  name=\"gender\" value=\"Female\" [(ngModel)]=\"r.Female\"><b>Female</b>\n                    \n                  </label>\n                  </div>\n  \n              <div class=\"form-group mt-2\">\n                <label for=\"no\"><b>Phone number:</b></label>\n                <input id=\"no\"  type=\"text\" class=\"form-control\" name=\"phno\" required pattern=\"\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\" maxlength=\"10\" [(ngModel)]=\"r.phno\" #re=ngModel>\n                <label class=\"alert alert-danger validation-message\" *ngIf=\"re.touched&&re.pristine&&re.invalid\">phone no required</label>\n                <label class=\"alert alert-danger validation-message\" *ngIf=\"re.errors?.pattern&&re.dirty&&re.invalid\">enter 10 digit number</label>\n              </div>\n  \n              <br/>\n              <br/>\n\n              <div class=\"row ml-4\">\n                <div class=\"col-6\">\n                    <button type=\"button\" routerLink=\"lo\" class=\"btn btn-danger \" > Back</button>  \n                </div>\n                <div class=\"col-6\">\n                    <button type=\"submit\"  routerLink=\"dfgdh\" class=\"btn btn-success  \"  >update</button>\n                </div>\n               \n              \n              </div>\n              \n            \n              \n            \n    \n  \n  \n  \n            </div>\n          </div>\n  \n        </form>\n  \n      </div>\n  \n    </div>\n    <div class=\"col-3\"></div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/profileadmin/profileadmin.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profileadmin/profileadmin.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileadminComponent", function() { return ProfileadminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _serve_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../serve.service */ "./src/app/serve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileadminComponent = /** @class */ (function () {
    function ProfileadminComponent(ds) {
        this.ds = ds;
        this.x = {};
        this.r = {};
        this.check1 = false;
    }
    ProfileadminComponent.prototype.ngOnInit = function () {
        this.r = this.ds.getDataToPro();
        console.log(this.r);
    };
    ProfileadminComponent.prototype.admin = function (data) {
        this.x = data;
        console.log(this.x);
    };
    ProfileadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profileadmin',
            template: __webpack_require__(/*! ./profileadmin.component.html */ "./src/app/profileadmin/profileadmin.component.html"),
            styles: [__webpack_require__(/*! ./profileadmin.component.css */ "./src/app/profileadmin/profileadmin.component.css")]
        }),
        __metadata("design:paramtypes", [_serve_service__WEBPACK_IMPORTED_MODULE_1__["ServeService"]])
    ], ProfileadminComponent);
    return ProfileadminComponent;
}());



/***/ }),

/***/ "./src/app/profilestud/profilestud.component.css":
/*!*******************************************************!*\
  !*** ./src/app/profilestud/profilestud.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profilestud/profilestud.component.html":
/*!********************************************************!*\
  !*** ./src/app/profilestud/profilestud.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row ml-0 mr-0\"  >\n    <div class=\"col-3\"></div>\n  <div class=\"col-6 \">\n    <div clas=\"jumbotron\" >\n        <br />\n        <br />\n      <h1 >Student registration</h1>\n      <br />\n      <br />\n      \n      <form #ref=\"ngForm\" (ngSubmit)=\"student(ref.value)\">\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <div class=\"form-group\">\n              <p><label for=\"user\"> <b>Username: </b></label>\n                <input id=\"user\" type=\"text\" class=\"form-control\" placeholder=\"karthik\" required minlength=\"5\" maxlength=\"15\" name=\"username\" [(ngModel)]=\"username\" #fr=\"ngModel\">\n                <label class=\"alert alert-danger validation-message\" *ngIf=\"fr.touched&&fr.invalid&&fr.pristine\">username is mandatory </label>\n                <label class=\"alert alert-danger validation-message\" *ngIf=\"fr.invalid&&fr.errors?.minlength&&fr.dirty\">minimum 5 char required </label>\n  \n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"cpass\"><b>old Password:</b></label>\n                <input id=\"cpass\" placeholder=\"13a@b3\" type=\"text\" class=\"form-control\" name=\"cpassword\" [(ngModel)]=\"cpassword\">\n              </div>\n  \n            <div class=\"form-group\">\n              <label for=\"pass\"> <b> new Password:</b></label>\n              <input id=\"pass\" type=\"password\"  type=\"{{check1?'text':'password'}}\" placeholder=\"13a@b3\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" required pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$\"  #ref2=\"ngModel\">\n                <input type=\"checkbox\" [(ngModel)]=\"check1\" name=\"check1\"><label>show password</label>\n              <label class=\"alert alert-danger validation-message\" *ngIf=\"ref2.touched&&ref2.pristine&&ref2.invalid\">create password</label>\n              <label class=\"alert alert-danger validation-message\" *ngIf=\"ref2.errors?.pattern&&ref2.dirty&&ref2.invalid\">password be like:number,number,(a-z),(@ or # or $),(a-z)num</label>\n  \n  \n  \n            </div>\n  \n           \n  \n            \n            <br/>\n            <div class=\"form-group\">\n              <label for=\"s\"><b>Branch:</b> </label>\n           \n              <select   name=\"branch\" [(ngModel)]=\"branch\" style=\"margin-left:20px\">\n                <option> </option>\n                <option  value=\"CIVIL\" > CIVIL</option>\n                <option  value=\"MEC\"  > MEC</option>\n                <option value=\"ECE\" >ECE </option>\n                <option  value=\"CSE\" >CSE </option>\n                <option  value=\"EEE\" >EEE </option>\n              </select>\n            </div>\n          </div>\n  \n  \n  \n  \n  \n  \n  \n  \n          <div class=\"col-6\">\n  \n            <div class=\"form-group\">\n              <label for=\"p\"><b>Email:</b></label>\n              <input type=\"email\" id=\"p\" placeholder=\"karthikkorav@gmail.com\" class=\"form-control\" name=\"email\"\n                [(ngModel)]=\"email\">\n            </div>\n  \n            <div class=\"form-group\">\n              <p><label for=\"dob\"> <b>Date of Birth: </b></label>\n                <input id=\"dob\" type=\"date\" class=\"form-control\" name=\"dob\" [(ngModel)]=\"dob\">\n            </div>\n  \n            <label> <b>Gender:</b></label>\n            <div class=\"form-check \">\n              <label class=\"form-check-label\">\n  \n  \n  \n                <input type=\"radio\" class=\"form-check-input\" name=\"gender\" value=\"Male\" [(ngModel)]=\"male\">Male\n  \n              </label>\n            </div>\n  \n            <div class=\"form-check \">\n              <label class=\"form-check-label\">\n  \n  \n  \n                <input type=\"radio\" class=\"form-check-input\" name=\"gender\" value=\"Female\" [(ngModel)]=\"Female\">Female\n  \n              </label>\n            </div>\n  \n            <div class=\"form-group mt-2\">\n              <label for=\"no\"><b>Phone number:</b></label>\n              <input id=\"no\" placeholder=\"7878787878\" type=\"text\" class=\"form-control\" name=\"phno\" required pattern=\"\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\"\n                maxlength=\"10\" [(ngModel)]=\"phno\" #re=ngModel>\n              <label class=\"alert alert-danger validation-message\" *ngIf=\"re.touched&&re.pristine&&re.invalid\">phone no required</label>\n              <label class=\"alert alert-danger validation-message\" *ngIf=\"re.errors?.pattern&&re.dirty&&re.invalid\">enter 10 digit number</label>\n            </div>\n  \n  \n          \n            <br />\n            <div class=\"row\">\n              <div class=\"col-6\">\n                  <button type=\"button\" routerLink=\"logoutstu9\" class=\"btn btn-danger \" >Back</button>  \n              </div>\n\n              <div class=\"col-6\">\n                  <button type=\"submit\" routerLink=\"hfdhsdfh\"  class=\"btn btn-success \" > Update</button>\n                </div>\n\n            </div>\n          \n  \n  \n  \n  \n  \n          </div>\n        </div>\n  \n      </form>\n  \n    </div>\n    <div class=\"col-3\"></div>\n  </div>"

/***/ }),

/***/ "./src/app/profilestud/profilestud.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profilestud/profilestud.component.ts ***!
  \******************************************************/
/*! exports provided: ProfilestudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilestudComponent", function() { return ProfilestudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfilestudComponent = /** @class */ (function () {
    function ProfilestudComponent() {
    }
    ProfilestudComponent.prototype.ngOnInit = function () {
    };
    ProfilestudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profilestud',
            template: __webpack_require__(/*! ./profilestud.component.html */ "./src/app/profilestud/profilestud.component.html"),
            styles: [__webpack_require__(/*! ./profilestud.component.css */ "./src/app/profilestud/profilestud.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfilestudComponent);
    return ProfilestudComponent;
}());



/***/ }),

/***/ "./src/app/resultsadmin/resultsadmin.component.css":
/*!*********************************************************!*\
  !*** ./src/app/resultsadmin/resultsadmin.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resultsadmin/resultsadmin.component.html":
/*!**********************************************************!*\
  !*** ./src/app/resultsadmin/resultsadmin.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n</div>\n<div class=\"row\" style=\"margin-top: 150px\">\n  <div class=\"col-2\"></div>\n    <div class=\"col-8\" >\n\n      \n      \n       \n     \n      \n      \n      <div class=\"form-group\" style=\"margin-left:600px\">\n        <label for=\"s\" style=\"font-size:25px\" ><b>Branch:</b> </label>\n     \n        <select class=\"bg-success ml-2\"  [(ngModel)]=\"searchbranch\">\n          <option> </option>\n          <option  value=\"civil\" > civil</option>\n          <option  value=\"mec\"  > mec</option>\n          <option value=\"ece\" >ece </option>\n          <option  value=\"cse\" >cse </option>\n          <option  value=\"eee\" >eee </option>\n          <option  value=\"it\" >eee </option>\n        </select>\n      </div>\n\n\n          <div class=\"row\">\n      <div class=\"col-6 \">\n        <label style=\"color:crimson\"><h1>Search</h1></label>\n        <label style=\"color:black\"><h5>(by date)  </h5></label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchdate\">\n        \n      </div>\n\n      <div class=\"col-6\" style=\"margin-top:65px\" >\n        \n        \n          <button type=\"button\" class=\"btn btn-danger\" style=\"margin-left:110px\"  data-target=\"#l\" data-toggle=\"modal\" >Add new result</button>\n          \n\n      </div>\n    </div>\n      \n      \n        \n        <br/>\n      <br/>\n      <table border=\"8\" class=\"table-striped table-hover\" style=\"width:100%\">\n        \n        <thead style=\"font-size: 25px;color: darkblue\" >\n          \n\n            \n             <th>Date</th>\n             <th>Branch</th>\n             <th>name</th>\n             <th>percentage</th>\n             <th> del</th>\n             <th>edit</th>\n             \n        </thead>\n\n        <tr style=\"font-size: 20px;color:darkred\" *ngFor=\"let i of ararr|branch:searchbranch|date:searchdate \" >\n          \n          \n          \n          \n          <td>{{i.Date}}</td>\n          <td>{{i.Branch}}</td>\n          <td>{{i.name}}</td>\n          <td>{{i.percentage}}</td>\n          <td><button type=\"button\" class=\"btn btn-danger ml-2\" (click)=\"delete(i._id)\">Del </button></td>\n          <td><button type=\"button\" class=\"btn btn-success ml-2\" (click)=\"edit(i)\">Edit </button></td>\n        </tr>\n      </table>\n\n  \n     </div>\n     <div class=\"col-2\"></div>\n    \n  \n</div>\n\n\n<div *ngIf=\"b\">\n  <div class=\"row mt-5\">\n    <div class=\"col-2\"></div>\n    <div class=\"col-8\">\n  \n      <form #po=\"ngForm\" (ngSubmit)=\"update()\">\n        <label class=\"ml-3\"><b>Date:</b></label>\n        <input class=\"ml-3\" type=\"date\" name=\"Date\" [(ngModel)]=\"i.Date\">\n        <label class=\"ml-3\"><b>Branch:</b> </label>\n        <input class=\"ml-3\" type=\"text\" name=\"Branch\" [(ngModel)]=\"i.Branch\">\n        <label class=\"ml-3\"><b>Name:</b></label>\n        <input class=\"ml-3\" type=\"text\" name=\"name\" [(ngModel)]=\"i.name\">\n        \n        <label class=\"ml-3\"><b>Notification:</b></label>\n        <input class=\"ml-3\" type=\"text\" name=\"percentage\" [(ngModel)]=\"i.percentage\">\n        <button  type=\"submit\" class=\"btn btn-danger\"> update</button>\n      </form>\n  \n    </div>\n    <div class=\"col-2\"></div>\n  </div>\n  </div>\n\n\n\n\n<div class=\"row\" >\n\n    <div class=\"modal fade \" id=\"l\" style=\"width:100%\" >\n      <div class=\"modal-dialog modal-lg modal-dialog-centered\">\n        <div class=\"modal-content bg-success\">\n            <form #re=\"ngForm\" (ngSubmit)=\"resAdmin(re.value)\">\n\n              <div  class=\"modal-header\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">X</button>\n              </div>\n\n          <div class=\"modal-body\">\n         \n                <div class=\"form-group\">\n\n                    <div class=\"form-group\">\n                        <label for=\"pass\"><b>Branch:</b></label>\n                        <input id=\"pass\"  type=\"text\" class=\"form-control\" name=\"Branch\" [(ngModel)]=\"Branch\">\n                      </div>\n                      \n                  <br/>\n                    <label for=\"cpass\"><b>Date:</b></label>\n                    <input id=\"cpass\"  type=\"date\" placeholder=\"date/mon/year\" class=\"form-control\" name=\"Date\" [(ngModel)]=\"Date\">\n                  </div>\n\n\n                  \n\n\n                    <div class=\"form-group\">\n                        <label for=\"pass\"><b>Name::</b></label>\n                        <input id=\"pass\"  type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\">\n                      </div>\n\n                      <div class=\"form-group\">\n                          <label for=\"pass\"><b>Percentage:</b></label>\n                          <input id=\"pass\"  type=\"text\" class=\"form-control\" name=\"percentage\" [(ngModel)]=\"percentage\">\n                        </div>\n\n                      <button type=\"submit\" class=\"btn btn-danger\">Add</button>\n                  \n                    </div>  \n            </form>\n         \n\n        \n\n\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/resultsadmin/resultsadmin.component.ts":
/*!********************************************************!*\
  !*** ./src/app/resultsadmin/resultsadmin.component.ts ***!
  \********************************************************/
/*! exports provided: ResultsadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsadminComponent", function() { return ResultsadminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _serve_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../serve.service */ "./src/app/serve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsadminComponent = /** @class */ (function () {
    function ResultsadminComponent(ds) {
        this.ds = ds;
        this.i = {};
    }
    ResultsadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ds.getData().subscribe(function (a) { return _this.ararr = a; });
        console.log(this.ararr);
    };
    ResultsadminComponent.prototype.resAdmin = function (add) {
        console.log(add);
        this.ds.addRes(add).subscribe(function (r) {
            alert(" added");
        });
    };
    ;
    ResultsadminComponent.prototype.delete = function (v) {
        var _this = this;
        console.log("string recieved is" + v);
        this.ds.resultDel(v).subscribe(function (data) { return _this.ararr = data; });
    };
    ResultsadminComponent.prototype.edit = function (obj) {
        this.i = obj;
        this.b = true;
        console.log(obj);
    };
    ResultsadminComponent.prototype.update = function () {
        var _this = this;
        this.b = false;
        console.log(this.i);
        this.ds.updateResStud(this.i).subscribe(function (data) { return _this.ararr = data; });
    };
    ResultsadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resultsadmin',
            template: __webpack_require__(/*! ./resultsadmin.component.html */ "./src/app/resultsadmin/resultsadmin.component.html"),
            styles: [__webpack_require__(/*! ./resultsadmin.component.css */ "./src/app/resultsadmin/resultsadmin.component.css")]
        }),
        __metadata("design:paramtypes", [_serve_service__WEBPACK_IMPORTED_MODULE_1__["ServeService"]])
    ], ResultsadminComponent);
    return ResultsadminComponent;
}());



/***/ }),

/***/ "./src/app/resultsstud/resultsstud.component.css":
/*!*******************************************************!*\
  !*** ./src/app/resultsstud/resultsstud.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resultsstud/resultsstud.component.html":
/*!********************************************************!*\
  !*** ./src/app/resultsstud/resultsstud.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  </div>\n  <div class=\"row\" style=\"margin-top: 150px\">\n    <div class=\"col-2\"></div>\n      <div class=\"col-8\" >\n  \n        <div class=\"row\">\n          <div class=\"col-6 \">\n            <label style=\"color:crimson\"><h1>Search</h1></label>\n            <label style=\"color:black\"><h5>(by date)  </h5></label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchdate\">\n            </div>\n            <div class=\"col-6\"></div>\n          </div>\n        \n        \n          \n          <br/>\n        <br/>\n        <table border=\"8\" class=\"table-striped table-hover\" style=\"width:100%\">\n          \n          <thead style=\"font-size: 25px;color: darkblue\" >\n            \n  \n              <th>Date</th>\n              <th>Branch</th>\n              <th>name</th>\n              <th>percentage</th>\n               \n          </thead>\n  \n          <tr style=\"font-size: 20px;color:darkred\" *ngFor=\"let i of srarr|date:searchdate\" >\n            \n          \n              <td>{{i.Date}}</td>\n              <td>{{i.Branch}}</td>\n              <td>{{i.name}}</td>\n              <td>{{i.percentage}}</td>\n          </tr>\n        </table>\n  \n    \n       </div>\n       <div class=\"col-2\"></div>\n      \n    \n  </div>"

/***/ }),

/***/ "./src/app/resultsstud/resultsstud.component.ts":
/*!******************************************************!*\
  !*** ./src/app/resultsstud/resultsstud.component.ts ***!
  \******************************************************/
/*! exports provided: ResultsstudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsstudComponent", function() { return ResultsstudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _serve_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../serve.service */ "./src/app/serve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsstudComponent = /** @class */ (function () {
    function ResultsstudComponent(ds) {
        this.ds = ds;
    }
    ResultsstudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ds.getData().subscribe(function (a) { return _this.srarr = a; });
        console.log(this.srarr);
    };
    ResultsstudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resultsstud',
            template: __webpack_require__(/*! ./resultsstud.component.html */ "./src/app/resultsstud/resultsstud.component.html"),
            styles: [__webpack_require__(/*! ./resultsstud.component.css */ "./src/app/resultsstud/resultsstud.component.css")]
        }),
        __metadata("design:paramtypes", [_serve_service__WEBPACK_IMPORTED_MODULE_1__["ServeService"]])
    ], ResultsstudComponent);
    return ResultsstudComponent;
}());



/***/ }),

/***/ "./src/app/rou/rou.module.ts":
/*!***********************************!*\
  !*** ./src/app/rou/rou.module.ts ***!
  \***********************************/
/*! exports provided: RouModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouModule", function() { return RouModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _logoutstudent_logoutstudent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../logoutstudent/logoutstudent.component */ "./src/app/logoutstudent/logoutstudent.component.ts");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../success/success.component */ "./src/app/success/success.component.ts");
/* harmony import */ var _profileadmin_profileadmin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../profileadmin/profileadmin.component */ "./src/app/profileadmin/profileadmin.component.ts");
/* harmony import */ var _notificationsadmin_notificationsadmin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../notificationsadmin/notificationsadmin.component */ "./src/app/notificationsadmin/notificationsadmin.component.ts");
/* harmony import */ var _resultsadmin_resultsadmin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../resultsadmin/resultsadmin.component */ "./src/app/resultsadmin/resultsadmin.component.ts");
/* harmony import */ var _profilestud_profilestud_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../profilestud/profilestud.component */ "./src/app/profilestud/profilestud.component.ts");
/* harmony import */ var _notificationsstud_notificationsstud_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../notificationsstud/notificationsstud.component */ "./src/app/notificationsstud/notificationsstud.component.ts");
/* harmony import */ var _resultsstud_resultsstud_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../resultsstud/resultsstud.component */ "./src/app/resultsstud/resultsstud.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var RouModule = /** @class */ (function () {
    function RouModule() {
    }
    RouModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([{ path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], children: [
                            { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
                            { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], children: [{ path: "s", redirectTo: "/home/success" }] },
                            { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] },
                            { path: 'student', component: _student_student_component__WEBPACK_IMPORTED_MODULE_6__["StudentComponent"] },
                            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
                            { path: 'success', component: _success_success_component__WEBPACK_IMPORTED_MODULE_10__["SuccessComponent"] },
                            { path: 'home', redirectTo: '/home', pathMatch: 'full' }
                        ] },
                    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"], children: [{ path: 'proadmin', component: _profileadmin_profileadmin_component__WEBPACK_IMPORTED_MODULE_11__["ProfileadminComponent"], children: [{ path: 'lo', redirectTo: '/logout' }] }, { path: 'notiadmin', component: _notificationsadmin_notificationsadmin_component__WEBPACK_IMPORTED_MODULE_12__["NotificationsadminComponent"] }, { path: 'resultadmin', component: _resultsadmin_resultsadmin_component__WEBPACK_IMPORTED_MODULE_13__["ResultsadminComponent"] }, { path: 'logout1', redirectTo: '/home', pathMatch: 'full' }] },
                    { path: 'logoutstudent', component: _logoutstudent_logoutstudent_component__WEBPACK_IMPORTED_MODULE_9__["LogoutstudentComponent"], children: [{ path: 'prostu', component: _profilestud_profilestud_component__WEBPACK_IMPORTED_MODULE_14__["ProfilestudComponent"], children: [{ path: 'logoutstu9', redirectTo: '/logoutstudent', pathMatch: 'full' }] }, { path: 'notistu', component: _notificationsstud_notificationsstud_component__WEBPACK_IMPORTED_MODULE_15__["NotificationsstudComponent"] }, { path: 'resultstu', component: _resultsstud_resultsstud_component__WEBPACK_IMPORTED_MODULE_16__["ResultsstudComponent"] }, { path: 'logouts', redirectTo: '/home', pathMatch: 'full' }] },
                    { path: '', redirectTo: '/home', pathMatch: 'full' },
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RouModule);
    return RouModule;
}());



/***/ }),

/***/ "./src/app/serve.service.ts":
/*!**********************************!*\
  !*** ./src/app/serve.service.ts ***!
  \**********************************/
/*! exports provided: ServeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServeService", function() { return ServeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServeService = /** @class */ (function () {
    function ServeService(hc) {
        this.hc = hc;
        this.dataserve = {};
    }
    ServeService.prototype.getData = function () {
        return this.hc.get('/logout/resultadmin');
    };
    ServeService.prototype.setDataFromLogin = function (r) {
        this.r = r;
        console.log(r);
    };
    ServeService.prototype.getDataToPro = function () {
        return this.r;
    };
    ServeService.prototype.otherData = function () {
        return this.hc.get('/logout/notiadmin');
    };
    ServeService.prototype.adminRedData = function (data) {
        console.log(data);
        return this.hc.post('/home/admin', data);
    };
    ServeService.prototype.stuRedData = function (data) {
        console.log(data);
        return this.hc.post('/home/student', data);
    };
    ServeService.prototype.addNoti = function (add) {
        console.log(add);
        return this.hc.post('/logout/notiadmin', add);
    };
    ServeService.prototype.addRes = function (add) {
        console.log(add);
        return this.hc.post('/logout/resultadmin', add);
    };
    ServeService.prototype.delData = function (id) {
        console.log(id);
        return this.hc.delete('/logout/notiadmin/' + id);
    };
    ServeService.prototype.updateData = function (i) {
        console.log(i);
        return this.hc.put('/logout/notiadmin', i);
    };
    ServeService.prototype.loginCheck = function (data) {
        return this.hc.post('/home/login', data);
    };
    ServeService.prototype.resultDel = function (id) {
        console.log(id);
        return this.hc.delete('/logout/resultadmin/' + id);
    };
    ServeService.prototype.updateResStud = function (i) {
        console.log(i);
        return this.hc.put('/logout/resultadmin', i);
    };
    ServeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServeService);
    return ServeService;
}());



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row ml-0 mr-0\"  >\n  <div class=\"col-3\"></div>\n<div class=\"col-6 \">\n  <div clas=\"jumbotron\" >\n      <br />\n      <br />\n    <h1 >Student registration</h1>\n    <br />\n    <br />\n    \n    <form #ref=\"ngForm\" (ngSubmit)=\"student(ref.value)\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <div class=\"form-group\">\n            <p><label for=\"user\"> <b>Username: </b></label>\n              <input id=\"user\" type=\"text\" class=\"form-control\" placeholder=\"karthik\" required minlength=\"8\" maxlength=\"15\" name=\"username\" [(ngModel)]=\"username\" #fr=\"ngModel\">\n              <label class=\"alert alert-danger validation-message\" *ngIf=\"fr.touched&&fr.invalid&&fr.pristine\">username is mandatory </label>\n              <label class=\"alert alert-danger validation-message\" *ngIf=\"fr.invalid&&fr.errors?.minlength&&fr.dirty\">minimum 8 char required </label>\n\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"pass\"> <b>Password:</b></label>\n            <input id=\"pass\"  type=\"{{check1?'text':'password'}}\" placeholder=\"13a@b3\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" required pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$\"  #ref2=\"ngModel\">\n              <input type=\"checkbox\" [(ngModel)]=\"check1\" name=\"check1\"><label>show password</label>\n            <label class=\"alert alert-danger validation-message\" *ngIf=\"ref2.touched&&ref2.pristine&&ref2.invalid\">create password</label>\n            <label class=\"alert alert-danger validation-message\" *ngIf=\"ref2.errors?.pattern&&ref2.dirty&&ref2.invalid\">password should contain: 1 number,1 special symbol and 1 character atleast</label>\n\n\n\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"cpass\"><b>Confirm Password:</b></label>\n            <input id=\"cpass\" placeholder=\"13a@b3\" type=\"password\" class=\"form-control\" #cf=\"ngModel\" name=\"cpassword\" [(ngModel)]=\"cpassword\">\n            <label class=\"alert alert-danger validation-message\" *ngIf=\"ref2.value!=cf.value\">passwords donot match</label>\n          </div>\n\n          \n          <br/>\n          <div class=\"form-group\">\n            <label for=\"s\"><b>Branch:</b> </label>\n         \n            <select   name=\"branch\" [(ngModel)]=\"branch\" style=\"margin-left:20px\">\n              <option> </option>\n              <option  value=\"CIVIL\" > CIVIL</option>\n              <option  value=\"MEC\"  > MEC</option>\n              <option value=\"ECE\" >ECE </option>\n              <option  value=\"CSE\" >CSE </option>\n              <option  value=\"EEE\" >EEE </option>\n            </select>\n          </div>\n        </div>\n\n\n\n\n\n\n\n\n        <div class=\"col-6\">\n\n          <div class=\"form-group\">\n            <label for=\"p\"><b>Email:</b></label>\n            <input type=\"email\" id=\"p\" placeholder=\"karthik.....@gmail.com\" class=\"form-control\" name=\"email\"\n              [(ngModel)]=\"email\">\n          </div>\n\n          <div class=\"form-group\">\n            <p><label for=\"dob\"> <b>Date of Birth: </b></label>\n              <input id=\"dob\" type=\"date\" class=\"form-control\" name=\"dob\" [(ngModel)]=\"dob\">\n          </div>\n\n          <label> <b>Gender:</b></label>\n          <div class=\"form-check \">\n            <label class=\"form-check-label\">\n\n\n\n              <input type=\"radio\" class=\"form-check-input\" name=\"gender\" value=\"Male\" [(ngModel)]=\"male\">Male\n\n            </label>\n          </div>\n\n          <div class=\"form-check \">\n            <label class=\"form-check-label\">\n\n\n\n              <input type=\"radio\" class=\"form-check-input\" name=\"gender\" value=\"Female\" [(ngModel)]=\"Female\">Female\n\n            </label>\n          </div>\n\n          <div class=\"form-group mt-2\">\n            <label for=\"no\"><b>Phone number:</b></label>\n            <input id=\"no\" placeholder=\"78787...\" type=\"text\" class=\"form-control\" name=\"phno\" required pattern=\"\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\"\n              maxlength=\"10\" [(ngModel)]=\"phno\" #re=ngModel>\n            <label class=\"alert alert-danger validation-message\" *ngIf=\"re.touched&&re.pristine&&re.invalid\">phone no required</label>\n            <label class=\"alert alert-danger validation-message\" *ngIf=\"re.errors?.pattern&&re.dirty&&re.invalid\">enter 10 digit number</label>\n          </div>\n\n\n        \n          <br />\n          <button type=\"submit\"   class=\"btn btn-danger mt-5\" style=\"margin-left:400px\" [disabled]=\"!ref.valid\">Register</button>\n\n\n\n\n\n        </div>\n      </div>\n\n    </form>\n\n  </div>\n  <div class=\"col-3\"></div>\n</div>"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _serve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../serve.service */ "./src/app/serve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentComponent = /** @class */ (function () {
    function StudentComponent(router, ds) {
        this.router = router;
        this.ds = ds;
        this.studentdata = {};
        this.branch = "";
        this.check1 = false;
        this.password = "";
    }
    StudentComponent.prototype.ngOnInit = function () {
    };
    StudentComponent.prototype.student = function (data) {
        var _this = this;
        console.log(data);
        this.ds.stuRedData(data).subscribe(function (r) {
            alert("successfully logged");
            _this.router.navigate(['/home']);
        });
    };
    ;
    StudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _serve_service__WEBPACK_IMPORTED_MODULE_2__["ServeService"]])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/success/success.component.css":
/*!***********************************************!*\
  !*** ./src/app/success/success.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/success/success.component.html":
/*!************************************************!*\
  !*** ./src/app/success/success.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"height: 100%\">\n  <div class=\"col-3\">\n\n  </div>\n  <div class=\"col-3\" >\n    \n    </div>\n    <div class=\"col-6\" >\n        <h1 style=\"margin-bottom:150px;margin-top:150px \">you have successfully registered...</h1>\n      </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/success/success.component.ts":
/*!**********************************************!*\
  !*** ./src/app/success/success.component.ts ***!
  \**********************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuccessComponent = /** @class */ (function () {
    function SuccessComponent() {
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! ./success.component.html */ "./src/app/success/success.component.html"),
            styles: [__webpack_require__(/*! ./success.component.css */ "./src/app/success/success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\ANGULAR\onlineDB\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map