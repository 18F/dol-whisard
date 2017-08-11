webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/_service/file-reader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileReaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FileReaderService = (function () {
    function FileReaderService() {
    }
    FileReaderService.prototype.load = function (file) {
        var _this = this;
        var reader = new FileReader();
        return new Promise(function (resolve, reject) {
            reader.onload = function (e) { return resolve(e.target.result); };
            reader.onerror = function () { return reject(_this); };
            reader.readAsBinaryString(file);
        });
    };
    return FileReaderService;
}());
FileReaderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], FileReaderService);

//# sourceMappingURL=file-reader.service.js.map

/***/ }),

/***/ "../../../../../src/app/_util/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return s2ab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLUMNS; });
var s2ab = function (s) {
    var buff = new ArrayBuffer(s.length);
    var view = new Uint8Array(buff);
    for (var i = 0; i < s.length; i++) {
        // tslint:disable-next-line:no-bitwise
        view[i] = s.charCodeAt(i) & 0xff;
    }
    return buff;
};
var COLUMNS = [
    {
        id: 'Ee_F_Name',
        name: 'First name',
    },
    {
        id: 'Ee_Mi',
        name: 'Middle initial',
    },
    {
        id: 'Ee_L_Name',
        name: 'Last name',
    },
    {
        id: 'Ee_Addr1',
        name: 'Address street 1',
    },
    {
        id: 'Ee_City',
        name: 'City',
    },
    {
        id: 'Ee_State_Id',
        name: 'State',
    },
    {
        id: 'Ee_Zip',
        name: 'Zip',
    },
    {
        id: 'Ee_Phone1',
        name: 'Primary phone',
    },
    {
        id: 'Date_Employ_Beg',
        name: 'Employment start',
    },
    {
        id: 'Date_Employ_End',
        name: 'Employment end',
    },
    {
        id: 'EE_Job_Title1',
        name: 'Job title',
    },
    {
        id: 'EE_Job_Pay_Rate1',
        name: 'Job pay rate',
    },
    {
        id: 'Date_Beg_Viol',
        name: 'Violation start',
    },
    {
        id: 'Date_End_Viol',
        name: 'Violation end',
    },
    {
        id: 'Amt_BW_Computed',
        name: 'BW computed',
    },
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__import_page_component__ = __webpack_require__("../../../../../src/app/import-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__not_found_component__ = __webpack_require__("../../../../../src/app/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_file_reader_service__ = __webpack_require__("../../../../../src/app/_service/file-reader.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'import', component: __WEBPACK_IMPORTED_MODULE_4__import_page_component__["a" /* ImportPageComponent */] },
    { path: '', redirectTo: '/import', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__not_found_component__["a" /* NotFoundComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__import_page_component__["a" /* ImportPageComponent */], __WEBPACK_IMPORTED_MODULE_5__not_found_component__["a" /* NotFoundComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__service_file_reader_service__["a" /* FileReaderService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/import-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='bg-navy white'>\n  <div class='p2 container mx-auto sm-flex items-center'>\n    <div class='mb1 sm-m0 flex-auto'>\n      <div class='h5 light'>Employer</div>\n      <div class='h2'>Dunder Mifflin</div>\n    </div>\n    <div>\n      <div class='h5 light'>Case ID</div>\n      <div class='h2'>123456789</div>\n    </div>\n  </div>\n</div>\n\n<div class='p2 container mx-auto'>\n  <h1 class='mb3'>Import Excel File</h1>\n  <div class='mb3'>\n    <div class='mb1 h3'>1. Select file</div>\n    <input type='file' (change)='loadFile($event)' multiple='false'>\n    <div *ngIf='data && data.length' class='py2'>\n      <div class='h6 bold caps'>Preview data</div>\n      <div class='py1'>\n        <button\n          type=\"button\"\n          class=\"btn btn-small btn-outline h5 regular\"\n          [disabled]=\"!idx\"\n          (click)=\"seek(-1)\"\n        >\n          Prev\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-small btn-outline h5 regular\"\n          [disabled]=\"idx + 1 === data.length\"\n          (click)=\"seek(1)\"\n        >\n          Next\n        </button>\n      </div>\n      <div>Showing row {{ idx + 1 }} of {{ data.length }}:</div>\n      <pre class='mt0 mb2 p2 bg-darken-1 overflow-auto'>{{ data[idx] | json }}</pre>\n      <button\n        class=\"btn btn-small btn-primary h5 regular\"\n        (click)=\"downloadData()\"\n      >\n        Download data\n      </button>\n    </div>\n  </div>\n  <div class='mb3'>\n    <div class='mb1 h3'>2. Choose which columns to import</div>\n    <div>\n      <div\n        *ngFor=\"let col of cols\"\n        class='py1 border-bottom border-silver'\n      >\n        {{ col.name }}\n      </div>\n    </div>\n  </div>\n  <div>\n    <button class='btn btn-primary regular' type='button'>Import</button>\n    <button class='btn btn-outline regular' type='button'>Cancel</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/import-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx__ = __webpack_require__("../../../../xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_file_reader_service__ = __webpack_require__("../../../../../src/app/_service/file-reader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__("../../../../../src/app/_util/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var _a = __WEBPACK_IMPORTED_MODULE_2_xlsx__["utils"], aoa_to_sheet = _a.aoa_to_sheet, book_append_sheet = _a.book_append_sheet, book_new = _a.book_new, sheet_to_json = _a.sheet_to_json;
var ImportPageComponent = (function () {
    function ImportPageComponent(reader) {
        this.reader = reader;
        this.cols = __WEBPACK_IMPORTED_MODULE_4__util__["a" /* COLUMNS */];
        this.data = null;
        this.idx = 0;
    }
    ImportPageComponent.prototype.loadFile = function (e) {
        var _this = this;
        var files = e.target.files;
        if (files.length !== 1) {
            console.log('Cannot upload multiple files on the entry');
            return;
        }
        this.reader.load(files[0]).then(function (data) { return _this.parseFile(data); });
    };
    ImportPageComponent.prototype.parseFile = function (bstr) {
        // read workbook
        var wb = __WEBPACK_IMPORTED_MODULE_2_xlsx__["read"](bstr, { type: 'binary' });
        // get first sheet
        var wsname = wb.SheetNames[0];
        var ws = wb.Sheets[wsname];
        // save data
        var data = sheet_to_json(ws, { header: 1 });
        console.log('data: ', data);
        this.data = data;
        this.idx = 0;
    };
    ImportPageComponent.prototype.downloadData = function () {
        // generate worksheet
        var ws = aoa_to_sheet(this.data);
        // generate workbook and add the worksheet
        var wb = book_new();
        book_append_sheet(wb, ws, 'Sheet1');
        // save workbook locally
        var wbout = __WEBPACK_IMPORTED_MODULE_2_xlsx__["write"](wb, { bookType: 'xlsx', type: 'binary' });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_file_saver__["saveAs"])(new Blob([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["b" /* s2ab */])(wbout)]), 'output.xls');
    };
    ImportPageComponent.prototype.seek = function (n) {
        this.idx += n;
    };
    return ImportPageComponent;
}());
ImportPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-import',
        template: __webpack_require__("../../../../../src/app/import-page.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_file_reader_service__["a" /* FileReaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_file_reader_service__["a" /* FileReaderService */]) === "function" && _b || Object])
], ImportPageComponent);

var _b;
//# sourceMappingURL=import-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='p2 sm-py4 center'>\n  <h1 class='mb1 h2'>Whoops, we can't find that page.</h1>\n  <p class='mt0 mb1'>You might want to double-check your link and try again. (404)</p>\n  <p class='m0 h2'>🇺🇸</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/not-found.component.html"),
    })
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[3]);
//# sourceMappingURL=main.bundle.js.map