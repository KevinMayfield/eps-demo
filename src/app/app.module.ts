import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CovalentLayoutModule} from "@covalent/core/layout";
import {CovalentStepsModule} from "@covalent/core/steps";
import {CovalentHighlightModule} from "@covalent/highlight";
import {CovalentMarkdownModule} from "@covalent/markdown";
import {CovalentJsonFormatterModule} from "@covalent/core/json-formatter";
import {CovalentExpansionPanelModule} from "@covalent/core/expansion-panel";
import {CovalentLoadingModule} from "@covalent/core/loading";
import {CovalentNotificationsModule} from "@covalent/core/notifications";
import {CovalentHttpModule} from "@covalent/http";
import {CovalentCommonModule} from "@covalent/core/common";
import { MainComponent } from './main/main.component';
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import { PrescriptionOrdersComponent } from './prescription-orders/prescription-orders.component';
import { PrescriptionRefillComponent } from './prescription-refill/prescription-refill.component';
import { PrescriptionSearchComponent } from './prescription-search/prescription-search.component';
import { PrescriptionOrderDetailComponent } from './prescription-order-detail/prescription-order-detail.component';
import {MatCardModule} from "@angular/material/card";
import {CovalentDataTableModule} from "@covalent/core/data-table";
import {MatTableModule} from "@angular/material/table";
import {CovalentSearchModule} from "@covalent/core/search";
import {MatTooltipModule} from "@angular/material/tooltip";
import {CovalentMessageModule} from "@covalent/core/message";
import { PatientComponent } from './patient/patient.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PrescriptionOrdersComponent,
    PrescriptionRefillComponent,
    PrescriptionSearchComponent,
    PrescriptionOrderDetailComponent,
    PatientComponent,
    PharmacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentCommonModule,
    CovalentJsonFormatterModule,
    CovalentExpansionPanelModule,
    CovalentLoadingModule,
    CovalentNotificationsModule,
    CovalentSearchModule,
    CovalentMessageModule,

    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    CovalentDataTableModule,
    MatTableModule,
    MatTooltipModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
