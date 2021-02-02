import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescription-refill',
  templateUrl: './prescription-refill.component.html',
  styleUrls: ['./prescription-refill.component.scss']
})
export class PrescriptionRefillComponent implements OnInit {


  basicMarkdown: string = `

   ### GP Gap Work
 
   This would be a list of the patients repeat medications. This is currently sent within the prescription but the way many pharmacies and patients is via a query API.  
   
   The data should be sourced via GP Connect [Medications API](https://developer.nhs.uk/apis/gpconnect-1-2-7/accessrecord_structured_development_retrieve_patient_record.html). 
   This is the wrong version of FHIR and the API uses RPC style interface, not FHIR RESTful which is strongly recommended.
   
   As FHIR RESTful this would be
   
   - **GET /MedicationRequest?patient.identifier={nhsNumber}&status=active&course=continuous**
   
   From this list it would make sense to be able to reorder the medications (this is only possible via IM1 interfaces).
 `;


  constructor() { }

  ngOnInit(): void {
  }

}
