"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var homepage_component_1 = require("./homepage/homepage.component");
var documents_component_1 = require("./documents/documents.component");
var proposal_list_component_1 = require("./proposal/proposal-list.component");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                homepage_component_1.HomepageComponent,
                documents_component_1.DocumentsComponent,
                proposal_list_component_1.ProposalListComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AppComponent } from './app.component';
// import { HomepageComponent } from './homepage/homepage.component';
// import { DocumentsComponent } from './documents/documents.component';
// import { DocumentService } from './documents/document.service';
// import { ProposalListComponent } from './proposal/proposal-list.component';
// import { ProposalNewComponent } from './proposal/proposal-new.component';
// import { ProposalShowComponent } from './proposal/proposal-show.component';
// import { ProposalService } from './proposal/proposal.service';
// import { AppRoutingModule } from './app-routing.module';
// @NgModule({
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     NgbModule.forRoot(),
//     HttpModule
//   ],
//   declarations: [
//     AppComponent,
//     HomepageComponent,
//     DocumentsComponent,
//     ProposalListComponent,
//     ProposalNewComponent,
//     ProposalShowComponent
//   ],
//   providers: [
//     DocumentService,
//     ProposalService
//   ],
//   bootstrap: [
//     AppComponent
//   ]
// })
// export class AppModule {}
//# sourceMappingURL=app.module.js.map