import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {PrescriptionOrdersComponent} from "./prescription-orders/prescription-orders.component";
import {PrescriptionRefillComponent} from "./prescription-refill/prescription-refill.component";
import {PrescriptionSearchComponent} from "./prescription-search/prescription-search.component";
import {PrescriptionOrderDetailComponent} from "./prescription-order-detail/prescription-order-detail.component";
import {PharmacyComponent} from "./pharmacy/pharmacy.component";
import {PatientComponent} from "./patient/patient.component";

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children : [
      {
        path: '', component: PrescriptionOrdersComponent
      },
      {
        path: 'order', component: PrescriptionOrdersComponent
      },
      {
        path: 'details/:orderId', component: PrescriptionOrderDetailComponent
      },
      {
        path: 'refill', component: PrescriptionRefillComponent
      },
      {
        path: 'search', component: PrescriptionSearchComponent
      },
      {
        path: 'pharmacy', component: PharmacyComponent
      },
      {
        path: 'patient', component: PatientComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
