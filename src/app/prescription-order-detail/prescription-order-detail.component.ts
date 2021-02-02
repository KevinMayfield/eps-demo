import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescription-order-detail',
  templateUrl: './prescription-order-detail.component.html',
  styleUrls: ['./prescription-order-detail.component.scss']
})
export class PrescriptionOrderDetailComponent implements OnInit {

  basicMarkdown: string = `

   It's not possible to do this at present. 
   
   Based on prescription short form I should be able to retrieve the prescription (ParentPrescription).
   
   As FHIR this would be something like 
   
   - **GET /Bundle?message.group-identifier={prescription-short-form}**
   
   It is similar to PatientPrescriptionReleaseRequest without the release. 
    
 `;
  constructor() { }

  ngOnInit(): void {
  }

}
